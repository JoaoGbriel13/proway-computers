import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho, produtos } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho : IProdutoCarrinho[] = []
  total = 0;
  constructor(public carrinhoService : CarrinhoService, private route : Router) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal()
  }

  calcularTotal(){
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
  }

  removeProduto(produtoId : number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProduto(produtoId)
    this.calcularTotal()
  }

  comprou(){
    alert("Compra realizada com sucesso!")
    this.carrinhoService.limparCarrinho()
    this.route.navigate(["produtos"])
  }

}
