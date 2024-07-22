import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
   public HeroNames: string[] = ["Thor","DeadPool" ,"Invencible"];
   public deletedHero?: string;

   removeTheLastHero():void {
    
   this.deletedHero = this.HeroNames.pop();

   }
}
