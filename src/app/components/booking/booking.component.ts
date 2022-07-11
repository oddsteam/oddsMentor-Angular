import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Location } from '@angular/common'
import { BookingsService } from 'src/app/services/bookings.service'
import { MentorsService } from 'src/app/services/mentors.service'
import { BookingDetail, MentorDetail } from 'src/app/mentor'

@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
    expertises: string[] = []
    selectedExpertises: string[] = []
    duration: number[] = [30, 45, 60]

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
            sessionDuration: new FormControl(0, [Validators.required]),
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
        // const serviceData = this.mentorsService.getCurrentMentor()
        // if (!serviceData) this.router.navigateByUrl('')
        // this.mentorSelected = this.mentorsService.getCurrentMentor()!

        this.mentorSelected = {
            id: '62c70dedf9c68f9f4d00cf40',
            fullNameEN: 'Chandara Sin',
            fullNameTH: 'จันทร์ดารา ซิน',
            nickname: 'โดม',
            type: 'Cooperative Education 2022',
            biography:
                "Hello, I'm Chandara Sin. I'm a software developer. I'm currently working at Odd-e (Thailand) in Mola Mola team.",
            team: 'Molamola',
            position: 'Software Developer',
            profileImageUrl: 'http://159.138.240.167:8089/assets/images/dome.jpeg',
            totalEndorsed: 0,
            expertise: [
                {
                    id: '62c5b2004743e83ab91f2a26',
                    skill: 'JavaScript',
                    endorsed: 0,
                },
                {
                    id: '62c65c85020d0f6ecbdc58a5',
                    skill: 'Java',
                    endorsed: 0,
                },
            ],
        }

        this.mentorSelected.expertise.forEach((expertise) => {
            this.expertises.push(expertise.skill)
        })
        this.expertises.sort((a, b) => a.localeCompare(b))

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
                sessionDuration: currentBooking.sessionDuration,
            })
        } else {
            // Data Mockup
            this.bookingForm.setValue({
                userId: '62c6ecc318a930d4ec607c39',
                userFullName: 'Phanuwat Phoowichai',
                userEmail: 'taliw_phanxz@odds.team',
                mentorId: this.mentorSelected.id,
                mentorFullName: this.mentorSelected.fullNameEN,
                expertise: [],
                reason: 'Developing a new product',
                sessionDate: '',
                sessionDuration: 60,
            })

            // Default Data
            // this.bookingForm.setValue({
            //     userId: '62c6ecc318a930d4ec607c39',
            //     userFullName: '',
            //     userEmail: '',
            //     mentorId: this.mentorSelected.id,
            //     mentorFullName: this.mentorSelected.fullNameEN,
            //     expertise: [],
            //     reason: '',
            //     sessionDate: '',
            //     sessionDuration: null,
            // })
        }
    }

    handleNext() {
        this.router.navigateByUrl('preview')
    }

    handleBack() {
        this.mentorsService.clearCurrentMentor()
        this.location.back()
    }

    onSubmit() {
        let booking: BookingDetail = this.bookingForm.value as unknown as BookingDetail
        this.bookingsService.saveBooking(booking)
        // this.bookingsService.saveBooking(this.bookingForm.value)
        this.router.navigateByUrl('preview')
    }
}
