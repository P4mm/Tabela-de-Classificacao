var rafa = {
  nome: "Biel",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var paulo = {
  nome: "Pam",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var gui = {
  nome: "Ana",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

function AdicionarJogador() {
  var nomeJogador = document.getElementById("nomeJogador");
  jogadores.push({
      nome: nomeJogador.value,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
  });
  nomeJogador.value = "";
  exibeJogadoresNaTela(jogadores);
}

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);
gui.pontos = calculaPontos(gui);

var jogadores = [rafa, paulo, gui];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
      elemento = elemento + "<tr>";
      elemento = elemento + "<td>" + jogadores[i].nome + "</td>";
      elemento = elemento + "<td>" + jogadores[i].vitorias + "</td>";
      elemento = elemento + "<td>" + jogadores[i].empates + "</td>";
      elemento = elemento + "<td>" + jogadores[i].derrotas + "</td>";
      elemento = elemento + "<td>" + jogadores[i].pontos + "</td>";
      elemento = elemento + "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
      elemento = elemento + "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
      elemento = elemento + "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
      elemento = elemento + "<td><button onClick='ZerarJogador(" + i + ")'>Limpar</button></td>";
      elemento = elemento + "<tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;

}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}

function ZerarJogador(i) {
  var jogador = jogadores[i];
  jogador.vitorias = 0;
  jogador.empates = 0;
  jogador.derrotas = 0;
  jogador.pontos = 0;
  alert("Tem certeza que deseja zerar tudo?")
  exibeJogadoresNaTela(jogadores);
}

function zerarJogo() {
  for (var i = 0; i < jogadores.length; i++) {
      jogadores[i].vitorias = 0;
      jogadores[i].empates = 0;
      jogadores[i].derrotas = 0;
      jogadores[i].pontos = 0;
  }
  alert("Tem certeza que deseja zerar tudo?")
  exibeJogadoresNaTela(jogadores);
}