import { Component, OnInit } from '@angular/core'
import Swal from 'sweetalert2'
import { Router } from '@angular/router'
import { BookingDetail } from 'src/app/mentor'
import * as dayjs from 'dayjs'
import { BookingsService } from 'src/app/services/bookings.service'
import { HttpClient } from '@angular/common/http'
import { Location } from '@angular/common'

@Component({
    selector: 'app-booking-preview',
    templateUrl: './booking-preview.component.html',
    styleUrls: ['./booking-preview.component.css'],
})
export class BookingPreviewComponent implements OnInit {
    bookingDetail!: BookingDetail
    expertise: string = ''
    dateTime: string = ''

    constructor(
        private router: Router,
        private bookingsService: BookingsService,
        private http: HttpClient,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.onLoading()
    }

    onLoading() {
        const serviceData = this.bookingsService.getCurrentBooking()
        if (!serviceData) this.router.navigateByUrl('')
        this.bookingDetail = this.bookingsService.getCurrentBooking()!

        this.onLoadExpertise()
        this.onLoadDateTime()

        console.log(this.bookingDetail)
    }

    onLoadExpertise() {
        let expertiseList = this.bookingDetail.expertise
        let lastExpertise = expertiseList.pop()
        this.expertise = expertiseList.join(', ') + ' and ' + lastExpertise
    }

    onLoadDateTime() {
        let sessionDate = this.bookingDetail.sessionDate
        this.dateTime = dayjs(sessionDate).format('D MMMM YYYY H:mm')
    }

    onReturn() {
        this.location.back()
    }

    //alert
    async on_submit() {
        await this.bookingsService.addBooking(this.bookingDetail).subscribe((data) => {
            this.bookingsService.clearCurrentBooking()
        })
        // this.send2Discord(this.bookingDetail)
        await Swal.fire({
            icon: 'success',
            title: 'Thank you for your booking!',
        })
        this.router.navigateByUrl('home')
    }
}
