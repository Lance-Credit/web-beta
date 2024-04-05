<template>
    <div class="indicator h-2 rounded-lg cursor-pointer" :class="active ? 'w-[72px]' : 'w-[27px]'" :style="active ? `background: ${activeColor}` : `background: ${defaultColor}`"></div>
</template>

<style>
    .indicator, .app-image{
        transition: all 1s ease 0s
    }
</style>

<script setup lang="ts">
    defineProps<{
        active: boolean,
        defaultColor: string,
        activeColor: string
    }>()
</script>