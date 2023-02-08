function calcular() {
  let total = document.getElementById("total").value;
  let moradia = document.getElementById("moradia").value;
  let educacao = document.getElementById("educacao").value;
  let transporte = document.getElementById("transporte").value;
  if ((total || total===0) && (moradia || moradia ===0) && (educacao || educacao===0) && (transporte || transporte===0) && total > 0 && moradia > 0 && educacao > 0 && transporte > 0){
    let mAtual = 100*(moradia/total);
    let eAtual = 100*(educacao/total);
    let tAtual = 100*(transporte/total);
    document.getElementById('m').innerHTML= mAtual.toFixed(2);
    document.getElementById('e').innerHTML= eAtual.toFixed(2);
    document.getElementById('t').innerHTML= tAtual.toFixed(2);
    if(mAtual>30)document.getElementById("1").style.color="red";
        if(eAtual>20)document.getElementById("2").style.color="red";
        if(tAtual>15)document.getElementById("3").style.color="red";
  }
  else{
    alert("Você digitou algo errado, lembre de usar '.' e não ','")
  }

}
