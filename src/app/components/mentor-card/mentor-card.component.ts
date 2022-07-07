import { Component, Input, OnInit } from '@angular/core'
import { Expertise, MentorDetail } from 'src/app/mentor'

@Component({
    selector: 'app-mentor-card',
    templateUrl: './mentor-card.component.html',
    styleUrls: ['./mentor-card.component.css'],
})
export class MentorCardComponent implements OnInit {
    @Input()
    mentor!: MentorDetail

    skills: string[] = []

    constructor() {}

    ngOnInit(): void {
        let expertises = this.mentor.expertises
        expertises.sort((first, second) => second.endorsed - first.endorsed)
        if (expertises.length > 3) {
            for (let index = 0; index < 3; index++) {
                this.skills.push(expertises[index].skill)
            }
            this.skills.push(`+${expertises.length - 3}`)
        } else {
            expertises.forEach((expertise) => {
                this.skills.push(expertise.skill)
            })
        }
    }
}
