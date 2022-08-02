import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blue-chip',
  templateUrl: './blue-chip.component.html',
  styleUrls: ['./blue-chip.component.css']
})
export class BlueChipComponent implements OnInit {
  @Input()
  skill?: string

  constructor() { }

  ngOnInit(): void {
  }

}
