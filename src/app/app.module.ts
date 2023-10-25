import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './core/components/template/template.component';
import { ToDoListComponent } from './pages/public/to-do-list/to-do-list.component';
import { CounterComponent } from './pages/public/counter/counter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InlineTemplateComponent } from './core/components/inline-template/inline-template.component';
import { InlineStyleComponent } from './core/components/inline-style/inline-style.component';
import { BothInlineComponent } from './core/components/both-inline/both-inline.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ToDoListComponent,
    CounterComponent,
    InlineTemplateComponent,
    InlineStyleComponent,
    BothInlineComponent,
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
