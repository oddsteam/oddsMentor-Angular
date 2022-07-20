import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AllMentorComponent } from './components/all-mentor/all-mentor.component'
import { BookingPreviewComponent } from './components/booking-preview/booking-preview.component'
import { BookingComponent } from './components/booking/booking.component'
import { HomeComponent } from './components/home/home.component'
import { MentorCardComponent } from './components/mentor-card/mentor-card.component'
import { PersonalComponent } from './components/personal/personal.component'
import { SignInComponent } from './components/sign-in/sign-in.component'

const ogTitle: string = 'ODDS Mentor'
const ogDescription: string = 'Want to know something? Odds always have answer.'
const ogImage: string = 'http://159.138.240.167:8089/assets/images/odds-mentor-banner.png'
const ogUrl: string = 'http://159.138.240.167:8089'

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'card', component: MentorCardComponent},
    {
        path: 'home',
        component: HomeComponent,
        data: {
            seo: {
                title: ogTitle,
                metaTags: [
                    { name: 'description', content: ogDescription },
                    { property: 'og:title', content: ogTitle },
                    { proprety: 'og:description', content: ogDescription },
                    { property: 'og:image', content: ogImage },
                    { property: 'og:url', content: `${ogUrl}/home` },
                    { name: 'twitter:card', content: 'summary_large_image' },
                ],
            },
        },
    },
    {
        path: 'booking',
        component: BookingComponent,
        data: {
            seo: {
                title: ogTitle,
                metaTags: [
                    { name: 'description', content: ogDescription },
                    { property: 'og:title', content: ogTitle },
                    { proprety: 'og:description', content: ogDescription },
                    { property: 'og:image', content: ogImage },
                    { property: 'og:url', content: `${ogUrl}/home` },
                    { name: 'twitter:card', content: 'summary_large_image' },
                ],
            },
        },
    },
    {
        path: 'preview',
        component: BookingPreviewComponent,
        data: {
            seo: {
                title: ogTitle,
                metaTags: [
                    { name: 'description', content: ogDescription },
                    { property: 'og:title', content: ogTitle },
                    { proprety: 'og:description', content: ogDescription },
                    { property: 'og:image', content: ogImage },
                    { property: 'og:url', content: `${ogUrl}/home` },
                    { name: 'twitter:card', content: 'summary_large_image' },
                ],
            },
        },
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
        data: {
            seo: {
                title: ogTitle,
                metaTags: [
                    { name: 'description', content: ogDescription },
                    { property: 'og:title', content: ogTitle },
                    { proprety: 'og:description', content: ogDescription },
                    { property: 'og:image', content: ogImage },
                    { property: 'og:url', content: `${ogUrl}/home` },
                    { name: 'twitter:card', content: 'summary_large_image' },
                ],
            },
        },
    },
    {
        path: 'mentor',
        component: AllMentorComponent,
        data: {
            seo: {
                title: ogTitle,
                metaTags: [
                    { name: 'description', content: ogDescription },
                    { property: 'og:title', content: ogTitle },
                    { proprety: 'og:description', content: ogDescription },
                    { property: 'og:image', content: ogImage },
                    { property: 'og:url', content: `${ogUrl}/home` },
                    { name: 'twitter:card', content: 'summary_large_image' },
                ],
            },
        },
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
