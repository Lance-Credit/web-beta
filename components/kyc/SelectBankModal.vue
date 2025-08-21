<template>
    <div @click.self="emit('@close-modal')" class="fixed z-20 top-0 left-0 w-screen h-screen bg-lance-black-70 backdrop-blur-[2px] flex justify-center items-center">
        <div class="bg-white h-full sm:h-auto w-full sm:w-[466px] p-10 sm:rounded-3xl">
            <div class="h-[calc(100%-78px)] sm:h-auto flex flex-col gap-6 justify-between sm:justify-normal">
                <div class="flex flex-col gap-6">
                    <div class="flex items-center">
                        <svg @click="emit('@close-modal')" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="sm:hidden">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3333 17.5002C13.12 17.5002 12.9067 17.4185 12.7442 17.256L6.0775 10.5894C5.75167 10.2635 5.75167 9.73687 6.0775 9.41104L12.7442 2.74437C13.07 2.41854 13.5967 2.41854 13.9225 2.74437C14.2483 3.07021 14.2483 3.59687 13.9225 3.92271L7.845 10.0002L13.9225 16.0777C14.2483 16.4035 14.2483 16.9302 13.9225 17.256C13.76 17.4185 13.5467 17.5002 13.3333 17.5002" fill="#0A4F4D"/>
                        </svg>
                        <p class="text-lance-black font-medium text-xl leading-[26px] tracking-[-0.24px] mx-auto sm:mx-0">
                            Select your bank
                        </p>
                    </div>
                    <ul class="text-lance-black text-sm leading-[20px] tracking-[-0.14px] flex flex-col gap-4 max-h-[484px] overflow-scroll">
                        <li
                            v-for="bankChoice in bankChoiceArray" :key="bankChoice.id"
                            @click="selectedBankChoice = bankChoice"
                            class="p-4 rounded-lg border border-solid flex items-center justify-between cursor-pointer"
                            :class="(selectedBankChoice && (selectedBankChoice.id == bankChoice.id)) ? 'border-lance-green bg-lance-green-5' : 'border-lance-black-10 bg-white'"
                        >
                            <div class="flex gap-3 items-center">
                                <div class="w-10 h-10 rounded-full flex items-center justify-center">
                                    <img :src="bankChoice.logo" alt="">
                                </div>
                                <p>{{ bankChoice.name }}</p>
                            </div>
                            <div
                                class="rounded-full border-solid border-lance-green flex items-center justify-center"
                                :class="(selectedBankChoice && (selectedBankChoice.id == bankChoice.id)) ? 'w-[23.333px] h-[23.333px] border-[1.75px] bg-[#ECFF4D]' : 'w-5 h-5 border-[1.5px] bg-white'"
                            >
                                <svg v-if="(selectedBankChoice && (selectedBankChoice.id == bankChoice.id))" xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.28231 7.31015C4.05948 7.31015 3.83431 7.22498 3.66398 7.05348L0.894314 4.28498C0.552481 3.94315 0.552481 3.39015 0.894314 3.04831C1.23615 2.70648 1.78915 2.70648 2.13098 3.04831L4.28231 5.19731L9.20098 0.279813C9.54282 -0.0620209 10.0958 -0.0620209 10.4376 0.279813C10.7795 0.621646 10.7795 1.17465 10.4376 1.51648L4.90065 7.05348C4.73031 7.22498 4.50631 7.31015 4.28231 7.31015Z" fill="#0A4F4D"/>
                                </svg>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="flex items-center gap-6">
                    <button @click="emit('@close-modal')" class="btn btn-tertiary w-full">Back</button>
                    <button @click="continueMonoKyc" class="mb-6 btn w-full btn-primary" :class="{'loading' : continuingMonoKyc}" :disabled="!selectedBankChoice || continuingMonoKyc">
                        <span v-show="!continuingMonoKyc">Continue</span>
                        <Loader-Basic v-show="continuingMonoKyc" bg="#FFF" fg="#C3E48E" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    defineProps<{
        bankChoiceArray: any
    }>()
    
    const { apiFetch } = useApiFetch();

    const selectedBankChoice: Ref<{
        id: string,
        name: string,
        logo: string
    } | null> = ref(null);

    const continuingMonoKyc: Ref<boolean> = ref(false);

    async function continueMonoKyc(){
        if(selectedBankChoice.value) {
            continuingMonoKyc.value = true;

            const result = await apiFetch(`accounts/link?institutionId=${selectedBankChoice.value.id}`);
        
            if((result as any).success && !(result as any).error){
                
                navigateTo(
                    (result as any).data.link,
                    {
                        external: true
                    }
                );
            } else {
                continuingMonoKyc.value = false;
            }
        }
    }

    const emit = defineEmits<{
        '@close-modal': []
    }>();
</script>