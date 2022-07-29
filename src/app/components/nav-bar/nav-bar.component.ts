import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core'
import { AuthService } from 'src/app/services/auth/auth.service'

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent implements OnInit {
    showImage: boolean = false

    @HostListener('window:scroll', ['$event'])
    track(_: any) {
        if (typeof window === 'undefined') return
        const ref = window.document.body.getElementsByClassName('sticky-top')[0]
        if (window.pageYOffset > 52) {
            ref.classList.add('navbar-sticky')
            ref.setAttribute('style', 'top: 0px;')
            return
        }
        ref.classList.remove('navbar-sticky')
        ref.setAttribute('style', 'top: -100px;')
    }

    constructor(public authService: AuthService) {}

    ngOnInit(): void {}

    onLoadedImage() {
        this.showImage = true
    }
}
