import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalCalled(calledNumber: number) {
    if (calledNumber % 2 === 0) {
      this.evenNumbers.push(calledNumber);
    } else {
      this.oddNumbers.push(calledNumber);
    }
  }
}
