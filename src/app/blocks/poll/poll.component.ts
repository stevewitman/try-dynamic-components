import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss'],
})
export class PollComponent implements OnInit {
  @Input() inputData!: any;
  pollQuestion: string = '';
  pollAnswers: string[] = [];

  constructor() {}

  ngOnInit(): void {
    if (this.inputData) {
      this.pollQuestion = this.inputData.pollQuestion;
      this.pollAnswers = this.inputData.pollAnswers;
    }
  }
}
