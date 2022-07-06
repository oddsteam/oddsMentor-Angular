import { Component, OnInit } from '@angular/core'
import { MentorDetail } from 'src/app/mentor'
import { Router } from '@angular/router'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {}

    mentors: MentorDetail[] = [
        {
            id: '3ca5697e-ffd4-47cd-abc4-cf1d00dcd6cb',
            fullNameEN: 'Nuntapong Siripanyawong',
            fullNameTH: 'นันทพงศ์ ศิริปัญญาวงศ์',
            nickname: 'pat1',
            profileImageUrl:
                'https://drive.google.com/uc?export=view&id=18SM8TbikJQt-RH2LdS_MbzGGod-dXHgx',
            biography:
                "Hello, I'm Nantapong Siripanyawong. I'm a software developer. I'm currently working at Odd-e (Thailand) in Mola Mola team.",
            type: 'Cooperative Education 2022',
            team: 'Molamola',
            position: 'Backend Developer',
            totalEndorsed: 108,
            expertises: [
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
            ],
            createdAt: new Date('2022-04-20T04:21'),
            updatedAt: new Date('2022-04-21T04:21'),
        },
        {
            id: '3ca5697e-ffd4-47cd-abc4-cf1d00dcd6cb',
            fullNameEN: 'Nuntapong Siripanyawong',
            fullNameTH: 'นันทพงศ์ ศิริปัญญาวงศ์',
            nickname: 'pat2',
            profileImageUrl:
                'https://drive.google.com/uc?export=view&id=18SM8TbikJQt-RH2LdS_MbzGGod-dXHgx',
            biography:
                "Hello, I'm Nantapong Siripanyawong. I'm a software developer. I'm currently working at Odd-e (Thailand) in Mola Mola team.",
            type: 'Cooperative Education 2022',
            team: 'Molamola',
            position: 'Backend Developer',
            totalEndorsed: 108,
            expertises: [
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
            ],
            createdAt: new Date('2022-04-20T04:21'),
            updatedAt: new Date('2022-04-21T04:21'),
        },
        {
            id: '3ca5697e-ffd4-47cd-abc4-cf1d00dcd6cb',
            fullNameEN: 'Nuntapong Siripanyawong',
            fullNameTH: 'นันทพงศ์ ศิริปัญญาวงศ์',
            nickname: 'pat3',
            profileImageUrl:
                'https://drive.google.com/uc?export=view&id=18SM8TbikJQt-RH2LdS_MbzGGod-dXHgx',
            biography:
                "Hello, I'm Nantapong Siripanyawong. I'm a software developer. I'm currently working at Odd-e (Thailand) in Mola Mola team.",
            type: 'Cooperative Education 2022',
            team: 'Molamola',
            position: 'Backend Developer',
            totalEndorsed: 108,
            expertises: [
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
            ],
            createdAt: new Date('2022-04-20T04:21'),
            updatedAt: new Date('2022-04-21T04:21'),
        },
        {
            id: '3ca5697e-ffd4-47cd-abc4-cf1d00dcd6cb',
            fullNameEN: 'Nuntapong Siripanyawong',
            fullNameTH: 'นันทพงศ์ ศิริปัญญาวงศ์',
            nickname: 'pat4',
            profileImageUrl:
                'https://drive.google.com/uc?export=view&id=18SM8TbikJQt-RH2LdS_MbzGGod-dXHgx',
            biography:
                "Hello, I'm Nantapong Siripanyawong. I'm a software developer. I'm currently working at Odd-e (Thailand) in Mola Mola team.",
            type: 'Cooperative Education 2022',
            team: 'Molamola',
            position: 'Backend Developer',
            totalEndorsed: 108,
            expertises: [
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
            ],
            createdAt: new Date('2022-04-20T04:21'),
            updatedAt: new Date('2022-04-21T04:21'),
        },
    ]

    handleClick(event: any) {
        console.log(event)
        this.router.navigateByUrl('booking')
    }
}
