export type MentorDetail = {
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

export type Expertise = {
    id: string
    skill: string
    endorsed: number
}