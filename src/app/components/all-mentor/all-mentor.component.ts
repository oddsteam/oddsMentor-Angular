import { Component, OnInit } from '@angular/core'
import { MentorDetail } from 'src/app/mentor'
import { MentorsService } from 'src/app/services/mentors.service'

@Component({
    selector: 'app-all-mentor',
    templateUrl: './all-mentor.component.html',
    styleUrls: ['./all-mentor.component.css', '../../../styles/colors.css'],
})
export class AllMentorComponent implements OnInit {
    mentors: MentorDetail[] = []

    constructor(private mentorsService: MentorsService) {}

    ngOnInit(): void {
        this.mentorsService.getMentorsList().subscribe((res) => {
            res.sort((a, b) => a.fullNameEN.localeCompare(b.fullNameEN))
            this.mentors = res
        })
    }
}
