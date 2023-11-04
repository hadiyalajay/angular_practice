import { Component } from '@angular/core';

@Component({
  selector: 'app-cricket-point-table',
  templateUrl: './cricket-point-table.component.html',
  styleUrls: ['./cricket-point-table.component.scss'],
})
export class CricketPointTableComponent {
  cricketTeam = [
    {
      team: 'India',
      match: 7,
      win: 7,
      loss: 0,
      tied: 0,
      nrr: +2.102,
      pts: 14,
      lastFive: [1, 1, 1, 1, 1],
      img: 'assets/image/ind.png',
    },
    {
      team: 'South Africa',
      match: 7,
      win: 6,
      loss: 1,
      tied: 0,
      nrr: +2.290,
      pts: 12,
      lastFive: [1, 1, 1, 1, 0],
      img: 'assets/image/sa.png',
    },
    {
      team: 'Australia',
      match: 6,
      win: 4,
      loss: 2,
      tied: 0,
      nrr: +0.970,
      pts: 8,
      lastFive: [1, 1, 1, 1, 0],
      img: 'assets/image/aus.png',
    },
    {
      team: 'New Zealand',
      match: 7,
      win: 4,
      loss: 3,
      tied: 0,
      nrr: +0.484,
      pts: 8,
      lastFive: [0, 0, 0, 1, 1],
      img: 'assets/image/nz.png',
    },
    {
      team: 'Afghanistan',
      match: 7,
      win: 4,
      loss: 3,
      tied: 0,
      nrr: -0.330,
      pts: 8,
      lastFive: [1, 1, 1, 0, 1],
      img: 'assets/image/afg.png',
    },
    {
      team: 'Pakistan',
      match: 7,
      win: 3,
      loss: 4,
      tied: 0,
      nrr: -0.024,
      pts: 6,
      lastFive: [1, 0, 0, 0, 0],
      img: 'assets/image/pak.png',
    },
    {
      team: 'Sri Lanka',
      match: 7,
      win: 2,
      loss: 5,
      tied: 0,
      nrr: -1.162,
      pts: 4,
      lastFive: [0, 0, 1, 1, 0],
      img: 'assets/image/sl.png',
    },
    {
      team: 'Netherlands',
      match: 7,
      win: 2,
      loss: 5,
      tied: 0,
      nrr: -1.398,
      pts: 4,
      lastFive: [0, 1, 0, 0, 1],
      img: 'assets/image/ned.png',
    },
    {
      team: 'Bangladesh',
      match: 7,
      win: 1,
      loss: 6,
      tied: 0,
      nrr: -1.446,
      pts: 2,
      lastFive: [0, 0, 0, 0, 0],
      img: 'assets/image/ban.png',
    },
    {
      team: 'England',
      match: 6,
      win: 1,
      loss: 5,
      tied: 0,
      nrr: -1.652,
      pts: 2,
      lastFive: [0, 0, 0, 0, 1],
      img: 'assets/image/eng.png',
    },
  ];

  higestWin() {
    this.cricketTeam.sort((a, b) => b.win - a.win);
  }

  higestLoss() {
    this.cricketTeam.sort((a, b) => a.win - b.win);
  }

  higestRunrate() {
    this.cricketTeam.sort((a, b) => b.nrr - a.nrr);
  }

  higestPts() {
    this.cricketTeam.sort((a, b) => b.pts - a.pts);
  }
}
