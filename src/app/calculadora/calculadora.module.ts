// src/app/calculadora/calculadora.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CALCULADORAPageRoutingModule } from './calculadora-routing.module';

// Importa el componente standalone, pero no lo declares
import { CALCULADORAPage } from './calculadora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CALCULADORAPageRoutingModule,
    CALCULADORAPage  // Importa el componente aquí en lugar de declararlo
  ]
})
export class CALCULADORAPageModule {}
