import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Location } from '@angular/common'
import { BookingsService } from 'src/app/services/bookings.service'

@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
    expertises: string[] = [
        'web wireframe',
        'prototype',
        'figma',
        'Spring Boot',
        'Express',
        'Fastify',
    ]

    selectedExpertises: any[] = []
    duration: number[] = [30, 45, 60]
    isConfirm: boolean = false

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

    constructor(
        private router: Router,
        private bookingsService: BookingsService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.bookingForm.setValue({
            userId: '',
            userFullName: 'Phanuwat Phoowichai',
            userEmail: 'taliw_phanxz@odds.team',
            mentorId: '',
            mentorFullName: 'Chandara Sin',
            expertise: [],
            reason: 'Developing a new product',
            sessionDate: '',
            sessionDuration: 60,
        })
    }

    handleNext() {
        this.router.navigateByUrl('preview')
    }
    handleBack() {
        if (this.isConfirm) {
            this.bookingsService.clearCurrentBooking()
        }
        this.location.back()
    }

    onSubmit() {
        this.bookingsService.saveBooking(this.bookingForm.value)
        console.log('BookingForm in Booking Pg.')
        console.log(this.bookingForm.value)
        this.router.navigateByUrl('preview')
    }
}
