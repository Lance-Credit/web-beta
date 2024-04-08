<template>
    <div>
        <Auth-BaseAuth>
            <template #auth-illustration>
                <div class="rounded-b-[80px] w-ful bg-[url('/assets/img/community-code-1000007199.svg')] bg-cover h-[377px]"></div>
            </template>
            <template #auth-content>
                <div>
                    <div v-if="!verificationCodeFormSubmitted">
                        <div v-if="!emailFormSubmitted">
                            <p class="mb-2 text-lance-text-black font-aventa font-medium text-[24px] leading-[32px] tracking-[-0.24px]">
                                Forgot password?
                            </p>
                            <p class="mb-6 text-lance-text-black-60">
                                Don’t stress, Happens to the best of us
                            </p>
                            <div class="mb-8">
                                <Form-EmailInput class="mb-4" placeholder="Email address" label="Email address" v-bind="passwordResetForm.email" :error="passwordResetFormErrors.email"></Form-EmailInput>
                            </div>
                            <button @click="emailFormSubmitted = true" class="mb-6 btn btn-primary w-full gap-4" :disabled="!passwordResetFormValues.email || passwordResetFormErrors.email">
                                <span>Continue</span>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.33301 10.2715C3.33301 9.95507 3.56814 9.69358 3.8732 9.65219L3.95801 9.64648H16.458C16.8032 9.64648 17.083 9.92631 17.083 10.2715C17.083 10.5879 16.8479 10.8494 16.5428 10.8908L16.458 10.8965H3.95801C3.61283 10.8965 3.33301 10.6167 3.33301 10.2715Z" fill="white"/>
                                    <path d="M10.976 5.69405C10.7314 5.4505 10.7305 5.05477 10.9741 4.81017C11.1955 4.5878 11.5427 4.56688 11.7878 4.7479L11.858 4.80827L16.8996 9.82827C17.1227 10.0503 17.143 10.3988 16.9605 10.6438L16.8997 10.714L11.858 15.7348C11.6134 15.9784 11.2177 15.9776 10.9741 15.733C10.7527 15.5107 10.7333 15.1634 10.9153 14.9191L10.976 14.8491L15.5727 10.2709L10.976 5.69405Z" fill="white"/>
                                </svg>
                            </button>
                            <NuxtLink to="/auth/login" class="flex gap-2 justify-center text-lance-text-black-60">
                                Remember password?<span class="text-lance-green font-medium">Back to login</span>
                            </NuxtLink>
                        </div>
                        <div v-else>
                            <p class="mb-2 text-lance-text-black font-aventa font-medium text-[24px] leading-[32px] tracking-[-0.24px]">
                                Verify your account
                            </p>
                            <p class="mb-6 text-lance-text-black-60">
                                Input the 6-digit verification code we sent to your email address to activate your account.
                            </p>
                            <div class="mb-8">
                                <Form-TextInput placeholder="Verification Code" label="Verification Code" v-bind="passwordResetForm.verificationCode" :error="passwordResetFormErrors.verificationCode"></Form-TextInput>
                            </div>
                            <button @click="verificationCodeFormSubmitted = true" class="mb-6 btn btn-primary w-full gap-4" :disabled="!passwordResetFormValues.verificationCode || passwordResetFormErrors.verificationCode">
                                <span>Continue</span>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.33301 10.2715C3.33301 9.95507 3.56814 9.69358 3.8732 9.65219L3.95801 9.64648H16.458C16.8032 9.64648 17.083 9.92631 17.083 10.2715C17.083 10.5879 16.8479 10.8494 16.5428 10.8908L16.458 10.8965H3.95801C3.61283 10.8965 3.33301 10.6167 3.33301 10.2715Z" fill="white"/>
                                    <path d="M10.976 5.69405C10.7314 5.4505 10.7305 5.05477 10.9741 4.81017C11.1955 4.5878 11.5427 4.56688 11.7878 4.7479L11.858 4.80827L16.8996 9.82827C17.1227 10.0503 17.143 10.3988 16.9605 10.6438L16.8997 10.714L11.858 15.7348C11.6134 15.9784 11.2177 15.9776 10.9741 15.733C10.7527 15.5107 10.7333 15.1634 10.9153 14.9191L10.976 14.8491L15.5727 10.2709L10.976 5.69405Z" fill="white"/>
                                </svg>
                            </button>
                            <p class="flex gap-2 justify-center text-lance-text-black-60">
                                Didn’t get the code?<span class="text-lance-green font-medium">Resend code</span>
                            </p>
                        </div>
                    </div>
                    <div v-else>
                        <p class="mb-2 text-lance-text-black font-aventa font-medium text-[24px] leading-[32px] tracking-[-0.24px]">
                            Create new password
                        </p>
                        <p class="mb-6 text-lance-text-black-60">
                            Input the 6-digit verification code we sent to your email address to activate your account.
                        </p>
                        <div class="mb-8">
                            <Form-PasswordInput class="mb-2" placeholder="Password" label="Password" v-bind="passwordResetForm.password" :error="passwordResetFormErrors.password"></Form-PasswordInput>
                            <Form-PasswordRuleGuide :password="passwordResetFormValues.password"/>
                            <Form-PasswordInput placeholder="Confirm Password " label="Confirm Password " v-bind="passwordResetForm.conf_password" :error="passwordResetFormErrors.conf_password"></Form-PasswordInput>
                        </div>
                        <button @click="newPasswordFormSubmitted = true" class="mb-6 btn btn-primary w-full gap-4" :disabled="!newPasswordFormFilled">
                            <span>Continue</span>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.33301 10.2715C3.33301 9.95507 3.56814 9.69358 3.8732 9.65219L3.95801 9.64648H16.458C16.8032 9.64648 17.083 9.92631 17.083 10.2715C17.083 10.5879 16.8479 10.8494 16.5428 10.8908L16.458 10.8965H3.95801C3.61283 10.8965 3.33301 10.6167 3.33301 10.2715Z" fill="white"/>
                                <path d="M10.976 5.69405C10.7314 5.4505 10.7305 5.05477 10.9741 4.81017C11.1955 4.5878 11.5427 4.56688 11.7878 4.7479L11.858 4.80827L16.8996 9.82827C17.1227 10.0503 17.143 10.3988 16.9605 10.6438L16.8997 10.714L11.858 15.7348C11.6134 15.9784 11.2177 15.9776 10.9741 15.733C10.7527 15.5107 10.7333 15.1634 10.9153 14.9191L10.976 14.8491L15.5727 10.2709L10.976 5.69405Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </template>
        </Auth-BaseAuth>
        <Auth-Modal
            v-if="newPasswordFormSubmitted"
            title="Password Reset Successful"
            text="Your new password has been created successfully. Try logging in again"
            button-text="Go to Login"
            button-link="/auth/login"
        />
    </div>
