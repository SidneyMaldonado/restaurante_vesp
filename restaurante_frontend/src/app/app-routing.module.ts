import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddclienteComponent } from './addcliente/addcliente.component';
import { AddpagamentoComponent } from './addpagamento/addpagamento.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { IncluirEntregaComponent } from './incluir-entrega/incluir-entrega.component';
import { IncluirFornecedorComponent } from './incluir-fornecedor/incluir-fornecedor.component';
import { IncluirFuncionarioComponent } from './incluir-funcionario/incluir-funcionario.component';
import { IncluirPratosComponent } from './incluir-pratos/incluir-pratos.component';
import { IncluirSetorComponent } from './incluir-setor/incluir-setor.component';
import { IncluirVeiculoComponent } from './incluir-veiculo/incluir-veiculo.component';
import { ListarClientesOrdemAlfaComponent } from './listar-clientes-ordem-alfa/listar-clientes-ordem-alfa.component';
import { ListarEntregaComponent } from './listar-entrega/listar-entrega.component';
import { ListarFaturamentoComponent } from './listar-faturamento/listar-faturamento.component';
import { ListarFornecedorComponent } from './listar-fornecedor/listar-fornecedor.component';
import { ListarFuncionarioComponent } from './listar-funcionario/listar-funcionario.component';
import { ListarPagamentoClienteComponent } from './listar-pagamento-cliente/listar-pagamento-cliente.component';
import { ListarPratoPorProdutoComponent } from './listar-prato-por-produto/listar-prato-por-produto.component';
import { ListarPratosIncluirPedidosComponent } from './listar-pratos-incluir-pedidos/listar-pratos-incluir-pedidos.component';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';
import { ListarSetorComponent } from './listar-setor/listar-setor.component';
import { ListarVeiculoComponent } from './listar-veiculo/listar-veiculo.component';
import { ListarpratoprontoComponent } from './listarpratopronto/listarpratopronto.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { PrincipalComponent } from './principal/principal.component';
import { QuantidadePratosPorPedidoComponent } from './quantidade-pratos-por-pedido/quantidade-pratos-por-pedido.component';
import { SetorService } from './setor.service';

const routes: Routes = [
{path: '', component: PrincipalComponent},
{path: 'addcliente', component: AddclienteComponent},
{path: 'addpagamento', component: AddpagamentoComponent},
{path: 'listarpratopronto', component: ListarpratoprontoComponent},
{path: 'listarfaturamento', component:ListarFaturamentoComponent},
{path: 'listarpratosincluirpedidos', component:ListarPratosIncluirPedidosComponent},
{path: 'login', component: AutenticacaoComponent},
{path: 'incluirpratos', component:IncluirPratosComponent},
{path: 'listarproduto', component: ListarProdutoComponent},
{path: 'principal', component: PrincipalComponent},
{path: 'listarpagamentocliente', component: ListarPagamentoClienteComponent},
{path: 'listarpratoporproduto', component: ListarPratoPorProdutoComponent},
{path: 'listarclientesordem', component: ListarClientesOrdemAlfaComponent},
{path: 'quantidadepratosporpedido', component: QuantidadePratosPorPedidoComponent},
{path: 'listarfuncionario', component: ListarFuncionarioComponent},
{path: 'incluirfuncionario', component: IncluirFuncionarioComponent},
{path: 'incluirsetor', component: IncluirSetorComponent},
{path: 'listarsetor', component: ListarSetorComponent},
{path: 'incluirveiculo', component: IncluirVeiculoComponent},
{path: 'listarveiculo', component: ListarVeiculoComponent},
{path: 'listarfornecedor', component: ListarFornecedorComponent},
{path: 'incluirfornecedor', component: IncluirFornecedorComponent},
{path: 'listarentrega', component: ListarEntregaComponent},
{path: 'incluirentrega', component: IncluirEntregaComponent},
{path: 'excluirpagamento', component:PagamentoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
