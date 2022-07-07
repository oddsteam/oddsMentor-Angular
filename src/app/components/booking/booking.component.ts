import { Component, OnInit } from '@angular/core'
import { MentorsService } from 'src/app/services/mentors.service'
import { Router } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { BookingDetail, Time, Expertise } from 'src/app/mentor'

@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
    expertises: any[] = [
        {
            skill: 'web wireframe',
            endorsed: 20,
        },
        {
            skill: 'prototype',
            endorsed: 20,
        },
        {
            skill: 'figma',
            endorsed: 14,
        },
        {
            skill: 'Spring Boot',
            endorsed: 20,
        },
        {
            skill: 'Express',
            endorsed: 20,
        },
        {
            skill: 'Fastify',
            endorsed: 14,
        },
    ]

    selectedExpertises: any[] = []

    duration: Time[] = [{ time: 30 }, { time: 45 }, { time: 60 }]

    bookingForm = new FormGroup(
        {
            firstNameUser: new FormControl('', [Validators.required]),
            lastNameUser: new FormControl('', [Validators.required]),
            emailUser: new FormControl('', [Validators.required]),
            firstNameMentor: new FormControl('', [Validators.required]),
            lastNameMentor: new FormControl('', [Validators.required]),
            expertise: new FormControl([], [Validators.required]),
            reason: new FormControl('', [Validators.required]),
            bookingDate: new FormControl('', [Validators.required]),
            bookingTime: new FormControl('', [Validators.required]),
            duration: new FormControl('', [Validators.required]),
        },
        Validators.required
    )

    constructor(private router: Router, private mentorService: MentorsService) {}

    ngOnInit(): void {
        // this.bookingForm.setValue({
        //     firstNameUser: 'Kelvin',
        //     lastNameUser: 'Mola',
        //     emailUser: 'kelvin@odds.team',
        //     firstNameMentor: 'Nuntapong',
        //     lastNameMentor: 'Siripantawong',
        //     expertise: [],
        //     reason: 'Development ODDS Menter',
        //     bookingDate: '',
        //     bookingTime: '',
        //     duration: '',
        // })
    }

    handleNext() {
        this.router.navigateByUrl('preview')
    }
    handleBack() {
        this.router.navigateByUrl('personal')
    }

    onSubmit() {
        this.mentorService.saveBooking(this.bookingForm.value)
        this.router.navigateByUrl('preview')
    }
}
