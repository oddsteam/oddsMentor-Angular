import { Component, OnInit } from '@angular/core'
import Swal from 'sweetalert2'
import { Router } from '@angular/router'

@Component({
    selector: 'app-booking-preview',
    templateUrl: './booking-preview.component.html',
    styleUrls: ['./booking-preview.component.css'],
})
export class BookingPreviewComponent implements OnInit {
    constructor(private router: Router) {}
    //alert
    async on_submit() {
        await Swal.fire({
            icon: 'success',
            title: 'Thank you for your booking!'
        })
        this.router.navigateByUrl('personal')
    }
    ngOnInit(): void {}
}