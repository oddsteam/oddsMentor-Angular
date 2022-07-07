import { Injectable } from '@angular/core'
import { MentorDetail } from '../mentor'

@Injectable({
    providedIn: 'root',
})
export class MentorsService {
    currentMentor?: MentorDetail

    constructor() {}

    saveMentor(mentor: MentorDetail) {
        this.currentMentor = mentor
    }

    getCurrentMentor(): MentorDetail | undefined {
        return this.currentMentor
    }

    clearCurrentMentor() {
        this.currentMentor = undefined
    }
}
