<template>
    <div>
        <h1>Loans</h1>
    </div>
</template>

<script setup lang="ts">

    definePageMeta({
        middleware: 'auth',
        layout: 'dashboard'
    });

</script>