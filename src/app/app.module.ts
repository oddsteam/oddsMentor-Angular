import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component'
import { PersonalComponent } from './components/personal/personal.component'
import { BookingComponent } from './components/booking/booking.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { BookingPreviewComponent } from './components/booking-preview/booking-preview.component'
import { SignInComponent } from './components/sign-in/sign-in.component'
import { MentorCardComponent } from './components/mentor-card/mentor-card.component'
import { InputTextModule } from 'primeng/inputtext'
import { AccordionModule } from 'primeng/accordion'
import { ButtonModule } from 'primeng/button'
import { ChipModule } from 'primeng/chip'
import { RippleModule } from 'primeng/ripple'
import {CalendarModule} from 'primeng/calendar';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputTextareaModule} from 'primeng/inputtextarea';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PersonalComponent,
        BookingComponent,
        NavBarComponent,
        BookingPreviewComponent,
        SignInComponent,
        MentorCardComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AccordionModule,
        ButtonModule,
        InputTextModule,
        ChipModule,
        RippleModule,
        CalendarModule,
        AutoCompleteModule,
        InputTextareaModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
