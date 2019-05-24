import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaDeAlunosPage } from './lista-de-alunos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDeAlunosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaDeAlunosPage]
})
export class ListaDeAlunosPageModule {}
