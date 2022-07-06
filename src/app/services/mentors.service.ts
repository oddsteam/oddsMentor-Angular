import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root',
})
export class MentorsService {
    constructor(private http: HttpClient) {}

    getData() {
        return this.http
            .get<any>('assets/expertise.json')
            .toPromise()
            .then((res) => <any[]>res.data)
            .then((data) => {
                return data
            })
    }
}
