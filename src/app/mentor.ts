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
    expertise: Expertise[]
    createdAt: Date
    updatedAt: Date
}

export interface Expertise {
    id: string
    skill: string
    endorsed: number
}

export interface BookingDetail {
    userId: string
    userFullName: string
    userEmail: string
    mentorId: string
    mentorFullName: string
    expertise: string[]
    reason: string
    sessionDate: Date
    sessionDuration: number
}

export interface BookingRes {
    id: string
    userId: string
    userFullName: string
    userEmail: string
    mentorId: string
    mentorFullName: string
    expertise: string[]
    reason: string
    sessionDate: Date
    sessionDuration: number
    createdAt: Date
    updatedAt: Date
}
