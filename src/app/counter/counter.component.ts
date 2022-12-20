import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.less']
})
export class CounterComponent {
  currentCount = 0;

  increment(){
    this.currentCount++;
  }

  decrement(){
    this.currentCount--;
  }

  reset(){
    this.currentCount = 0;
  }
}
