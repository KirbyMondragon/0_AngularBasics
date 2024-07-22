import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = "Spider-Man";
  public age:number = 30;
  private counter:boolean = false;
  //Los get se usan como propiedades de un objecto
  get capitalizedName():string {
    return this.name.toUpperCase();
    
  }
  //Esto es un metodo de una funcion
  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }
  changeHero():void{
    if ( this.counter === false){
      this.name = "Iron Man"
      this.counter = true;
    }else if ( this.counter === true){
      this.name = "Spider-Man"
      this.counter = false;
    } 
  }
  changeAge():void{
    this.age = 45
    if (this.counter === false){
      this.age = 45;
      this.counter = true;
    }else if(this.counter === true) {
      this.age = 30;
      this.counter = false;
    }
  }

}
