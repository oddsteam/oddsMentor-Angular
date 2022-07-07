import { Component, OnInit } from '@angular/core'
import { MentorDetail } from 'src/app/mentor'
import { Router } from '@angular/router'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    postData: any

    constructor(private router: Router) {}

    ngOnInit(): void {}

    mentors: MentorDetail[] = [
        {
            id: '3ca5697e-ffd4-47cd-abc4-cf1d00dcd6cb',
            fullNameEN: 'Nuntapong Siripanyawong',
            fullNameTH: 'นันทพงศ์ ศิริปัญญาวงศ์',
            nickname: 'Pat1',
            profileImageUrl: '/assets/images/dome.jpeg',
            biography:
                "Hello, I'm Nantapong Siripanyawong. I'm a software developer. I'm currently working at Odd-e (Thailand) in Mola Mola team.",
            type: 'Cooperative Education 2022',
            team: 'Mola Mola',
            position: 'Backend Developer',
            totalEndorsed: 108,
            expertise: [
                {
                    id: '1',
                    skill: 'web wireframe',
                    endorsed: 20,
                },
                {
                    id: '2',
                    skill: 'prototype',
                    endorsed: 20,
                },
                {
                    id: '3',
                    skill: 'figma',
                    endorsed: 14,
                },
                {
                    id: '4',
                    skill: 'Spring Boot',
                    endorsed: 20,
                },
                {
                    id: '5',
                    skill: 'Express',
                    endorsed: 20,
                },
                {
                    id: '6',
                    skill: 'Fastify',
                    endorsed: 14,
                },
            ],
            createdAt: new Date('2022-04-20T04:21'),
            updatedAt: new Date('2022-04-21T04:21'),
        },
        {
            id: '3ca5697e-ffd4-47cd-abc4-cf1d00dcd6cb',
            fullNameEN: 'Nuntapong Siripanyawong',
            fullNameTH: 'นันทพงศ์ ศิริปัญญาวงศ์',
            nickname: 'Pat2',
            profileImageUrl: '/assets/images/dome.jpeg',
            biography:
                "Hello, I'm Nantapong Siripanyawong. I'm a software developer. I'm currently working at Odd-e (Thailand) in Mola Mola team.",
            type: 'Cooperative Education 2022',
            team: 'Mola Mola',
            position: 'Backend Developer',
            totalEndorsed: 108,
            expertise: [
                {
                    id: '1',
                    skill: 'web wireframe',
                    endorsed: 20,
                },
                {
                    id: '2',
                    skill: 'prototype',
                    endorsed: 20,
                },
                {
                    id: '3',
                    skill: 'figma',
                    endorsed: 14,
                },
                {
                    id: '4',
                    skill: 'Spring Boot',
                    endorsed: 20,
                },
                {
                    id: '5',
                    skill: 'Express',
                    endorsed: 20,
                },
                {
                    id: '6',
                    skill: 'Fastify',
                    endorsed: 14,
                },
            ],
            createdAt: new Date('2022-04-20T04:21'),
            updatedAt: new Date('2022-04-21T04:21'),
        },
        {
            id: '3ca5697e-ffd4-47cd-abc4-cf1d00dcd6cb',
            fullNameEN: 'Nuntapong Siripanyawong',
            fullNameTH: 'นันทพงศ์ ศิริปัญญาวงศ์',
            nickname: 'Pat3',
            profileImageUrl: '/assets/images/dome.jpeg',
            biography:
                "Hello, I'm Nantapong Siripanyawong. I'm a software developer. I'm currently working at Odd-e (Thailand) in Mola Mola team.",
            type: 'Cooperative Education 2022',
            team: 'Mola Mola',
            position: 'Backend Developer',
            totalEndorsed: 108,
            expertise: [
                {
                    id: '1',
                    skill: 'web wireframe',
                    endorsed: 20,
                },
                {
                    id: '2',
                    skill: 'prototype',
                    endorsed: 20,
                },
                {
                    id: '3',
                    skill: 'figma',
                    endorsed: 14,
                },
                {
                    id: '4',
                    skill: 'Spring Boot',
                    endorsed: 20,
                },
                {
                    id: '5',
                    skill: 'Express',
                    endorsed: 20,
                },
                {
                    id: '6',
                    skill: 'Fastify',
                    endorsed: 14,
                },
            ],
            createdAt: new Date('2022-04-20T04:21'),
            updatedAt: new Date('2022-04-21T04:21'),
        },
        {
            id: '3ca5697e-ffd4-47cd-abc4-cf1d00dcd6cb',
            fullNameEN: 'Nuntapong Siripanyawong',
            fullNameTH: 'นันทพงศ์ ศิริปัญญาวงศ์',
            nickname: 'Pat4',
            profileImageUrl: '/assets/images/dome.jpeg',
            biography:
                "Hello, I'm Nantapong Siripanyawong. I'm a software developer. I'm currently working at Odd-e (Thailand) in Mola Mola team.",
            type: 'Cooperative Education 2022',
            team: 'Mola Mola',
            position: 'Backend Developer',
            totalEndorsed: 108,
            expertise: [
                {
                    id: '1',
                    skill: 'web wireframe',
                    endorsed: 20,
                },
                {
                    id: '2',
                    skill: 'prototype',
                    endorsed: 20,
                },
                {
                    id: '3',
                    skill: 'figma',
                    endorsed: 14,
                },
                {
                    id: '4',
                    skill: 'Spring Boot',
                    endorsed: 20,
                },
                {
                    id: '5',
                    skill: 'Express',
                    endorsed: 20,
                },
                {
                    id: '6',
                    skill: 'Fastify',
                    endorsed: 14,
                },
            ],
            createdAt: new Date('2022-04-20T04:21'),
            updatedAt: new Date('2022-04-21T04:21'),
        },
    ]

    // handleClick() {
    //     this.router.navigateByUrl('home#TopMentors')
    // }
}
