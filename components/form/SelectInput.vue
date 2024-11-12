<template>
    <div>
        <div class="flex h-[65px] justify-center flex-col bg-white border border-solid py-2 px-4 rounded" :class="[error ? 'border-[#E70A3F]' : 'border-[rgba(4,17,17,0.10)]', inputFocused ? 'border-lance-green' : '']">
            <label v-if="value" for="" class="mb-0.5 text-[13px] leading-[20.8px]" :class="[error ? 'text-[#E70A3F]' : 'text-lance-black']">
                {{ label }}
            </label>
            <select
                name="" v-model="value"
                @change="emit('@select-change', value)"
                @focusin="inputFocused = true" @focusout="inputFocused = false"
                class="text-lance-black outline-none font-gelion font-normal text-base appearance-none cursor-pointer"
            >
                <option disabled selected :value="undefined">{{  placeholder  }}</option>
                <option v-for="(option, key) in options" :key="key" :value="option.value">{{  option.label  }}</option>
            </select>
        </div>
        <p class="text-[#E70A3F] text-xs">{{ error }}</p>
    </div>
</template>

<style scoped>
    select{
        background: url('/assets/img/icons/chevron-down.svg') no-repeat calc(100% - 16px) 50%;
    }
</style>

<script setup lang="ts">

    const props = defineProps<{
        label: string,
        error?: string,
        modelValue?: string,
        placeholder: string,
        options: {label: string, value: string}[]
    }>();

    const inputFocused: Ref<boolean> = ref(false);

    const value = computed({
        get() {
          return props.modelValue
        },
        set(value: undefined | string) {
          emit('update:modelValue', value)
        }
    });
    
    const emit = defineEmits<{
        'update:modelValue': [value: undefined | string],
        '@select-change': [value: undefined | string]
    }>();

</script>