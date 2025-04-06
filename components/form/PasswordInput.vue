<template>
    <div>
        <div class="flex h-[65px] justify-center relative flex-col bg-white border border-solid py-2 px-4 rounded" :class="[error ? 'border-[#E70A3F]' : 'border-[rgba(4,17,17,0.10)]', inputFocused ? 'border-lance-green' : '']">
            <label v-if="value" for="" class="mb-0.5 text-xs sm:text-[13px] leading-[19.2px] sm:leading-[20.8px]" :class="[error ? 'text-[#E70A3F]' : 'text-lance-black']">
                {{ label }}
            </label>
            <input
                :type="showPassword ? 'text' : 'password'" :placeholder="placeholder" v-model="value"
                @focusin="inputFocused = true" @focusout="inputFocused = false"
                class="text-lance-black outline-none font-gelion font-normal text-sm sm:text-base leading-[21px] sm:leading-6"
            >
            <div @click="showPassword = !showPassword" class="absolute right-[16px] top-0 h-full flex flex-col justify-center cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.00009 10C9.10466 10 10.0001 9.10457 10.0001 8C10.0001 6.89543 9.10466 6 8.00009 6C6.89552 6 6.00009 6.89543 6.00009 8C6.00009 9.10457 6.89552 10 8.00009 10Z" fill="#041111" fill-opacity="0.2"/>
                    <path d="M15.3389 7.45625C14.512 6.1775 13.4392 5.09125 12.2367 4.31469C10.9064 3.45469 9.43763 3 7.98951 3C6.66076 3 5.3542 3.37969 4.10607 4.12844C2.83326 4.89188 1.68013 6.00719 0.678572 7.44312C0.565505 7.60541 0.503235 7.79764 0.499673 7.9954C0.496112 8.19315 0.551421 8.3875 0.658572 8.55375C1.48388 9.84531 2.54607 10.9331 3.72982 11.6991C5.06263 12.5625 6.49701 13 7.98951 13C9.4492 13 10.9211 12.5491 12.2458 11.6962C13.4476 10.9222 14.5183 9.83187 15.342 8.5425C15.4455 8.38012 15.5002 8.19146 15.4996 7.99892C15.4991 7.80638 15.4433 7.61804 15.3389 7.45625ZM8.00013 11C7.40679 11 6.82677 10.8241 6.33342 10.4944C5.84008 10.1648 5.45556 9.69623 5.2285 9.14805C5.00143 8.59987 4.94202 7.99667 5.05778 7.41473C5.17353 6.83279 5.45926 6.29824 5.87881 5.87868C6.29837 5.45912 6.83292 5.1734 7.41486 5.05764C7.99681 4.94189 8.60001 5.0013 9.14818 5.22836C9.69636 5.45542 10.1649 5.83994 10.4945 6.33329C10.8242 6.82664 11.0001 7.40666 11.0001 8C10.9992 8.79537 10.6829 9.5579 10.1205 10.1203C9.55804 10.6827 8.7955 10.9991 8.00013 11Z" fill="#041111" fill-opacity="0.2"/>
                </svg>
            </div>
        </div>
        <p class="text-[#E70A3F] text-xs">{{ error }}</p>
    </div>
</template>

<script setup lang="ts">

    const showPassword: Ref<boolean> = ref(false);

    const props = withDefaults(
        defineProps<{
            label: string,
            error?: string,
            modelValue?: string,
            placeholder?: string
        }>(),
        {
            placeholder: '**************'
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