import { Component, OnInit } from '@angular/core'
import Swal from 'sweetalert2'
import { Router } from '@angular/router'
import { MentorsService } from 'src/app/services/mentors.service'
import { BookingDetail } from 'src/app/mentor'

@Component({
    selector: 'app-booking-preview',
    templateUrl: './booking-preview.component.html',
    styleUrls: ['./booking-preview.component.css'],
})
export class BookingPreviewComponent implements OnInit {
    bookingDetail!: BookingDetail
    
    constructor(private router: Router, private mentorsService: MentorsService) { }

    ngOnInit(): void {
        this.onLoading()
    }

    onLoading() {
        const serviceData = this.mentorsService.getCurrentBooking()
        if (!serviceData) this.router.navigateByUrl('')
        this.bookingDetail = this.mentorsService.getCurrentBooking()!
        console.log(this.bookingDetail)
    }

    //alert
    async on_submit() {
        await Swal.fire({
            icon: 'success',
            title: 'Thank you for your booking!'
        })
        this.router.navigateByUrl('personal')
    }
}