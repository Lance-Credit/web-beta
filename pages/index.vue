<template>
    <div>
        <Auth-BaseAuth>
            <template #auth-illustration>
                <div>
                    <div v-if="!communityCodeFilled" class="pb-[72px] text-center">
                        <div class="mb-14">
                            <div class="mb-[18.36px] pl-[15px]">
                                <img :src="illustrations[activeIllustration].img" alt="">
                            </div>
                            <p class="mb-6 text-[#232D44] text-4xl leading-[32px] tracking-[-0.36px]">
                                {{ illustrations[activeIllustration].title }}
                            </p>
                            <p class="text-lance-black-60 text-lg leading-[26px] tracking-[0.18px] max-w-[377px] mx-auto">
                                {{ illustrations[activeIllustration].bodyText }}
                            </p>
                        </div>
                        <div class="flex gap-2 items-center justify-center">
                            <SlideIndicator v-for="(illustration, key) in illustrations" :key="key" :active="key == activeIllustration" default-color="rgba(10,79,77,0.20)" active-color="#0A4F4D" />
                        </div>
                    </div>
    
                    <div v-else class="rounded-b-[80px] w-ful bg-[url('/assets/img/community-code-1000007199.svg')] bg-cover h-[377px]"></div>
                </div>
            </template>
            <template #auth-content>
                <div>
                    <div v-if="!signUpSuccess">
                        <div v-if="!communityCodeFilled">
                            <p class="mb-1 text-lance-black font-aventa font-bold text-[24px] leading-[32px] tracking-[-0.24px]">
                                Hey there!
                            </p>
                            <p class="mb-6 text-lance-black-60">
                                Welcome to Lance 👋🏾
                            </p>
                            <p class="mb-4 text-[rgba(4,17,17,0.80)]">
                                To begin, we require your community code,
                                <span class="text-[rgba(4,17,17,0.80)] font-semibold">a 6-digit access code</span>
                                that grants you unrestricted entry to our platform.
                            </p>
                            <div class="mb-2">
                                <Form-TextInput placeholder="Enter Community Code" label="Community Code" v-bind="signupForm.communityCode" :error="signupFormErrors.communityCode"></Form-TextInput>
                            </div>
                            <NuxtLink to="https://tally.so/r/w2KLJL" target="_blank" class="flex mb-8 text-lance-green">I do not have a community code</NuxtLink>

                            <Form-ErrorNotification v-if="communityCodeErrorResponse" :message="communityCodeErrorResponse" />

                            <button @click="submitCommunityCode" class="mb-6 btn w-full btn-primary" :disabled="!signupFormValues.communityCode || submittingCommunityCode">Continue</button>
                            <NuxtLink to="/auth/login" class="flex gap-2 justify-center text-lance-black-60">
                                Already have an account?<span class="text-lance-green font-medium">Login</span>
                            </NuxtLink>
                        </div>
        
                        <div v-else>
                            <p class="mb-2 text-lance-black font-aventa font-bold text-[24px] leading-[32px] tracking-[-0.24px]">
                                Create your account
                            </p>
                            <p class="mb-6 text-lance-black-60">
                                Let’s get you started, Please provide the info below
                            </p>
                            <div class="mb-8">
                                <Form-TextInput class="mb-4" placeholder="First Name" label="First Name" v-bind="signupForm.firstName" :error="signupFormErrors.firstName"></Form-TextInput>
                                <Form-TextInput class="mb-4" placeholder="Last Name" label="Last Name" v-bind="signupForm.lastName" :error="signupFormErrors.lastName"></Form-TextInput>
                                <Form-EmailInput class="mb-4" placeholder="Email Address" label="Email Address" v-bind="signupForm.email" :error="signupFormErrors.email"></Form-EmailInput>
                                <Form-TextInput class="mb-4" placeholder="090*****990" label="Phone Number" v-bind="signupForm.phoneNumber" :error="signupFormErrors.phoneNumber"></Form-TextInput>
                                <Form-PasswordInput class="mb-4" placeholder="Enter Password" label="Enter Password" v-bind="signupForm.password" :error="signupFormErrors.password"></Form-PasswordInput>
                                <Form-PasswordRuleGuide :password="signupFormValues.password"/>
                            </div>

                            <Form-ErrorNotification v-if="signupErrorResponse" :message="signupErrorResponse" />

                            <button @click="submitSignUpForm" class="mb-6 btn w-full btn-primary" :disabled="!signupFormFilled || submittingSignupForm">Continue</button>
                            <NuxtLink to="/auth/login" class="flex gap-2 justify-center text-lance-black-60">
                                Already have an account?<span class="text-lance-green font-medium">Login</span>
                            </NuxtLink>
                        </div>
                    </div>
                    <div v-else>
                        <div>
                            <p class="mb-2 text-lance-black font-aventa font-bold text-[24px] leading-[32px] tracking-[-0.24px]">
                                Verify your account
                            </p>
                            <p class="mb-6 text-lance-black-60">
                                Input the 6-digit verification code we sent to this phone number <span class="font-semibold">{{ formattedPhoneNumber }}</span> to activate your account.
                            </p>
                            <div class="mb-6">
                                <Form-TextInput placeholder="Verification Code" label="Verification Code" v-bind="signupForm.verificationCode" :error="signupFormErrors.verificationCode"></Form-TextInput>
                            </div>

                            <Form-ErrorNotification v-if="verificationCodeErrorResponse" :message="verificationCodeErrorResponse" />

                            <button @click="submitVerificationCode" class="mb-6 btn w-full btn-primary" :disabled="!(signupFormValues.verificationCode && !signupFormErrors.verificationCode) || submittingVerificationCode">Continue</button>
                            <p v-show="showResendVerificationCode" class="flex gap-2 justify-center text-lance-black-60">
                                Didn’t get the code?<span @click="resendVerificationCode" class="text-lance-green font-medium cursor-pointer">Resend code</span>
                            </p>
                        </div>
                    </div>
                </div>
            </template>
        </Auth-BaseAuth>
        <Auth-Modal
            v-if="verificationCodeSubmitted"
            title="Welcome to Lance X"
            :text="referrerText"
            button-text="Proceed to your dashboard"
            button-link="/dashboard"
        />
    </div>
