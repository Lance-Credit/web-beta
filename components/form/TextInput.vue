<template>
    <Form-BaseInput :label="label" :error="error" :placeholder="placeholder" :model-value="modelValue" @update:model-value="updateTextInput" :disabled="disabled" />
</template>

<script setup lang="ts">

    defineProps<{
        label: string,
        error?: string,
        disabled?: boolean,
        modelValue?: string,
        placeholder?: string
    }>();

    function updateTextInput(text: undefined | string){
        emit('update:modelValue', text)
    }
    
    const emit = defineEmits<{
        'update:modelValue': [value: undefined | string]
    }>();

</script>