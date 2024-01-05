import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './core/components/child/child.component';
import { ParentComponent } from './core/components/parent/parent.component';
import { ToDoListComponent } from './core/components/to-do-list/to-do-list.component';
import { DataSendComponent } from './core/components/data-send/data-send.component';
import { DataReceiveComponent } from './core/components/data-receive/data-receive.component';
import { EmployeeTableComponent } from './pages/public/employee-table/employee-table.component';
import { CounterComponent } from './pages/public/counter/counter.component';
import { UserListComponent } from './core/components/user-list/user-list.component';
import { InterpolationComponent } from './pages/account/interpolation/interpolation.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    ToDoListComponent,
    DataSendComponent,
    DataReceiveComponent,
    EmployeeTableComponent,
    CounterComponent,
    UserListComponent,
    InterpolationComponent
    
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
