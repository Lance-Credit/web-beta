<template>
    <div class="fixed z-20 top-0 left-0 w-screen h-screen bg-lance-black-70 backdrop-blur-[2px] flex justify-center items-center">
        <div class="bg-white w-[466px] p-10 rounded-3xl flex flex-col gap-6">
            <div>
                <p class="text-lance-black font-medium text-xl leading-[26px] tracking-[-0.2px]">Things to Note</p>
            </div>
            <ul class="text-lance-black text-sm tracking-[-0.14px] flex flex-col gap-6">
                <li class="p-4 rounded-lg border border-solid border-lance-black-10 bg-white flex gap-3 items-center">
                    <div class="w-10 h-10 rounded-full bg-lance-green-10 flex items-center justify-center">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.81135 9.66882C3.70468 9.66882 3.59735 9.63482 3.50668 9.56549C3.28801 9.39682 3.24668 9.08282 3.41535 8.86416L5.41068 6.27082C5.49201 6.16482 5.61268 6.09616 5.74468 6.07949C5.87935 6.06216 6.01135 6.09949 6.11601 6.18282L7.99601 7.65949L9.64068 5.53749C9.81001 5.31816 10.1233 5.27749 10.342 5.44816C10.5607 5.61749 10.6007 5.93149 10.4313 6.14949L8.47801 8.66949C8.39668 8.77482 8.27668 8.84349 8.14468 8.85949C8.01135 8.87749 7.87935 8.83882 7.77401 8.75682L5.89535 7.28082L4.20801 9.47349C4.10935 9.60149 3.96135 9.66882 3.81135 9.66882Z" fill="black"/>
                            <mask id="mask0_7654_1442" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="10" y="0" width="5" height="4">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.53 0.333496H14.0927V3.89676H10.53V0.333496Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_7654_1442)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3111 1.3335C11.8805 1.3335 11.5298 1.6835 11.5298 2.11483C11.5298 2.5455 11.8805 2.89683 12.3111 2.89683C12.7418 2.89683 13.0925 2.5455 13.0925 2.11483C13.0925 1.6835 12.7418 1.3335 12.3111 1.3335ZM12.3111 3.89683C11.3291 3.89683 10.5298 3.0975 10.5298 2.11483C10.5298 1.13216 11.3291 0.333496 12.3111 0.333496C13.2938 0.333496 14.0925 1.13216 14.0925 2.11483C14.0925 3.0975 13.2938 3.89683 12.3111 3.89683Z" fill="black"/>
                            </g>
                            <mask id="mask1_7654_1442" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="15">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.333984 0.894775H13.5753V14.1354H0.333984V0.894775Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask1_7654_1442)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.82265 14.1354H4.08665C1.84198 14.1354 0.333984 12.5588 0.333984 10.2121V4.82411C0.333984 2.47411 1.84198 0.894775 4.08665 0.894775H8.93198C9.20798 0.894775 9.43198 1.11878 9.43198 1.39478C9.43198 1.67078 9.20798 1.89478 8.93198 1.89478H4.08665C2.41465 1.89478 1.33398 3.04411 1.33398 4.82411V10.2121C1.33398 12.0154 2.38865 13.1354 4.08665 13.1354H9.82265C11.4947 13.1354 12.5753 11.9881 12.5753 10.2121V5.51944C12.5753 5.24344 12.7993 5.01944 13.0753 5.01944C13.3513 5.01944 13.5753 5.24344 13.5753 5.51944V10.2121C13.5753 12.5588 12.0673 14.1354 9.82265 14.1354Z" fill="black"/>
                            </g>
                        </svg>
                    </div>
                    <div class="flex-1">
                        <p class="mb-1 font-semibold">
                            Processing Fees & Time
                        </p>
                        <p class="text-lance-black-50 leading-6">
                            Lance loans range from <span class="text-lance-green font-medium">{{loanSettings?.minDuration}} - {{loanSettings?.maxDuration}}</span>
                            days with an Annual Percentage Rate from <span class="text-lance-green font-medium">{{loanSettings?.minRate}}% - {{loanSettings?.maxRate}}%</span>.
                        </p>
                    </div>
                </li>
                <li class="p-4 rounded-lg border border-solid border-lance-black-10 bg-white flex gap-3 items-center">
                    <div class="w-10 h-10 rounded-full bg-lance-green-10 flex items-center justify-center">
                        <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.06616 3.44725C8.79016 3.44725 8.56616 3.22325 8.56616 2.94725V1.33325C8.56616 1.05725 8.79016 0.833252 9.06616 0.833252C9.34216 0.833252 9.56616 1.05725 9.56616 1.33325V2.94725C9.56616 3.22325 9.34216 3.44725 9.06616 3.44725Z" fill="black"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.06616 12.189C8.79016 12.189 8.56616 11.965 8.56616 11.689V10.3403C8.56616 10.0637 8.79016 9.84033 9.06616 9.84033C9.34216 9.84033 9.56616 10.0637 9.56616 10.3403V11.689C9.56616 11.965 9.34216 12.189 9.06616 12.189Z" fill="black"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.06616 8.54994C8.79016 8.54994 8.56616 8.32594 8.56616 8.04994V4.83594C8.56616 4.55994 8.79016 4.33594 9.06616 4.33594C9.34216 4.33594 9.56616 4.55994 9.56616 4.83594V8.04994C9.56616 8.32594 9.34216 8.54994 9.06616 8.54994Z" fill="black"/>
                            <mask id="mask0_7654_5789" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="15" height="13">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666016 0.666504H14.9993V12.333H0.666016V0.666504Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_7654_5789)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.66565 8.36917V9.66184C1.66565 10.5832 2.42765 11.3332 3.36432 11.3332H12.3003C13.237 11.3332 13.999 10.5832 13.999 9.66184V8.36917C13.165 8.14984 12.5476 7.39517 12.5476 6.5005C12.5476 5.60517 13.1643 4.85117 13.999 4.63184L13.9983 3.33784C13.9983 2.4165 13.2363 1.6665 12.2997 1.6665H3.36498C2.42832 1.6665 1.66632 2.4165 1.66632 3.33784L1.66565 4.68317C2.51032 4.8905 3.11698 5.6145 3.11698 6.5005C3.11698 7.39517 2.49965 8.14984 1.66565 8.36917ZM12.3003 12.3332H3.36432C1.87632 12.3332 0.665649 11.1345 0.665649 9.66184V7.93384C0.665649 7.65784 0.889649 7.43384 1.16565 7.43384C1.69032 7.43384 2.11698 7.01517 2.11698 6.5005C2.11698 6.0005 1.70765 5.62317 1.16565 5.62317C1.03298 5.62317 0.905649 5.5705 0.812316 5.4765C0.718316 5.38317 0.665649 5.25517 0.665649 5.12317L0.666316 3.33784C0.666316 1.86517 1.87698 0.666504 3.36498 0.666504H12.2997C13.7877 0.666504 14.9983 1.86517 14.9983 3.33784L14.999 5.06717C14.999 5.19917 14.9463 5.32717 14.8523 5.4205C14.759 5.5145 14.6316 5.56717 14.499 5.56717C13.9743 5.56717 13.5476 5.98584 13.5476 6.5005C13.5476 7.01517 13.9743 7.43384 14.499 7.43384C14.775 7.43384 14.999 7.65784 14.999 7.93384V9.66184C14.999 11.1345 13.7883 12.3332 12.3003 12.3332Z" fill="black"/>
                            </g>
                        </svg>
                    </div>
                    <div class="flex-1">
                        <p class="mb-1 font-semibold">
                            Lance Credit Ratings
                        </p>
                        <p class="text-lance-black-50 leading-6">
                            From the information you provide us and your activities on Lance, we calculate your credit score.
                        </p>
                    </div>
                </li>
                <li class="p-4 rounded-lg border border-solid border-lance-black-10 bg-white flex gap-3 items-center">
                    <div class="w-10 h-10 rounded-full bg-lance-green-10 flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_7654_1687" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="14">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.333984 0.333496H13.6691V13.6675H0.333984V0.333496Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_7654_1687)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.29708 12.3838C6.69042 12.7678 7.32375 12.7631 7.71442 12.3705L8.19575 11.8905C8.56908 11.5178 9.08508 11.3051 9.61108 11.3051H10.2977C10.8537 11.3051 11.3057 10.8531 11.3057 10.2978V9.61181C11.3057 9.07781 11.5124 8.57581 11.8897 8.19781L12.3698 7.71714C12.5651 7.52114 12.6697 7.26714 12.6691 6.99781C12.6684 6.72914 12.5624 6.47648 12.3711 6.28581L11.8904 5.80448C11.5124 5.42381 11.3057 4.92248 11.3057 4.38848V3.70381C11.3057 3.14781 10.8537 2.69581 10.2977 2.69581H9.61242C9.07842 2.69581 8.57642 2.48848 8.19842 2.11314L7.71708 1.63114C7.31642 1.23448 6.67708 1.23648 6.28575 1.63048L5.80642 2.11114C5.42375 2.48914 4.92175 2.69581 4.38975 2.69581H3.70375C3.14842 2.69648 2.69642 3.14848 2.69642 3.70381V4.38714C2.69642 4.92114 2.48908 5.42314 2.11308 5.80181L1.63975 6.27581C1.63508 6.28114 1.63042 6.28514 1.62575 6.28981C1.23442 6.68381 1.23642 7.32314 1.63042 7.71448L2.11175 8.19581C2.48908 8.57448 2.69642 9.07648 2.69642 9.61048V10.2978C2.69642 10.8531 3.14775 11.3051 3.70375 11.3051H4.38842C4.92308 11.3058 5.42508 11.5131 5.80308 11.8898L6.28375 12.3691C6.28775 12.3738 6.29242 12.3785 6.29708 12.3838ZM7.00004 13.6678C6.48871 13.6678 5.97738 13.4744 5.58604 13.0864C5.58071 13.0811 5.57538 13.0758 5.57004 13.0698L5.09671 12.5971C4.90804 12.4098 4.65604 12.3058 4.38804 12.3051H3.70404C2.59671 12.3051 1.69671 11.4044 1.69671 10.2978V9.61042C1.69671 9.34242 1.59204 9.09109 1.40404 8.90175L0.92471 8.42309C0.146043 7.64842 0.13671 6.38709 0.901377 5.60042C0.907377 5.59442 0.913377 5.58842 0.919377 5.58242L1.40471 5.09575C1.59204 4.90709 1.69671 4.65442 1.69671 4.38709V3.70375C1.69671 2.59709 2.59671 1.69642 3.70338 1.69575H4.39004C4.65738 1.69575 4.90938 1.59109 5.10071 1.40242L5.57738 0.92442C6.35671 0.139754 7.63071 0.135754 8.41671 0.917087L8.90404 1.40442C9.09271 1.59175 9.34471 1.69575 9.61271 1.69575H10.298C11.4054 1.69575 12.306 2.59642 12.306 3.70375V4.38842C12.306 4.65575 12.41 4.90842 12.5987 5.09842L13.0774 5.57775C13.4567 5.95442 13.6674 6.45775 13.6694 6.99442C13.6714 7.53109 13.464 8.03575 13.086 8.41642L12.5974 8.90375C12.41 9.09242 12.306 9.34375 12.306 9.61175V10.2978C12.306 11.4044 11.4054 12.3051 10.2987 12.3051H9.61138C9.34738 12.3051 9.08938 12.4118 8.90204 12.5978L8.42338 13.0764C8.03204 13.4704 7.51604 13.6678 7.00004 13.6678Z" fill="black"/>
                            </g>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.28719 9.21452C5.15919 9.21452 5.03119 9.16585 4.93385 9.06785C4.73852 8.87252 4.73852 8.55652 4.93385 8.36119L8.36052 4.93385C8.55585 4.73852 8.87252 4.73852 9.06785 4.93385C9.26319 5.12919 9.26319 5.44585 9.06785 5.64119L5.64052 9.06785C5.54319 9.16585 5.41519 9.21452 5.28719 9.21452Z" fill="black"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.66902 9.33285C8.30036 9.33285 7.99902 9.03485 7.99902 8.66618C7.99902 8.29751 8.29436 7.99951 8.66302 7.99951H8.66902C9.03769 7.99951 9.33569 8.29751 9.33569 8.66618C9.33569 9.03485 9.03769 9.33285 8.66902 9.33285Z" fill="black"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33577 5.99959C4.9671 5.99959 4.66577 5.70159 4.66577 5.33293C4.66577 4.96426 4.9611 4.66626 5.32977 4.66626H5.33577C5.70444 4.66626 6.00244 4.96426 6.00244 5.33293C6.00244 5.70159 5.70444 5.99959 5.33577 5.99959Z" fill="black"/>
                        </svg>
                    </div>
                    <div class="flex-1">
                        <p class="mb-1 font-semibold">
                            Early Repayments
                        </p>
                        <p class="text-lance-black-50 leading-6">
                            We provide incentives including higher loan amounts when you repay your loan on time.
                        </p>
                    </div>
                </li>
            </ul>
            <Form-RadioInput type="radio" name="termsOfUse" value="yes">
                <p class="text-lance-black text-sm">
                    I agree to the <NuxtLink class="font-semibold text-lance-green">Terms of Use</NuxtLink>
                    and <NuxtLink class="font-semibold text-lance-green">Privacy Policy</NuxtLink>
                </p>
            </Form-RadioInput>
            <div class="flex items-center gap-6">
                <button @click="emit('@close-loan-instructions-modal')" class="btn btn-tertiary w-full">Back</button>
                <button
                    @click="emit('@continue-loan-request-process')" class="btn btn-primary w-full"
                    :disabled="!(formValues.termsOfUse && !formErrors.termsOfUse)"
                >
                    Continue
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    import * as yup from 'yup';

    defineProps<{
        loanSettings?: {
            "defaultRate": number,
            "minRate": number,
            "maxRate": number,
            "minDuration": number,
            "maxDuration": number,
            "processingFee": number
        } | null
    }>();

    const { values: formValues, errors: formErrors } = useForm({
        validationSchema: yup.object({
            termsOfUse: yup.string().required().label('Terms')
        })
    });

    const emit = defineEmits<{
        '@continue-loan-request-process': [],
        '@close-loan-instructions-modal': []
    }>();

</script>