import { Component } from '@angular/core'
import { SEOService } from './services/seo.service'
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router'
import { filter, map, mergeMap, tap } from 'rxjs/operators'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title: string = 'ODDS Mentor'

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private seoService: SEOService
    ) {}

    ngOnInit(): void {
        this.router.events
            .pipe(
                filter((e) => e instanceof NavigationEnd),
                map((e) => this.activatedRoute),
                map((route) => {
                    while (route.firstChild) route = route.firstChild
                    return route
                }),
                filter((route) => route.outlet === 'primary'),
                mergeMap((route) => route.data)
            )
            .subscribe((data) => {
                let seoData = data['seo']
                this.seoService.updateTitle(seoData['title'])
                this.seoService.updateMetaTags(seoData['metaTags'])
            })
    }
}
