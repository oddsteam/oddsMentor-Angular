export type BookingRequest = {
    userId: string
    userFullName: string
    userEmail: string
    mentorId: string
    mentorFullName: string
    expertise: string[]
    reason: string
    sessionDate: Date
    sessionTime: string
    sessionDuration: number
}

export type BookingResponse = {
    id: string
    userId: string
    userFullName: string
    userEmail: string
    mentorId: string
    mentorFullName: string
    expertise: string[]
    reason: string
    sessionDate: string
    sessionDuration: number
    createdAt: Date
    updatedAt: Date
}
