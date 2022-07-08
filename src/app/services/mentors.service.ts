import { Injectable } from '@angular/core'
import { MentorDetail } from '../mentor'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
    providedIn: 'root',
})
export class MentorsService {
    private mentorsUrl = `${environment.apiUrl}/mentors`
    currentMentor?: MentorDetail

    constructor(private httpClient: HttpClient) {}

    getMentorsList(): Observable<MentorDetail[]> {
        return this.httpClient.get<MentorDetail[]>(this.mentorsUrl).pipe(map((res) => res))
    }

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
