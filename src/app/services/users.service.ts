import { Injectable } from '@angular/core'
import { MentorDetail } from '../mentor'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    private mentorsUrl = `${environment.apiUrl}/users`
    constructor(private httpClient: HttpClient) {}

    httpOption = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    }

    getUser(id: string): Observable<MentorDetail> {
        return this.httpClient.get<MentorDetail>(this.mentorsUrl + '/' + id, this.httpOption).pipe(map((res) => res))
    }
}
