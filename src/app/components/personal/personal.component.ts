import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { MentorDetail } from 'src/app/mentor'
import { MentorsService } from 'src/app/services/mentors.service'
import { Meta } from '@angular/platform-browser'
import { UsersService } from 'src/app/services/users.service'

@Component({
    selector: 'app-personal',
    templateUrl: './personal.component.html',
    styleUrls: ['./personal.component.css'],
})
export class PersonalComponent implements OnInit {
    mentorDetail!: MentorDetail

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private mentorsService: MentorsService,
        private usersService: UsersService,
        private meta: Meta
    ) {}

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id')
        this.usersService.getUser(id!).subscribe(
            (res) => {
                this.mentorDetail = res

                this.meta.updateTag({
                    name: 'description',
                    content: this.mentorDetail.biography,
                })
                this.meta.updateTag({
                    property: 'og:url',
                    content: `http://159.138.240.167:8089/personal/${this.mentorDetail.id}`,
                })
                this.meta.updateTag({
                    property: 'og:type',
                    content: 'website',
                })
                this.meta.updateTag({
                    property: 'og:title',
                    content: `ODDS Mentor - ${this.mentorDetail.fullNameEN}`,
                })
                this.meta.updateTag({
                    property: 'og:description',
                    content: this.mentorDetail.biography,
                })
                this.meta.updateTag({
                    property: 'og:image',
                    content: `https://og-image-jade-nine.vercel.app/**${
                        this.mentorDetail.fullNameEN.slice().split(' ')[0]
                    }**%20${
                        this.mentorDetail.fullNameEN.slice().split(' ')[1]
                    }.png?theme=light&md=1&fontSize=100px&images=${this.mentorDetail.profileImageUrl}`,
                })
                this.meta.updateTag({
                    name: 'twitter:card',
                    content: 'summary_large_image',
                })
                this.meta.updateTag({
                    property: 'twitter:domain',
                    content: '159.138.240.167:8089',
                })
                this.meta.updateTag({
                    property: 'twitter:url',
                    content: `http://159.138.240.167:8089/personal/${this.mentorDetail.id}`,
                })
                this.meta.updateTag({
                    name: 'twitter:title',
                    content: `ODDS Mentor - ${this.mentorDetail.fullNameEN}`,
                })
                this.meta.updateTag({
                    property: 'twitter:description',
                    content: this.mentorDetail.biography,
                })
                this.meta.updateTag({
                    name: 'twitter:image',
                    content: `https://og-image-jade-nine.vercel.app/**${
                        this.mentorDetail.fullNameEN.slice().split(' ')[0]
                    }**%20${
                        this.mentorDetail.fullNameEN.slice().split(' ')[1]
                    }.png?theme=light&md=1&fontSize=100px&images=${this.mentorDetail.profileImageUrl}`,
                })
            },
            (err) => {
                console.log(err)
                this.router.navigateByUrl('home')
            }
        )

    }

    handleClick() {
        this.router.navigateByUrl('booking')
    }
}
