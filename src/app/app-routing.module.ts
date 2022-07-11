import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BookingPreviewComponent } from './components/booking-preview/booking-preview.component'
import { BookingComponent } from './components/booking/booking.component'
import { HomeComponent } from './components/home/home.component'
import { PersonalComponent } from './components/personal/personal.component'
import { SignInComponent } from './components/sign-in/sign-in.component'

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        component: HomeComponent,
        data: {
            seo: {
                title: 'ODDS Mentor',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Want to know something? Odds always have answer.',
                    },
                    { property: 'og:title', content: 'ODDS Mentor' },
                    {
                        proprety: 'og:description',
                        content: 'Want to know something? Odds always have answer.',
                    },
                    {
                        property: 'og:image',
                        content: 'assets/image/homepage.png',
                    },
                    {
                        property: 'og:url',
                        content:
                            'https://og-image-jade-nine.vercel.app/**ODDS**%20Mentor.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fphanx.ga%2Fasset%2Ftaliw.jpg&widths=0&heights=0',
                    },
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
                title: 'ODDS Mentor',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Want to know something? Odds always have answer.',
                    },
                    { property: 'og:title', content: 'ODDS Mentor' },
                    {
                        proprety: 'og:description',
                        content: 'Want to know something? Odds always have answer.',
                    },
                    {
                        property: 'og:image',
                        content: 'assets/image/homepage.png',
                    },
                    {
                        property: 'og:url',
                        content:
                            'https://og-image-jade-nine.vercel.app/**ODDS**%20Mentor.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fphanx.ga%2Fasset%2Ftaliw.jpg&widths=0&heights=0',
                    },
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
                title: 'ODDS Mentor',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Want to know something? Odds always have answer.',
                    },
                    { property: 'og:title', content: 'ODDS Mentor' },
                    {
                        proprety: 'og:description',
                        content: 'Want to know something? Odds always have answer.',
                    },
                    {
                        property: 'og:image',
                        content: 'assets/image/homepage.png',
                    },
                    {
                        property: 'og:url',
                        content:
                            'https://og-image-jade-nine.vercel.app/**ODDS**%20Mentor.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fphanx.ga%2Fasset%2Ftaliw.jpg&widths=0&heights=0',
                    },
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
                title: 'ODDS Mentor',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Want to know something? Odds always have answer.',
                    },
                    { property: 'og:title', content: 'ODDS Mentor' },
                    {
                        proprety: 'og:description',
                        content: 'Want to know something? Odds always have answer.',
                    },
                    {
                        property: 'og:image',
                        content: 'assets/image/homepage.png',
                    },
                    {
                        property: 'og:url',
                        content:
                            'https://og-image-jade-nine.vercel.app/**ODDS**%20Mentor.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fphanx.ga%2Fasset%2Ftaliw.jpg&widths=0&heights=0',
                    },
                    { name: 'twitter:card', content: 'summary_large_image' },
                ],
            },
        },
    },
    {
        path: 'sign-in',
        component: SignInComponent,
        data: {
            seo: {
                title: 'ODDS Mentor',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Want to know something? Odds always have answer.',
                    },
                    { property: 'og:title', content: 'ODDS Mentor' },
                    {
                        proprety: 'og:description',
                        content: 'Want to know something? Odds always have answer.',
                    },
                    {
                        property: 'og:image',
                        content: 'assets/image/homepage.png',
                    },
                    {
                        property: 'og:url',
                        content:
                            'https://og-image-jade-nine.vercel.app/**ODDS**%20Mentor.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fphanx.ga%2Fasset%2Ftaliw.jpg&widths=0&heights=0',
                    },
                    { name: 'twitter:card', content: 'summary_large_image' },
                ],
            },
        },
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
