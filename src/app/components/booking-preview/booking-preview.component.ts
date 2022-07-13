import { Component, OnInit } from '@angular/core'
import Swal from 'sweetalert2'
import { Router } from '@angular/router'
import { BookingDetail, MentorDetail, BookingForm } from 'src/app/mentor'
import * as dayjs from 'dayjs'
import { BookingsService } from 'src/app/services/bookings.service'
import { HttpClient } from '@angular/common/http'
import { Location } from '@angular/common'
import { MentorsService } from 'src/app/services/mentors.service'
import { environment } from 'src/environments/environment'

@Component({
    selector: 'app-booking-preview',
    templateUrl: './booking-preview.component.html',
    styleUrls: ['./booking-preview.component.css'],
})
export class BookingPreviewComponent implements OnInit {
    bookingDetail!: BookingDetail
    mentorSelected!: MentorDetail
    expertise: string = ''
    dateTime: string = ''

    constructor(
        private router: Router,
        private bookingsService: BookingsService,
        private http: HttpClient,
        private location: Location,
        private mentorsService: MentorsService
    ) {}

    ngOnInit(): void {
        this.onLoading()
    }

    onLoading() {
        const serviceData = this.bookingsService.getCurrentBooking()
        if (!serviceData) this.router.navigateByUrl('')
        this.bookingDetail = this.bookingsService.getCurrentBooking()!
        this.mentorSelected = this.mentorsService.getCurrentMentor()!

        this.onLoadExpertise()
        this.onLoadDateTime()
    }

    onLoadExpertise() {
        let expertiseList = this.bookingDetail.expertise.slice()
        let lastExpertise = expertiseList.pop()
        if (expertiseList.length > 0) {
            this.expertise = expertiseList.join(', ') + ' and ' + lastExpertise
        } else {
            this.expertise = lastExpertise!
        }
    }

    onLoadDateTime() {
        let sessionDateTime = dayjs(this.bookingDetail.sessionDate).set('hour', dayjs(this.bookingDetail.sessionTime).hour()).set('minute', dayjs(this.bookingDetail.sessionTime).minute())
        this.dateTime = dayjs(sessionDateTime).format('D MMMM YYYY H:mm')
    }

    onReturn() {
        this.location.back()
    }

    //alert
    async on_submit() {
        let date = this.dateTime
        this.bookingDetail.sessionDate = dayjs(date).format('YYYY-MM-DDTHH:mm')
        let bookingForm: BookingForm = {
            userId: this.bookingDetail.userId,
            userFullName: this.bookingDetail.userFullName,
            userEmail: this.bookingDetail.userEmail,
            mentorId: this.bookingDetail.mentorId,
            mentorFullName: this.bookingDetail.mentorFullName,
            expertise: this.bookingDetail.expertise,
            reason: this.bookingDetail.reason,
            sessionDate: this.bookingDetail.sessionDate,
            sessionDuration: this.bookingDetail.sessionDuration
        }
        this.bookingsService.addBooking(bookingForm).subscribe((data) => {
            this.bookingsService.clearCurrentBooking()
            this.mentorsService.clearCurrentMentor()
        })
        this.send2Discord(bookingForm)
        await Swal.fire({
            icon: 'success',
            title: 'Thank you for your booking!',
        })
        this.router.navigateByUrl('home')
    }

    send2Discord(booking: BookingForm) {
        let body1 = {
            content: null,
            embeds: [
                {
                    title: 'ODDS Mentor',
                    url: 'http://159.138.240.167:8089/',
                    color: 1349845,
                    fields: [
                        {
                            name: 'Name',
                            value: booking.userFullName,
                        },
                        {
                            name: 'Email',
                            value: booking.userEmail,
                        },
                        {
                            name: 'Mentor Name',
                            value: booking.mentorFullName,
                        },
                        {
                            name: 'Expertise',
                            value: this.expertise,
                        },
                        {
                            name: 'Reason',
                            value: booking.reason,
                        },
                        {
                            name: 'Date and Time',
                            value: this.dateTime,
                        },
                        {
                            name: 'Duration',
                            value: booking.sessionDuration + ' mins',
                        },
                    ],
                    footer: {
                        text: 'from ODDS Mentor',
                        icon_url:
                            'https://cdn.discordapp.com/avatars/994429221705351338/e7a311c3d23bd94d1abcf22511a60089.png',
                    },
                    timestamp: new Date(),
                },
            ],
        }

        let body2 = {
            content: null,
            embeds: [
                {
                    title: 'ODDS Mentor',
                    url: 'http://159.138.240.167:8089/',
                    color: 1349845,
                    fields: [
                        {
                            name: 'Booking',
                            value: JSON.stringify(booking),
                        },
                    ],
                },
            ],
        }

        let headers = {
            'Content-Type': 'application/json',
        }

        this.http.post<any>(environment.discordUrl, body1, { headers }).subscribe((data) => {})
        this.http.post<any>(environment.discordUrl, body2, { headers }).subscribe((data) => {})
    }
}
