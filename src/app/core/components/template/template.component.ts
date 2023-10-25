import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  template:`<p class="container">Template</p>`,
  styleUrls: ['./template.component.scss'],
  styles:[`
  p
  {
    padding:15px;
    background-color:skyblue;
    border-radius:10px;
  }`
  ]
})
export class TemplateComponent {
  @HostListener('click', ['$event'])
  show() {
    alert('Template Url ...');
  }
}
