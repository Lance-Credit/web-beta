<template>
    <div class="spinner" :style="[`border-color: ${bg}`,`border-right-color: ${fg}`]"></div>
</template>

<style scoped>
   
    .spinner {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 2px solid;
        animation: spinner-d3wgkg 0.8s infinite linear;
    }

    @keyframes spinner-d3wgkg {
        to {
            transform: rotate(1turn);
        }
    }
</style>

<script setup lang="ts">

    withDefaults(defineProps<{
        bg: string,
        fg: string
    }>(), {
        bg: 'rgba(10,79,77,0.2)',
        fg: '#0a4f4d'
    });

</script>