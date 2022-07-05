import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PersonalComponent } from './components/personal/personal.component';
import { BookingComponent } from './components/booking/booking.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BookingPreviewComponent } from './components/booking-preview/booking-preview.component';
import { LoginComponent } from './components/login/login.component'

@NgModule({
    declarations: [AppComponent, HomeComponent, PersonalComponent, BookingComponent, NavBarComponent, BookingPreviewComponent, LoginComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
