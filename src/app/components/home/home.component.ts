import { Component, OnInit } from '@angular/core'
import { MentorDetail } from 'src/app/mentor'
import { Router } from '@angular/router'
import { MentorsService } from 'src/app/services/mentors.service'
import { MenuItem } from 'primeng/api'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    mentors: MentorDetail[] = []
    home: MenuItem = { icon: 'pi pi-home', routerLink: ['/home'] }
    items!: MenuItem[]

    constructor(private router: Router, private mentorsService: MentorsService) {}

    ngOnInit(): void {
        this.mentorsService.getTopMentors(4).subscribe((res) => {
            this.mentors = res
        })
    }

    ngAfterViewInit(): void {
        if (typeof window === 'undefined') return
        const topMentorRowRef = window.document.getElementById('topMentorRow')
        if (!topMentorRowRef) return
        let numOfTopMentor = topMentorRowRef.offsetWidth / 304
        this.mentorsService.getTopMentors(Math.floor(numOfTopMentor)).subscribe((res) => {
            this.mentors = res
        })
    }

    onExploreMentors() {
        this.router.navigateByUrl('mentor')
    }
}
