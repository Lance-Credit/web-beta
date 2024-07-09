<template>
    <div class="mb-6 p-6 rounded-lg border border-solid border-lance-green bg-[rgba(236,255,77,0.10)]">
        <p class="mb-[5.2px] text-[#808080] text-[10px] font-semibold">Your password should contain:</p>
        <ul class="flex flex-col gap-2 text-[11px] leading-[16.28px]">
            <li class="flex items-center gap-2">
                <div>
                    <svg v-if="!hasLowerCase" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.94037 3.53412C4.25279 3.2217 4.75932 3.2217 5.07174 3.53412L8.50605 6.96843L11.9404 3.53412C12.2528 3.2217 12.7593 3.2217 13.0717 3.53412C13.3842 3.84654 13.3842 4.35307 13.0717 4.66549L9.63743 8.0998L13.0717 11.5341C13.3842 11.8465 13.3842 12.3531 13.0717 12.6655C12.7593 12.9779 12.2528 12.9779 11.9404 12.6655L8.50605 9.23118L5.07174 12.6655C4.75932 12.9779 4.25279 12.9779 3.94037 12.6655C3.62795 12.3531 3.62795 11.8465 3.94037 11.5341L7.37468 8.0998L3.94037 4.66549C3.62795 4.35307 3.62795 3.84654 3.94037 3.53412Z" fill="#E94444"/>
                    </svg>
                    <svg v-else width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.1727 4.42259L13.6752 2.92676L6.53322 10.0685L3.3368 6.87206L1.83936 8.36789L6.53325 13.0603L15.1727 4.42259Z" fill="#1EB12D"/>
                    </svg>
                </div>
                <span>A Lowercase letter (a)</span>
            </li>
            <li class="flex items-center gap-2">
                <div>
                    <svg v-if="!hasUpperCase" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.94037 3.53412C4.25279 3.2217 4.75932 3.2217 5.07174 3.53412L8.50605 6.96843L11.9404 3.53412C12.2528 3.2217 12.7593 3.2217 13.0717 3.53412C13.3842 3.84654 13.3842 4.35307 13.0717 4.66549L9.63743 8.0998L13.0717 11.5341C13.3842 11.8465 13.3842 12.3531 13.0717 12.6655C12.7593 12.9779 12.2528 12.9779 11.9404 12.6655L8.50605 9.23118L5.07174 12.6655C4.75932 12.9779 4.25279 12.9779 3.94037 12.6655C3.62795 12.3531 3.62795 11.8465 3.94037 11.5341L7.37468 8.0998L3.94037 4.66549C3.62795 4.35307 3.62795 3.84654 3.94037 3.53412Z" fill="#E94444"/>
                    </svg>
                    <svg v-else width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.1727 4.42259L13.6752 2.92676L6.53322 10.0685L3.3368 6.87206L1.83936 8.36789L6.53325 13.0603L15.1727 4.42259Z" fill="#1EB12D"/>
                    </svg>
                </div>
                <span>An Uppercase letter (A)</span>
            </li>
            <li class="flex items-center gap-2">
                <div>
                    <svg v-if="!hasANumber" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.94037 3.53412C4.25279 3.2217 4.75932 3.2217 5.07174 3.53412L8.50605 6.96843L11.9404 3.53412C12.2528 3.2217 12.7593 3.2217 13.0717 3.53412C13.3842 3.84654 13.3842 4.35307 13.0717 4.66549L9.63743 8.0998L13.0717 11.5341C13.3842 11.8465 13.3842 12.3531 13.0717 12.6655C12.7593 12.9779 12.2528 12.9779 11.9404 12.6655L8.50605 9.23118L5.07174 12.6655C4.75932 12.9779 4.25279 12.9779 3.94037 12.6655C3.62795 12.3531 3.62795 11.8465 3.94037 11.5341L7.37468 8.0998L3.94037 4.66549C3.62795 4.35307 3.62795 3.84654 3.94037 3.53412Z" fill="#E94444"/>
                    </svg>
                    <svg v-else width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.1727 4.42259L13.6752 2.92676L6.53322 10.0685L3.3368 6.87206L1.83936 8.36789L6.53325 13.0603L15.1727 4.42259Z" fill="#1EB12D"/>
                    </svg>
                </div>
                <span>A number (1)</span>
            </li>
            <li class="flex items-center gap-2">
                <div>
                    <svg v-if="!hasASpecialCharacter" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.94037 3.53412C4.25279 3.2217 4.75932 3.2217 5.07174 3.53412L8.50605 6.96843L11.9404 3.53412C12.2528 3.2217 12.7593 3.2217 13.0717 3.53412C13.3842 3.84654 13.3842 4.35307 13.0717 4.66549L9.63743 8.0998L13.0717 11.5341C13.3842 11.8465 13.3842 12.3531 13.0717 12.6655C12.7593 12.9779 12.2528 12.9779 11.9404 12.6655L8.50605 9.23118L5.07174 12.6655C4.75932 12.9779 4.25279 12.9779 3.94037 12.6655C3.62795 12.3531 3.62795 11.8465 3.94037 11.5341L7.37468 8.0998L3.94037 4.66549C3.62795 4.35307 3.62795 3.84654 3.94037 3.53412Z" fill="#E94444"/>
                    </svg>
                    <svg v-else width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.1727 4.42259L13.6752 2.92676L6.53322 10.0685L3.3368 6.87206L1.83936 8.36789L6.53325 13.0603L15.1727 4.42259Z" fill="#1EB12D"/>
                    </svg>
                </div>
                <span>A special character (!@#)</span>
            </li>
            <li class="flex items-center gap-2">
                <div>
                    <svg v-if="!hasRequiredMinimumCharacters" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.94037 3.53412C4.25279 3.2217 4.75932 3.2217 5.07174 3.53412L8.50605 6.96843L11.9404 3.53412C12.2528 3.2217 12.7593 3.2217 13.0717 3.53412C13.3842 3.84654 13.3842 4.35307 13.0717 4.66549L9.63743 8.0998L13.0717 11.5341C13.3842 11.8465 13.3842 12.3531 13.0717 12.6655C12.7593 12.9779 12.2528 12.9779 11.9404 12.6655L8.50605 9.23118L5.07174 12.6655C4.75932 12.9779 4.25279 12.9779 3.94037 12.6655C3.62795 12.3531 3.62795 11.8465 3.94037 11.5341L7.37468 8.0998L3.94037 4.66549C3.62795 4.35307 3.62795 3.84654 3.94037 3.53412Z" fill="#E94444"/>
                    </svg>
                    <svg v-else width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.1727 4.42259L13.6752 2.92676L6.53322 10.0685L3.3368 6.87206L1.83936 8.36789L6.53325 13.0603L15.1727 4.42259Z" fill="#1EB12D"/>
                    </svg>
                </div>
                <span>8 characters minimum</span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">

    const props = defineProps<{
        password: string | any
    }>();

    const hasLowerCase = computed(() => {
        return new RegExp("^(?=.*[a-z])").test(props.password);
    });

    const hasUpperCase = computed(() => {
        return new RegExp("^(?=.*[A-Z])").test(props.password);
    });

    const hasANumber = computed(() => {
        return new RegExp("^(?=.*\\d)").test(props.password);
    });

    const hasASpecialCharacter = computed(() => {
        return new RegExp("^(?=.*[-+_!@#$%^&*., ?])").test(props.password);
    });

    const hasRequiredMinimumCharacters = computed(() => {
        return props.password?.length >= 8;
    });

</script>