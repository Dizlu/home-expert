import { Component, DoCheck, Input, OnInit, SimpleChanges } from '@angular/core';

import { House } from '../house';
import { ExpertQuestion } from '../expert-question';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.sass']
})
export class HouseComponent implements OnInit, DoCheck {

  @Input() houses: House[];
  @Input() questions: ExpertQuestion[]; 
  housesPrototype: House[];

  constructor() {
  }

  ngDoCheck() {
    const questions = this.questions;
    this.houses = this.housesPrototype;

    //houses which cannot fit onto land
    this.houses = this.houses.filter(house => questions[0].answer > house.minLength && questions[1].answer > house.minWidth);
    //how much garages?
    this.houses = this.houses.filter(house => questions[2].answer <= house.garage);
    //do you have enough rooms?
    this.houses = this.houses.filter(house => (questions[3].answer + questions[6].answer) <= (house.rooms - 1))
    //if house should be available for handicapped person
    if (this.questions[4].answer) {
      this.houses = this.houses.filter(house => house.handicapped)
    }
    //should house should be trendy?
    if (this.questions[5].answer) {
      this.houses = this.houses.filter(houses => houses.design);
    }
    //should have more bathrooms?
    if (this.questions[6].answer > 2) {
      this.houses = this.houses.filter(house => house.bathrooms >= 2);
    }
  }

  ngOnInit() {
    this.housesPrototype = this.houses;
  }

}
