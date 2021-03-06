import { Component } from '@angular/core';

import { HOUSES } from './mocks/mock-houses';
import { QUESTIONS } from './mocks/mock-expert-questions';
import { ExpertQuestion } from './expert-question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  questions = QUESTIONS;
  houses = HOUSES;
  
  onUpdate(form: ExpertQuestion[]) {
    this.questions = [ ...form ];
  }
}
