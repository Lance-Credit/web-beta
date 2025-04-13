<template>
    <div>
        <Auth-BaseAuth>
            <template #auth-illustration>
                <div class="rounded-b-[80px] w-ful bg-[url('/assets/img/community-code-1000007199.svg')] bg-cover h-[377px]"></div>
            </template>
            <template #auth-content>
                <div class="grow flex flex-col">
                    <div class="px-6 sm:px-0 mb-8 sm:mb-0">
                        <p class="mt-[37.61px] sm:mt-0 mb-2 text-lance-black font-aventa text-[24px] leading-[32px] tracking-[-0.24px]">
                            Log in to your account
                        </p>
                        <p class="mb-6 text-lance-black-60 text-sm sm:text-base leading-6">
                            Hey Lancer, Welcome back
                        </p>
                    </div>
                    <div class="bg-white pt-10 sm:pt-0 px-6 sm:px-0 pb-[110px] sm:pb-0 rounded-t-3xl h-full grow">
                        <form @keyup.enter="submitLogInForm" class="mb-8">
                            <Form-EmailInput
                                class="mb-4" placeholder="Email address" label="Email address" v-model="loginForm.email[0].value"
                                v-bind="loginForm.email[1].value" :error="loginFormErrors.email"
                            />
                            <Form-PasswordInput
                                class="mb-2" placeholder="Password" label="Password" v-model="loginForm.password[0].value"
                                v-bind="loginForm.password[1].value" :error="loginFormErrors.password"
                            />
                            <NuxtLink to="/auth/password/reset" class="text-[#1E1721] text-sm leading-[24px]">Forgot password?</NuxtLink>
                        </form>
                        <Form-ErrorNotification v-if="loginError" :message="loginError" />
                        <button
                            @click="submitLogInForm" class="mb-6 btn w-full btn-primary" :class="{'loading' : submittingLoginForm}"
                            :disabled="!loginFormFilled || submittingLoginForm"
                        >
                            <span v-show="!submittingLoginForm">Login to your account</span>
                            <Loader-Basic v-show="submittingLoginForm" bg="#FFF" fg="#C3E48E" />
                        </button>
                        <NuxtLink to="/" class="flex gap-2 justiffy-start sm:justify-center text-lance-black-60 text-sm sm:text-base leading-6">
                            Don’t have an account?<span class="text-lance-green font-medium">Create an account</span>
                        </NuxtLink>
                    </div>
                </div>
            </template>
        </Auth-BaseAuth>
    </div>
</template>

<script setup lang="ts">

    import * as yup from 'yup';
    
    import { getActivePinia } from 'pinia'

    import { useUserStore } from '@/stores/user';

    const { $resetKYC } = useKYCStore();
    
    const { fetchApiToken } = useTokenStore();
    
    const { fetchUserProfile } = useUserStore();
    const { fetchLoanHistory } = useLoanHistoryStore();

    definePageMeta({
        middleware: 'auth',
        auth: {
            unauthenticatedOnly: true,
            navigateAuthenticatedTo: '/dashboard',
        },
    });

    const { values: loginFormValues, errors: loginFormErrors, defineField } = useForm({
        validationSchema: yup.object({
            email: yup.string().email().required().label('Email Address'),
            password: yup.string().required().label('Password')
        })
    });

    const loginForm = {
        email: defineField('email'),
        password: defineField('password'),
    };

    const loginFormFilled = computed(()=>{
        return loginFormValues.email && !loginFormErrors.value.email &&
        loginFormValues.password && !loginFormErrors.value.password;
    });

    const submittingLoginForm: Ref<boolean> = ref(false);
    
    const loginError: Ref<string> = ref('');

    async function submitLogInForm(){
        if(loginFormFilled.value){
            submittingLoginForm.value = true;

            const { signIn } = useAuth();
            
            const signedIn = await signIn('credentials', { email: loginFormValues.email, password: loginFormValues.password, redirect: false, callbackUrl: '/dashboard' })

            if(!(signedIn as any).error){
                const { resetStores } = useResetStores();
                resetStores();
                
                await fetchApiToken();
                
                navigateTo('/dashboard');

                fetchUserProfile();

                fetchLoanHistory();
            }else{
                loginError.value = (signedIn as any).error;
                if(loginError.value == 'fetch failed') {
                    loginError.value = 'Network error';
                }
                setTimeout(() => loginError.value = '', 3000);
                submittingLoginForm.value = false;
            }
        }
    }

</script>
