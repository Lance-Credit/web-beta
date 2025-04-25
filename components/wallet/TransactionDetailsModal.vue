<template>
    <div @click.self="emit('@close-transaction-details-modal')" class="fixed z-20 top-0 left-0 w-screen h-full sm:h-screen bg-lance-black-70 backdrop-blur-[2px] flex justify-end">
        <div class="bg-white w-full sm:w-[581px] sm:h-full">
            <div @click="emit('@close-transaction-details-modal')" class="py-[26px] px-4 sm:p-10 flex gap-4 items-center sm:border-b border-solid border-[rgba(10,79,77,0.10)] cursor-pointer">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.25 12.2744C20.25 12.6541 19.9678 12.9679 19.6018 13.0176L19.5 13.0244L4.5 13.0244C4.08579 13.0244 3.75 12.6886 3.75 12.2744C3.75 11.8947 4.03215 11.5809 4.39823 11.5313L4.5 11.5244L19.5 11.5244C19.9142 11.5244 20.25 11.8602 20.25 12.2744Z" fill="#041111" fill-opacity="0.5"/>
                    <path d="M11.079 17.7675C11.3725 18.0598 11.3735 18.5347 11.0813 18.8282C10.8156 19.095 10.399 19.1201 10.1049 18.9029L10.0206 18.8305L3.97062 12.8065C3.70298 12.54 3.67863 12.1219 3.89759 11.8278L3.97057 11.7436L10.0206 5.71857C10.3141 5.42629 10.7889 5.42727 11.0812 5.72077C11.3469 5.98759 11.3703 6.4043 11.1518 6.69746L11.079 6.78143L5.563 12.2753L11.079 17.7675Z" fill="#041111" fill-opacity="0.5"/>
                </svg>
                <p class="text-lance-black text-xl leading-[26px] font-medium tracking-[-0.2px] mx-auto sm:mx-0">
                    Transaction Details
                </p>
            </div>
            <div class="pt-0 sm:py-6 px-6 sm:px-10">
                <div class="sm:pb-6 text-center flex flex-col gap-2 items-center justify-center sm:border-b border-solid border-[rgba(10,79,77,0.10)]">
                    <p class="text-lance-black-50 text-sm sm:hidden">Amount</p>
                    <div class="flex flex-rom sm:flex-col gap-2 items-center justify-center">
                        <div class="flex items-center justify-center w-11 h-11 rounded-full bg-[rgba(10,79,77,0.05)]">
                            <svg v-if="transaction?.txnType == 'credit'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8333 4.16634C10.8333 3.7061 10.4602 3.33301 9.99998 3.33301C9.53974 3.33301 9.16665 3.7061 9.16665 4.16634V9.16634H4.16665C3.70641 9.16634 3.33331 9.53944 3.33331 9.99967C3.33331 10.4599 3.70641 10.833 4.16665 10.833H9.16665V15.833C9.16665 16.2932 9.53974 16.6663 9.99998 16.6663C10.4602 16.6663 10.8333 16.2932 10.8333 15.833V10.833H15.8333C16.2936 10.833 16.6666 10.4599 16.6666 9.99967C16.6666 9.53944 16.2936 9.16634 15.8333 9.16634H10.8333V4.16634Z" fill="#0A4F4D"/>
                            </svg>
                            <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.16665 9.16699H4.16665C3.70641 9.16699 3.33331 9.54009 3.33331 10.0003C3.33331 10.4606 3.70641 10.8337 4.16665 10.8337H9.16665L10.8333 10.8337H15.8333C16.2936 10.8337 16.6666 10.4606 16.6666 10.0003C16.6666 9.54009 16.2936 9.16699 15.8333 9.16699H10.8333H9.16665Z" fill="#E70A3F"/>
                            </svg>
                        </div>
                        <div>
                            <p class="text-lance-black-50 text-sm hidden sm:block">Amount</p>
                            <p class="mt-[-4px] text-lance-black text-[28px] font-bold leading-[34px] tracking-[0.28px]">{{ transaction ? (transaction.amount / 100).toLocaleString() : 0 }}</p>
                        </div>
                    </div>
                    <div class="py-1 px-6 rounded-[31px]" :class="transaction?.txnType == 'credit' ? 'bg-lance-green-5' : 'bg-[rgba(93,36,45,0.05)]'">
                        <p class="text-[13px] sm:text-sm leading-[24px]" :class="transaction?.txnType == 'credit' ? 'text-lance-green' : 'text-[#5D242D]'">
                            <span>
                                {{ transaction?.txnTypeForUi }}
                            </span>
                        </p>
                    </div>
                </div>
                <p v-show="transactionReferenceCopied" class="my-2 py-2 px-4 text-center text-[#272E2E] text-sm leading-6 rounded-[4px] border border-solid border-[#DAE0E0] bg-[#FAFCFC]">
                    Copied to clipboard
                </p>
                <div class="mt-6 py-3.5 px-4 sm:p-6 rounded-2xl bg-lance-black-5">
                    <ul class="tracking-[-0.16px] border-solid">
                        <li class="flex gap-2 pb-[18px] border-b border-[rgba(10,79,77,0.05)] text-sm sm:text-base leading-6 tracking-[-0.14px]">
                            <span class="text-lance-black-50 w-36">Processor:</span>
                            <span class="text-[#1E1721] w-[calc(100%-144px)]">
                                {{ `${transaction?.metadata.processor[0].toUpperCase()}${transaction?.metadata.processor.substring(1)}` }}
                            </span>
                        </li>
                        <li class="flex gap-2 pb-[18px] border-b border-[rgba(10,79,77,0.05)] text-sm sm:text-base leading-6 tracking-[-0.14px]">
                            <span class="text-lance-black-50 w-36">Processor Reference:</span>
                            <span class="text-[#1E1721] w-[calc(100%-144px)]">{{ transaction?.metadata.processorReference }}</span>
                        </li>

                        <li class="flex gap-2 pb-[18px] border-b border-[rgba(10,79,77,0.05)] text-sm sm:text-base leading-6 tracking-[-0.14px]">
                            <span class="text-lance-black-50 w-36">Transaction Date:</span>
                            <span class="text-[#1E1721] w-[calc(100%-144px)]">{{ transaction ? new Date(transaction.createdAt).toLocaleDateString('en-GB', { day:"numeric", month:"long", year:"numeric" }) : '' }}</span>
                        </li>
                        <li class="flex gap-2 pb-[18px] border-b border-[rgba(10,79,77,0.05)] text-sm sm:text-base leading-6 tracking-[-0.14px]">
                            <span class="text-lance-black-50 w-36">Transaction Ref.:</span>
                            <p class="text-[#1E1721] flex items-center justify-between w-[calc(100%-144px)]">
                                <span>{{ transaction?.reference }}</span>
                                <svg @click="copyTransactionReference" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
                                    <path d="M17.4917 2.5087L17.8453 2.15515L17.4917 2.5087C17.7105 2.72749 17.8334 3.02424 17.8334 3.33366V11.667C17.8334 11.9764 17.7105 12.2732 17.4917 12.4919C17.2729 12.7107 16.9762 12.8337 16.6667 12.8337H15.5001V6.66699C15.5001 6.09236 15.2718 5.54126 14.8655 5.13493L14.5119 5.48848L14.8655 5.13493C14.4591 4.7286 13.9081 4.50033 13.3334 4.50033H7.16675V3.33366C7.16675 3.02424 7.28966 2.72749 7.50846 2.5087C7.72725 2.28991 8.024 2.16699 8.33341 2.16699H16.6667C16.9762 2.16699 17.2729 2.28991 17.4917 2.5087ZM3.33341 7.16699H11.6667C12.3098 7.16699 12.8334 7.69063 12.8334 8.33366V16.667C12.8334 17.31 12.3098 17.8337 11.6667 17.8337H3.33341C2.69039 17.8337 2.16675 17.31 2.16675 16.667V8.33366C2.16675 7.69063 2.69039 7.16699 3.33341 7.16699Z" stroke="#041111" stroke-opacity="0.5" stroke-linejoin="round"/>
                                </svg>
                            </p>
                        </li>
                        <li class="flex gap-2 pb-[18px] border-b border-[rgba(10,79,77,0.05)] text-sm sm:text-base leading-6 tracking-[-0.14px]">
                            <span class="text-lance-black-50 w-36">Description:</span>
                            <span class="text-[#1E1721] w-[calc(100%-144px)]">{{ transaction?.metadata.description }}</span>
                        </li>
                        <li class="flex gap-2 pb-[18px] text-sm sm:text-base leading-6 tracking-[-0.14px]">
                            <span class="text-lance-black-50 w-36">Date & Time:</span>
                            <span class="text-[#1E1721] w-[calc(100%-144px)]">
                                {{ transaction ? new Date(transaction.createdAt).toLocaleDateString('en-GB', { day:"numeric", month:"long", year:"numeric" }) : '' }} | 
                                {{ transaction ? new Date(transaction.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true }) : '' }}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    const props = defineProps<{
        transaction: null | Transaction
    }>();
    
    function copyTransactionReference(){
        const text = props.transaction?.reference || '';
        navigator.clipboard.writeText(text);
        showTransactionReferenceCopied();
    }

    const transactionReferenceCopied:Ref <boolean> = ref(false);

    function showTransactionReferenceCopied() {
        transactionReferenceCopied.value = true;
        setTimeout(()=> transactionReferenceCopied.value = false, 5000);
    }

    const emit = defineEmits<{
        '@close-transaction-details-modal': []
    }>();
</script>