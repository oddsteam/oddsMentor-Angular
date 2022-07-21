import { Component, OnInit, AfterViewInit } from '@angular/core'
import { MentorDetail } from 'src/app/mentor'
import { Router } from '@angular/router'
import { MentorsService } from 'src/app/services/mentors.service'
import { MenuItem } from 'primeng/api'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
    mentors: MentorDetail[] = []
    home: MenuItem = { icon: 'pi pi-home', routerLink: ['/home'] }
    items!: MenuItem[]
    
    constructor(private router: Router, private mentorsService: MentorsService) {}

    ngOnInit(): void {
        this.mentorsService.getTopMentors(1).subscribe((res) => {
            this.mentors = res
        })
    }

    ngAfterViewInit(): void {
        let numOfTopMentor = window.document.getElementById('topMentporRow')!.offsetWidth / 304
        this.mentorsService.getTopMentors(Math.floor(numOfTopMentor)).subscribe((res) => {
            this.mentors = res
        })
    }

    onExploreMentors() {
        this.router.navigateByUrl('mentor')
    }
}
