import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './core/components/user-list/user-list.component';
import { PropertyBindingComponent } from './pages/account/data-binding/property-binding/property-binding.component';

@NgModule({
  declarations: [AppComponent, UserListComponent, PropertyBindingComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('app.module.ts');
  }
}
