<template>
    <div>
        <label @click="handleChange(value)" class="flex gap-4 items-center">
            <div
                class="w-5 h-5 rounded-full border-[1.75px] border-solid border-lance-green flex items-center justify-center"
                :class="checked ? 'bg-[#C8E993]' : 'bg-white'"
            >
                <svg v-show="checked" xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.52756 6.8373C3.33656 6.8373 3.14356 6.7643 2.99756 6.6173L0.623559 4.2443C0.330559 3.9513 0.330559 3.4773 0.623559 3.1843C0.916559 2.8913 1.39056 2.8913 1.68356 3.1843L3.52756 5.0263L7.74356 0.811303C8.03656 0.518303 8.51056 0.518303 8.80356 0.811303C9.09656 1.1043 9.09656 1.5783 8.80356 1.8713L4.05756 6.6173C3.91156 6.7643 3.71956 6.8373 3.52756 6.8373Z" fill="#0A4F4D"/>
                </svg>
            </div>
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