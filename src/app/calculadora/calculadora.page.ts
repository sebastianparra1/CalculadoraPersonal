import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';  // Importado para *ngFor
import { FormsModule } from '@angular/forms';    // Importado para [(ngModel)]

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]  // Agregados módulos necesarios
})
export class CalculadoraPage implements OnInit {
  x: number = 0;
  y: number = 0;
  resultados: { nombre: string, valor: number }[] = [];

  constructor() { }

  ngOnInit() {}

  calcular() {
    this.resultados = [
      { nombre: 'Riel superior', valor: this.x },
      { nombre: 'Riel inferior', valor: this.x },
      { nombre: 'Jamba', valor: this.y - 4 },  //  y - 4
      { nombre: 'Cabezal', valor: this.x * 0.5 - 10 },  // Ajustado a 570 en lugar de 580
      { nombre: 'Zócalo', valor: this.x * 0.5 - 10 },    // Ajustado a 570 en lugar de 580
      { nombre: 'Pierna', valor: this.y - 20 },   //  y - 20
      { nombre: 'Traslape', valor: this.y - 20 }  //  y - 20
    ];
  }

  limpiar() {
    this.x = 0;
    this.y = 0;
    this.resultados = [];
  }
}
