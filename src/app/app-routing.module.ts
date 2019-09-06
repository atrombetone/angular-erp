import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EntidadeListComponent } from './pages/entidade/entidade-list/entidade-list.component';
import { EntidadeComponent } from './pages/entidade/entidade/entidade.component';
import { ProdutoListComponent } from './pages/produto/produto-list/produto-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Dashboard' }},
  { path: 'pessoas', component: EntidadeListComponent, data: { title: 'Pessoas', isNovoVisible : true }},
  { path: 'produtos', component: ProdutoListComponent, data: { title: 'Produtos', isNovoVisible : true }},
  { path: 'new-pessoa/:id', component: EntidadeComponent, data: { title: 'Novo cadastro', isNovoVisible : false }},
  { path: 'edit-pessoa/:id', component: EntidadeComponent, data: { title: 'Editar cadastro', isNovoVisible : false }},
  { path: 'fornecedor', component: EntidadeListComponent, data: { title: 'Fornecedores', type: 'F' }},
  { path: 'vendedor', component: EntidadeListComponent, data: { title: 'Vendedores', type: 'V' }},
  { path: 'entidade/:id', component: EntidadeComponent, data: { title: 'Cliente' }},
  { path: '**', component: HomeComponent, data: { title: 'Dashboard' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],



exports: [RouterModule]
})
export class AppRoutingModule { }
