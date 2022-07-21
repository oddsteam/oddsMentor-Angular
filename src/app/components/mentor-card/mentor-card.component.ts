import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { MentorDetail } from 'src/app/mentor'
import { MentorsService } from 'src/app/services/mentors.service'

@Component({
    selector: 'app-mentor-card',
    templateUrl: './mentor-card.component.html',
    styleUrls: ['./mentor-card.component.css'],
})
export class MentorCardComponent implements OnInit {
    @Input()
    mentorDetail!: MentorDetail
    skills: string[] = []

    constructor(private router: Router, private mentorsService: MentorsService) {}

    ngOnInit(): void {
        let expertise = this.mentorDetail.expertise
        expertise.sort((first, second) => second.endorsed - first.endorsed)
        if (expertise.length > 4) {
            for (let index = 0; index < 3; index++) {
                this.skills.push(expertise[index].skill)
            }
            this.skills.push(`+${expertise.length - 3} more`)
        } else {
            expertise.forEach((expertise) => {
                this.skills.push(expertise.skill)
            })
        }
    }

    onMentor() {
        this.router.navigateByUrl('personal/' + this.mentorDetail.id)
    }
}
