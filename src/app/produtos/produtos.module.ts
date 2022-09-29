import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosComponent } from './produtos.component';
import { DetalhesprodutoComponent } from './detalhesproduto/detalhesproduto.component';
import { FormsModule } from '@angular/forms';
import { ProdutosRoutingModule } from './produtos.routing,module';



@NgModule({
  declarations: [
    ProdutosComponent,
    DetalhesprodutoComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule
  ]
})
export class ProdutosModule { }
