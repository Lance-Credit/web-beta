import { useKYCStore } from '@/stores/kyc';
import { useUserStore } from '@/stores/user';
import { useTokenStore } from '@/stores/token';
import { useWalletStore } from '@/stores/wallet';
import { useNextOfKinStore } from '@/stores/nextOfKin';
import { useLoanHistoryStore } from '@/stores/loanHistory';
import { useNotificationsStore } from '@/stores/notifications';
import { useCommunityCodesStore } from '@/stores/communityCodes';


export const useResetStores = () => {
  
  const { $resetKYC } = useKYCStore();
  const { $reset: $resetuserStore } = useUserStore();
  const { $reset: $resetTokenStore } = useTokenStore();
  const { $reset: $resetWalletStore } = useWalletStore();
  const { $reset: $resetnextOfKinStore } = useNextOfKinStore();
  const { $reset: $resetLoanHistoryStore } = useLoanHistoryStore();
  const { $reset: $resetNotificationStore } = useNotificationsStore();
  const { $reset: $resetCommunityCodeStore } = useCommunityCodesStore();
  
  const resetStores = () => {
    $resetKYC();
    $resetuserStore();
    $resetTokenStore();
    $resetWalletStore();
    $resetnextOfKinStore();
    $resetLoanHistoryStore();
    $resetNotificationStore();
    $resetCommunityCodeStore();
  }
  
  return {
      resetStores
  }
}