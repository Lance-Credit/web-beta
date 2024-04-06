<template>
    <div>
        <Auth-BaseAuth>
            <template #auth-illustration>
                <div v-if="!communityCodeFilled" class="pb-[72px] text-center">
                    <div class="mb-14">
                        <div class="mb-[18.36px] pl-[15px]">
                            <img :src="illustrations[activeIllustration].img" alt="">
                        </div>
                        <p class="mb-6 text-[#232D44] text-4xl leading-[32px] tracking-[-0.36px]">
                            {{ illustrations[activeIllustration].title }}
                        </p>
                        <p class="text-lance-text-black-60 text-lg leading-[26px] tracking-[0.18px] max-w-[377px] mx-auto">
                            {{ illustrations[activeIllustration].bodyText }}
                        </p>
                    </div>
                    <div class="flex gap-2 items-center justify-center">
                        <SlideIndicator v-for="(illustration, key) in illustrations" :key="key" :active="key == activeIllustration" default-color="rgba(10,79,77,0.20)" active-color="#0A4F4D" />
                    </div>
                </div>

                <div v-else class="rounded-b-[80px] w-ful bg-[url('/assets/img/community-code-1000007199.svg')] bg-cover h-[377px]"></div>
            </template>
            <template #auth-content>
                <div v-if="!signupFormSubmitted">
                    <div v-if="!communityCodeFilled" class="ml-[140.5px] max-w-[416px]">
                        <p class="mb-1 text-lance-text-black font-aventa font-bold text-[24px] leading-[32px] tracking-[-0.24px]">
                            Hey there!
                        </p>
                        <p class="mb-6 text-lance-text-black-60">
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
                        <NuxtLink class="flex mb-12 text-lance-green">I do not have a community code</NuxtLink>
                        <button @click="communityCodeFilled = true" class="mb-6 btn w-full btn-primary" :disabled="!signupFormValues.communityCode">Continue</button>
                        <NuxtLink to="/auth/login" class="flex gap-2 justify-center text-lance-text-black-60">
                            Already have an account?<span class="text-lance-green font-medium">Login</span>
                        </NuxtLink>
                    </div>
    
                    <div v-else class="ml-[154.5px] max-w-[376px]">
                        <p class="mb-2 text-lance-text-black font-aventa text-[24px] leading-[32px] tracking-[-0.24px]">
                            Create your account
                        </p>
                        <p class="mb-6 text-lance-text-black-60">
                            Let’s get you started, Please provide the info below
                        </p>
                        <div class="mb-8">
                            <Form-TextInput class="mb-4" placeholder="First Name" label="First Name" v-bind="signupForm.firstName" :error="signupFormErrors.firstName"></Form-TextInput>
                            <Form-TextInput class="mb-4" placeholder="Last Name" label="Last Name" v-bind="signupForm.lastName" :error="signupFormErrors.lastName"></Form-TextInput>
                            <Form-EmailInput class="mb-4" placeholder="Email Address" label="Email Address" v-bind="signupForm.email" :error="signupFormErrors.email"></Form-EmailInput>
                            <Form-TextInput class="mb-4" placeholder="Phone Number" label="Phone Number" v-bind="signupForm.phoneNumber" :error="signupFormErrors.phoneNumber"></Form-TextInput>
                            <Form-PasswordInput class="mb-4" placeholder="Enter Password" label="Enter Password" v-bind="signupForm.password" :error="signupFormErrors.password"></Form-PasswordInput>
                        </div>
                        <button @click="signupFormSubmitted = true" class="mb-6 btn w-full btn-primary" :disabled="!signupFormFilled">Continue</button>
                        <NuxtLink to="/auth/login" class="flex gap-2 justify-center text-lance-text-black-60">
                            Already have an account?<span class="text-lance-green font-medium">Login</span>
                        </NuxtLink>
                    </div>
                </div>
                <div v-else>
                    <div class="ml-[154.5px] max-w-[376px]">
                        <p class="mb-2 text-lance-text-black font-aventa font-medium text-[24px] leading-[32px] tracking-[-0.24px]">
                            Verify your account
                        </p>
                        <p class="mb-6 text-lance-text-black-60">
                            Input the 6-digit verification code we sent to this phone number <span class="font-semibold">{{ formattedPhoneNumber }}</span> to activate your account.
                        </p>
                        <div class="mb-6">
                            <Form-TextInput placeholder="Verification Code" label="Verification Code" v-bind="signupForm.verificationCode" :error="signupFormErrors.verificationCode"></Form-TextInput>
                        </div>
                        <button @click="verificationCodeSubmitted = true" class="btn w-full btn-primary" :disabled="!signupFormValues.verificationCode">Continue</button>
                    </div>
                </div>
            </template>
        </Auth-BaseAuth>
        <Auth-Modal
            v-if="verificationCodeSubmitted"
            title="Welcome to Lance X"
            text='You have successfully created an account and joined the community through <span class="text-lance-text-black font-medium">Yewande Odumosu.</span>'
            button-text="Proceed to your dashboard"
            button-link="#"
        />
    </div>
</template>

<script setup lang="ts">

    import * as yup from 'yup';
    import { useForm } from 'vee-validate';

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

    const { values: signupFormValues, errors: signupFormErrors, defineComponentBinds } = useForm({
        validationSchema: yup.object({
            communityCode: yup.string().required().label('Community Code'),
            firstName: yup.string().required().label('First Name'),
            lastName: yup.string().required().label('Last Name'),
            email: yup.string().email().required().label('Email Address'),
            phoneNumber: yup.string().required().label('Phone Number'),
            password: yup.string().required().label('Password'),
            verificationCode: yup.string().required().label('Verification Code')
        })
    });

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

    const signupFormFilled = computed(()=>{
        return signupFormValues.firstName && !signupFormErrors.value.firstName &&
        signupFormValues.lastName && !signupFormErrors.value.lastName &&
        signupFormValues.email && !signupFormErrors.value.email &&
        signupFormValues.phoneNumber && !signupFormErrors.value.phoneNumber &&
        signupFormValues.password && !signupFormErrors.value.password;
    });

    const signupFormSubmitted: Ref<boolean> = ref(false);

    const formattedPhoneNumber = computed(()=>{
        let phoneNumber: string = signupFormValues.phoneNumber;
        if(phoneNumber){
            const first4 = phoneNumber.substring(0,4);
            const last2 = phoneNumber.substring(phoneNumber.length - 2);
            return `${first4}*****${last2}`;
        }
    });

    const verificationCodeSubmitted: Ref<boolean> = ref(false);
</script>
