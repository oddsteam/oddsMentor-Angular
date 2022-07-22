import { Component, OnInit } from '@angular/core'
import { MentorDetail } from '../../types/mentor'
import { MentorsService } from 'src/app/services/mentors/mentors.service'
import { MenuItem } from 'primeng/api'

@Component({
    selector: 'app-all-mentor',
    templateUrl: './all-mentor.component.html',
    styleUrls: ['./all-mentor.component.css'],
})
export class AllMentorComponent implements OnInit {
    mentors: MentorDetail[] = []
    home: MenuItem = { icon: 'pi pi-home', routerLink: ['/home'] }
    items!: MenuItem[]

    constructor(private mentorsService: MentorsService) {}

    ngOnInit(): void {
        this.mentorsService.getMentorsList().subscribe((res) => {
            res.sort((a, b) => a.fullNameEN.localeCompare(b.fullNameEN))
            this.mentors = res
        })

        this.items = [
            {
                label: 'Mentors',
            }
        ]
    }
}
