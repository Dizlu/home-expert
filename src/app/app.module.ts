import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExpertQuestionsComponent } from './expert-questions/expert-questions.component';
import { HouseComponent } from './house/house.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpertQuestionsComponent,
    HouseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
