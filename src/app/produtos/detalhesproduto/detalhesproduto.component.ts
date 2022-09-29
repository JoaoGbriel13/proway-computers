import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhesproduto',
  templateUrl: './detalhesproduto.component.html',
  styleUrls: ['./detalhesproduto.component.css']
})
export class DetalhesprodutoComponent implements OnInit {
  produto : IProduto | undefined;
  quantidade = 1;
  constructor(private produtosService : ProdutosService, private route : ActivatedRoute, private notificarService : NotificacaoService, private carrinho : CarrinhoService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"))
    this.produto = this.produtosService.getOne(produtoId)
  }

  adicionarCarrinho(){
    this.notificarService.notificar("Produto adicionado ao carrinho")
    const produto : IProdutoCarrinho = {
      ...this.produto!,
      quantidade : this.quantidade
    }
    this.carrinho.adicionarAoCarrinho(produto)
  }

}
