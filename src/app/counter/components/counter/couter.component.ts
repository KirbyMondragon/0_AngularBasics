import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl:  './app.component.html'
})

export class CounterComponent {
  public title:string = 'Angular developer ';
  public counter:number = 10;

  increaseBy(value:number):void {
    this.counter+= value;

  }
  DecreaseBy(value:number):void {
    this.counter-=value;
  }
  Reset():void{
    this.counter = 10;
  }
}
