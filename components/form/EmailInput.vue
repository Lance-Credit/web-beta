<template>
    <Form-BaseInput :label="label" :error="error" :placeholder="placeholder" type="email" :model-value="modelValue" @update:model-value="updateEmail" />
</template>

<script setup lang="ts">

    defineProps<{
        label: string,
        error?: string,
        modelValue?: string,
        placeholder: string
    }>();

    function updateEmail(email: string){
        emit('update:modelValue', email)
    }
    
    const emit = defineEmits(['update:modelValue']);

</script>