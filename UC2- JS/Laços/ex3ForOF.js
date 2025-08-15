const precos = [19.9, 35.5, 12.0, 8.4]
let total = 0;
for (const preco of precos) {
  total += preco;
}
console.log("Total: R$ " + total.toFixed(2));
