import { Component, OnInit } from '@angular/core'
import { MetaDefinition } from '@angular/platform-browser'
import { ActivatedRoute, Router, Scroll } from '@angular/router'
import { MenuItem } from 'primeng/api'
import { MentorDetail } from '../../types/mentor'
import { MentorsService } from 'src/app/services/mentors/mentors.service'
import { SeoService } from 'src/app/services/seo/seo.service'
import { UsersService } from 'src/app/services/users/users.service'

@Component({
    selector: 'app-personal',
    templateUrl: './personal.component.html',
    styleUrls: ['./personal.component.css'],
})
export class PersonalComponent implements OnInit {
    mentorDetail?: MentorDetail
    home: MenuItem = { icon: 'pi pi-home', routerLink: ['/home'] }
    items!: MenuItem[]

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private usersService: UsersService,
        private mentorsService: MentorsService,
        private seoService: SeoService
    ) {}

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id')
        if (!id) return
        this.usersService.getUser(id).subscribe(
            (res) => {
                this.mentorDetail = res

                let metaTags: MetaDefinition[] = [
                    { name: 'description', content: this.mentorDetail.biography },
                    {
                        property: 'og:title',
                        content: `ODDS Mentor - ${this.mentorDetail.fullNameEN}`,
                    },
                    { proprety: 'og:description', content: this.mentorDetail.biography },
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
                        property: 'og:url',
                        content: `http://159.138.240.167:8089/personal/${this.mentorDetail.id}`,
                    },
                    { name: 'twitter:card', content: 'summary_large_image' },
                ]

                this.seoService.updateTitle(`ODDS Mentor - ${this.mentorDetail.fullNameEN}`)
                this.seoService.updateMetaTags(metaTags)
            },
            (err) => {
                console.log(err)
                this.router.navigateByUrl('home')
            }
        )
        if (typeof window !== 'undefined') window.scroll(0, 0)
        this.items = [
            {
                label: 'Mentors',
                routerLink: ['/mentor'],
                visible: true,
            },
            {
                label: 'Personal',
            },
        ]
    }

    onBooking() {
        if (!this.mentorDetail) return
        this.mentorsService.saveMentor(this.mentorDetail)
        this.router.navigateByUrl('booking')
    }
}
