<template>
    <div @click.self="emit('@close-community-code-details-modal')" class="fixed z-20 top-0 left-0 w-screen h-screen bg-lance-black-70 backdrop-blur-[2px] flex justify-center items-center">
        <div class="bg-white w-[466px] p-10 rounded-3xl flex flex-col gap-6">
            <p class="text-lance-black font-medium text-xl leading-[26px] tracking-[-0.24px]">Your Code</p>
            <div class="text-center py-6 rounded-lg bg-lance-green-5 border border-solid border-lance-green">
                <p class="text-lance-black text-[40px] leading-[26px] font-aventa font-black">{{ code?.code }}</p>
            </div>
            <div class="text-sm">
                <p class="text-lance-black-50">Share Via</p>
                <ul class="flex items-center justify-between py-4 px-8">
                    <li @click="copyCode" class="flex flex-col items-center cursor-pointer">
                        <div class="w-10 h-10 rounded-full bg-lance-green-5 flex items-center justify-center">
                            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7767 11.9645C10.1077 11.9645 9.44073 11.7435 8.88273 11.3015L4.39773 7.6855C4.07473 7.4255 4.02473 6.9525 4.28373 6.6305C4.54473 6.3095 5.01673 6.2585 5.33873 6.5175L9.81973 10.1295C10.3827 10.5755 11.1757 10.5755 11.7427 10.1255L16.1787 6.5195C16.5007 6.2565 16.9727 6.3065 17.2347 6.6285C17.4957 6.9495 17.4467 7.4215 17.1257 7.6835L12.6817 11.2955C12.1197 11.7415 11.4477 11.9645 10.7767 11.9645Z" fill="black"/>
                                <mask id="mask0_6151_8568" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="20">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5H21.4999V20H0V0.5Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask0_6151_8568)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.839 18.5H15.659C15.661 18.498 15.669 18.5 15.675 18.5C16.816 18.5 17.828 18.092 18.604 17.317C19.505 16.42 20 15.131 20 13.688V6.82C20 4.027 18.174 2 15.659 2H5.841C3.326 2 1.5 4.027 1.5 6.82V13.688C1.5 15.131 1.996 16.42 2.896 17.317C3.672 18.092 4.685 18.5 5.825 18.5H5.839ZM5.822 20C4.279 20 2.901 19.44 1.837 18.38C0.652 17.198 0 15.532 0 13.688V6.82C0 3.217 2.511 0.5 5.841 0.5H15.659C18.989 0.5 21.5 3.217 21.5 6.82V13.688C21.5 15.532 20.848 17.198 19.663 18.38C18.6 19.439 17.221 20 15.675 20H15.659H5.841H5.822Z" fill="black"/>
                                </g>
                            </svg>
                        </div>
                        <p class="text-lance-black">Copy Code</p>
                    </li>
                    <li>
                        <NuxtLink :to="`https://wa.me/?text=Your Lance Community Code is: ${code?.code}`" class="flex flex-col items-center cursor-pointer" target="_blank" >
                            <div class="w-10 h-10 rounded-full bg-lance-green-5 flex items-center justify-center">
                                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7767 11.9645C10.1077 11.9645 9.44073 11.7435 8.88273 11.3015L4.39773 7.6855C4.07473 7.4255 4.02473 6.9525 4.28373 6.6305C4.54473 6.3095 5.01673 6.2585 5.33873 6.5175L9.81973 10.1295C10.3827 10.5755 11.1757 10.5755 11.7427 10.1255L16.1787 6.5195C16.5007 6.2565 16.9727 6.3065 17.2347 6.6285C17.4957 6.9495 17.4467 7.4215 17.1257 7.6835L12.6817 11.2955C12.1197 11.7415 11.4477 11.9645 10.7767 11.9645Z" fill="black"/>
                                    <mask id="mask0_6151_8568" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="20">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5H21.4999V20H0V0.5Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_6151_8568)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.839 18.5H15.659C15.661 18.498 15.669 18.5 15.675 18.5C16.816 18.5 17.828 18.092 18.604 17.317C19.505 16.42 20 15.131 20 13.688V6.82C20 4.027 18.174 2 15.659 2H5.841C3.326 2 1.5 4.027 1.5 6.82V13.688C1.5 15.131 1.996 16.42 2.896 17.317C3.672 18.092 4.685 18.5 5.825 18.5H5.839ZM5.822 20C4.279 20 2.901 19.44 1.837 18.38C0.652 17.198 0 15.532 0 13.688V6.82C0 3.217 2.511 0.5 5.841 0.5H15.659C18.989 0.5 21.5 3.217 21.5 6.82V13.688C21.5 15.532 20.848 17.198 19.663 18.38C18.6 19.439 17.221 20 15.675 20H15.659H5.841H5.822Z" fill="black"/>
                                    </g>
                                </svg>
                            </div>
                            <p class="text-lance-black">Whatsapp</p>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="`mailto:?subject=Lance%20Community%20Code&body=${code?.code}`" class="flex flex-col items-center cursor-pointer">
                            <div class="w-10 h-10 rounded-full bg-lance-green-5 flex items-center justify-center">
                                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7767 11.9645C10.1077 11.9645 9.44073 11.7435 8.88273 11.3015L4.39773 7.6855C4.07473 7.4255 4.02473 6.9525 4.28373 6.6305C4.54473 6.3095 5.01673 6.2585 5.33873 6.5175L9.81973 10.1295C10.3827 10.5755 11.1757 10.5755 11.7427 10.1255L16.1787 6.5195C16.5007 6.2565 16.9727 6.3065 17.2347 6.6285C17.4957 6.9495 17.4467 7.4215 17.1257 7.6835L12.6817 11.2955C12.1197 11.7415 11.4477 11.9645 10.7767 11.9645Z" fill="black"/>
                                    <mask id="mask0_6151_8568" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="20">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5H21.4999V20H0V0.5Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_6151_8568)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.839 18.5H15.659C15.661 18.498 15.669 18.5 15.675 18.5C16.816 18.5 17.828 18.092 18.604 17.317C19.505 16.42 20 15.131 20 13.688V6.82C20 4.027 18.174 2 15.659 2H5.841C3.326 2 1.5 4.027 1.5 6.82V13.688C1.5 15.131 1.996 16.42 2.896 17.317C3.672 18.092 4.685 18.5 5.825 18.5H5.839ZM5.822 20C4.279 20 2.901 19.44 1.837 18.38C0.652 17.198 0 15.532 0 13.688V6.82C0 3.217 2.511 0.5 5.841 0.5H15.659C18.989 0.5 21.5 3.217 21.5 6.82V13.688C21.5 15.532 20.848 17.198 19.663 18.38C18.6 19.439 17.221 20 15.675 20H15.659H5.841H5.822Z" fill="black"/>
                                    </g>
                                </svg>
                            </div>
                            <p class="text-lance-black">Email</p>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div>
                <p v-show="communityCodeCopied" class="mb-2 py-2 px-4 text-center text-[#272E2E] text-sm leading-6 rounded-[4px] border border-solid border-[#DAE0E0] bg-[#FAFCFC]">
                    Copied to clipboard
                </p>
                <button @click="emit('@close-community-code-details-modal')" class="btn btn-primary w-full">Close</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    const props = defineProps<{
        code: CommunityCode | null
    }>();

    function copyCode(){
        const text = props.code?.code || '';
        navigator.clipboard.writeText(text);
        showCommunityCodeCopied();
    }

    const communityCodeCopied:Ref <boolean> = ref(false);

    function showCommunityCodeCopied() {
        communityCodeCopied.value = true;
        setTimeout(()=> communityCodeCopied.value = false, 5000);
    }

    const emit = defineEmits<{
        '@close-community-code-details-modal' : []
    }>();

</script>