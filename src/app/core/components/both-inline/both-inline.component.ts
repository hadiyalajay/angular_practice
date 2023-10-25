import { Component } from '@angular/core';

@Component({
  selector: 'app-both-inline',
  template: `
    <div class="container">
      <p class="olive">Both Inline</p>
    </div>
  `,
  styles: [
    `
      .olive {
        padding: 15px;
        background-color: olive;
        border-radius: 10px;
      }
    `,
  ],
})
export class BothInlineComponent {}
