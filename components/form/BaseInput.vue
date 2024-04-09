<template>
    <div>
        <div class="flex h-[65px] justify-center flex-col bg-white border border-solid py-2 px-4 rounded" :class="[error ? 'border-[#E70A3F]' : 'border-[rgba(4,17,17,0.10)]', inputFocused ? 'border-lance-green' : '']">
            <label v-if="value" for="" class="mb-0.5 text-[13px] leading-[20.8px]" :class="[error ? 'text-[#E70A3F]' : 'text-lance-black']">
                {{ label }}
            </label>
            <input
                :disabled="disabled" @focusin="inputFocused = true" @focusout="inputFocused = false"
                :type="type" :placeholder="placeholder" v-model="value"
                class="text-lance-black outline-none font-gelion font-normal text-base"
            >
        </div>
        <p class="text-[#E70A3F] text-xs">{{ error }}</p>
    </div>
</template>

<script setup lang="ts">

    const props = withDefaults(
        defineProps<{
            label: string,
            type?: string,
            error?: string,
            disabled?: boolean,
            modelValue?: string,
            placeholder: string
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
        set(value) {
          emit('update:modelValue', value)
        }
    });

    const emit = defineEmits(['update:modelValue']);

</script>