import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  // template: `
  //   <div class='container'>
  //     <p class="orangeSkyblue">Template</p>
  //   </div>
  // `,
  styleUrls: ['./template.component.scss'],
  // styles: [
  //   `
  //     .orangeSkyblue {
  //       padding: 15px;
  //       background-color: skyblue;
  //       border-radius: 10px;
  //     }
  //   `,
  // ],
})
export class TemplateComponent {
  @HostListener('click', ['$event'])
  show() {
    alert('Template Url ...');
  }
}
