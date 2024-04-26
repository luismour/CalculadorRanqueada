function calcularNivel() {
  var vitorias = parseInt(document.getElementById("vitorias").value);

  var saldoVitorias = vitorias;

  var nivel;
  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  document.getElementById("resultado").innerText =
    "O Herói tem de saldo de " + saldoVitorias + " e está no nível de " + nivel;
}
