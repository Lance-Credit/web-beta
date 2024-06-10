<template>
    <div>
        <Auth-BaseAuth>
            <template #auth-illustration>
                <div class="rounded-b-[80px] w-ful bg-[url('/assets/img/community-code-1000007199.svg')] bg-cover h-[377px]"></div>
            </template>
            <template #auth-content>
                <div>
                    <p class="mb-2 text-lance-black font-aventa font-bold text-[24px] leading-[32px] tracking-[-0.24px]">
                        Log in to your account
                    </p>
                    <p class="mb-6 text-lance-black-60">
                        Hey Lancer, Welcome back
                    </p>
                    <div class="mb-8">
                        <Form-EmailInput class="mb-4" placeholder="Email address" label="Email address" v-bind="loginForm.email" :error="loginFormErrors.email"></Form-EmailInput>
                        <Form-PasswordInput class="mb-2" placeholder="Password" label="Password" v-bind="loginForm.password" :error="loginFormErrors.password"></Form-PasswordInput>
                        <NuxtLink to="/auth/password/reset" class="text-[#1E1721] text-sm leading-[24px]">Forgot password?</NuxtLink>
                    </div>
                    <Form-ErrorNotification v-if="loginError" :message="loginError" />
                    <button @click="submitLogInForm" class="mb-6 btn w-full btn-primary" :disabled="!loginFormFilled || submittingLoginForm">Login to your account</button>
                    <NuxtLink to="/" class="flex gap-2 justify-center text-lance-black-60">
                        Don’t have an account?<span class="text-lance-green font-medium">Create an account</span>
                    </NuxtLink>
                </div>
            </template>
        </Auth-BaseAuth>
    </div>
</template>

<script setup lang="ts">

    import * as yup from 'yup';

    import { useUserStore } from '@/stores/user';

    const { fetchUserProfile } = useUserStore();

    const { apiURL } = useRuntimeConfig().public;

    definePageMeta({
        middleware: 'auth',
        auth: {
            unauthenticatedOnly: true,
            navigateAuthenticatedTo: '/dashboard',
        },
    });

    const { values: loginFormValues, errors: loginFormErrors, defineComponentBinds } = useForm({
        validationSchema: yup.object({
            email: yup.string().email().required().label('Email Address'),
            password: yup.string().required().label('Password')
        })
    });

    const loginForm = reactive({
        email: defineComponentBinds('email', {
            mapProps: state => ({
              error: state.errors[0],
            }),
        }),
        password: defineComponentBinds('password', {
            mapProps: state => ({
              error: state.errors[0],
            }),
        })
    });

    const loginFormFilled = computed(()=>{
        return loginFormValues.email && !loginFormErrors.value.email &&
        loginFormValues.password && !loginFormErrors.value.password;
    });

    const submittingLoginForm: Ref<boolean> = ref(false);
    
    const loginError: Ref<string> = ref('');

    async function submitLogInForm(){
        if(loginForm.email && loginForm.password){
            submittingLoginForm.value = true;

            const { signIn } = useAuth();
            
            const signedIn = await signIn('credentials', { email: loginFormValues.email, password: loginFormValues.password, redirect: false, callbackUrl: '/dashboard' })

            if(!(signedIn as any).error){
                const { data: { value: jwt } } = await useFetch('/api/token');

                await fetchUserProfile(jwt?.token, apiURL);

                await navigateTo('/dashboard');
            }else{
                loginError.value = (signedIn as any).error;
                submittingLoginForm.value = false;
            }
        }
    }

</script>
