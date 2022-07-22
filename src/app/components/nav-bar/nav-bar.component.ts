import { Component, HostListener, OnInit } from '@angular/core'

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
    @HostListener('window:scroll', ['$event'])
    track(_: any) {
        if (typeof window === 'undefined') return
        const ref = window.document.body.getElementsByClassName('sticky-top')[0]
        if (window.pageYOffset > 100) {
            ref.classList.add('navbar-sticky')
            ref.setAttribute('style', 'top: 0px;')
            return
        }
        ref.classList.remove('navbar-sticky')
        ref.setAttribute('style', 'top: -100px;')
    }

    constructor() {}
    ngOnInit(): void {}
}
