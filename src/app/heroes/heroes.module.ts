import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";
//El common Module es para importar NgIf y NgFor, estos no se importan solos

@NgModule({
    declarations:[
        HeroComponent,
        ListComponent
    ], 
    exports:[
        HeroComponent,
        ListComponent
    ],
    imports:[
        CommonModule
    ]
})
export class HeroesModule{

}