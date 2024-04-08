<template>
    <div>
        <Auth-BaseAuth>
            <template #auth-illustration>
                <div class="rounded-b-[80px] w-ful bg-[url('/assets/img/community-code-1000007199.svg')] bg-cover h-[377px]"></div>
            </template>
            <template #auth-content>
                <div>
                    <p class="mb-2 text-lance-text-black font-aventa font-medium text-[24px] leading-[32px] tracking-[-0.24px]">
                        Log in to your account
                    </p>
                    <p class="mb-6 text-lance-text-black-60">
                        Hey Lancer, Welcome back
                    </p>
                    <div class="mb-8">
                        <Form-EmailInput class="mb-4" placeholder="Email address" label="Email address" v-bind="loginForm.email" :error="loginFormErrors.email"></Form-EmailInput>
                        <Form-PasswordInput class="mb-2" placeholder="Password" label="Password" v-bind="loginForm.password" :error="loginFormErrors.password"></Form-PasswordInput>
                        <NuxtLink to="/auth/password/reset" class="text-[#1E1721] text-sm leading-[24px]">Forgot password?</NuxtLink>
                    </div>
                    <button @click="loginFormSubmitted = true" class="mb-6 btn w-full btn-primary" :disabled="!loginFormFilled">Login to your account</button>
                    <NuxtLink to="/" class="flex gap-2 justify-center text-lance-text-black-60">
                        Don’t have an account?<span class="text-lance-green font-medium">Create an account</span>
                    </NuxtLink>
                </div>
            </template>
        </Auth-BaseAuth>
    </div>
</template>

<script setup lang="ts">

    import * as yup from 'yup';
    import { useForm } from 'vee-validate';

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

    const loginFormSubmitted: Ref<boolean> = ref(false);

</script>
