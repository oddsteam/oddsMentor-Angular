import { Component, OnInit } from '@angular/core'
import { MentorDetail } from 'src/app/mentor'
import { Router } from '@angular/router'
import { MentorsService } from 'src/app/services/mentors.service'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css', '../../../styles/colors.css'],
})
export class HomeComponent implements OnInit {
    mentors: MentorDetail[] = []

    constructor(private router: Router, private mentorsService: MentorsService) {}

    ngOnInit(): void {
        this.mentorsService.getTopMentors().subscribe((res) => {
            this.mentors = res.reverse()
        })
    }

    // handleClick() {
    //     this.router.navigateByUrl('mentor')
    // }
}
