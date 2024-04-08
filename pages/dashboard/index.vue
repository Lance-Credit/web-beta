<template>
    <div>
        <h1>Logged In</h1>
    </div>
</template>

<script setup lang="ts">

    definePageMeta({
        middleware: 'auth',
        layout: 'dashboard'
    });

</script>