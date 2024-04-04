<template>
    <div>
        <Auth-BaseAuth>
            <template #auth-illustration>
                <div class="pb-[72px] text-center">
                    <div class="mb-14">
                        <div class="mb-[18.36px] pl-[15px]">
                            <img :src="illustrations[activeIllustration].img" alt="">
                        </div>
                        <p class="mb-6 text-[#232D44] text-4xl leading-[32px] tracking-[-0.36px]">
                            {{ illustrations[activeIllustration].title }}
                        </p>
                        <p class="text-[rgba(4,17,17,0.60)] max-w-[377px] mx-auto">
                            {{ illustrations[activeIllustration].bodyText }}
                        </p>
                    </div>
                    <div class="flex gap-2 items-center justify-center">
                        <SlideIndicator v-for="(illustration, key) in illustrations" :key="key" :active="illustration.active" default-color="rgba(10,79,77,0.20)" active-color="#0A4F4D" />
                    </div>
                </div>
            </template>
            <template #auth-content>
                <div class="ml-28 max-w-[416px]">
                    <p class="mb-1 text-[#041111] font-aventa font-bold text-[24px] leading-[32px] tracking-[-0.24px]">
                        Hey there!
                    </p>
                    <p class="mb-6 text-[rgba(4,17,17,0.60)]">
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
                    <button class="mb-6 btn w-full btn-primary" :disabled="!signupFormValues.communityCode">Continue</button>
                    <NuxtLink class="flex gap-2 justify-center text-[rgba(4,17,17,0.60)]">
                        Already have an account?<span class="text-lance-green font-medium">Login</span>
                    </NuxtLink>
                </div>
            </template>
        </Auth-BaseAuth>
    </div>
</template>

<style>
    .indicator, .app-image{
        transition: all 1s ease 0s
    }
    .a{
        
    }
</style>

<script setup lang="ts">

    import * as yup from 'yup';
    import { useForm } from 'vee-validate';

    const activeIllustration:Ref<number> = ref(0);

    const illustrations = ref([
        {
            active: true,
            bodyText: 'Inside your evian, another evian dey inside, to access the inner evian, You would need a community code We would come up with a better copy.',
            title: 'What’s a community code',
            img: '/assets/img/community-code.svg'
        },
        {
            active: false,
            bodyText: 'Inside your evian, another evian dey inside, to access the inner evian, You would need a community code We would come up with a better copy.',
            title: 'What’s a community code',
            img: '/assets/img/community-code.svg'
        },
    ]);

    const { values: signupFormValues, errors: signupFormErrors, defineComponentBinds } = useForm({
        validationSchema: yup.object({
            communityCode: yup.string().required().label('Community Code'),
        })
    });

    const signupForm = reactive({
        communityCode: defineComponentBinds('communityCode', {
            mapProps: state => ({
              error: state.errors[0],
            }),
        }),
    });
</script>
