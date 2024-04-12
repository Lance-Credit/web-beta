<template>
    <div class="spinner"></div>
</template>

<style scoped>
    .spinner {
        width: 28px;
        height: 28px;
        display: grid;
        border-radius: 50%;
        -webkit-mask: radial-gradient(farthest-side,#0000 40%,#0a4f4d 41%);
        mask: radial-gradient(farthest-side,#0000 40%,#0a4f4d 41%);
        background: linear-gradient(0deg ,rgba(10,79,77,0.5) 50%,rgba(10,79,77,1) 0) center/2.27px 100%,
             linear-gradient(90deg,rgba(10,79,77,0.25) 50%,rgba(10,79,77,0.75) 0) center/100% 2.27px;
        background-repeat: no-repeat;
        animation: spinner-d3o0rx 0.8s infinite steps(12);
     }
     
     .spinner::before,
     .spinner::after {
        content: "";
        grid-area: 1/1;
        border-radius: 50%;
        background: inherit;
        opacity: 0.915;
        transform: rotate(30deg);
     }
     
     .spinner::after {
        opacity: 0.83;
        transform: rotate(60deg);
     }
     
     @keyframes spinner-d3o0rx {
        100% {
           transform: rotate(1turn);
        }
     }
</style>