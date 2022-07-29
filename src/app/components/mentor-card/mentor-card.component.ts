import { Component, Input, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core'
import { Router } from '@angular/router'
import { MentorDetail } from '../../types/mentor'
import { MentorsService } from 'src/app/services/mentors/mentors.service'

@Component({
    selector: 'app-mentor-card',
    templateUrl: './mentor-card.component.html',
    styleUrls: ['./mentor-card.component.css'],
})
export class MentorCardComponent implements OnInit, AfterViewInit {
    @Input()
    mentorDetail?: MentorDetail
    skills: string[] = []
    dummyXpertise: string[] = []
    showImage: boolean = false

    constructor(
        private router: Router,
        private changeDetectorRef: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        if (!this.mentorDetail) return
        let expertise = this.mentorDetail.expertise
        expertise.sort((first, second) => second.endorsed - first.endorsed)
        expertise.forEach((expertise) => {
            this.dummyXpertise.push(expertise.skill)
        })
        // if (expertise.length > 4) {
        //     for (let index = 0; index < 3; index++) {
        //         this.skills.push(expertise[index].skill)
        //     }
        //     this.skills.push(`+${expertise.length - 3} more`)
        // } else {
        //     expertise.forEach((expertise) => {
        //         this.skills.push(expertise.skill)
        //     })
        // }
    }

    onLoadedImage() {
        this.showImage = true
    }

    ngAfterViewInit() {
        if (typeof window === 'undefined') return
        if (!this.mentorDetail) return
        let LINE_WIDTH = 248
        let expertiseChip = window.document.getElementById(`dummyChip-${this.mentorDetail.id}`)
        let haveNextLine = true
        let lineWidth = LINE_WIDTH
        let skillCal: string[] = []

        for (const x of this.dummyXpertise) {
            let newChip = this.createSkillChip(x)
            expertiseChip?.appendChild(newChip)
            let chipWidth = newChip.offsetWidth
            // console.log(chipWidth)
            if (chipWidth < lineWidth - 6) {
                skillCal.push(newChip.innerText)
                lineWidth -= chipWidth + 6
                // console.log(`${x} width: ${chipWidth} => ${lineWidth}`)
            } else if (haveNextLine) {
                haveNextLine = false
                // console.log('Set haveNextLine to false')
                lineWidth = LINE_WIDTH
                skillCal.push(newChip.innerText)
                lineWidth -= chipWidth + 82
            } else {
                // console.log('OVERFLOW!')
                break
            }
        }

        this.skills = skillCal
        let moreSkill = this.dummyXpertise.length - skillCal.length
        if (moreSkill > 0) this.skills.push(`+${moreSkill} more`)
        expertiseChip?.remove()
        this.changeDetectorRef.detectChanges()
    }

    createSkillChip(skillName: string): HTMLElement {
        let newChip = document.createElement('span')
        newChip.setAttribute('_ngcontent-serverapp-c63', '')
        newChip.className = 'badge bg-expertise'
        newChip.innerHTML = skillName
        return newChip
    }

    onMentor() {
        if (!this.mentorDetail) return
        this.router.navigateByUrl('personal/' + this.mentorDetail.id)
    }
}