</template>

<script setup lang="ts">

    import * as yup from 'yup';
    import { useForm } from 'vee-validate';
    import { useUserStore}  from '@/stores/user';

    const { fetchUserProfile } = useUserStore();

    const { apiURL } = useRuntimeConfig().public;

    const activeIllustration:Ref<number> = ref(1);

    const illustrations = ref([
        {
            active: true,
            bodyText: 'Our community codes are unique identifiers created to verify users, ensuring ethical conduct in credit activities, enhancing safety and trust.',
            title: 'What’s a community code',
            img: '/assets/img/community-code.svg'
        },
        {
            active: false,
            bodyText: 'You can easily request for a community code by simply clicking on the "I don\'t have a community code" link.',
            title: 'I need a community code',
            img: '/assets/img/need-a-communicty-code.svg'
        },
    ]);

    function animateIllustration(){
        activeIllustration.value = activeIllustration.value != illustrations.value.length - 1 ? activeIllustration.value + 1 : 0;
    }

    onMounted(()=>{
        setInterval(() => animateIllustration(), 6000);
    });

    const communityCodeFilled: Ref<boolean> = ref(false);

    const { values: signupFormValues, errors: signupFormErrors, setFieldValue, defineComponentBinds } = useForm({
        validationSchema: yup.object({
            communityCode: yup.string().required().label('Community Code'),
            firstName: yup.string().required().label('First Name'),
            lastName: yup.string().required().label('Last Name'),
            email: yup.string().email().required().label('Email Address'),
            phoneNumber: yup.string().required().label('Phone Number'),
            password: yup.string().required()
            .matches(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"), 'Password is not in correct format')
            .matches(/^.{8,}$/, 'Password must be a minimum of 8 characters in length').label('Password'),
            verificationCode: yup.string().required().matches(/^[0-9]+$/, "Verification Code is required")
            .matches(/^.{6}$/, "Verification Code is required").label('Verification Code'),
        })
    });
    setFieldValue('password', '');

    const signupForm = reactive({
        communityCode: defineComponentBinds('communityCode', {
            mapProps: state => ({
              error: state.errors[0],
            }),
        }),
        firstName: defineComponentBinds('firstName', {
            mapProps: state => ({
              error: state.errors[0],
            }),
        }),
        lastName: defineComponentBinds('lastName', {
            mapProps: state => ({
              error: state.errors[0],
            }),
        }),
        email: defineComponentBinds('email', {
            mapProps: state => ({
              error: state.errors[0],
            }),
        }),
        phoneNumber: defineComponentBinds('phoneNumber', {
            mapProps: state => ({
              error: state.errors[0],
            }),
        }),
        password: defineComponentBinds('password', {
            mapProps: state => ({
              error: state.errors[0],
            }),
        }),
        verificationCode: defineComponentBinds('verificationCode', {
            mapProps: state => ({
              error: state.errors[0],
            }),
        })
    });

    const submittingCommunityCode: Ref<boolean> = ref(false);

    const communityCodeErrorResponse: Ref<string> = ref('');

    const communityCodeOwner: Ref<string> = ref('');

    const referrerText = computed(() => {
        return `You have successfully created an account and joined the community through <span class="text-lance-black font-medium">${communityCodeOwner.value}.</span>`;
    })

    async function submitCommunityCode(){

        submittingCommunityCode.value = true;

        const { data: { value: result }, error } = await useFetch(`${apiURL}/v1/community_code?code=${signupFormValues.communityCode}`);

        if(result){
            if((result as any).success && !(result as any).error){
                submittingCommunityCode.value = false;
                communityCodeOwner.value = (result as any).data.owner;
                communityCodeFilled.value = true;
            }
        }else if(error){
            submittingCommunityCode.value = false;
            communityCodeErrorResponse.value = error.value?.data.error;
        }
    }

    const signupFormFilled = computed(()=>{
        return signupFormValues.firstName && !signupFormErrors.value.firstName &&
        signupFormValues.lastName && !signupFormErrors.value.lastName &&
        signupFormValues.email && !signupFormErrors.value.email &&
        signupFormValues.phoneNumber && !signupFormErrors.value.phoneNumber &&
        signupFormValues.password && !signupFormErrors.value.password;
    });

    const signUpSuccess: Ref<boolean> = ref(false);
    
    const submittingSignupForm: Ref<boolean> = ref(false);

    const formattedPhoneNumber = computed(()=>{
        let phoneNumber: string = signupFormValues.phoneNumber;
        if(phoneNumber){
            const first4 = phoneNumber.substring(0,4);
            const last2 = phoneNumber.substring(phoneNumber.length - 2);
            return `${first4}*****${last2}`;
        }
    });

    const signupErrorResponse: Ref<string> = ref('');

    const authToken: Ref<string> = ref('');
    
    const showResendVerificationCode: Ref<boolean> = ref(false);

    async function submitSignUpForm(){

        submittingSignupForm.value = true;

        const { data: { value: result }, error } = await useFetch(`${apiURL}/v1/auth/register`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: {
                "source": "web",
                "email": signupFormValues.email,
                "lastName": signupFormValues.lastName,
                "password": signupFormValues.password,
                "mobile": '234'+(signupFormValues.phoneNumber).substring(1),
                "firstName": signupFormValues.firstName,
                "communityCode": signupFormValues.communityCode
            }
        });
    
        if(result){
            if((result as any).success && !(result as any).error){
                signUpSuccess.value = true;
                authToken.value = (result as any).data.token;
                processShowResendVerificationCode();
            }
        }else if(error){
            signupErrorResponse.value = error.value?.data.error;
            submittingSignupForm.value = false;
        }
    }

    const verificationCodeSubmitted: Ref<boolean> = ref(false);

    const submittingVerificationCode: Ref<boolean> = ref(false);

    const verificationCodeErrorResponse: Ref<string> = ref('');

    async function submitVerificationCode(){

        submittingVerificationCode.value = true;

        const { data: { value: result }, error } = await useFetch(`${apiURL}/v1/auth/phone/verification?token=${signupFormValues.verificationCode}`,{
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authToken.value}`
            }
        });

        if(result){
            if((result as any).success && !(result as any).error){
                verificationCodeSubmitted.value = true;

                const { signIn } = useAuth();
            
                const signedIn = await signIn('credentials', { email: signupFormValues.email, password: signupFormValues.password, redirect: false, callbackUrl: '/dashboard' })

                if(!(signedIn as any).error){
                    const headers = useRequestHeaders(['cookie']) as HeadersInit;
                    const { data: { value: jwt } } = await useFetch('/api/token', { headers });

                    await fetchUserProfile(jwt?.token, apiURL);

                    await navigateTo('/dashboard');
                }
            }
        }else if(error){
            verificationCodeErrorResponse.value = error.value?.data.error;
            submittingVerificationCode.value = false;
        }
    }

    async function resendVerificationCode(){

        showResendVerificationCode.value = false;

        const { data: { value: result }, error } = await useFetch(`${apiURL}/v1/auth/phone/verification`,{
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authToken.value}`
            }
        });

        if(result){
            if((result as any).success && !(result as any).error){
                // verificationCodeSubmitted.value = true;
            }
        }else if(error){
            verificationCodeErrorResponse.value = error.value?.data.error;
            submittingVerificationCode.value = false;
        }

        processShowResendVerificationCode();
    }

    function processShowResendVerificationCode(){
        setTimeout( () => showResendVerificationCode.value = true, 120000);
    }
</script>
