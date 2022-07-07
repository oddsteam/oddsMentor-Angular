import { Injectable } from '@angular/core';
import { BookingDetail, BookingRes } from '../mentor'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  private bookingUrl = ''
  currentBooking?: BookingDetail

  constructor(private httpClient: HttpClient) { }

  httpOption = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }

  addBooking(booking: BookingDetail): Observable<string> {
      return this.httpClient
          .post<BookingRes>(this.bookingUrl, booking)
          .pipe(map((res) => res.id))
  }

  saveBooking(booking: BookingDetail | any) {
      this.currentBooking = booking
  }

  getCurrentBooking(): BookingDetail | undefined {
      return this.currentBooking
  }

  clearCurrentBooking() {
      this.currentBooking = undefined
  }
}
