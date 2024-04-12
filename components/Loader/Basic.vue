<template>
    <div class="spinner"></div>
</template>

<style scoped>
   
    .spinner {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 2px solid;
        border-color: rgba(10, 79, 77, 0.2);
        border-right-color: #0a4f4d;
        animation: spinner-d3wgkg 0.8s infinite linear;
    }

    @keyframes spinner-d3wgkg {
        to {
            transform: rotate(1turn);
        }
    }
</style>