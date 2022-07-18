import { Injectable } from '@angular/core'
import { BookingForm, BookingResponse, BookingRequest } from '../mentor'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
    providedIn: 'root',
})
export class BookingsService {
    private bookingUrl = `${environment.apiUrl}/odds-api/v1/bookings`
    currentBooking?: BookingForm

    constructor(private httpClient: HttpClient) {}

    httpOption = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    }

    addBooking(booking: BookingRequest): Observable<string> {
        return this.httpClient
            .post<BookingResponse>(this.bookingUrl, booking, this.httpOption)
            .pipe(map((res) => res.id))
    }

    saveBooking(booking: BookingForm) {
        this.currentBooking = booking
    }

    getCurrentBooking(): BookingForm | undefined {
        return this.currentBooking
    }

    clearCurrentBooking() {
        this.currentBooking = undefined
    }
}
