import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
