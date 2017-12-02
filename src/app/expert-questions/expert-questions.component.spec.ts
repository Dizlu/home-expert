import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertQuestionComponent } from './expert-question.component';

describe('ExpertQuestionComponent', () => {
  let component: ExpertQuestionComponent;
  let fixture: ComponentFixture<ExpertQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
