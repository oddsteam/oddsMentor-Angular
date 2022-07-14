import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AllMentorComponent } from './components/all-mentor/all-mentor.component'
import { BookingPreviewComponent } from './components/booking-preview/booking-preview.component'
import { BookingComponent } from './components/booking/booking.component'
import { HomeComponent } from './components/home/home.component'
import { PersonalComponent } from './components/personal/personal.component'
import { SignInComponent } from './components/sign-in/sign-in.component'

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'booking', component: BookingComponent },
    { path: 'preview', component: BookingPreviewComponent },
    { path: 'personal/:id', component: PersonalComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: 'mentor', component: AllMentorComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
