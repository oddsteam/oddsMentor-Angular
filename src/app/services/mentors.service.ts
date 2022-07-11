import { Injectable } from '@angular/core'
import { MentorDetail } from '../mentor'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
    providedIn: 'root',
})
export class MentorsService {
    private mentorsUrl = `${environment.apiUrl}/odds-api/v1/mentors`
    currentMentor?: MentorDetail

    constructor(private httpClient: HttpClient) {}

    httpOption = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    }

    getMentor(id: string): Observable<MentorDetail> {
        return this.httpClient
            .get<MentorDetail>(this.mentorsUrl + '/' + id, this.httpOption)
            .pipe(map((res) => res))
    }

    getMentorsList(): Observable<MentorDetail[]> {
        return this.httpClient
            .get<MentorDetail[]>(this.mentorsUrl, this.httpOption)
            .pipe(map((res) => res))
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
