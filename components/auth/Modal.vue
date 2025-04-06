<template>
    <div class="fixed z-20 top-0 left-0 w-screen h-screen bg-lance-black-70 backdrop-blur-[2px] flex justify-center items-center">
        <div class="py-[97.5px] px-6 sm:px-[76px] bg-white sm:rounded-3xl w-[528px] h-screen sm:h-fit">
            <div class="mb-10 flex justify-center">
                <slot />
            </div>
            <div class="text-center">
                <p class="mb-2 text-lance-black font-aventa font-bold text-[24px] leading-[32px] tracking-[-0.24px]">
                    {{ title }}
                </p>
                <p class="mb-8 text-lance-black-60 text-sm sm:text-base leading-6" v-html="text"></p>
                <NuxtLink @click="emit('@auth-modal-action')" :to="buttonLink" class="btn btn-primary w-full gap-4">
                    <span>{{ buttonText }}</span>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.33301 10.2715C3.33301 9.95507 3.56814 9.69358 3.8732 9.65219L3.95801 9.64648H16.458C16.8032 9.64648 17.083 9.92631 17.083 10.2715C17.083 10.5879 16.8479 10.8494 16.5428 10.8908L16.458 10.8965H3.95801C3.61283 10.8965 3.33301 10.6167 3.33301 10.2715Z" fill="white"/>
                        <path d="M10.976 5.69405C10.7314 5.4505 10.7305 5.05477 10.9741 4.81017C11.1955 4.5878 11.5427 4.56688 11.7878 4.7479L11.858 4.80827L16.8996 9.82827C17.1227 10.0503 17.143 10.3988 16.9605 10.6438L16.8997 10.714L11.858 15.7348C11.6134 15.9784 11.2177 15.9776 10.9741 15.733C10.7527 15.5107 10.7333 15.1634 10.9153 14.9191L10.976 14.8491L15.5727 10.2709L10.976 5.69405Z" fill="white"/>
                    </svg>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    defineProps<{
        title: string,
        text: string,
        buttonText: string,
        buttonLink?: string
    }>();

    const emit = defineEmits<{
        '@auth-modal-action': []
    }>();
    
</script>