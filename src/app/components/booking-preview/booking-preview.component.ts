import { Component, OnInit } from '@angular/core'
import Swal from 'sweetalert2'
import { Router } from '@angular/router'
import { MentorsService } from 'src/app/services/mentors.service'
import { BookingDetail } from 'src/app/mentor'
import { HttpClient } from '@angular/common/http'

@Component({
    selector: 'app-booking-preview',
    templateUrl: './booking-preview.component.html',
    styleUrls: ['./booking-preview.component.css'],
})
export class BookingPreviewComponent implements OnInit {
    bookingDetail!: BookingDetail
    expertise: string = ''

    constructor(
        private router: Router,
        private mentorsService: MentorsService,
        private http: HttpClient
    ) {}

    ngOnInit(): void {
        this.onLoading()
    }

    onLoading() {
        const serviceData = this.mentorsService.getCurrentBooking()
        if (!serviceData) this.router.navigateByUrl('')
        this.bookingDetail = this.mentorsService.getCurrentBooking()!
        console.log(this.bookingDetail)

        let expertiseList: string[] = []
        this.bookingDetail.expertise.forEach((expertise) => {
            expertiseList.push(expertise.skill)
        })
        let lastExpertise = expertiseList.pop()
        this.expertise = expertiseList.join(', ') + ' and ' + lastExpertise
        console.log(this.expertise)
    }

    //alert
    async on_submit() {
        // this.send2Discord(this.bookingDetail)
        await Swal.fire({
            icon: 'success',
            title: 'Thank you for your booking!',
        })
        this.router.navigateByUrl('personal')
    }
}
