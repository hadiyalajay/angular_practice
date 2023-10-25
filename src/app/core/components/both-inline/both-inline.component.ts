import { Component } from '@angular/core';

@Component({
  selector: 'app-both-inline',
  template: `
    <div class="container">
      <p> both-inline </p>
    </div>
  `,
  styles: [
    `
      p {
        padding: 15px;
        background-color: olive;
        border-radius: 10px;
      }
    `,
  ],
})
export class BothInlineComponent {}
