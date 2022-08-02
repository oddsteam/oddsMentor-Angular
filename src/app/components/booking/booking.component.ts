import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Location } from '@angular/common'
import { BookingsService } from 'src/app/services/bookings/bookings.service'
import { MentorsService } from 'src/app/services/mentors/mentors.service'
import { Expertise, MentorDetail } from '../../types/mentor'
import * as dayjs from 'dayjs'
import { MenuItem } from 'primeng/api'
import { BookingRequest } from 'src/app/types/booking'

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
            sessionDuration: new FormControl(0, [Validators.required]),
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
        this.bookingsService.saveBooking(this.bookingForm.value as BookingRequest)
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
