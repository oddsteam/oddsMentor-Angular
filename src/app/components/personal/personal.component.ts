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
    ) {
        const id = this.route.snapshot.paramMap.get('id')
        const serviceData = this.mentorsService.getCurrentMentor()
        !serviceData
            ? this.usersService.getUser(id!).subscribe((res) => {
                this.mentorDetail = res
               
                this.meta.addTag({
                    property: 'og:title',
                    content: this.mentorDetail.fullNameEN,
                })
                this.meta.addTag({
                    property: 'og:image',
                    content: `https://og-image-jade-nine.vercel.app/**${
                        this.mentorDetail.fullNameEN.slice().split(' ')[0]
                    }**%20${
                        this.mentorDetail.fullNameEN.slice().split(' ')[1]
                    }.png?theme=light&md=1&fontSize=100px&images=${
                        this.mentorDetail.profileImageUrl
                    }`,
                })
                this.meta.addTag({
                    property: 'og:description',
                    content: this.mentorDetail.biography,
                })
            },
            (err) => {
                this.router.navigateByUrl('home')
            })
            : (this.mentorDetail = this.mentorsService.getCurrentMentor()!)
    }

    ngOnInit(): void {
        
    }

    onLoading() {
        try {
            const id = this.route.snapshot.paramMap.get('id')
            this.usersService.getUser(id!).subscribe(
                (res) => {
                    this.mentorDetail = res
                    console.log(res)

                    this.meta.updateTag({
                        property: 'og:title',
                        content: this.mentorDetail.fullNameEN,
                    })
                    this.meta.updateTag({
                        property: 'og:image',
                        content: `https://og-image-jade-nine.vercel.app/**${
                            this.mentorDetail.fullNameEN.slice().split(' ')[0]
                        }**%20${
                            this.mentorDetail.fullNameEN.slice().split(' ')[1]
                        }.png?theme=light&md=1&fontSize=100px&images=${
                            this.mentorDetail.profileImageUrl
                        }`,
                    })
                    this.meta.updateTag({
                        property: 'og:description',
                        content: this.mentorDetail.biography,
                    })
                },
                (err) => {
                    this.router.navigateByUrl('home')
                }
            )
        } catch (error) {}
    }

    handleClick() {
        this.router.navigateByUrl('booking')
    }
}
