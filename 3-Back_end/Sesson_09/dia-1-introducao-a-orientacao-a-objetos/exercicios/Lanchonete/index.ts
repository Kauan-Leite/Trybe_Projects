import Cliente from "./Cliente";
import Item from "./Item";
import Pedido from "./Pedido";

const clienteKauan = new Cliente('Kauan');

const batata = new Item('Batata Frita', 19.99);
const acai = new Item('Acai', 16.50);

const compra = new Pedido(clienteKauan, [batata, acai], 'Pix', 0.1);


// console.log(clienteKauan);

// console.log(batata);
// console.log(acai);

// console.log(compra);
console.log(`Valor Total: ${compra.totalPedido()}`);
console.log(`Valor Com Desconto: ${compra.totalDesconto()}`);
