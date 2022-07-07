export interface MentorDetail {
    id: string
    fullNameEN: string
    fullNameTH: string
    nickname: string
    profileImageUrl: string
    biography: string
    type: string
    team: string
    position: string
    totalEndorsed: number
    expertises: Expertise[]
    createdAt: Date
    updatedAt: Date
}

export interface Expertise {
    skill: string
    endorsed: number
}

export interface BookingDetail {
    firstNameUser: string
    lastNameUser: string
    emailUser: string
    firstNameMentor: string
    lastNameMentor: string
    expertise: Expertise[]
    reason: string
    bookingDate: Date
    bookingTime: Date
    duration: Time
}

export interface Time {
    time: number
}
