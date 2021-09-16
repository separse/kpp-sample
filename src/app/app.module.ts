import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StepperComponent } from './stepper/stepper.component';
import { FormComponent } from './form/form.component';
import { HistoryComponent } from './history/history.component';
import { HistoryItemComponent } from './history-item/history-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StepperComponent,
    FormComponent,
    HistoryComponent,
    HistoryItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
