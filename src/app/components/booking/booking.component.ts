import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core'
import { MentorsService } from 'src/app/services/mentors.service'

interface Times{
    times: number
}

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
    
    date: Date = new Date();
    time: Date = new Date();
    duration: Times[];
    durationTime: Times[] = [];

    constructor() {
        this.duration = [
            {times:30},
            {times:45},
            {times:60},
        ];
    }

    ngOnInit(): void {
    }

}
