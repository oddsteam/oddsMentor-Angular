import { Component, OnInit } from '@angular/core'
import { MentorsService } from 'src/app/services/mentors.service'

@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  expertises: any[] = [];
  filteredExpertises: any[] = [];
  selectedExpertises: any[] = [];

    constructor(
      private mentorsService: MentorsService
    ) { }

    ngOnInit(): void {
      this.mentorsService.getData().then(expertises => {
        this.expertises = expertises;
      });
    }

    filterExpertises(event: any) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered: any[] = [];
        let query = event.query;
        for (let i = 0; i < this.expertises.length; i++) {
          let country = this.expertises[i];
          if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(country);
          }
        }
    
        this.filteredExpertises = filtered;
      }

}
