import { Component, OnInit } from '@angular/core'
import { MenuItem } from 'primeng/api'
import { SystemConstants } from 'src/app/common/system.constants'
import { MentorsService } from 'src/app/services/mentors/mentors.service'
import { MentorDetail } from 'src/app/types/mentor'

@Component({
    selector: 'app-mentor-data-view',
    templateUrl: './mentor-data-view.component.html',
    styleUrls: ['./mentor-data-view.component.css'],
})
export class MentorDataViewComponent implements OnInit {
    mentorPerPage: number = 12
    mentors: MentorDetail[] = this.getDummyMentor(this.mentorPerPage)
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
            },
        ]
    }

    getDummyMentor(n: number): MentorDetail[] {
        return Array(n).fill(SystemConstants.MENTOR_DUMMY)
    }
}
