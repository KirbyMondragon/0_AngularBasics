import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/couter.component";
import { ListComponent } from "../heroes/list/list.component";
import { HeroComponent } from "../heroes/hero/hero.component";


@NgModule({
    declarations:[
        CounterComponent
    ],
    exports:[
        CounterComponent
    ]
})
export class CounterModule{

}