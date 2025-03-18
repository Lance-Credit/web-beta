const { apiFetch } = useApiFetch();

export const useCommunityCodesStore = defineStore('communityCodes', () => 
    {

        const showCommunityCodes: Ref<boolean> = ref(false);

        const communityCodes: Ref<CommunityCode[] | null> = ref(null);

        function $reset() {
            communityCodes.value = null;
            showCommunityCodes.value = false;
        }
        
        return { communityCodes, showCommunityCodes, $reset }
    },
    {
        persist: true,
    }
)