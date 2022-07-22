import { Component, OnInit } from '@angular/core'
import Swal from 'sweetalert2'
import { Router } from '@angular/router'
import { BookingRequest } from '../../types/booking'
import { MentorDetail } from '../../types/mentor'
import * as dayjs from 'dayjs'
import { BookingsService } from 'src/app/services/bookings/bookings.service'
import { HttpClient } from '@angular/common/http'
import { Location } from '@angular/common'
import { MentorsService } from 'src/app/services/mentors/mentors.service'
import { environment } from 'src/environments/environment'
import { MenuItem } from 'primeng/api'

@Component({
    selector: 'app-booking-preview',
    templateUrl: './booking-preview.component.html',
    styleUrls: ['./booking-preview.component.css'],
})
export class BookingPreviewComponent implements OnInit {
    bookingDetail!: BookingRequest
    mentorSelected!: MentorDetail
    expertise: string = ''
    dateTime: string = ''
    home: MenuItem = { icon: 'pi pi-home', routerLink: ['/home'] }
    items!: MenuItem[]

    constructor(
        private router: Router,
        private bookingsService: BookingsService,
        private http: HttpClient,
        private location: Location,
        private mentorsService: MentorsService
    ) {}

    ngOnInit(): void {
        this.onLoading()

        this.items = [
            {
                label: 'Mentors',
                routerLink: ['/mentor'],
                visible: true,
            },
            {
                label: 'Personal',
                command: () => {
                    this.mentorsService.clearCurrentMentor()
                    this.location.back()
                },
            },
            {
                label: 'Reserve',
                routerLink: ['/booking'],
            },
            {
                label: 'Confirmation',
            },
        ]
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
        let sessionDateTime = dayjs(this.bookingDetail.sessionDate)
        this.dateTime = `${dayjs(sessionDateTime).format('D MMMM YYYY')} ${this.bookingDetail.sessionTime}`
    }

    onReturn() {
        this.location.back()
    }

    //alert
    async on_submit() {
        this.bookingDetail.sessionDate = dayjs(this.dateTime).toDate()
        this.bookingsService.addBooking(this.bookingDetail).subscribe((data) => {
            this.bookingsService.clearCurrentBooking()
            this.mentorsService.clearCurrentMentor()
        })
        this.send2Discord(this.bookingDetail)
        await Swal.fire({
            icon: 'success',
            title: 'Thank you for your booking!',
        })
        this.router.navigateByUrl('home')
    }

    send2Discord(booking: Omit<BookingRequest, 'sessionTime'>) {
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
