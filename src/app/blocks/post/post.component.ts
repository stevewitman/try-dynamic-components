import { Component, Input, OnInit } from '@angular/core';

interface CardElememtData {
  cardTitle: string;
  cardBody: string;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() inputData!: any;
  postTitle: string = '';
  postDescription: string | null = null;

  constructor() {}

  ngOnInit(): void {
    if (this.inputData) {
      this.postTitle = this.inputData.postTitle;
      this.postDescription = this.inputData.postDescription;
    }
  }

}
