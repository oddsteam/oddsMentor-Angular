import { Injectable } from '@angular/core'
import { BookingResponse, BookingRequest } from '../../types/booking'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
    providedIn: 'root',
})
export class BookingsService {
    private bookingUrl = `${environment.apiUrl}/odds-api/v1/bookings`
    currentBooking?: BookingRequest

    constructor(private httpClient: HttpClient) {}

    httpOption = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    }

    addBooking(booking: Omit<BookingRequest, "sessionTime">): Observable<string> {
        return this.httpClient
            .post<BookingResponse>(this.bookingUrl, booking, this.httpOption)
            .pipe(map((res) => res.id))
    }

    saveBooking(booking: BookingRequest) {
        this.currentBooking = booking
    }

    getCurrentBooking(): BookingRequest | undefined {
        return this.currentBooking
    }

    clearCurrentBooking() {
        this.currentBooking = undefined
    }
}
