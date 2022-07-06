import { Component, OnInit } from '@angular/core'
import { MentorsService } from 'src/app/services/mentors.service'

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
    // filteredExpertises: any[] = this.expertises
    selectedExpertises: any[] = []

    constructor() {}

    ngOnInit(): void {}

    // filterExpertises(event: any) {
    //     let filtered: any[] = []
    //     let query = event.query
    //     for (let i = 0; i < this.expertises.length; i++) {
    //         let expertise = this.expertises[i]
    //         if (expertise.skill.toLowerCase().indexOf(query.toLowerCase()) == 0) {
    //             filtered.push(expertise)
    //         }
    //     }
    //     this.filteredExpertises = filtered
    // }
}
