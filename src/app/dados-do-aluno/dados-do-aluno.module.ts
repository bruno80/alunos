import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DadosDoAlunoPage } from './dados-do-aluno.page';

const routes: Routes = [
  {
    path: '',
    component: DadosDoAlunoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DadosDoAlunoPage]
})
export class DadosDoAlunoPageModule {}
