<template>
    <div @click.self="emit('@close-kyc-summary-modal')" class="fixed z-20 top-0 left-0 w-screen h-screen bg-lance-black-70 backdrop-blur-[2px] flex justify-center items-center">
        <div class="bg-white h-full sm:h-auto w-full sm:w-[466px] p-10 sm:rounded-3xl">
            <div class="h-[calc(100%-78px)] sm:h-auto flex flex-col gap-6 justify-between sm:justify-normal">
                <div class="flex flex-col gap-6">
                    <div class="flex items-center">
                        <svg @click="emit('@close-kyc-summary-modal')" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="sm:hidden">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3333 17.5002C13.12 17.5002 12.9067 17.4185 12.7442 17.256L6.0775 10.5894C5.75167 10.2635 5.75167 9.73687 6.0775 9.41104L12.7442 2.74437C13.07 2.41854 13.5967 2.41854 13.9225 2.74437C14.2483 3.07021 14.2483 3.59687 13.9225 3.92271L7.845 10.0002L13.9225 16.0777C14.2483 16.4035 14.2483 16.9302 13.9225 17.256C13.76 17.4185 13.5467 17.5002 13.3333 17.5002" fill="#0A4F4D"/>
                        </svg>
                        <p class="text-lance-black font-medium text-xl leading-[26px] tracking-[-0.24px] mx-auto sm:mx-0">
                            KYC Processes
                        </p>
                    </div>
                    <ul class="text-lance-black text-sm leading-[20px] tracking-[-0.14px] flex flex-col gap-4">
                        <li 
                            class="p-4 rounded-lg border border-solid flex items-center justify-between"
                            :class="kycItems.account.completed ? 'border-lance-green bg-lance-green-5' : 'border-lance-black-10 bg-white'"
                        >
                            <div class="flex gap-3 items-center">
                                <div
                                    class="w-10 h-10 rounded-full flex items-center justify-center"
                                    :class="kycItems.account.completed ? 'bg-lance-green' : 'bg-lance-green-10'"
                                >
                                    <svg v-if="!kycItems.account.completed" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.85128 7.9765C7.40528 7.9765 6.96061 7.82916 6.58861 7.5345L3.59861 5.12383C3.38328 4.9505 3.34994 4.63516 3.52261 4.4205C3.69661 4.2065 4.01128 4.1725 4.22594 4.34516L7.21328 6.75316C7.58861 7.0505 8.11728 7.0505 8.49528 6.7505L11.4526 4.3465C11.6673 4.17116 11.9819 4.2045 12.1566 4.41916C12.3306 4.63316 12.2979 4.94783 12.0839 5.1225L9.12128 7.5305C8.74661 7.82783 8.29861 7.9765 7.85128 7.9765Z" fill="black"/>
                                        <mask id="mask0_7493_10256" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="15" height="14">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666626 0.333496H14.9999V13.3335H0.666626V0.333496Z" fill="white"/>
                                        </mask>
                                        <g mask="url(#mask0_7493_10256)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.55925 12.3333H11.1059C11.1073 12.332 11.1126 12.3333 11.1166 12.3333C11.8773 12.3333 12.5519 12.0613 13.0693 11.5447C13.6699 10.9467 13.9999 10.0873 13.9999 9.12533V4.54667C13.9999 2.68467 12.7826 1.33333 11.1059 1.33333H4.56059C2.88392 1.33333 1.66659 2.68467 1.66659 4.54667V9.12533C1.66659 10.0873 1.99725 10.9467 2.59725 11.5447C3.11459 12.0613 3.78992 12.3333 4.54992 12.3333H4.55925ZM4.54784 13.3335C3.51917 13.3335 2.6005 12.9602 1.89117 12.2535C1.10117 11.4655 0.666504 10.3548 0.666504 9.1255V4.54683C0.666504 2.14483 2.3405 0.333496 4.5605 0.333496H11.1058C13.3258 0.333496 14.9998 2.14483 14.9998 4.54683V9.1255C14.9998 10.3548 14.5652 11.4655 13.7752 12.2535C13.0665 12.9595 12.1472 13.3335 11.1165 13.3335H11.1058H4.5605H4.54784Z" fill="black"/>
                                        </g>
                                    </svg>
                                    <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5 2H2.49996C2.01389 2.00051 1.54788 2.19064 1.20417 2.52866C0.860467 2.86668 0.667146 3.32499 0.666626 3.80303V11.5303C0.667146 12.0083 0.860467 12.4667 1.20417 12.8047C1.54788 13.1427 2.01389 13.3328 2.49996 13.3333H13.5C13.986 13.3328 14.452 13.1427 14.7957 12.8047C15.1395 12.4667 15.3328 12.0083 15.3333 11.5303V3.80303C15.3328 3.32499 15.1395 2.86668 14.7957 2.52866C14.452 2.19064 13.986 2.00051 13.5 2ZM13.0357 4.98241L8.32145 8.58847C8.22952 8.65875 8.1164 8.6969 7.99996 8.6969C7.88352 8.6969 7.7704 8.65875 7.67847 8.58847L2.96419 4.98241C2.9088 4.94127 2.86227 4.88972 2.82732 4.83074C2.79236 4.77177 2.76968 4.70655 2.76057 4.63888C2.75147 4.57121 2.75613 4.50244 2.77428 4.43655C2.79244 4.37067 2.82373 4.30899 2.86633 4.2551C2.90893 4.20121 2.962 4.15619 3.02245 4.12265C3.0829 4.0891 3.14953 4.06771 3.21846 4.05971C3.28739 4.05171 3.35725 4.05726 3.42397 4.07604C3.4907 4.09482 3.55297 4.12646 3.60716 4.16911L7.99996 7.52919L12.3928 4.16911C12.5026 4.08753 12.6407 4.05175 12.7771 4.06951C12.9136 4.08726 13.0375 4.15713 13.1219 4.264C13.2064 4.37087 13.2448 4.50615 13.2286 4.64059C13.2125 4.77503 13.1432 4.89782 13.0357 4.98241Z" fill="#ECFF4D"/>
                                    </svg>
                                </div>
                                <p>Account Verification</p>
                            </div>
                            <div
                                class="rounded-full border-solid border-lance-green flex items-center justify-center"
                                :class="kycItems.account.completed ? 'w-[23.333px] h-[23.333px] border-[1.75px] bg-[#ECFF4D]' : 'w-5 h-5 border-[1.5px] bg-white'"
                            >
                                <svg v-if="kycItems.account.completed" xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.28231 7.31015C4.05948 7.31015 3.83431 7.22498 3.66398 7.05348L0.894314 4.28498C0.552481 3.94315 0.552481 3.39015 0.894314 3.04831C1.23615 2.70648 1.78915 2.70648 2.13098 3.04831L4.28231 5.19731L9.20098 0.279813C9.54282 -0.0620209 10.0958 -0.0620209 10.4376 0.279813C10.7795 0.621646 10.7795 1.17465 10.4376 1.51648L4.90065 7.05348C4.73031 7.22498 4.50631 7.31015 4.28231 7.31015Z" fill="#0A4F4D"/>
                                </svg>
                            </div>
                        </li>
                        <li 
                            class="p-4 rounded-lg border border-solid flex items-center justify-between"
                            :class="kycItems.personalDetails.completed ? 'border-lance-green bg-lance-green-5' : 'border-lance-black-10 bg-white'"
                        >
                            <div class="flex gap-3 items-center">
                                <div
                                    class="w-10 h-10 rounded-full flex items-center justify-center"
                                    :class="kycItems.personalDetails.completed ? 'bg-lance-green' : 'bg-lance-green-10'"
                                >
                                    <svg v-if="!kycItems.personalDetails.completed" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99996 8.00016C9.84091 8.00016 11.3333 6.50778 11.3333 4.66683C11.3333 2.82588 9.84091 1.3335 7.99996 1.3335C6.15901 1.3335 4.66663 2.82588 4.66663 4.66683C4.66663 6.50778 6.15901 8.00016 7.99996 8.00016Z" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M13.7266 14.6667C13.7266 12.0867 11.16 10 7.99998 10C4.83998 10 2.27332 12.0867 2.27332 14.6667" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99996 8.00016C9.84091 8.00016 11.3333 6.50778 11.3333 4.66683C11.3333 2.82588 9.84091 1.3335 7.99996 1.3335C6.15901 1.3335 4.66663 2.82588 4.66663 4.66683C4.66663 6.50778 6.15901 8.00016 7.99996 8.00016Z" stroke="#101010" stroke-linecap="round" stroke-linejoin="round" fill="#ECFF4D"/>
                                        <path d="M13.7266 14.6667C13.7266 12.0867 11.16 10 7.99998 10C4.83998 10 2.27332 12.0867 2.27332 14.6667" stroke="#101010" stroke-linecap="round" stroke-linejoin="round" fill="#ECFF4D"/>
                                    </svg>
                                </div>
                                <p>Personal Details</p>
                            </div>
                            <div
                                class="rounded-full border-solid border-lance-green flex items-center justify-center"
                                :class="kycItems.personalDetails.completed ? 'w-[23.333px] h-[23.333px] border-[1.75px] bg-[#ECFF4D]' : 'w-5 h-5 border-[1.5px] bg-white'"
                            >
                                <svg v-if="kycItems.personalDetails.completed" xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.28231 7.31015C4.05948 7.31015 3.83431 7.22498 3.66398 7.05348L0.894314 4.28498C0.552481 3.94315 0.552481 3.39015 0.894314 3.04831C1.23615 2.70648 1.78915 2.70648 2.13098 3.04831L4.28231 5.19731L9.20098 0.279813C9.54282 -0.0620209 10.0958 -0.0620209 10.4376 0.279813C10.7795 0.621646 10.7795 1.17465 10.4376 1.51648L4.90065 7.05348C4.73031 7.22498 4.50631 7.31015 4.28231 7.31015Z" fill="#0A4F4D"/>
                                </svg>
                            </div>
                        </li>
                        <li 
                            class="p-4 rounded-lg border border-solid flex items-center justify-between"
                            :class="kycItems.kyc.completed ? 'border-lance-green bg-lance-green-5' : 'border-lance-black-10 bg-white'"
                        >
                            <div class="flex gap-3 items-center">
                                <div
                                    class="w-10 h-10 rounded-full flex items-center justify-center"
                                    :class="kycItems.kyc.completed ? 'bg-lance-green' : 'bg-lance-green-10'"
                                >
                                    <svg v-if="!kycItems.kyc.completed" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.99344 1.48654L3.66677 2.73988C2.9001 3.02654 2.27344 3.93321 2.27344 4.74654V9.69988C2.27344 10.4865 2.79344 11.5199 3.42677 11.9932L6.29344 14.1332C7.23344 14.8399 8.7801 14.8399 9.7201 14.1332L12.5868 11.9932C13.2201 11.5199 13.7401 10.4865 13.7401 9.69988V4.74654C13.7401 3.92654 13.1134 3.01988 12.3468 2.73321L9.0201 1.48654C8.45344 1.27988 7.54677 1.27988 6.99344 1.48654Z" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6.0332 7.91296L7.10654 8.9863L9.9732 6.11963" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.99344 1.48654L3.66677 2.73988C2.9001 3.02654 2.27344 3.93321 2.27344 4.74654V9.69988C2.27344 10.4865 2.79344 11.5199 3.42677 11.9932L6.29344 14.1332C7.23344 14.8399 8.7801 14.8399 9.7201 14.1332L12.5868 11.9932C13.2201 11.5199 13.7401 10.4865 13.7401 9.69988V4.74654C13.7401 3.92654 13.1134 3.01988 12.3468 2.73321L9.0201 1.48654C8.45344 1.27988 7.54677 1.27988 6.99344 1.48654Z" stroke="#101010" stroke-linecap="round" stroke-linejoin="round" fill="#ECFF4D"/>
                                        <path d="M6.0332 7.91296L7.10654 8.9863L9.9732 6.11963" stroke="#101010" stroke-linecap="round" stroke-linejoin="round" fill="#ECFF4D"/>
                                    </svg>
                                </div>
                                <p>BVN & NIN Verification</p>
                            </div>
                            <div
                                class="rounded-full border-solid border-lance-green flex items-center justify-center"
                                :class="kycItems.kyc.completed ? 'w-[23.333px] h-[23.333px] border-[1.75px] bg-[#ECFF4D]' : 'w-5 h-5 border-[1.5px] bg-white'"
                            >
                                <svg v-if="kycItems.kyc.completed" xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.28231 7.31015C4.05948 7.31015 3.83431 7.22498 3.66398 7.05348L0.894314 4.28498C0.552481 3.94315 0.552481 3.39015 0.894314 3.04831C1.23615 2.70648 1.78915 2.70648 2.13098 3.04831L4.28231 5.19731L9.20098 0.279813C9.54282 -0.0620209 10.0958 -0.0620209 10.4376 0.279813C10.7795 0.621646 10.7795 1.17465 10.4376 1.51648L4.90065 7.05348C4.73031 7.22498 4.50631 7.31015 4.28231 7.31015Z" fill="#0A4F4D"/>
                                </svg>
                            </div>
                        </li>
                        <li 
                            class="p-4 rounded-lg border border-solid flex items-center justify-between"
                            :class="kycItems.id.completed ? 'border-lance-green bg-lance-green-5' : 'border-lance-black-10 bg-white'"
                        >
                            <div class="flex gap-3 items-center">
                                <div
                                    class="w-10 h-10 rounded-full flex items-center justify-center"
                                    :class="kycItems.id.completed ? 'bg-lance-green' : 'bg-lance-green-10'"
                                >
                                    <svg v-if="!kycItems.id.completed" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.99343 1.48654L3.66677 2.73321C2.9001 3.01987 2.27344 3.92653 2.27344 4.74653V9.69986C2.27344 10.4865 2.79344 11.5199 3.42678 11.9932L6.29344 14.1332C7.23344 14.8399 8.78009 14.8399 9.72009 14.1332L12.5868 11.9932C13.2201 11.5199 13.7401 10.4865 13.7401 9.69986V4.74653C13.7401 3.92653 13.1134 3.01987 12.3468 2.73321L9.0201 1.48654C8.45343 1.27988 7.54676 1.27988 6.99343 1.48654Z" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M7.99996 7.28027C7.97329 7.28027 7.93996 7.28027 7.91329 7.28027C7.28662 7.26027 6.78662 6.74027 6.78662 6.10693C6.78662 5.46027 7.31329 4.93359 7.95996 4.93359C8.60663 4.93359 9.1333 5.46027 9.1333 6.10693C9.12663 6.74693 8.62663 7.26027 7.99996 7.28027Z" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6.67336 9.14674C6.03336 9.5734 6.03336 10.2734 6.67336 10.7001C7.40003 11.1867 8.59336 11.1867 9.32003 10.7001C9.96003 10.2734 9.96003 9.5734 9.32003 9.14674C8.60003 8.66007 7.40669 8.66007 6.67336 9.14674Z" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.99343 1.48654L3.66677 2.73321C2.9001 3.01987 2.27344 3.92653 2.27344 4.74653V9.69986C2.27344 10.4865 2.79344 11.5199 3.42678 11.9932L6.29344 14.1332C7.23344 14.8399 8.78009 14.8399 9.72009 14.1332L12.5868 11.9932C13.2201 11.5199 13.7401 10.4865 13.7401 9.69986V4.74653C13.7401 3.92653 13.1134 3.01987 12.3468 2.73321L9.0201 1.48654C8.45343 1.27988 7.54676 1.27988 6.99343 1.48654Z" stroke="#101010" stroke-linecap="round" stroke-linejoin="round" fill="#ECFF4D"/>
                                        <path d="M7.99996 7.28027C7.97329 7.28027 7.93996 7.28027 7.91329 7.28027C7.28662 7.26027 6.78662 6.74027 6.78662 6.10693C6.78662 5.46027 7.31329 4.93359 7.95996 4.93359C8.60663 4.93359 9.1333 5.46027 9.1333 6.10693C9.12663 6.74693 8.62663 7.26027 7.99996 7.28027Z" stroke="#101010" stroke-linecap="round" stroke-linejoin="round" fill="#ECFF4D"/>
                                        <path d="M6.67336 9.14674C6.03336 9.5734 6.03336 10.2734 6.67336 10.7001C7.40003 11.1867 8.59336 11.1867 9.32003 10.7001C9.96003 10.2734 9.96003 9.5734 9.32003 9.14674C8.60003 8.66007 7.40669 8.66007 6.67336 9.14674Z" stroke="#101010" stroke-linecap="round" stroke-linejoin="round" fill="#ECFF4D"/>
                                    </svg>
                                </div>
                                <p>ID Verification</p>
                            </div>
                            <div
                                class="rounded-full border-solid border-lance-green flex items-center justify-center"
                                :class="kycItems.id.completed ? 'w-[23.333px] h-[23.333px] border-[1.75px] bg-[#ECFF4D]' : 'w-5 h-5 border-[1.5px] bg-white'"
                            >
                                <svg v-if="kycItems.id.completed" xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.28231 7.31015C4.05948 7.31015 3.83431 7.22498 3.66398 7.05348L0.894314 4.28498C0.552481 3.94315 0.552481 3.39015 0.894314 3.04831C1.23615 2.70648 1.78915 2.70648 2.13098 3.04831L4.28231 5.19731L9.20098 0.279813C9.54282 -0.0620209 10.0958 -0.0620209 10.4376 0.279813C10.7795 0.621646 10.7795 1.17465 10.4376 1.51648L4.90065 7.05348C4.73031 7.22498 4.50631 7.31015 4.28231 7.31015Z" fill="#0A4F4D"/>
                                </svg>
                            </div>
                        </li>
                        <li 
                            class="p-4 rounded-lg border border-solid flex items-center justify-between"
                            :class="kycItems.linkedBankAccount.completed ? 'border-lance-green bg-lance-green-5' : 'border-lance-black-10 bg-white'"
                        >
                            <div class="flex gap-3 items-center">
                                <div
                                    class="w-10 h-10 rounded-full flex items-center justify-center"
                                    :class="kycItems.linkedBankAccount.completed ? 'bg-lance-green' : 'bg-lance-green-10'"
                                >
                                    <svg v-if="!kycItems.linkedBankAccount.completed" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.99996 12.6667C5.99996 13.1667 5.85996 13.64 5.61329 14.04C5.15329 14.8133 4.30663 15.3333 3.33329 15.3333C2.35996 15.3333 1.51329 14.8133 1.05329 14.04C0.806627 13.64 0.666626 13.1667 0.666626 12.6667C0.666626 11.1933 1.85996 10 3.33329 10C4.80663 10 5.99996 11.1933 5.99996 12.6667Z" stroke="#101010" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M2.29419 12.6665L2.95419 13.3265L4.37419 12.0132" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M11.8342 4.70014C11.6742 4.67348 11.5076 4.66682 11.3342 4.66682H4.66756C4.4809 4.66682 4.3009 4.68015 4.12756 4.70681C4.2209 4.52015 4.35423 4.34684 4.51423 4.18684L6.6809 2.0135C7.59423 1.10683 9.07423 1.10683 9.98756 2.0135L11.1542 3.19347C11.5809 3.61347 11.8076 4.14681 11.8342 4.70014Z" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M14.6667 7.99984V11.3332C14.6667 13.3332 13.3334 14.6665 11.3334 14.6665H5.08671C5.29337 14.4932 5.47337 14.2798 5.61337 14.0398C5.86004 13.6398 6.00004 13.1665 6.00004 12.6665C6.00004 11.1932 4.80671 9.99984 3.33337 9.99984C2.53337 9.99984 1.82004 10.3532 1.33337 10.9065V7.99984C1.33337 6.1865 2.42671 4.91984 4.12671 4.7065C4.30004 4.67984 4.48004 4.6665 4.66671 4.6665H11.3334C11.5067 4.6665 11.6734 4.67316 11.8334 4.69983C13.5534 4.89983 14.6667 6.17317 14.6667 7.99984Z" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M14.6667 8.3335H12.6667C11.9334 8.3335 11.3334 8.9335 11.3334 9.66683C11.3334 10.4002 11.9334 11.0002 12.6667 11.0002H14.6667" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.99996 12.6667C5.99996 13.1667 5.85996 13.64 5.61329 14.04C5.15329 14.8133 4.30663 15.3333 3.33329 15.3333C2.35996 15.3333 1.51329 14.8133 1.05329 14.04C0.806627 13.64 0.666626 13.1667 0.666626 12.6667C0.666626 11.1933 1.85996 10 3.33329 10C4.80663 10 5.99996 11.1933 5.99996 12.6667Z" stroke="#101010" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" fill="#ECFF4D"/>
                                        <path d="M2.29419 12.6665L2.95419 13.3265L4.37419 12.0132" stroke="#101010" stroke-linecap="round" stroke-linejoin="round" fill="#ECFF4D"/>
                                        <path d="M11.8342 4.70014C11.6742 4.67348 11.5076 4.66682 11.3342 4.66682H4.66756C4.4809 4.66682 4.3009 4.68015 4.12756 4.70681C4.2209 4.52015 4.35423 4.34684 4.51423 4.18684L6.6809 2.0135C7.59423 1.10683 9.07423 1.10683 9.98756 2.0135L11.1542 3.19347C11.5809 3.61347 11.8076 4.14681 11.8342 4.70014Z" stroke="#101010" stroke-linecap="round" stroke-linejoin="round" fill="#ECFF4D"/>
                                        <path d="M14.6667 7.99984V11.3332C14.6667 13.3332 13.3334 14.6665 11.3334 14.6665H5.08671C5.29337 14.4932 5.47337 14.2798 5.61337 14.0398C5.86004 13.6398 6.00004 13.1665 6.00004 12.6665C6.00004 11.1932 4.80671 9.99984 3.33337 9.99984C2.53337 9.99984 1.82004 10.3532 1.33337 10.9065V7.99984C1.33337 6.1865 2.42671 4.91984 4.12671 4.7065C4.30004 4.67984 4.48004 4.6665 4.66671 4.6665H11.3334C11.5067 4.6665 11.6734 4.67316 11.8334 4.69983C13.5534 4.89983 14.6667 6.17317 14.6667 7.99984Z" stroke="#101010" stroke-linecap="round" stroke-linejoin="round" fill="#ECFF4D"/>
                                        <path d="M14.6667 8.3335H12.6667C11.9334 8.3335 11.3334 8.9335 11.3334 9.66683C11.3334 10.4002 11.9334 11.0002 12.6667 11.0002H14.6667" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <p>Bank Account Verification</p>
                            </div>
                            <div
                                class="rounded-full border-solid border-lance-green flex items-center justify-center"
                                :class="kycItems.linkedBankAccount.completed ? 'w-[23.333px] h-[23.333px] border-[1.75px] bg-[#ECFF4D]' : 'w-5 h-5 border-[1.5px] bg-white'"
                            >
                                <svg v-if="kycItems.linkedBankAccount.completed" xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.28231 7.31015C4.05948 7.31015 3.83431 7.22498 3.66398 7.05348L0.894314 4.28498C0.552481 3.94315 0.552481 3.39015 0.894314 3.04831C1.23615 2.70648 1.78915 2.70648 2.13098 3.04831L4.28231 5.19731L9.20098 0.279813C9.54282 -0.0620209 10.0958 -0.0620209 10.4376 0.279813C10.7795 0.621646 10.7795 1.17465 10.4376 1.51648L4.90065 7.05348C4.73031 7.22498 4.50631 7.31015 4.28231 7.31015Z" fill="#0A4F4D"/>
                                </svg>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="flex items-center gap-6">
                    <button @click="emit('@close-kyc-summary-modal')" class="btn btn-tertiary w-full">Back</button>
                    <button @click="emit('@continue-kyc-process')" class="btn btn-primary w-full">Continue</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    import { useKYCStore } from '@/stores/kyc';

    const { kycItems } = storeToRefs(useKYCStore());

    const emit = defineEmits<{
        '@continue-kyc-process': [],
        '@close-kyc-summary-modal': []
    }>();
</script>