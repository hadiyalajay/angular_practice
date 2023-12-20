import { Component } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss'],
})
export class DigitalClockComponent {
  h = 0;
  m = 0;
  s = 0;

  ngOnInit() {
    this.showTime();
  }

  showTime() {
    setInterval(() => {
      const time = new Date();
      this.h = time.getHours();
      this.m = time.getMinutes();
      this.s = time.getSeconds();

      if (this.h == 0) {
        this.h = 12;
      } else if (this.h > 12) {
        this.h = this.h - 12;
      }
    }, 1000);
  }
}
