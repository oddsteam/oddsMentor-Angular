import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AllMentorComponent } from './components/all-mentor/all-mentor.component'
import { BookingPreviewComponent } from './components/booking-preview/booking-preview.component'
import { BookingComponent } from './components/booking/booking.component'
import { HomeComponent } from './components/home/home.component'
import { PersonalComponent } from './components/personal/personal.component'
import { SignInComponent } from './components/sign-in/sign-in.component'

// PageComponent
import { HomePageComponent } from './pages/home-page/home-page.component'
import { MentorsPageComponent } from './pages/mentors-page/mentors-page.component'
import { PersonalPageComponent } from './pages/personal-page/personal-page.component'
import { ReservePageComponent } from './pages/reserve-page/reserve-page.component'
import { ConfirmationPageComponent } from './pages/confirmation-page/confirmation-page.component'
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component'
const toPath: String = 'new/'

const ogTitle: string = 'ODDS Mentor'
const ogDescription: string = 'Want to know something? Odds always have answer.'
const ogImage: string = 'http://159.138.240.167:8089/assets/images/odds-mentor-banner.png'
const ogUrl: string = 'http://159.138.240.167:8089'
const seoData = (path: string) => {
    return {
        title: ogTitle,
        metaTags: [
            { name: 'description', content: ogDescription },
            { property: 'og:title', content: ogTitle },
            { proprety: 'og:description', content: ogDescription },
            { property: 'og:image', content: ogImage },
            { property: 'og:url', content: `${ogUrl}/${path}` },
            { name: 'twitter:card', content: 'summary_large_image' },
        ],
    }
}

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'card', component: MentorsPageComponent },
    {
        path: 'home',
        component: HomeComponent,
        data: { seo: seoData('home') },
    },
    {
        path: 'booking',
        component: BookingComponent,
        data: { seo: seoData('booking') },
    },
    {
        path: 'preview',
        component: BookingPreviewComponent,
        data: { seo: seoData('preview') },
    },
    {
        path: 'personal/:id',
        component: PersonalComponent,
        data: {
            seo: {
                title: ogTitle,
                metaTags: [],
            },
        },
    },
    {
        path: 'sign-in',
        component: SignInComponent,
        data: { seo: seoData('sign-in') },
    },
    {
        path: 'mentor',
        component: AllMentorComponent,
        data: { seo: seoData('mentor') },
    },
    // PageComponent
    {
        path: toPath + 'home',
        component: HomePageComponent,
        data: { seo: seoData('home') },
    },
    {
        path: toPath + 'booking',
        component: ReservePageComponent,
        data: { seo: seoData('booking') },
    },
    {
        path: toPath + 'preview',
        component: ConfirmationPageComponent,
        data: { seo: seoData('preview') },
    },
    {
        path: toPath + 'personal/:id',
        component: PersonalPageComponent,
        data: {
            seo: {
                title: ogTitle,
                metaTags: [],
            },
        },
    },
    {
        path: toPath + 'sign-in',
        component: SignInPageComponent,
        data: { seo: seoData('sign-in') },
    },
    {
        path: toPath + 'mentor',
        component: MentorsPageComponent,
        data: { seo: seoData('mentor') },
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            initialNavigation: 'enabledBlocking',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
