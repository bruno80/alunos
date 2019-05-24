import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'lista-de-alunos', loadChildren: './lista-de-alunos/lista-de-alunos.module#ListaDeAlunosPageModule' },
  { path: 'dados-do-aluno', loadChildren: './dados-do-aluno/dados-do-aluno.module#DadosDoAlunoPageModule' },
  { path: 'novo-aluno', loadChildren: './novo-aluno/novo-aluno.module#NovoAlunoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
