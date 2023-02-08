function sacar() {
  let value = Number(document.getElementById("valor").value);
  if (value && value % 10 === 0) {
    let cem = Math.floor(value / 100);
    let resto = value % 100;
    let cinquenta = Math.floor(resto / 50);
    resto = resto % 50;
    let vinte = Math.floor(resto / 20);
    resto = resto % 20;
    let dez = Math.floor(resto / 10);
    resto = resto % 10;
    document.getElementById("resul").innerHTML =("Você receberá " + (cem) + " notas de 100, " + (cinquenta) + " de 50, " + (vinte) + " de 20 e " + (dez) + " de 10");
  }
  else {
    document.getElementById("resul").innerHTML =("Você digitou algo errado");

  }
}