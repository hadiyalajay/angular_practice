import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-style',
  templateUrl: './inline-style.component.html',
  styles: [
    `
      .aqua {
        padding: 15px;
        border-radius: 10px;
        background-color: aqua;
      }
    `,
  ],
})
export class InlineStyleComponent {}
