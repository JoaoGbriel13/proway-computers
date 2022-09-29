import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesprodutoComponent } from './detalhesproduto/detalhesproduto.component';
import { ProdutosComponent } from './produtos.component';


const routes: Routes = [
  { path: '', component: ProdutosComponent },
  { path: ':id', component: DetalhesprodutoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }