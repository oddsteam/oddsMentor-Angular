import { Injectable } from '@angular/core'
import { BookingDetail } from '../mentor'

@Injectable({
    providedIn: 'root',
})
export class MentorsService {
    constructor() {}

    currentBooking?: BookingDetail

    saveBooking(booking: BookingDetail|any) {
        this.currentBooking = booking
    }

    getCurrentBooking(): BookingDetail | undefined {
        return this.currentBooking
    }

    clearCurrentBooking() {
        this.currentBooking = undefined
    }
    
}
