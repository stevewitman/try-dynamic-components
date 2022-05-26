import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss'],
})
export class AdvertisementComponent implements OnInit {
  @Input() inputData!: any;
  adUrl: string = '';

  constructor() {}

  ngOnInit(): void {
    if (this.inputData) {
      this.adUrl = this.inputData.adUrl;
    }
  }
}
