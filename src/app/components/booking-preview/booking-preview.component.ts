import { Component, OnInit } from '@angular/core'
import Swal from 'sweetalert2'
import { Router } from '@angular/router'
import { BookingForm, MentorDetail, BookingRequest } from 'src/app/mentor'
import * as dayjs from 'dayjs'
import { BookingsService } from 'src/app/services/bookings.service'
import { HttpClient } from '@angular/common/http'
import { Location } from '@angular/common'
import { MentorsService } from 'src/app/services/mentors.service'
import { environment } from 'src/environments/environment'
import { MenuItem } from 'primeng/api'

@Component({
    selector: 'app-booking-preview',
    templateUrl: './booking-preview.component.html',
    styleUrls: ['./booking-preview.component.css'],
})
export class BookingPreviewComponent implements OnInit {
    bookingDetail!: BookingForm
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
            }
        ]
    }

    onLoading() {
        // const serviceData = this.bookingsService.getCurrentBooking()
        // if (!serviceData) this.router.navigateByUrl('')
        // this.bookingDetail = this.bookingsService.getCurrentBooking()!
        // this.mentorSelected = this.mentorsService.getCurrentMentor()!

        this.bookingDetail = {
            userId: '62c70dedf9c68f9f4d00cf40',
            userFullName: 'Panupan Saeleang',
            userEmail: 'example@odds.team',
            mentorId: 'sfsdfsdf',
            mentorFullName: 'Anuchit Saphankeaw',
            expertise: ['A', 'B'],
            reason: "Rea ea son",
            sessionDate: '2022-07-19T11:09:39.045',
            sessionTime: '2022-07-19T11:09:39.045',
            sessionDuration: '15',
        }
        this.mentorSelected = {
            id: '62d62e8375580f72fd2b1450',
            fullNameEN: 'Phanuwat Phoowichai',
            fullNameTH: 'ภานุวัฒน์ ภูวิชัย',
            nickname: 'Taliw',
            type: 'Cooperative Education 2022',
            biography:
                "Hello, I'm Phanuwat Phoowichai. I'm a Software Developer. I'm currently working at Odd-e (Thailand) in Mola Mola team.",
            team: 'Mola Mola',
            position: 'Software Developer',
            profileImageUrl: 'https://phanx.ga/asset/taliw.jpg',
            totalEndorsed: 0,
            expertise: [
                { id: '62d62e3b75580f72fd2b1428', skill: 'HTML', endorsed: 0 },
                { id: '62d62e3b75580f72fd2b1429', skill: 'CSS', endorsed: 0 },
                { id: '62d62e3c75580f72fd2b142a', skill: 'JavaScript', endorsed: 0 },
                { id: '62d62e3c75580f72fd2b142b', skill: 'Java', endorsed: 0 },
                { id: '62d62e3d75580f72fd2b142c', skill: 'Python', endorsed: 0 },
                { id: '62d62e3d75580f72fd2b142d', skill: 'Assembly', endorsed: 0 },
                { id: '62d62e3e75580f72fd2b142e', skill: 'Dart', endorsed: 0 },
                { id: '62d62e3e75580f72fd2b142f', skill: 'Flutter', endorsed: 0 },
                { id: '62d62e3f75580f72fd2b1430', skill: 'Tailwind CSS', endorsed: 0 },
                { id: '62d62e3f75580f72fd2b1431', skill: 'Bootstrap', endorsed: 0 },
                { id: '62d62e3f75580f72fd2b1432', skill: 'Figma', endorsed: 0 },
            ],
            createdAt: dayjs('2022-07-19T11:09:39.045').toDate(),
            updatedAt: dayjs('2022-07-19T11:09:39.045').toDate(),
        }

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
            .set('hour', dayjs(this.bookingDetail.sessionTime).hour())
            .set('minute', dayjs(this.bookingDetail.sessionTime).minute())
        this.dateTime = dayjs(sessionDateTime).format('D MMMM YYYY H:mm')
    }

    onReturn() {
        this.location.back()
    }

    //alert
    async on_submit() {
        let date = this.dateTime
        this.bookingDetail.sessionDate = dayjs(date).format('YYYY-MM-DDTHH:mm')
        let bookingForm: BookingRequest = {
            userId: this.bookingDetail.userId,
            userFullName: this.bookingDetail.userFullName,
            userEmail: this.bookingDetail.userEmail,
            mentorId: this.bookingDetail.mentorId,
            mentorFullName: this.bookingDetail.mentorFullName,
            expertise: this.bookingDetail.expertise,
            reason: this.bookingDetail.reason,
            sessionDate: this.bookingDetail.sessionDate,
            sessionDuration: parseInt(this.bookingDetail.sessionDuration),
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

    send2Discord(booking: BookingRequest) {
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
