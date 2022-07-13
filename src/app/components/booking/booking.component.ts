import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Location } from '@angular/common'
import { BookingsService } from 'src/app/services/bookings.service'
import { MentorsService } from 'src/app/services/mentors.service'
import { BookingDetail, Expertise, MentorDetail } from 'src/app/mentor'

interface Time {
    value: string
}

@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
    expertises: Expertise[] = []
    selectedExpertises: Expertise[] = []
    duration: string[] = ['15 mins', '30 mins', '45 mins', '1 hour']
    timesArray: Time[] = [
        {
            value: '0:00',
        },
        {
            value: '0:15',
        },
        {
            value: '0:30',
        },
        {
            value: '0:45',
        },
        {
            value: '1:00',
        },
        {
            value: '1:15',
        },
        {
            value: '1:30',
        },
        {
            value: '1:45',
        },
        {
            value: '2:00',
        },
        {
            value: '2:15',
        },
        {
            value: '2:30',
        },
        {
            value: '2:45',
        },
        {
            value: '3:00',
        },
        {
            value: '3:15',
        },
        {
            value: '3:30',
        },
        {
            value: '3:45',
        },
        {
            value: '4:00',
        },
        {
            value: '4:15',
        },
        {
            value: '4:30',
        },
        {
            value: '4:45',
        },
        {
            value: '5:00',
        },
        {
            value: '5:15',
        },
        {
            value: '5:30',
        },
        {
            value: '5:45',
        },
        {
            value: '6:00',
        },
        {
            value: '6:15',
        },
        {
            value: '6:30',
        },
        {
            value: '6:45',
        },
        {
            value: '7:00',
        },
        {
            value: '7:15',
        },
        {
            value: '7:30',
        },
        {
            value: '7:45',
        },
        {
            value: '8:00',
        },
        {
            value: '8:15',
        },
        {
            value: '8:30',
        },
        {
            value: '8:45',
        },
        {
            value: '9:00',
        },
        {
            value: '9:15',
        },
        {
            value: '9:30',
        },
        {
            value: '9:45',
        },
        {
            value: '10:00',
        },
        {
            value: '10:15',
        },
        {
            value: '10:30',
        },
        {
            value: '10:45',
        },
        {
            value: '11:00',
        },
        {
            value: '11:15',
        },
        {
            value: '11:30',
        },
        {
            value: '11:45',
        },
        {
            value: '12:00',
        },
        {
            value: '12:15',
        },
        {
            value: '12:30',
        },
        {
            value: '12:45',
        },
        {
            value: '13:00',
        },
        {
            value: '13:15',
        },
        {
            value: '13:30',
        },
        {
            value: '13:45',
        },
        {
            value: '14:00',
        },
        {
            value: '14:15',
        },
        {
            value: '14:30',
        },
        {
            value: '14:45',
        },
        {
            value: '15:00',
        },
        {
            value: '15:15',
        },
        {
            value: '15:30',
        },
        {
            value: '15:45',
        },
        {
            value: '16:00',
        },
        {
            value: '16:15',
        },
        {
            value: '16:30',
        },
        {
            value: '16:45',
        },
        {
            value: '17:00',
        },
        {
            value: '17:15',
        },
        {
            value: '17:30',
        },
        {
            value: '17:45',
        },
        {
            value: '18:00',
        },
        {
            value: '18:15',
        },
        {
            value: '18:30',
        },
        {
            value: '18:45',
        },
        {
            value: '19:00',
        },
        {
            value: '19:15',
        },
        {
            value: '19:30',
        },
        {
            value: '19:45',
        },
        {
            value: '20:00',
        },
        {
            value: '20:15',
        },
        {
            value: '20:30',
        },
        {
            value: '20:45',
        },
        {
            value: '21:00',
        },
        {
            value: '21:15',
        },
        {
            value: '21:30',
        },
        {
            value: '21:45',
        },
        {
            value: '22:00',
        },
        {
            value: '22:15',
        },
        {
            value: '22:30',
        },
        {
            value: '22:45',
        },
        {
            value: '23:00',
        },
        {
            value: '23:15',
        },
        {
            value: '23:30',
        },
        {
            value: '23:45',
        },
    ]
    selectedTime!: Time

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
        const serviceData = this.mentorsService.getCurrentMentor()
        // if (!serviceData) this.router.navigateByUrl('')
        // this.mentorSelected = this.mentorsService.getCurrentMentor()!

        if (!serviceData) {
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
                profileImageUrl:
                    'https://drive.google.com/uc?export=view&id=18SM8TbikJQt-RH2LdS_MbzGGod-dXHgx',
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
        } else {
            this.mentorSelected = this.mentorsService.getCurrentMentor()!
        }

        this.expertises = this.mentorSelected.expertise.slice()
        this.expertises.sort((a, b) => (a.skill).localeCompare(b.skill))

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
            // this.bookingForm.setValue({
            //     userId: '62c6ecc318a930d4ec607c39',
            //     userFullName: 'Phanuwat Phoowichai',
            //     userEmail: 'taliw_phanxz@odds.team',
            //     mentorId: this.mentorSelected.id,
            //     mentorFullName: this.mentorSelected.fullNameEN,
            //     expertise: [],
            //     reason: 'Developing a new product',
            //     sessionDate: '',
            //     sessionTime: '',
            //     sessionDuration: 60,
            // })

            // Default Data
            this.bookingForm.setValue({
                userId: '62c6ecc318a930d4ec607c39',
                userFullName: null,
                userEmail: null,
                mentorId: this.mentorSelected.id,
                mentorFullName: this.mentorSelected.fullNameEN,
                expertise: null,
                reason: null,
                sessionDate: null,
                sessionDuration: null,
            })
        }
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

    log() {
        console.log(this.bookingForm.value.expertise);
    }
}
