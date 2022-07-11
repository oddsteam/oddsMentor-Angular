import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { MentorDetail } from 'src/app/mentor'
import { UsersService } from 'src/app/services/users.service'
import { SEOService } from 'src/app/services/seo.service'

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
        private seoService: SEOService,
        private usersService: UsersService,
    ) {}

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id')
        this.usersService.getUser(id!).subscribe(
            (res) => {
                this.mentorDetail = res

                this.seoService.updateMetaTags([
                    {
                        name: 'description',
                        content: this.mentorDetail.biography,
                    },
                    {
                        property: 'og:url',
                        content: `http://159.138.240.167:8089/personal/${this.mentorDetail.id}`,
                    },
                    {
                        property: 'og:type',
                        content: 'website',
                    },
                    {
                        property: 'og:title',
                        content: `ODDS Mentor - ${this.mentorDetail.fullNameEN}`,
                    },
                    {
                        property: 'og:description',
                        content: this.mentorDetail.biography,
                    },
                    {
                        property: 'og:image',
                        content: `https://og-image-jade-nine.vercel.app/**${
                            this.mentorDetail.fullNameEN.slice().split(' ')[0]
                        }**%20${
                            this.mentorDetail.fullNameEN.slice().split(' ')[1]
                        }.png?theme=light&md=1&fontSize=100px&images=${
                            this.mentorDetail.profileImageUrl
                        }`,
                    },
                    {
                        name: 'twitter:card',
                        content: 'summary_large_image',
                    },
                    {
                        property: 'twitter:domain',
                        content: '159.138.240.167:8089',
                    },
                    {
                        property: 'twitter:url',
                        content: `http://159.138.240.167:8089/personal/${this.mentorDetail.id}`,
                    },
                    {
                        name: 'twitter:title',
                        content: `ODDS Mentor - ${this.mentorDetail.fullNameEN}`,
                    },
                    {
                        property: 'twitter:description',
                        content: this.mentorDetail.biography,
                    },
                    {
                        name: 'twitter:image',
                        content: `https://og-image-jade-nine.vercel.app/**${
                            this.mentorDetail.fullNameEN.slice().split(' ')[0]
                        }**%20${
                            this.mentorDetail.fullNameEN.slice().split(' ')[1]
                        }.png?theme=light&md=1&fontSize=100px&images=${
                            this.mentorDetail.profileImageUrl
                        }`,
                    },
                ])
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
