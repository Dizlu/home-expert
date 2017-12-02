import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import uuid from 'uuid/v1';

import { ExpertQuestion } from '../expert-question';

@Component({
  selector: 'app-expert-questions',
  templateUrl: './expert-questions.component.html',
  styleUrls: ['./expert-questions.component.sass']
})
export class ExpertQuestionsComponent implements OnInit {

  @Input() questions: ExpertQuestion[];
  @Output() onUpdate = new EventEmitter<ExpertQuestion[]>();

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.onUpdate.emit(this.questions);
  }

}
