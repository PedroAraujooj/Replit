
function doces() {
  let doces = Number(document.getElementById("doces").value);
  let caixa = Number(document.getElementById("caixa").value);
  if (doces && caixa && (Number.isInteger(caixa)) && (Number.isInteger(doces))) {
    let qnt = Math.floor(doces / caixa);
    console.log(qnt);
    let resto = doces % caixa;
    console.log(resto);
    if (resto === 0) {
      document.getElementById("resul").innerHTML =("Vão ser necessarias " + qnt + " caixas cheias");
    }
    else {
      document.getElementById("resul").innerHTML = ("Vão ser necessarias " + qnt + " caixas cheias e mais 1 para os " + resto + " doces que sobraram, totalizando " + (qnt + 1) + " caixas.");
    }
  }
  else {
    document.getElementById("resul").innerHTML =("Algo deu errado");
  }
}