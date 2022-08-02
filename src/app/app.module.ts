import { NgModule } from '@angular/core'
import { BrowserModule, Meta } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'
import { HttpClientModule } from '@angular/common/http'

// Component
import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component'
import { BookingComponent } from './components/booking/booking.component'
import { PersonalComponent } from './components/personal/personal.component'
import { BookingPreviewComponent } from './components/booking-preview/booking-preview.component'
import { SignInComponent } from './components/sign-in/sign-in.component'
import { AllMentorComponent } from './components/all-mentor/all-mentor.component'
// PageComponent
import { HomePageComponent } from './pages/home-page/home-page.component'
import { MentorsPageComponent } from './pages/mentors-page/mentors-page.component'
import { PersonalPageComponent } from './pages/personal-page/personal-page.component'
import { ReservePageComponent } from './pages/reserve-page/reserve-page.component'
import { ConfirmationPageComponent } from './pages/confirmation-page/confirmation-page.component'
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component'
// 
import { MentorDataViewComponent } from './components/mentors/mentor-data-view/mentor-data-view.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { FooterComponent } from './components/footer/footer.component'
import { MentorCardComponent } from './components/mentor-card/mentor-card.component'

// PrimeNG Module
import { InputTextModule } from 'primeng/inputtext'
import { AccordionModule } from 'primeng/accordion'
import { ButtonModule } from 'primeng/button'
import { ChipModule } from 'primeng/chip'
import { RippleModule } from 'primeng/ripple'
import { CalendarModule } from 'primeng/calendar'
import { AutoCompleteModule } from 'primeng/autocomplete'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { MultiSelectModule } from 'primeng/multiselect'
import { DropdownModule } from 'primeng/dropdown'
import { CardModule } from 'primeng/card'
import { CarouselModule } from 'primeng/carousel'
import { DataViewModule } from 'primeng/dataview'
import { BreadcrumbModule } from 'primeng/breadcrumb'
import { DialogModule } from 'primeng/dialog'
import { SkeletonModule } from 'primeng/skeleton'

// Firebase Auth
import { environment } from 'src/environments/environment'
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { AuthService } from './services/auth/auth.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        BookingComponent,
        PersonalComponent,
        BookingPreviewComponent,
        SignInComponent,
        AllMentorComponent,
        // PageComponents
        HomePageComponent,
        MentorsPageComponent,
        PersonalPageComponent,
        ReservePageComponent,
        ConfirmationPageComponent,
        SignInPageComponent,
        // Components
        MentorDataViewComponent,
        NavBarComponent,
        FooterComponent,
        MentorCardComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
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
        DialogModule,
        SkeletonModule,
    ],
    providers: [Meta, AuthService],
    bootstrap: [AppComponent],
})
export class AppModule {}
