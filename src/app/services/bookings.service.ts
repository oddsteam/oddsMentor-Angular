import { Injectable } from '@angular/core'
import { BookingDetail, BookingRes } from '../mentor'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
    providedIn: 'root',
})
export class BookingsService {
    private bookingUrl = `${environment.apiUrl}/bookings`
    currentBooking?: BookingDetail

    constructor(private httpClient: HttpClient) {}

    addBooking(booking: BookingDetail): Observable<string> {
        return this.httpClient.post<BookingRes>(this.bookingUrl, booking).pipe(map((res) => res.id))
    }

    saveBooking(booking: BookingDetail) {
        this.currentBooking = booking
    }

    getCurrentBooking(): BookingDetail | undefined {
        return this.currentBooking
    }

    clearCurrentBooking() {
        this.currentBooking = undefined
    }
}
