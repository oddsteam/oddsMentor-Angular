import { NgModule } from '@angular/core'
import { BrowserModule, Meta } from '@angular/platform-browser'
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
import { CalendarModule } from 'primeng/calendar'
import { AutoCompleteModule } from 'primeng/autocomplete'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MultiSelectModule } from 'primeng/multiselect'
import { DropdownModule } from 'primeng/dropdown'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'
import { HttpClientModule } from '@angular/common/http'
import { CardModule } from 'primeng/card'
import { AllMentorComponent } from './components/all-mentor/all-mentor.component'
import { CarouselModule } from 'primeng/carousel'
import { DataViewModule } from 'primeng/dataview'
import { FooterComponent } from './components/footer/footer.component'
import { BreadcrumbModule } from 'primeng/breadcrumb'

// Firebase Auth
import { environment } from 'src/environments/environment'
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { AuthService } from './services/auth/auth.service'

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
        AllMentorComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        AppRoutingModule,
        AccordionModule,
        ButtonModule,
        InputTextModule,
        ChipModule,
        RippleModule,
        CalendarModule,
        AutoCompleteModule,
        InputTextareaModule,
        FormsModule,
        BrowserAnimationsModule,
        MultiSelectModule,
        DropdownModule,
        SweetAlert2Module,
        ReactiveFormsModule,
        HttpClientModule,
        CardModule,
        CarouselModule,
        DataViewModule,
        BreadcrumbModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
    ],
    providers: [Meta, AuthService],
    bootstrap: [AppComponent],
})
export class AppModule {}
