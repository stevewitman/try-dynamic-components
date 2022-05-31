import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-not-found',
  templateUrl: './block-not-found.component.html',
  styleUrls: ['./block-not-found.component.scss'],
})
export class BlockNotFoundComponent implements OnInit {
  @Input() inputData!: any;
  missingBlockName = '(unknown)'


  constructor() {}

  ngOnInit(): void {
    if (this.inputData) {
      this.missingBlockName = this.inputData.missingBlock;
    }
  }
}
