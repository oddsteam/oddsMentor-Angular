import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Location } from '@angular/common'
import { BookingsService } from 'src/app/services/bookings.service'
import { MentorsService } from 'src/app/services/mentors.service'
import { BookingForm, Expertise, MentorDetail } from 'src/app/mentor'
import * as dayjs from 'dayjs'
import { MenuItem } from 'primeng/api'

interface Duration {
    label: string
    value: string
}

@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
    mentorSelected!: MentorDetail
    expertises: Expertise[] = []
    duration: Duration[] = this.onDurationLoad(15, 60, 15)
    minDate: Date = dayjs().add(1, 'day').toDate()
    maxDate: Date = dayjs().add(1, 'year').toDate()
    home: MenuItem = { icon: 'pi pi-home', routerLink: ['/home'] }
    items!: MenuItem[]

    bookingForm = new FormGroup(
        {
            userId: new FormControl('', [Validators.required]),
            userFullName: new FormControl('', [Validators.required]),
            userEmail: new FormControl('', [Validators.required, Validators.email]),
            mentorId: new FormControl('', [Validators.required]),
            mentorFullName: new FormControl('', [Validators.required]),
            expertise: new FormControl([''], [Validators.required]),
            reason: new FormControl('', [Validators.required]),
            sessionDate: new FormControl(dayjs().add(1, 'day').toDate(), [Validators.required]),
            sessionTime: new FormControl(dayjs(this.onTimeLoad()).format('hh:mm'), [Validators.required]),
            sessionDuration: new FormControl('', [Validators.required]),
        },
        Validators.required
    )

    constructor(
        private router: Router,
        private bookingsService: BookingsService,
        private location: Location,
        private mentorsService: MentorsService
    ) {}

    ngOnInit(): void {
        // get mentor data
        const serviceData = this.mentorsService.getCurrentMentor()
        if (!serviceData) this.router.navigateByUrl('')
        this.mentorSelected = this.mentorsService.getCurrentMentor()!
        // this.mentorSelected = {
        //     id: '62d62e8375580f72fd2b1450',
        //     fullNameEN: 'Phanuwat Phoowichai',
        //     fullNameTH: 'ภานุวัฒน์ ภูวิชัย',
        //     nickname: 'Taliw',
        //     type: 'Cooperative Education 2022',
        //     biography:
        //         "Hello, I'm Phanuwat Phoowichai. I'm a Software Developer. I'm currently working at Odd-e (Thailand) in Mola Mola team.",
        //     team: 'Mola Mola',
        //     position: 'Software Developer',
        //     profileImageUrl: 'https://phanx.ga/asset/taliw.jpg',
        //     totalEndorsed: 0,
        //     expertise: [
        //         { id: '62d62e3b75580f72fd2b1428', skill: 'HTML', endorsed: 0 },
        //         { id: '62d62e3b75580f72fd2b1429', skill: 'CSS', endorsed: 0 },
        //         { id: '62d62e3c75580f72fd2b142a', skill: 'JavaScript', endorsed: 0 },
        //         { id: '62d62e3c75580f72fd2b142b', skill: 'Java', endorsed: 0 },
        //         { id: '62d62e3d75580f72fd2b142c', skill: 'Python', endorsed: 0 },
        //         { id: '62d62e3d75580f72fd2b142d', skill: 'Assembly', endorsed: 0 },
        //         { id: '62d62e3e75580f72fd2b142e', skill: 'Dart', endorsed: 0 },
        //         { id: '62d62e3e75580f72fd2b142f', skill: 'Flutter', endorsed: 0 },
        //         { id: '62d62e3f75580f72fd2b1430', skill: 'Tailwind CSS', endorsed: 0 },
        //         { id: '62d62e3f75580f72fd2b1431', skill: 'Bootstrap', endorsed: 0 },
        //         { id: '62d62e3f75580f72fd2b1432', skill: 'Figma', endorsed: 0 },
        //     ],
        //     createdAt: dayjs('2022-07-19T11:09:39.045').toDate(),
        //     updatedAt: dayjs('2022-07-19T11:09:39.045').toDate(),
        // }

        this.expertises = this.mentorSelected.expertise.slice()
        this.expertises.sort((a, b) => a.skill.localeCompare(b.skill))

        const currentBooking = this.bookingsService.getCurrentBooking()
        if (currentBooking) {
            this.bookingForm.setValue({
                userId: currentBooking.userId,
                userFullName: currentBooking.userFullName,
                userEmail: currentBooking.userEmail,
                mentorId: currentBooking.mentorId,
                mentorFullName: currentBooking.mentorFullName,
                expertise: currentBooking.expertise,
                reason: currentBooking.reason,
                sessionDate: dayjs(currentBooking.sessionDate).toDate(),
                sessionTime: currentBooking.sessionTime,
                sessionDuration: currentBooking.sessionDuration,
            })
        } else {
            this.bookingForm.setValue({
                userId: '62c70dedf9c68f9f4d00cf40',
                userFullName: null,
                userEmail: null,
                mentorId: this.mentorSelected.id,
                mentorFullName: this.mentorSelected.fullNameEN,
                expertise: null,
                reason: null,
                sessionDate: dayjs().add(1, 'day').toDate(),
                sessionTime: dayjs(this.onTimeLoad()).format('hh:mm'),
                sessionDuration: null,
            })
        }

        this.items = [
            {
                label: 'Mentors',
                routerLink: ['/mentor'],
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
            },
        ]
    }

    handleBack() {
        this.mentorsService.clearCurrentMentor()
        this.bookingsService.clearCurrentBooking()
        this.location.back()
    }

    onSubmit() {
        let booking: BookingForm = this.bookingForm.value as unknown as BookingForm
        this.bookingsService.saveBooking(booking)
        this.router.navigateByUrl('preview')
    }

    onDurationLoad(startMin: number, endMin: number, stepMin: number): Duration[] {
        let durationSlot: Duration[] = []
        for (let i = startMin; i <= endMin; i += stepMin) {
            durationSlot.push({
                label: `${i} minutes`,
                value: `${i}`,
            })
        }
        return durationSlot
    }

    onTimeLoad(): Date {
        let currentDate = dayjs()
        let minute = dayjs(currentDate).minute()
        if (minute % 15 !== 0) {
            minute = minute - (minute % 15) + 15
        }
        let timeDefault =
            minute === 60
                ? dayjs(currentDate)
                    .hour(dayjs(currentDate).get('hour') + 1)
                    .minute(0)
                    .toDate()
                : dayjs(currentDate).minute(minute).toDate()
        return timeDefault
    }
}
