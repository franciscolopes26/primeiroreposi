function menorNum() {
  var num1 = 1;
  var num2 = 2;
  var num3 = 3;
  var num4 = 4;
  var num5 = 5;
  var menor = 100000000000;

  if (num1 < menor) {
    menor = num1;
  }

  if (num2 < menor) {
    menor = num2;
  }
  if (num3 < menor) {
    menor = num3;
  }
  if (num4 < menor) {
    menor = num4;
  }
  if (num5 < menor) {
    menor = num5alue;
  }
  document.write(menor);
}

function dia() {
  var data = new Date();
  var diaatul = data.getUTCDay();

  if (diaatul != 6 && diaatul != 7) {
    alert("e e dia da semana");
  } else {
    alert("e dia da fimsemana");
  }
  //alert(diaatul);
}
function radom() {
  numeros = Math.floor(Math.random() * 4 + 1);
  var arvore = document.getElementById("arvore");
  if (numeros === 1) {
    arvore.src = "images/arv1.jpg";
  }
  if (numeros === 2) {
    arvore.src = "images/arv2.jpg";
  }
  if (numeros === 3) {
    arvore.src = "images/arv3.jpg";
  }
  if (numeros === 4) {
    arvore.src = "images/arv4.jpg";
  }
}
function mouseouver() {
  document.getElementById("passar").innerHTML = "obrigado";
}

function ordenar() {
  // var conteudo = document.getElementById("txtFrase").value;

  //return  alert(conteudo.split('').sort().join(''));

  var conteudo = document.getElementById("txtFrase").value.toLowerCase();
  var conteudo2 = document.getElementById("lblFrase");

  conteudo2.innerHTML = conteudo;
}
var radom = [];
function add() {
  var conteudo = document.getElementById("txtArray");
  radom.push(conteudo.value);
  alert(radom);
}
function por() {
  var num = 0;
  var label = document.getElementById("lblValues");
  for (var i = 0; i < radom.length; i++) {
    num += Number(radom[i]);
  }

  label.innerHTML =
    "numeros do array : " + radom.length + "<br/>" + "soma :" + num;
}
function validate() {
  var radius = document.getElementById("txtRaio").value;
  var resultado = document.getElementById("lblRes");
  if (rdbV.checked == 1) {
    radius = Math.abs(radius);
    volume = Math.PI * Math.pow(radius, 2) * 2;
    volume = volume.toFixed(5);
    resultado.innerHTML = "o volume do cilindro e: " + Number(volume);
  } else {
    var result = 2 * Math.PI * Number(radius) * (2 + Number(radius));
    result = result.toFixed(5);
    resultado.innerHTML = "a Area do cilindro e : " + Number(result);
  }
}
