import { Component, OnInit } from '@angular/core';
import uuid from 'uuid/v1';

import { QUESTIONS } from '../mock-expert-questions';
import { ExpertQuestion } from '../expert-question';

@Component({
  selector: 'app-expert-questions',
  templateUrl: './expert-questions.component.html',
  styleUrls: ['./expert-questions.component.sass']
})
export class ExpertQuestionsComponent implements OnInit {

  questions = QUESTIONS;

  constructor() {
  }

  ngOnInit() {
  }

}
