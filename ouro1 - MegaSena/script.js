function megasena(){
  let array = [7];
  for (let i = 0; i < 7; i++) {
    let num = Number((Math.random() * 59).toFixed(0)) + Number(1);
    for (let j = 0; j < i; j++) {
      if (array[j] == num) {
        i--;
      }
      else {
        array[i] = num;
      }
    }
  }
  for (let i = 0; i < 7; i++) {
    console.log(array[i]);
    let resul = document.getElementById('resultado');
    resul.innerHTML+=" "+array[i]+" ";
  }
}