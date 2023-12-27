import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './pages/public/product-list/product-list.component';
import { PracticeComponent } from './pages/public/practice/practice.component';
@NgModule({
  declarations: [AppComponent, ProductListComponent, PracticeComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('app.module.ts');
  }
}
