import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { MentorDetail } from 'src/app/mentor'
import { MentorsService } from 'src/app/services/mentors.service'

@Component({
    selector: 'app-personal',
    templateUrl: './personal.component.html',
    styleUrls: ['./personal.component.css'],
})
export class PersonalComponent implements OnInit {
    mentorDetail!: MentorDetail
    // mentorDetail: MentorDetail = {
    //     id: '3ca5697e-ffd4-47cd-abc4-cf1d00dcd6cb',
    //     fullNameEN: 'Nuntapong Siripanyawong',
    //     fullNameTH: 'นันทพงศ์ ศิริปัญญาวงศ์',
    //     nickname: 'Pat',
    //     profileImageUrl: '/assets/images/dome.jpeg',
    //     biography:
    //         "Hello, I'm Nantapong Siripanyawong. I'm a software developer. I'm currently working at Odd-e (Thailand) in Mola Mola team.",
    //     type: 'Cooperative Education 2022',
    //     team: 'Mola Mola',
    //     position: 'Backend Developer',
    //     totalEndorsed: 108,
    //     expertise: [
    //         {
    //             id: '1',
    //             skill: 'web wireframe',
    //             endorsed: 20,
    //         },
    //         {
    //             id: '2',
    //             skill: 'prototype',
    //             endorsed: 20,
    //         },
    //         {
    //             id: '3',
    //             skill: 'figma',
    //             endorsed: 14,
    //         },
    //         {
    //             id: '4',
    //             skill: 'Spring Boot',
    //             endorsed: 20,
    //         },
    //         {
    //             id: '5',
    //             skill: 'Express',
    //             endorsed: 20,
    //         },
    //         {
    //             id: '6',
    //             skill: 'Fastify',
    //             endorsed: 14,
    //         },
    //     ],
    //     createdAt: new Date('2022-04-20T04:21'),
    //     updatedAt: new Date('2022-04-21T04:21'),
    // }

    constructor(private router: Router, private mentorsService: MentorsService) {}

    ngOnInit(): void {
        const serviceData = this.mentorsService.getCurrentMentor()
        if (!serviceData) this.router.navigateByUrl('')
        this.mentorDetail = this.mentorsService.getCurrentMentor()!
    }

    handleClick() {
        this.router.navigateByUrl('booking')
    }
}
