import { Injectable } from '@angular/core'
import { BookingDetail, BookingRes, BookingForm } from '../mentor'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
    providedIn: 'root',
})
export class BookingsService {
    private bookingUrl = `${environment.apiUrl}/odds-api/v1/bookings`
    currentBooking?: BookingDetail

    constructor(private httpClient: HttpClient) {}

    httpOption = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    }

    addBooking(booking: BookingForm): Observable<string> {
        return this.httpClient
            .post<BookingRes>(this.bookingUrl, booking, this.httpOption)
            .pipe(map((res) => res.id))
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
