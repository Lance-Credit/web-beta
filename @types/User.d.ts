interface User {
    id: string,
    email: string,
    userName: string,
    lastName: string,
    firstName: string,
    phoneNumber: string,
    profilePicture: string,
    maritalStatus: string,
    educationLevel: string,
    address: {
        city: string
        country: string
        lga: string
        state: string
        street: string
    },
}