import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
Cursos:string[]= ['HTML', 'Angular','PHP']
animales:Array<any> =[
 {tipo:'Perro', nombre:'Lisa', edad:10},
 {tipo:'Gato', nombre:'Pepon', edad:2},
 {tipo:'Pato', nombre: 'Tantan', edad:7},]

}

