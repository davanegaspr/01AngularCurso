import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:`heroe.component.html`
})
export class HeroeComponen{
    nombre:string ='iroman';
    edad:number =45;

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre = 'spiderMan'
    }
    cambiarEdad():void{
        this.edad = 30;
    }
}