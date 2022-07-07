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
        this.send2Discord(this.bookingDetail)
        await Swal.fire({
            icon: 'success',
            title: 'Thank you for your booking!',
        })
        this.router.navigateByUrl('personal')
    }

    send2Discord(booking: BookingDetail) {
        let discordUrl =
            'https://discord.com/api/webhooks/994429221705351338/VJx4TreAciMRFJUH6pG4BRvHXgmKNmaVL51xs8vy77YlLza-k1r3m4YN9bIbAdvF2CY8'
        let body = {
            content: null,
            embeds: [
                {
                    title: 'ODDS Mentor',
                    url: 'http://159.138.240.167:8089/',
                    color: 1349845,
                    fields: [
                        {
                            name: 'Name',
                            value: booking.firstNameUser + ' ' + booking.lastNameUser,
                        },
                        {
                            name: 'Email',
                            value: booking.emailUser,
                        },
                        {
                            name: 'Mentor name',
                            value: booking.firstNameMentor + ' ' + booking.lastNameMentor,
                        },
                        {
                            name: 'Expertises',
                            value: this.expertise,
                        },
                        {
                            name: 'Reason',
                            value: booking.reason,
                        },
                        {
                            name: 'Date and Time',
                            value: [booking.bookingDate.getDate(), booking.bookingDate.getMonth() + 1, booking.bookingDate.getFullYear()].join('/') + ' ' + booking.bookingTime.getHours() + ':' + booking.bookingTime.getMinutes(),
                        },
                        {
                            name: 'Duration',
                            value: booking.duration.time + ' mins',
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

        let headers = {
            'Content-Type': 'application/json',
        }

        this.http.post<any>(discordUrl, body, { headers }).subscribe((data) => {
            console.log(data)
        })
    }
}
