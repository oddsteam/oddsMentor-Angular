import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Location } from '@angular/common'
import { BookingsService } from 'src/app/services/bookings.service'
import { MentorsService } from 'src/app/services/mentors.service'
import { BookingForm, Expertise, MentorDetail } from 'src/app/mentor'
import * as dayjs from 'dayjs'
import { map } from 'rxjs'

interface Time {
    value: string
}

@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.css', '../../styles/colors.css'],
})
export class BookingComponent implements OnInit {
    expertises: Expertise[] = []
    duration: string[] = ['15 mins', '30 mins', '45 mins', '1 hour']
    timesArray: Time[] = []
    defaultDate: Date = this.onTimeLoad()
    minDate: Date = dayjs().add(1, 'week').toDate()

    bookingForm = new FormGroup(
        {
            userId: new FormControl('', [Validators.required]),
            userFullName: new FormControl('', [Validators.required]),
            userEmail: new FormControl('', [Validators.required, Validators.email]),
            mentorId: new FormControl('', [Validators.required]),
            mentorFullName: new FormControl('', [Validators.required]),
            expertise: new FormControl([''], [Validators.required]),
            reason: new FormControl('', [Validators.required]),
            sessionDate: new FormControl('', [Validators.required]),
            sessionTime: new FormControl('', [Validators.required]),
            sessionDuration: new FormControl('', [Validators.required]),
        },
        Validators.required
    )

    mentorSelected!: MentorDetail

    constructor(
        private router: Router,
        private bookingsService: BookingsService,
        private location: Location,
        private mentorsService: MentorsService
    ) {}

    ngOnInit(): void {
        // get mentor data
        const serviceData = this.mentorsService.getCurrentMentor()
        // if (!serviceData) this.router.navigateByUrl('')
        // this.mentorSelected = this.mentorsService.getCurrentMentor()!
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
                {
                    id: '62d62e3b75580f72fd2b1428',
                    skill: 'HTML',
                    endorsed: 0,
                },
                {
                    id: '62d62e3b75580f72fd2b1429',
                    skill: 'CSS',
                    endorsed: 0,
                },
                {
                    id: '62d62e3c75580f72fd2b142a',
                    skill: 'JavaScript',
                    endorsed: 0,
                },
                {
                    id: '62d62e3c75580f72fd2b142b',
                    skill: 'Java',
                    endorsed: 0,
                },
                {
                    id: '62d62e3d75580f72fd2b142c',
                    skill: 'Python',
                    endorsed: 0,
                },
                {
                    id: '62d62e3d75580f72fd2b142d',
                    skill: 'Assembly',
                    endorsed: 0,
                },
                {
                    id: '62d62e3e75580f72fd2b142e',
                    skill: 'Dart',
                    endorsed: 0,
                },
                {
                    id: '62d62e3e75580f72fd2b142f',
                    skill: 'Flutter',
                    endorsed: 0,
                },
                {
                    id: '62d62e3f75580f72fd2b1430',
                    skill: 'Tailwind CSS',
                    endorsed: 0,
                },
                {
                    id: '62d62e3f75580f72fd2b1431',
                    skill: 'Bootstrap',
                    endorsed: 0,
                },
                {
                    id: '62d62e3f75580f72fd2b1432',
                    skill: 'Figma',
                    endorsed: 0,
                },
            ],
        }

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
                sessionDate: currentBooking.sessionDate,
                sessionTime: currentBooking.sessionTime,
                sessionDuration: currentBooking.sessionDuration,
            })
        } else {
            // Data Mockup
            // this.bookingForm.setValue({
            //     userId: '62c70dedf9c68f9f4d00cf40',
            //     userFullName: 'Phanuwat Phoowichai',
            //     userEmail: 'taliw_phanxz@odds.team',
            //     mentorId: this.mentorSelected.id,
            //     mentorFullName: this.mentorSelected.fullNameEN,
            //     expertise: null,
            //     reason: null,
            //     sessionDate: null,
            //     sessionTime: null,
            //     sessionDuration: null,
            // })

            // Default Data
            this.bookingForm.setValue({
                userId: '62c70dedf9c68f9f4d00cf40',
                userFullName: null,
                userEmail: null,
                mentorId: this.mentorSelected.id,
                mentorFullName: this.mentorSelected.fullNameEN,
                expertise: null,
                reason: null,
                sessionDate: null,
                sessionTime: null,
                sessionDuration: null,
            })
        }

        this.bookingForm
            .get('reason')
            ?.valueChanges.pipe(map((v) => v!.trimStart()))
            .subscribe((v) => this.bookingForm.get('reason')?.setValue(v, { emitEvent: false }))
    }

    handleBack() {
        this.mentorsService.clearCurrentMentor()
        this.location.back()
    }

    onSubmit() {
        let booking: BookingForm = this.bookingForm.value as unknown as BookingForm
        this.bookingsService.saveBooking(booking)
        this.router.navigateByUrl('preview')
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