</template>

<script setup lang="ts">

    import * as yup from 'yup';
    import { useForm } from 'vee-validate';

    const { values: passwordResetFormValues, errors: passwordResetFormErrors, setFieldValue, defineComponentBinds } = useForm({
        validationSchema: yup.object({
            email: yup.string().email().required().label('Email Address'),
            verificationCode: yup.string().required().label('Verification Code'),
            password: yup.string().required()
            .matches(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"), 'Password is not in correct format')
            .matches(/^.{8,}$/, 'Password must be a minimum of 8 characters in length').label('Password'),
            conf_password: yup.string().required().oneOf([yup.ref('password')], "Passwords don't match").label('Password Confirmation')
        })
    });
    setFieldValue('password', '');
    
    const passwordResetForm = reactive({
        email: defineComponentBinds('email', {
            mapProps: state => ({
                error: state.errors[0],
            }),
        }),
        verificationCode: defineComponentBinds('verificationCode', {
            mapProps: state => ({
                error: state.errors[0],
            }),
        }),
        password: defineComponentBinds('password', {
            mapProps: state => ({
                error: state.errors[0],
            }),
        }),
        conf_password: defineComponentBinds('conf_password', {
            mapProps: state => ({
                error: state.errors[0],
            }),
        })
    });

    const emailFormSubmitted: Ref<boolean> = ref(false);

    const verificationCodeFormSubmitted: Ref<boolean> = ref(false);

    const newPasswordFormFilled = computed(()=>{
        return passwordResetFormValues.password && !passwordResetFormErrors.value.password &&
        passwordResetFormValues.conf_password && !passwordResetFormErrors.value.conf_password;
    });

    const newPasswordFormSubmitted: Ref<boolean> = ref(false);

</script>
