import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponen } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        HeroeComponen,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        CommonModule
    ]
})
export class heroesModule{

}