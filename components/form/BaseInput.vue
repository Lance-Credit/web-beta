<template>
    <div>
        <div
            class="flex h-[65px] justify-center flex-col border border-solid py-2 px-4 rounded border-[rgba(4,17,17,0.10)]"
            :class="[
                error ? 'border-[#E70A3F]' : '',
                inputFocused ? 'border-lance-green' : '',
                disabled ? 'bg-lance-green-5 border-none' : 'bg-white border-[rgba(4,17,17,0.10)]'
            ]"   
        >
            <label
                v-show="value" for="" class="mb-0.5 text-[13px] leading-[20.8px]"
                :class="[error ? 'text-[#E70A3F]' : '', disabled ? 'text-lance-black-50' : 'text-lance-black']"
            >
                {{ label }}
            </label>
            <input
                :disabled="disabled" :type="type" :placeholder="placeholder" v-model="value"
                @focusin="inputFocused = true" @focusout="inputFocused = false"
                class="text-lance-black outline-none font-gelion font-normal text-base"
            >
        </div>
        <p class="text-[#E70A3F] text-xs">{{ error }}</p>
    </div>
</template>

<style scoped>

 input:disabled {
    background: none;
 }
 
</style>

<script setup lang="ts">

    const props = withDefaults(
        defineProps<{
            label: string,
            type?: string,
            error?: string,
            disabled?: boolean,
            modelValue?: string,
            placeholder?: string
        }>(),
        {
            type: 'text'
        }
    );

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
        'update:modelValue': [value: undefined | string]
    }>();

</script>