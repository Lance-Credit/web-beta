<template>
    <div class="mb-6 p-4 rounded border border-solid border-[#5D242D] bg-[rgba(93,36,45,0.05)]">
        <p class="text-[#5D242D] text-[13px] sm:text-base leading-6">{{ message }}</p>
    </div>
</template>

<script setup lang="ts">

    defineProps<{
        message: string
    }>();

</script>