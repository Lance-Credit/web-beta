<template>
    <div>
        <label
            @click="handleChange(value)"
            class="rounded-lg bg-[rgba(10,79,77,0.05)] py-2 px-4 flex gap-2 items-center text-[#041111] cursor-pointer"
            :class="checked ? 'bg-lance-green text-white' : ''"
        >
            <slot />
        </label>


    </div>
</template>

<script setup lang="ts">

    import { useField } from 'vee-validate';

    const props = defineProps<{
        name: string,
        value: string,
    }>();

    const { checked, handleChange } = useField(props.name, undefined, {
        type: 'radio',
        checkedValue: props.value,
    });

</script>