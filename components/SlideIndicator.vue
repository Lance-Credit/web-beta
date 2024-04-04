<template>
    <div class="h-2 rounded-lg cursor-pointer" :class="active ? 'w-[72px]' : 'w-[27px]'" :style="active ? `background: ${activeColor}` : `background: ${defaultColor}`"></div>
</template>

<script setup lang="ts">
    defineProps<{
        active: boolean,
        defaultColor: string,
        activeColor: string
    }>()
</script>