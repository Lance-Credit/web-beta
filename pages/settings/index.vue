<template>
    <div>
        <p class="mb-[30px] text-lance-black text-xl leading-[26px] font-medium tracking-[-0.2px]">Account Settings</p>
        <div class="rounded-xl bg-white border border-solid border-lance-black-10 pt-8 px-12 pb-[46px]">
            <ul class="flex flex-wrap items-center gap-2 border-b border-solid border-[#DAE0E0]">
                <li
                    @click="activeTab = 'personalDetails'"
                    class="flex p-4 gap-2 items-center border-solid cursor-pointer"
                    :class="activeTab == 'personalDetails' ? 'border-b border-[#052926]' : ''"
                >
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" :class="activeTab == 'personalDetails' ? 'fill-[#052926]' : 'fill-[#717A7A]'">
                        <mask id="mask0_7530_2512" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="3" y="12" width="14" height="7">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33334 12.4141H16.5333V18.5591H3.33334V12.4141Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0_7530_2512)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.93409 13.6641C6.38325 13.6641 4.58325 14.2741 4.58325 15.4782C4.58325 16.6932 6.38325 17.3091 9.93409 17.3091C13.4841 17.3091 15.2833 16.6991 15.2833 15.4949C15.2833 14.2799 13.4841 13.6641 9.93409 13.6641M9.93409 18.5591C8.30159 18.5591 3.33325 18.5591 3.33325 15.4782C3.33325 12.7316 7.10075 12.4141 9.93409 12.4141C11.5666 12.4141 16.5333 12.4141 16.5333 15.4949C16.5333 18.2416 12.7666 18.5591 9.93409 18.5591"/>
                        </g>
                        <mask id="mask1_7530_2512" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="5" y="2" width="10" height="9">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.50824 2H14.3583V10.8488H5.50824V2Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask1_7530_2512)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.93407 3.18978C8.14991 3.18978 6.69824 4.64061 6.69824 6.42478C6.69241 8.20311 8.13324 9.65311 9.90991 9.65978L9.93407 10.2548V9.65978C11.7174 9.65978 13.1682 8.20811 13.1682 6.42478C13.1682 4.64061 11.7174 3.18978 9.93407 3.18978M9.9341 10.8492H9.90743C7.47243 10.8417 5.49993 8.85583 5.50827 6.4225C5.50827 3.985 7.49327 2 9.9341 2C12.3741 2 14.3583 3.985 14.3583 6.425C14.3583 8.865 12.3741 10.8492 9.9341 10.8492"/>
                        </g>
                    </svg>
                    <p
                        class="text-sm leading-[20.3px]"
                        :class="activeTab == 'personalDetails' ? 'text-[#052926] font-medium' : 'text-[#272E2E]'"
                    >
                        Personal Details
                    </p>
                </li>
                <li
                    @click="activeTab = 'bankDetails'"
                    class="flex p-4 gap-2 items-center border-solid cursor-pointer"
                    :class="activeTab == 'bankDetails' ? 'border-b border-[#052926]' : ''"
                >
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" :class="activeTab == 'bankDetails' ? 'fill-[#052926]' : 'fill-[#717A7A]'">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2406 13.5807H14.8672C13.2864 13.5807 11.9997 12.2949 11.9989 10.7149C11.9989 9.1332 13.2856 7.84654 14.8672 7.8457H18.2406C18.5856 7.8457 18.8656 8.1257 18.8656 8.4707C18.8656 8.8157 18.5856 9.0957 18.2406 9.0957H14.8672C13.9747 9.09654 13.2489 9.82237 13.2489 10.714C13.2489 11.6049 13.9756 12.3307 14.8672 12.3307H18.2406C18.5856 12.3307 18.8656 12.6107 18.8656 12.9557C18.8656 13.3007 18.5856 13.5807 18.2406 13.5807Z"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2486 11.2871H14.9886C14.6436 11.2871 14.3636 11.0071 14.3636 10.6621C14.3636 10.3171 14.6436 10.0371 14.9886 10.0371H15.2486C15.5936 10.0371 15.8736 10.3171 15.8736 10.6621C15.8736 11.0071 15.5936 11.2871 15.2486 11.2871Z"/>
                        <mask id="mask0_7530_495" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="2" width="18" height="17">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.66666 2.83398H18.8655V18.8114H1.66666V2.83398Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0_7530_495)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.66465 4.08398C4.59799 4.08398 2.91632 5.76565 2.91632 7.83232V13.8132C2.91632 15.8798 4.59799 17.5615 6.66465 17.5615H13.868C15.9347 17.5615 17.6155 15.8798 17.6155 13.8132V7.83232C17.6155 5.76565 15.9347 4.08398 13.868 4.08398H6.66465ZM13.868 18.8115H6.66465C3.90882 18.8115 1.66632 16.569 1.66632 13.8132V7.83232C1.66632 5.07565 3.90882 2.83398 6.66465 2.83398H13.868C16.6238 2.83398 18.8655 5.07565 18.8655 7.83232V13.8132C18.8655 16.569 16.6238 18.8115 13.868 18.8115Z"/>
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5705 7.86523H6.07132C5.72632 7.86523 5.44632 7.58523 5.44632 7.24023C5.44632 6.89523 5.72632 6.61523 6.07132 6.61523H10.5705C10.9155 6.61523 11.1955 6.89523 11.1955 7.24023C11.1955 7.58523 10.9155 7.86523 10.5705 7.86523Z"/>
                    </svg>
                    <p
                        class="text-sm leading-[20.3px]"
                        :class="activeTab == 'bankDetails' ? 'text-[#052926] font-medium' : 'text-[#272E2E]'"
                    >
                        Bank Details
                    </p>
                </li>
                <li
                    @click="activeTab = 'nextOfKin'"
                    class="flex p-4 gap-2 items-center border-solid cursor-pointer"
                    :class="activeTab == 'nextOfKin' ? 'border-b border-[#052926]' : ''"
                >
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" :class="activeTab == 'nextOfKin' ? 'fill-[#052926]' : 'fill-[#717A7A]'">
                        <mask id="mask0_7530_16668" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="11" width="14" height="7">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.66669 11.9648H14.3199V17.8812H1.66669V11.9648Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0_7530_16668)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99317 13.2148C5.67734 13.2148 2.9165 13.5123 2.9165 14.9332C2.9165 16.0598 4.62484 16.6315 7.99317 16.6315C11.3615 16.6315 13.0698 16.054 13.0698 14.9165C13.0698 13.7873 11.3615 13.2148 7.99317 13.2148M7.99317 17.8815C6.26317 17.8815 1.6665 17.8815 1.6665 14.9332C1.6665 11.9648 6.42817 11.9648 7.99317 11.9648C10.709 11.9648 14.3198 12.2707 14.3198 14.9165C14.3198 17.8815 9.55817 17.8815 7.99317 17.8815"/>
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.9932 3.25C6.32236 3.25 4.9632 4.60917 4.9632 6.27917C4.9632 7.94917 6.32236 9.30833 7.9932 9.30833H8.01903C8.82236 9.305 9.57903 8.98917 10.1465 8.41667C10.7149 7.84583 11.0257 7.08667 11.0224 6.28167C11.0224 4.60917 9.6632 3.25 7.9932 3.25V3.25ZM7.9932 10.5583C5.6332 10.5583 3.7132 8.63833 3.7132 6.27917C3.7132 3.92 5.6332 2 7.9932 2C10.3524 2 12.2724 3.92 12.2724 6.27917C12.2774 7.41583 11.8365 8.48917 11.0332 9.2975C10.2315 10.1067 9.1607 10.5542 8.02153 10.5583H7.9932Z"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7353 9.60899C13.4287 9.60899 13.1612 9.38316 13.117 9.07066C13.0695 8.72899 13.307 8.41232 13.6487 8.36482C14.6887 8.21899 15.4737 7.31649 15.4753 6.26482C15.4753 5.21982 14.727 4.33816 13.6978 4.16982C13.357 4.11316 13.1262 3.79232 13.182 3.45149C13.2378 3.11066 13.5603 2.88149 13.8995 2.93566C15.537 3.20399 16.7253 4.60482 16.7253 6.26566C16.722 7.93649 15.4745 9.37149 13.8228 9.60316C13.7937 9.60733 13.7645 9.60899 13.7353 9.60899"/>
                        <mask id="mask1_7530_16668" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="14" y="11" width="5" height="5">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.871 11.5703H18.3158V15.7183H14.871V11.5703Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask1_7530_16668)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5796 15.7183C16.3271 15.7183 16.0896 15.5641 15.9954 15.3149C15.8729 14.9924 16.0354 14.6308 16.3579 14.5091C17.0663 14.2408 17.0663 13.9133 17.0663 13.7733C17.0663 13.3008 16.5071 12.9774 15.4046 12.8133C15.0629 12.7616 14.8271 12.4433 14.8779 12.1024C14.9296 11.7608 15.2538 11.5316 15.5888 11.5758C17.8438 11.9133 18.3163 12.9574 18.3163 13.7733C18.3163 14.3808 18.0538 15.2033 16.8013 15.6774C16.7288 15.7049 16.6538 15.7183 16.5796 15.7183"/>
                        </g>
                    </svg>
                    <p
                        class="text-sm leading-[20.3px]"
                        :class="activeTab == 'nextOfKin' ? 'text-[#052926] font-medium' : 'text-[#272E2E]'"
                    >
                        Next of Kin
                    </p>
                </li>
                <li
                    @click="activeTab = 'creditScore'"
                    class="flex p-4 gap-2 items-center border-solid cursor-pointer"
                    :class="activeTab == 'creditScore' ? 'border-b border-[#052926]' : ''"
                >
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" :class="activeTab == 'creditScore' ? 'fill-[#052926]' : 'fill-[#717A7A]'">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.01357 13.6696C5.88024 13.6696 5.74607 13.6271 5.63274 13.5404C5.35941 13.3296 5.30774 12.9371 5.51857 12.6638L8.01274 9.42209C8.11441 9.28959 8.26524 9.20375 8.43024 9.18292C8.59857 9.16125 8.76357 9.20792 8.89441 9.31209L11.2444 11.1579L13.3002 8.50542C13.5119 8.23125 13.9036 8.18042 14.1769 8.39375C14.4502 8.60542 14.5002 8.99792 14.2886 9.27042L11.8469 12.4204C11.7452 12.5521 11.5952 12.6379 11.4302 12.6579C11.2636 12.6804 11.0986 12.6321 10.9669 12.5296L8.61857 10.6846L6.50941 13.4254C6.38607 13.5854 6.20107 13.6696 6.01357 13.6696"/>
                        <mask id="mask0_7530_9545" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="14" y="2" width="5" height="5">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4128 2H18.8661V6.45408H14.4128V2Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0_7530_9545)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6394 3.25C16.1011 3.25 15.6628 3.6875 15.6628 4.22667C15.6628 4.765 16.1011 5.20417 16.6394 5.20417C17.1778 5.20417 17.6161 4.765 17.6161 4.22667C17.6161 3.6875 17.1778 3.25 16.6394 3.25M16.6394 6.45417C15.4119 6.45417 14.4128 5.455 14.4128 4.22667C14.4128 2.99833 15.4119 2 16.6394 2C17.8678 2 18.8661 2.99833 18.8661 4.22667C18.8661 5.455 17.8678 6.45417 16.6394 6.45417"/>
                        </g>
                        <mask id="mask1_7530_9545" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="2" width="18" height="18">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.66669 2.70117H18.2183V19.252H1.66669V2.70117Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask1_7530_9545)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5275 19.252H6.35746C3.55163 19.252 1.66663 17.2812 1.66663 14.3478V7.61284C1.66663 4.67534 3.55163 2.70117 6.35746 2.70117H12.4141C12.7591 2.70117 13.0391 2.98117 13.0391 3.32617C13.0391 3.67117 12.7591 3.95117 12.4141 3.95117H6.35746C4.26746 3.95117 2.91663 5.38784 2.91663 7.61284V14.3478C2.91663 16.602 4.23496 18.002 6.35746 18.002H13.5275C15.6175 18.002 16.9683 16.5678 16.9683 14.3478V8.48201C16.9683 8.13701 17.2483 7.85701 17.5933 7.85701C17.9383 7.85701 18.2183 8.13701 18.2183 8.48201V14.3478C18.2183 17.2812 16.3333 19.252 13.5275 19.252"/>
                        </g>
                    </svg>
                    <p
                        class="text-sm leading-[20.3px]"
                        :class="activeTab == 'creditScore' ? 'text-[#052926] font-medium' : 'text-[#272E2E]'"
                    >
                        Credit Score & Education
                    </p>
                </li>
                <li
                    @click="activeTab = 'password'"
                    class="flex p-4 gap-2 items-center border-solid cursor-pointer"
                    :class="activeTab == 'password' ? 'border-b border-[#052926]' : ''"
                >
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" :class="activeTab == 'password' ? 'fill-[#052926]' : 'fill-[#717A7A]'">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1024 8.83314C13.7574 8.83314 13.4774 8.55314 13.4774 8.20814V6.41897C13.4774 4.67231 12.0566 3.25147 10.3099 3.25147H10.2966C9.45242 3.25147 8.66159 3.57647 8.06409 4.16897C7.46242 4.76397 7.12992 5.55814 7.12659 6.40481V8.20814C7.12659 8.55314 6.84659 8.83314 6.50159 8.83314C6.15659 8.83314 5.87659 8.55314 5.87659 8.20814V6.41897C5.88159 5.21897 6.34575 4.11147 7.18325 3.28147C8.02159 2.45064 9.12825 1.96981 10.3124 2.00147C12.7458 2.00147 14.7274 3.98314 14.7274 6.41897V8.20814C14.7274 8.55314 14.4474 8.83314 14.1024 8.83314"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.11831 8.77344C5.71998 8.77344 4.58331 9.9101 4.58331 11.3084V14.8826C4.58331 16.2809 5.71998 17.4176 7.11831 17.4176H13.4858C14.8833 17.4176 16.0208 16.2809 16.0208 14.8826V11.3084C16.0208 9.9101 14.8833 8.77344 13.4858 8.77344H7.11831ZM13.4858 18.6676H7.11831C5.03081 18.6676 3.33331 16.9701 3.33331 14.8826V11.3084C3.33331 9.22094 5.03081 7.52344 7.11831 7.52344H13.4858C15.5733 7.52344 17.2708 9.22094 17.2708 11.3084V14.8826C17.2708 16.9701 15.5733 18.6676 13.4858 18.6676V18.6676Z"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3019 14.6458C9.95688 14.6458 9.67688 14.3658 9.67688 14.0208V12.1699C9.67688 11.8249 9.95688 11.5449 10.3019 11.5449C10.6469 11.5449 10.9269 11.8249 10.9269 12.1699V14.0208C10.9269 14.3658 10.6469 14.6458 10.3019 14.6458"/>
                    </svg>
                    <p
                        class="text-sm leading-[20.3px]"
                        :class="activeTab == 'password' ? 'text-[#052926] font-medium' : 'text-[#272E2E]'"
                    >
                        Password
                    </p>
                </li>
                <li
                    @click="activeTab = 'help'"
                    class="flex p-4 gap-2 items-center border-solid cursor-pointer"
                    :class="activeTab == 'help' ? 'border-b border-[#052926]' : ''"
                >
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" :class="activeTab == 'help' ? 'fill-[#052926] stroke-[#052926]' : 'fill-[#717A7A] stroke-[#717A7A]'">
                        <path d="M16.875 8.86292V8.75354C16.87 6.93515 16.1429 5.19321 14.8536 3.91093C13.5643 2.62865 11.8184 1.91107 10 1.91604C8.18161 1.92101 6.43967 2.64814 5.15739 3.93745C3.87511 5.22676 3.15753 6.97265 3.1625 8.79104V8.85354C2.70244 8.98181 2.297 9.25713 2.0081 9.63745C1.71919 10.0178 1.56269 10.4822 1.5625 10.9598V11.5848C1.5625 12.165 1.79297 12.7214 2.2032 13.1316C2.61344 13.5418 3.16984 13.7723 3.75 13.7723H4.07813C4.1568 14.792 4.61718 15.7445 5.36735 16.4396C6.11752 17.1348 7.10227 17.5214 8.125 17.5223H10C10.4144 17.5223 10.8118 17.3577 11.1049 17.0646C11.3979 16.7716 11.5625 16.3742 11.5625 15.9598V15.6473C11.5625 15.5644 11.5296 15.4849 11.471 15.4263C11.4124 15.3677 11.3329 15.3348 11.25 15.3348H8.75C8.66712 15.3348 8.58763 15.3677 8.52903 15.4263C8.47042 15.4849 8.4375 15.5644 8.4375 15.6473V16.8973H8.125C7.21332 16.8973 6.33898 16.5351 5.69432 15.8905C5.04966 15.2458 4.6875 14.3715 4.6875 13.4598V9.08479C4.6875 9.00191 4.65458 8.92243 4.59597 8.86382C4.53737 8.80522 4.45788 8.77229 4.375 8.77229H3.7875C3.78501 7.11966 4.43913 5.53373 5.60596 4.36339C6.77279 3.19304 8.35674 2.53415 10.0094 2.53167C11.662 2.52918 13.2479 3.1833 14.4183 4.35013C15.5886 5.51696 16.2475 7.10091 16.25 8.75354V8.77229H15.625C15.5421 8.77229 15.4626 8.80522 15.404 8.86382C15.3454 8.92243 15.3125 9.00191 15.3125 9.08479V13.4598C15.3125 13.5427 15.3454 13.6222 15.404 13.6808C15.4626 13.7394 15.5421 13.7723 15.625 13.7723H16.25C16.5373 13.7723 16.8217 13.7157 17.0871 13.6058C17.3525 13.4958 17.5937 13.3347 17.7968 13.1316C17.9999 12.9285 18.1611 12.6873 18.271 12.4219C18.3809 12.1565 18.4375 11.8721 18.4375 11.5848V10.9598C18.4376 10.4886 18.2856 10.03 18.0041 9.65217C17.7225 9.27436 17.3265 8.99754 16.875 8.86292ZM9.0625 15.9598H10.9375C10.9375 16.2084 10.8387 16.4469 10.6629 16.6227C10.4871 16.7985 10.2486 16.8973 10 16.8973H9.0625V15.9598ZM4.0625 13.1473H3.75C3.54481 13.1473 3.34163 13.1069 3.15206 13.0284C2.96249 12.9498 2.79024 12.8347 2.64515 12.6896C2.50005 12.5446 2.38496 12.3723 2.30644 12.1827C2.22792 11.9932 2.1875 11.79 2.1875 11.5848V10.9598C2.1875 10.5454 2.35212 10.148 2.64515 9.85494C2.93817 9.56191 3.3356 9.39729 3.75 9.39729H4.0625V13.1473ZM17.8125 11.5848C17.8125 11.79 17.7721 11.9932 17.6936 12.1827C17.615 12.3723 17.4999 12.5446 17.3549 12.6896C17.2098 12.8347 17.0375 12.9498 16.8479 13.0284C16.6584 13.1069 16.4552 13.1473 16.25 13.1473H15.9375V9.39729H16.25C16.6644 9.39729 17.0618 9.56191 17.3549 9.85494C17.6479 10.148 17.8125 10.5454 17.8125 10.9598V11.5848Z" stroke-width="0.5"/>
                    </svg>
                    <p
                        class="text-sm leading-[20.3px]"
                        :class="activeTab == 'help' ? 'text-[#052926] font-medium' : 'text-[#272E2E]'"
                    >
                        Help
                    </p>
                </li>
                <li
                    @click="activeTab = 'about'"
                    class="flex p-4 gap-2 items-center border-solid cursor-pointer"
                    :class="activeTab == 'about' ? 'border-b border-[#052926]' : ''"
                >
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" :class="activeTab == 'about' ? 'fill-[#052926]' : 'fill-[#717A7A]'">
                        <mask id="mask0_7530_5699" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="2" y="2" width="15" height="17">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.50024 2.00977H16.7108V18.5544H2.50024V2.00977Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0_7530_5699)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.31116 3.25977C4.93033 3.25977 3.78366 4.3781 3.75116 5.75727V14.6698C3.72033 16.0973 4.84533 17.2731 6.25866 17.3048H12.9787C14.3695 17.2473 15.4712 16.0914 15.4612 14.6748V7.2831L11.5987 3.25977H6.32116H6.31116ZM6.32116 18.5548H6.23033C4.12866 18.5073 2.45533 16.7589 2.50116 14.6564V5.74227C2.5495 3.67477 4.257 2.00977 6.3095 2.00977H6.32366H11.8653C12.0353 2.00977 12.1978 2.07893 12.3162 2.20143L16.537 6.59893C16.6487 6.71477 16.7112 6.8706 16.7112 7.03143V14.6698C16.7262 16.7606 15.0978 18.4689 13.0037 18.5539L6.32116 18.5548Z"/>
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0821 7.82H13.7862C12.2612 7.81583 11.0212 6.5725 11.0212 5.04917V2.625C11.0212 2.28 11.3012 2 11.6462 2C11.9912 2 12.2712 2.28 12.2712 2.625V5.04917C12.2712 5.88583 12.9521 6.5675 13.7879 6.57H16.0821C16.4271 6.57 16.7071 6.85 16.7071 7.195C16.7071 7.54 16.4271 7.82 16.0821 7.82"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4906 13.7578H6.9906C6.6456 13.7578 6.3656 13.4778 6.3656 13.1328C6.3656 12.7878 6.6456 12.5078 6.9906 12.5078H11.4906C11.8356 12.5078 12.1156 12.7878 12.1156 13.1328C12.1156 13.4778 11.8356 13.7578 11.4906 13.7578"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.78641 10.6309H6.98975C6.64475 10.6309 6.36475 10.3509 6.36475 10.0059C6.36475 9.66086 6.64475 9.38086 6.98975 9.38086H9.78641C10.1314 9.38086 10.4114 9.66086 10.4114 10.0059C10.4114 10.3509 10.1314 10.6309 9.78641 10.6309"/>
                    </svg>
                    <p
                        class="text-sm leading-[20.3px]"
                        :class="activeTab == 'about' ? 'text-[#052926] font-medium' : 'text-[#272E2E]'"
                    >
                        About Lance
                    </p>
                </li>
            </ul>
            <div class="pt-10 pb-[35px] border-b border-solid border-lance-black-5">
                <div v-show="activeTab == 'personalDetails'">
                    <div class="flex items-center justify-between border-b border-solid border-lance-black-5 pb-4">
                        <div>
                            <p class="text-[#1E1721] font-aventa text-2xl tracking-[-0.24px] font-semibold">
                                Personal Details
                            </p>
                            <p class="text-lance-black-60 text-sm leading-6">
                                Complete your loan application details below with the required information.
                            </p>
                        </div>
                        <div v-show="!editingPersonalDetails">
                            <button @click="editingPersonalDetails = true" class="gap-4 btn btn-primary">
                                <span>Edit</span>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2923 18.6172H11.2482C10.9032 18.6172 10.6232 18.3372 10.6232 17.9922C10.6232 17.6472 10.9032 17.3672 11.2482 17.3672H17.2923C17.6373 17.3672 17.9173 17.6472 17.9173 17.9922C17.9173 18.3372 17.6373 18.6172 17.2923 18.6172" fill="white"/>
                                    <mask id="mask0_7530_2573" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="2" width="15" height="17">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.66699 2.83398H15.9841V18.6169H1.66699V2.83398Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_7530_2573)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9256 4.51476L3.07973 14.3273C2.93723 14.5056 2.88473 14.7356 2.93723 14.9564L3.50473 17.3606L6.03723 17.3289C6.27806 17.3264 6.50056 17.2189 6.64806 17.0356C9.32889 13.6814 14.4397 7.28642 14.5847 7.09892C14.7214 6.87726 14.7747 6.56392 14.7031 6.26226C14.6297 5.95309 14.4372 5.69059 14.1597 5.52309C14.1006 5.48226 12.6964 4.39226 12.6531 4.35809C12.1247 3.93476 11.3539 4.00809 10.9256 4.51476V4.51476ZM3.01139 18.617C2.72222 18.617 2.47055 18.4187 2.40305 18.1362L1.72055 15.2437C1.57972 14.6445 1.71972 14.0262 2.10389 13.5462L9.95389 3.72785C9.95722 3.72452 9.95972 3.72035 9.96305 3.71702C10.8239 2.68785 12.3806 2.53619 13.4306 3.37869C13.4722 3.41119 14.8664 4.49452 14.8664 4.49452C15.3731 4.79619 15.7689 5.33535 15.9189 5.97369C16.0681 6.60535 15.9597 7.25702 15.6122 7.80785C15.5864 7.84869 15.5639 7.88369 7.62389 17.817C7.24139 18.2937 6.66805 18.5712 6.05222 18.5787L3.01972 18.617H3.01139Z" fill="white"/>
                                    </g>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5196 10.0715C13.3863 10.0715 13.2529 10.029 13.1388 9.94229L8.59543 6.45229C8.3221 6.24229 8.27043 5.85062 8.48043 5.57562C8.69126 5.30229 9.08293 5.25146 9.3571 5.46146L13.9013 8.95062C14.1746 9.16062 14.2263 9.55312 14.0154 9.82729C13.8929 9.98729 13.7071 10.0715 13.5196 10.0715" fill="white"/>
                                </svg>
                            </button>
                        </div>
                        <div v-show="editingPersonalDetails" class="flex items-center gap-4">
                            <button @click="editingPersonalDetails = false" class="btn btn-secondary">Cancel</button>
                            <button @click="savePersonalDetails" class="gap-4 btn btn-primary" :disabled="!personalDetailsFilled || savingPersonalDetails">Save changes</button>
                        </div>
                    </div>
                    <div v-show="!editingPersonalDetails">
                        <div class="py-6 border-b border-solid border-lance-black-5 flex items-center gap-6">
                            <div class="w-[64px] h-[64px] rounded-full bg-[#9BA6B9] bg-[url('/assets/img/kofo.jpg')] bg-cover bg-no-repeat"></div>
                            <div>
                                <p class="text-[#1E1721] font-medium tracking-[-0.16px]">{{ fullName }}</p>
                                <p class="text-lance-black-60 text-sm leading-[21px]">Referred by: Ndebe Wisdom</p>
                            </div>
                        </div>
                        <div class="py-6 border-b border-solid border-lance-black-5">
                            <p class="mb-6 text-[#1E1721] font-medium tracking-[-0.16px]">Personal Details</p>
                            <div class="flex justify-between">
                                <div class="flex flex-col gap-6 basis-[185px]">
                                    <div>
                                        <p class="mb-0.5 text-lance-black-50 text-sm leading-[21px] tracking-[-0.14px]">
                                            First Name
                                        </p>
                                        <p class="text-lance-black">{{ userProfile.firstName }}</p>
                                    </div>
                                    <div>
                                        <p class="mb-0.5 text-lance-black-50 text-sm leading-[21px] tracking-[-0.14px]">
                                            Email Address
                                        </p>
                                        <p class="text-lance-black">{{ userProfile.email }}</p>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-6 basis-[185px]">
                                    <div>
                                        <p class="mb-0.5 text-lance-black-50 text-sm leading-[21px] tracking-[-0.14px]">
                                            Marital Status
                                        </p>
                                        <p class="text-lance-black">{{ userProfile.maritalStatus || '--' }}</p>
                                    </div>
                                    <div>
                                        <p class="mb-0.5 text-lance-black-50 text-sm leading-[21px] tracking-[-0.14px]">
                                            Education Level
                                        </p>
                                        <p class="text-lance-black">{{ userProfile.educationLevel || '--' }}</p>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-6 basis-[185px]">
                                    <div>
                                        <p class="mb-0.5 text-lance-black-50 text-sm leading-[21px] tracking-[-0.14px]">
                                            Last Name
                                        </p>
                                        <p class="text-lance-black">{{ userProfile.lastName }}</p>
                                    </div>
                                    <div>
                                        <p class="mb-0.5 text-lance-black-50 text-sm leading-[21px] tracking-[-0.14px]">
                                            Phone Number
                                        </p>
                                        <p class="text-lance-black">{{ userProfile.phoneNumber }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pt-6">
                            <p class="mb-6 text-[#1E1721] font-medium tracking-[-0.16px]">Residential Details</p>
                            <div class="flex justify-between">
                                <div class="flex flex-col gap-6 basis-[185px]">
                                    <div>
                                        <p class="mb-0.5 text-lance-black-50 text-sm leading-[21px] tracking-[-0.14px]">
                                            State
                                        </p>
                                        <p class="text-lance-black">{{ userProfile.state || '--' }}</p>
                                    </div>
                                    <div>
                                        <p class="mb-0.5 text-lance-black-50 text-sm leading-[21px] tracking-[-0.14px]">
                                            Residential Address
                                        </p>
                                        <p class="text-lance-black">{{ userProfile.address || '--' }}</p>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-6 basis-[185px]">
                                    <div>
                                        <p class="mb-0.5 text-lance-black-50 text-sm leading-[21px] tracking-[-0.14px]">
                                            LGA
                                        </p>
                                        <p class="text-lance-black">{{ userProfile.lga || '--' }}</p>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-6 basis-[185px]">
                                    <div>
                                        <p class="mb-0.5 text-lance-black-50 text-sm leading-[21px] tracking-[-0.14px]">
                                            City
                                        </p>
                                        <p class="text-lance-black">{{ userProfile.city || '--' }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-show="editingPersonalDetails">
                        <div class="mt-[31px] flex justify-between items-center py-4 px-6 rounded-lg bg-lance-green-5 cursor-pointer">
                            <div class="flex gap-2 items-center">
                                <div class="w-8 h-8 bg-lance-green-5 rounded-full flex items-center justify-center">
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.875 8.86292V8.75354C16.87 6.93515 16.1429 5.19321 14.8536 3.91093C13.5643 2.62865 11.8184 1.91107 10 1.91604C8.18161 1.92101 6.43967 2.64814 5.15739 3.93745C3.87511 5.22676 3.15753 6.97265 3.1625 8.79104V8.85354C2.70244 8.98181 2.297 9.25713 2.0081 9.63745C1.71919 10.0178 1.56269 10.4822 1.5625 10.9598V11.5848C1.5625 12.165 1.79297 12.7214 2.2032 13.1316C2.61344 13.5418 3.16984 13.7723 3.75 13.7723H4.07812C4.1568 14.792 4.61718 15.7445 5.36735 16.4396C6.11752 17.1348 7.10227 17.5214 8.125 17.5223H10C10.4144 17.5223 10.8118 17.3577 11.1049 17.0646C11.3979 16.7716 11.5625 16.3742 11.5625 15.9598V15.6473C11.5625 15.5644 11.5296 15.4849 11.471 15.4263C11.4124 15.3677 11.3329 15.3348 11.25 15.3348H8.75C8.66712 15.3348 8.58763 15.3677 8.52903 15.4263C8.47042 15.4849 8.4375 15.5644 8.4375 15.6473V16.8973H8.125C7.21332 16.8973 6.33898 16.5351 5.69432 15.8905C5.04966 15.2458 4.6875 14.3715 4.6875 13.4598V9.08479C4.6875 9.00191 4.65458 8.92243 4.59597 8.86382C4.53737 8.80522 4.45788 8.77229 4.375 8.77229H3.7875C3.78501 7.11966 4.43913 5.53373 5.60596 4.36339C6.77279 3.19304 8.35674 2.53415 10.0094 2.53167C11.662 2.52918 13.2479 3.1833 14.4183 4.35013C15.5886 5.51696 16.2475 7.10091 16.25 8.75354V8.77229H15.625C15.5421 8.77229 15.4626 8.80522 15.404 8.86382C15.3454 8.92243 15.3125 9.00191 15.3125 9.08479V13.4598C15.3125 13.5427 15.3454 13.6222 15.404 13.6808C15.4626 13.7394 15.5421 13.7723 15.625 13.7723H16.25C16.5373 13.7723 16.8217 13.7157 17.0871 13.6058C17.3525 13.4958 17.5937 13.3347 17.7968 13.1316C17.9999 12.9285 18.1611 12.6873 18.271 12.4219C18.3809 12.1565 18.4375 11.8721 18.4375 11.5848V10.9598C18.4376 10.4886 18.2856 10.03 18.0041 9.65217C17.7225 9.27436 17.3265 8.99754 16.875 8.86292ZM9.0625 15.9598H10.9375C10.9375 16.2084 10.8387 16.4469 10.6629 16.6227C10.4871 16.7985 10.2486 16.8973 10 16.8973H9.0625V15.9598ZM4.0625 13.1473H3.75C3.54481 13.1473 3.34163 13.1069 3.15206 13.0284C2.96249 12.9498 2.79024 12.8347 2.64515 12.6896C2.50005 12.5446 2.38496 12.3723 2.30644 12.1827C2.22792 11.9932 2.1875 11.79 2.1875 11.5848V10.9598C2.1875 10.5454 2.35212 10.148 2.64515 9.85494C2.93817 9.56191 3.3356 9.39729 3.75 9.39729H4.0625V13.1473ZM17.8125 11.5848C17.8125 11.79 17.7721 11.9932 17.6936 12.1827C17.615 12.3723 17.4999 12.5446 17.3549 12.6896C17.2098 12.8347 17.0375 12.9498 16.8479 13.0284C16.6584 13.1069 16.4552 13.1473 16.25 13.1473H15.9375V9.39729H16.25C16.6644 9.39729 17.0618 9.56191 17.3549 9.85494C17.6479 10.148 17.8125 10.5454 17.8125 10.9598V11.5848Z" fill="#041111" stroke="#041111" stroke-width="0.5"/>
                                    </svg>
                                </div>
                                <p class="text-lance-black">Want to make additional changes? Contact support.</p>
                            </div>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.96967 19.8643C7.7034 19.598 7.6792 19.1814 7.89705 18.8878L7.96967 18.8037L14.439 12.334L7.96967 5.86431C7.7034 5.59805 7.6792 5.18138 7.89705 4.88777L7.96967 4.80365C8.23594 4.53739 8.6526 4.51318 8.94621 4.73104L9.03033 4.80365L16.0303 11.8037C16.2966 12.0699 16.3208 12.4866 16.1029 12.7802L16.0303 12.8643L9.03033 19.8643C8.73744 20.1572 8.26256 20.1572 7.96967 19.8643Z" fill="black"/>
                            </svg>
                        </div>
                        <div class="py-6 border-b border-solid border-lance-black-5 flex items-center gap-6">
                            <div class="w-[64px] h-[64px] rounded-full bg-[#9BA6B9] bg-[url('/assets/img/kofo.jpg')] bg-cover bg-no-repeat"></div>
                            <div>
                                <p class="text-[#1E1721] font-medium tracking-[-0.16px]">{{ fullName }}</p>
                                <p class="text-lance-black-60 text-sm leading-[21px]">Referred by: Ndebe Wisdom</p>
                            </div>
                        </div>
                        <div class="py-6 border-b border-solid border-lance-black-5">
                            <p class="mb-6 text-[#1E1721] font-medium tracking-[-0.16px]">Personal Details</p>
                            <div class="flex gap-[86px]">
                                <div class="flex flex-col gap-6 basis-[376px]">
                                    <Form-TextInput label="Residential Address" v-model="userProfile.firstName" :disabled="true" />
                                    <Form-TextInput label="Email address" v-model="userProfile.email" :disabled="true" />
                                    <Form-TextInput label="Phone number" v-model="userProfile.phoneNumber" :disabled="true" />
                                </div>
                                <div class="flex flex-col gap-6 basis-[376px]">
                                    <Form-TextInput label="Last Name" v-model="userProfile.lastName" :disabled="true" />
                                    <Form-SelectInput
                                        :options="maritalStatusListOptions" placeholder="Marital Status" label="Marital Status"
                                        v-bind="settingsForm.maritalStatus" :error="settingsFormErrors.maritalStatus"
                                    />
                                    <Form-SelectInput
                                        :options="educationLevelListOptions" placeholder="Education Level" label="Education Level"
                                        v-bind="settingsForm.educationLevel" :error="settingsFormErrors.educationLevel"
                                    />
                                </div>                                
                            </div>
                        </div>
                        <div class="pt-6">
                            <p class="mb-6 text-[#1E1721] font-medium tracking-[-0.16px]">Residential Details</p>
                            <div class="flex gap-[86px]">
                                <div class="flex flex-col gap-6 basis-[376px]">
                                    <Form-TextInput placeholder="Residential Address" label="Residential Address" v-bind="settingsForm.residentialAddress" :error="settingsFormErrors.residentialAddress" />
                                    <Form-SelectInput
                                        :options="lgaListOptions" placeholder="LGA" label="LGA"
                                        v-bind="settingsForm.lga" :error="settingsFormErrors.lga"
                                    />
                                </div>
                                <div class="flex flex-col gap-6 basis-[376px]">
                                    <Form-TextInput placeholder="City" label="City" v-bind="settingsForm.city" :error="settingsFormErrors.city" />
                                    <Form-SelectInput
                                        :options="stateListOptions" placeholder="State" label="State"
                                        v-bind="settingsForm.state" :error="settingsFormErrors.state"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>
<style>
.a{
    color: var(--Text-100, #041111);
font-family: Gelion;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
}
</style>
<script setup lang="ts">
    
    import * as yup from 'yup';
    import { useForm } from 'vee-validate';
    import { useUserStore } from '@/stores/user'

    definePageMeta({
        middleware: 'auth',
        layout: 'dashboard'
    });
    
    const { fullName, userProfile } = storeToRefs(useUserStore());

    const activeTab: Ref<string> = ref('personalDetails');

    const editingPersonalDetails: Ref<boolean> = ref(false);

    const { values: settingsFormValues, errors: settingsFormErrors, defineComponentBinds } = useForm({
        validationSchema: yup.object({
            maritalStatus: yup.string().required().label('Marital Status'),
            educationLevel: yup.string().required().label('Marital Status'),
            residentialAddress: yup.string().required().label('Residential Address'),
            lga: yup.string().required().label('LGA'),
            city: yup.string().required().label('City'),
            state: yup.string().required().label('State')
        })
    });
    
    const settingsForm = reactive({
        maritalStatus: defineComponentBinds('maritalStatus', {
            mapProps: state => ({
                error: state.errors[0],
            }),
        }),
        educationLevel: defineComponentBinds('educationLevel', {
            mapProps: state => ({
                error: state.errors[0],
            }),
        }),
        residentialAddress: defineComponentBinds('residentialAddress', {
            mapProps: state => ({
                error: state.errors[0],
            }),
        }),
        lga: defineComponentBinds('lga', {
            mapProps: state => ({
                error: state.errors[0],
            }),
        }),
        city: defineComponentBinds('city', {
            mapProps: state => ({
                error: state.errors[0],
            }),
        }),
        state: defineComponentBinds('state', {
            mapProps: state => ({
                error: state.errors[0],
            }),
        }),
    });

    const maritalStatusListOptions = reactive([
        {
            label: 'Single',
            value: 'Single'
        }
    ]);

    const educationLevelListOptions = reactive([
        {
            label: 'Tertiary Education',
            value: 'Tertiary Education'
        }
    ]);

    const lgaListOptions = reactive([
        {
            label: 'Lagos Mainland',
            value: 'Lagos Mainland'
        }
    ]);

    const stateListOptions = reactive([
        {
            label: 'Lagos',
            value: 'Lagos'
        }
    ]);

    const personalDetailsFilled = computed(() => {
        return settingsFormValues.maritalStatus && !settingsFormErrors.value.maritalStatus &&
        settingsFormValues.educationLevel && !settingsFormErrors.value.educationLevel &&
        settingsFormValues.residentialAddress && !settingsFormErrors.value.residentialAddress &&
        settingsFormValues.lga && !settingsFormErrors.value.lga &&
        settingsFormValues.city && !settingsFormErrors.value.city &&
        settingsFormValues.state && !settingsFormErrors.value.state;
    });

    const savingPersonalDetails: Ref<boolean> = ref(false);

    function savePersonalDetails(){
        savingPersonalDetails.value = true;
        setTimeout(()=> {
            savingPersonalDetails.value = false;
            console.log('personal details saved')
        }, 2000);
    }

</script>