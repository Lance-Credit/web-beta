export const useFormattedPhoneNumberForPayload = () => {
    const formattedPhoneNumberForPayload = ((phoneNumber: string) => {
        if ((phoneNumber).substring(0,1) == '0') {
            return '234'+(phoneNumber).substring(1);
        } else if ((phoneNumber).substring(0,4) == '+234') {
            return (phoneNumber).substring(1);
        }
        return phoneNumber;
    })

    return {
        formattedPhoneNumberForPayload
    }
}