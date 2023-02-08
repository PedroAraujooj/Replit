function calcular() {
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  if (altura && peso && (!isNaN(peso)) && (!isNaN(altura))) {
    let imc = ((peso) / (altura ** 2));
    document.getElementById("resul").innerHTML=" seu IMC é "+imc.toFixed(2);
    if(imc<18.5){
      document.getElementById('1').style.color="red"
    }
    else if(imc>=18.5 && imc<=24.9){
      document.getElementById('2').style.color="red"
    }
    else if(imc>=25 && imc<=29.9){
      document.getElementById('3').style.color="red"
    }
    else if(imc>=30 && imc<=39.9){
      document.getElementById('4').style.color="red"
    }
    else{
      document.getElementById('5').style.color="red"
    }
  }
  else{
    document.getElementById("resul").innerHTML="algo deu errado, tente novamente";
  }
}