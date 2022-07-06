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

    mentorExpertises: Expertise[] = []

    constructor() {}

    ngOnInit(): void {
        this.mentor.expertises.sort((first, second) => second.endorsed - first.endorsed)
        this.mentorExpertises = this.mentor.expertises
        console.log(this.mentor)
    }
}
