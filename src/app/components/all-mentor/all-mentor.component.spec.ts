import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AllMentorComponent } from './all-mentor.component'

describe('AllMentorComponent', () => {
    let component: AllMentorComponent
    let fixture: ComponentFixture<AllMentorComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AllMentorComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(AllMentorComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
