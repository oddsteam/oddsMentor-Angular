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