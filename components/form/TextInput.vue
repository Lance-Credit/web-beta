<template>
    <Form-BaseInput :label="label" :error="error" :placeholder="placeholder" :model-value="modelValue" @update:model-value="updateTextInput" />
</template>

<script setup lang="ts">

    defineProps<{
        label: string,
        error?: string,
        modelValue?: string,
        placeholder: string
    }>();

    function updateTextInput(text: undefined | string){
        emit('update:modelValue', text)
    }
    
    const emit = defineEmits<{
        'update:modelValue': [value: undefined | string]
    }>();

</script>