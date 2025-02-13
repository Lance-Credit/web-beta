<template>
    <div>
        <div class="flex h-[65px] justify-center flex-col bg-white border border-solid py-2 px-4 rounded" :class="[error ? 'border-[#E70A3F]' : 'border-[rgba(4,17,17,0.10)]', inputFocused ? 'border-lance-green' : '']">
            <label v-if="value" for="" class="mb-0.5 text-[13px] leading-[20.8px]" :class="[error ? 'text-[#E70A3F]' : 'text-lance-black']">
                {{ label }}
            </label>
            <div class="flex items-center gap-1">
                <span v-if="inputFocused || value">N</span>
                <input
                    type="text" :placeholder="placeholder" v-model="value"
                    @focusin="inputFocused = true" @focusout="inputFocused = false"
                    @change="emit('@money-changed')"
                    class="text-lance-black outline-none font-gelion font-normal text-base w-full appearance-none"
                >
            </div>
        </div>
        <p class="text-[#E70A3F] text-xs">{{ error }}</p>
    </div>
</template>

<style scoped>
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none;
    }
</style>

<script setup lang="ts">

    const props = defineProps<{
        label: string,
        error?: string,
        placeholder: string,
        modelValue?: number | string
    }>();

    const inputFocused: Ref<boolean> = ref(false);

    const value = computed({
        get() {
            if(props.modelValue){
                return (Number(props.modelValue))?.toLocaleString();
            }
            return undefined;
        },
        set(value: undefined | number | string) {
          emit('update:modelValue', (value as string)?.replaceAll(',',''));
        }
    });

    const emit = defineEmits<{
        'update:modelValue': [value: undefined | number | string],
        '@money-changed': []
    }>();

</script>