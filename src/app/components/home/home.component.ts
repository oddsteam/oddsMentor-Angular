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
            id: '62c70dedf9c68f9f4d00cf40',
            fullNameEN: 'Chandara Sin',
            fullNameTH: 'จันทร์ดารา ซิน',
            nickname: 'โดม',
            type: 'Cooperative Education 2022',
            biography:
                "Hello, I'm Chandara Sin. I'm a software developer. I'm currently working at Odd-e (Thailand) in Mola Mola team.",
            team: 'Molamola',
            position: 'Software Developer',
            profileImageUrl: '/assets/images/dome.jpeg',
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
        },
        {
            id: '62c70dedf9c68f9f4d00cf42',
            fullNameEN: 'Watcharapol Sanitwong',
            fullNameTH: 'วัชรพล สนิทวงษ์',
            nickname: 'ตั้ม',
            type: 'OddsMember',
            biography:
                "Hello, I'm Watcharapol Sanitwong. I'm a software developer. I'm currently working at Odd-e (Thailand) in SET team.",
            team: 'SET',
            position: 'Software Developer',
            profileImageUrl:
                'https://cdn.discordapp.com/attachments/994528164481085442/994528284849225758/Screen_Shot_2565-07-07_at_15.57.28.png',
            totalEndorsed: 0,
            expertise: [
                {
                    id: '62c65c85020d0f6ecbdc58a5',
                    skill: 'Java',
                    endorsed: 0,
                },
                {
                    id: '62c6a1ccda70f308968c2a9e',
                    skill: 'Angular',
                    endorsed: 0,
                },
                {
                    id: '62c6a1ffda70f308968c2a9f',
                    skill: 'เด็กถือกระเป๋าพี่แอร์',
                    endorsed: 0,
                },
                {
                    id: '62c6a24ada70f308968c2aa0',
                    skill: 'Spring Boot',
                    endorsed: 0,
                },
            ],
        },
        {
            id: '62c70dedf9c68f9f4d00cf41',
            fullNameEN: 'Paramate Sarttarasupap',
            fullNameTH: 'ปรเมศวร์ ศาสตรสุภาพ',
            nickname: 'เต๋า',
            type: 'OddsMember',
            biography:
                'มีอะไรให้ผมช่วยบอกมาได้ครับ ถ้าผมตอบหรือช่วยไม่ได้ จะไปหาคนที่ตอบหรือช่วยได้มาให้ครับ',
            team: 'saksiam',
            position: 'ux, coach',
            profileImageUrl:
                'https://cdn.discordapp.com/attachments/994530647395794994/994531106550456350/85A632F9-A76A-49AD-A36E-FAA414DE2B39.jpg',
            totalEndorsed: 0,
            expertise: [
                {
                    id: '62c6a3b067417941a44fc828',
                    skill: 'ux',
                    endorsed: 0,
                },
                {
                    id: '62c6a3b967417941a44fc829',
                    skill: 'product discovery',
                    endorsed: 0,
                },
                {
                    id: '62c6a3c667417941a44fc82a',
                    skill: 'service design',
                    endorsed: 0,
                },
                {
                    id: '62c6a3ce67417941a44fc82b',
                    skill: 'design thinking',
                    endorsed: 0,
                },
                {
                    id: '62c6a3d767417941a44fc82c',
                    skill: 'storytelling',
                    endorsed: 0,
                },
            ],
        },
    ]

    // handleClick() {
    //     this.router.navigateByUrl('home#TopMentors')
    // }
}
