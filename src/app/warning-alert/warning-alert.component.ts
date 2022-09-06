import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <h2> Este es el alert warning!</h2>
  `,
  styles: [`
    h2 {
      padding: 20px;
      text-align: center;
      background-color: red;
      border: 1px solid black;
    }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
