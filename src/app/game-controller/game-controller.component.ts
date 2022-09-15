import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {
  @Output() intervalCalled = new EventEmitter<number>();
  lastNumber = 0;
  interval;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalCalled.emit(this.lastNumber + 1);
      this.lastNumber++;
    } , 1000)
  }

  onPauseGame() {
    clearInterval(this.interval)
  }

}
