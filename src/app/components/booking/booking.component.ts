import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Location } from '@angular/common'
import { BookingsService } from 'src/app/services/bookings.service'
import { MentorsService } from 'src/app/services/mentors.service'
import { MentorDetail } from 'src/app/mentor'

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
            userEmail: new FormControl('', [Validators.required]),
            mentorId: new FormControl('', [Validators.required]),
            mentorFullName: new FormControl('', [Validators.required]),
            expertise: new FormControl([], [Validators.required]),
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
        const serviceData = this.mentorsService.getCurrentMentor()
        if (!serviceData) this.router.navigateByUrl('')
        this.mentorSelected = this.mentorsService.getCurrentMentor()!
        this.mentorSelected.expertise.forEach((expertise) => {
            this.expertises.push(expertise.skill)
        })

        // Data Mockup
        // this.bookingForm.setValue({
        //     userId: 'kku-623040140-8',
        //     userFullName: 'Phanuwat Phoowichai',
        //     userEmail: 'taliw_phanxz@odds.team',
        //     mentorId: this.mentorSelected.id,
        //     mentorFullName: this.mentorSelected.fullNameEN,
        //     expertise: [],
        //     reason: 'Developing a new product',
        //     sessionDate: '',
        //     sessionDuration: 60,
        // })

        // Default Data
        this.bookingForm.setValue({
            userId: '',
            userFullName: '',
            userEmail: '',
            mentorId: this.mentorSelected.id,
            mentorFullName: this.mentorSelected.fullNameEN,
            expertise: [],
            reason: '',
            sessionDate: '',
            sessionDuration: null,
        })
    }

    handleNext() {
        this.router.navigateByUrl('preview')
    }

    handleBack() {
        this.mentorsService.clearCurrentMentor()
        this.location.back()
    }

    onSubmit() {
        this.bookingsService.saveBooking(this.bookingForm.value)
        this.router.navigateByUrl('preview')
    }
}
