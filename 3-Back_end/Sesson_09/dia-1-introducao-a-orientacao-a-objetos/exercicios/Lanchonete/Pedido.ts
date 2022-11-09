import Cliente from "./Cliente";
import Item from "./Item";

export default class Pedido {
  cliente: Cliente;
  items: Item[];
  pagamento: string;
  desconto: number;

  constructor (c: Cliente, i: Item[], p: string, d: number) {
    this.cliente = c;
    this.items = i;
    this.pagamento = p;
    this.desconto = d;
  }

  totalPedido() {
    let total = 0;
    for (let index = 0; index < this.items.length; index += 1) {
      total += this.items[index].preco;
    }
    return total;
  }

  totalDesconto() {
    let total = this.totalPedido();
    let desconto = total * (1 - this.desconto);
    return desconto
  }
}