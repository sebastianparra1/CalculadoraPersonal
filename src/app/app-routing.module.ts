import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CalculadoraPage } from './calculadora/calculadora.page';  // Importa correctamente el componente
 // Importamos el componente directamente

const routes: Routes = [
  {
    path: '',
    redirectTo: 'calculadora',  // Ahora redirige a Calculadora al abrir la app
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'calculadora',
    component: CalculadoraPage  // Usamos el componente directamente en la ruta
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
