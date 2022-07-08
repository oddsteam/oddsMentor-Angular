import { Component, OnInit } from '@angular/core'
import { MentorDetail } from 'src/app/mentor'
import { Router } from '@angular/router'
import { MentorsService } from 'src/app/services/mentors.service'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    mentors: MentorDetail[] = []

    constructor(private router: Router, private mentorsService: MentorsService) {}

    ngOnInit(): void {
        this.mentorsService.getMentorsList().subscribe((res) => {
            this.mentors = res
        })
    }

    // handleClick() {
    //     this.router.navigateByUrl('home#TopMentors')
    // }
}
