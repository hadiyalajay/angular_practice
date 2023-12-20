import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TablePointComponent } from './pages/public/table-point/table-point.component';
import { CounterComponent } from './pages/public/counter/counter.component';
import { ToDoListComponent } from './pages/public/to-do-list/to-do-list.component';
import { DigitalClockComponent } from './pages/public/digital-clock/digital-clock.component';
import { PracticeComponent } from './pages/public/practice/practice.component';

@NgModule({
  declarations: [
    AppComponent,
    TablePointComponent,
    CounterComponent,
    ToDoListComponent,
    DigitalClockComponent,
    PracticeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('app.module.ts');
  }
}
