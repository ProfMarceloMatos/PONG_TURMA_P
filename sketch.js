let comprimentoTela = 800;
let larguraTela = 600;
let xBolinha = comprimentoTela / 2;
let yBolinha = larguraTela / 2;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let diametroBolinha = 20;
let raioBolinha = diametroBolinha / 2;
let xMinhaRaquete = 10;
let yMinhaRaquete = 300;
let larguraRaquete = 10;
let comprimentoRaquete = 80;
let xRaqueteOponente = comprimentoTela - 20;
let yRaqueteOponente = 300;
let colidiu = false;
let meusPontos = 0;
let pontosOponente = 0;

function setup() {
  createCanvas(comprimentoTela, larguraTela);
}

function draw() {
  background(150);
  criaBolinha();
  moveBolinha();
  colideBolinha();
  criaRaquete(xMinhaRaquete, yMinhaRaquete);
  criaRaquete(xRaqueteOponente, yRaqueteOponente);
  moveMinhaRaquete();
  verificaColisaoRaquete(xMinhaRaquete, yMinhaRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  pontuacaoJogo();
}

function criaBolinha() {
  circle(xBolinha, yBolinha, diametroBolinha);
}

function moveBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  yRaqueteOponente = yBolinha - comprimentoRaquete / 2;
}

function colideBolinha() {
  if (xBolinha + raioBolinha > comprimentoTela || xBolinha - raioBolinha < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raioBolinha > larguraTela || yBolinha - raioBolinha < 0) {
    velocidadeYBolinha *= -1;
  }
}

function criaRaquete(posicaoX, posicaoY) {
  rect(posicaoX, posicaoY, larguraRaquete, comprimentoRaquete);
}

function moveMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yMinhaRaquete -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yMinhaRaquete += 10;
  }
}

function verificaColisaoRaquete(x, y) {
  colidiu = collideRectCircle(
    x,
    y,
    larguraRaquete,
    comprimentoRaquete,
    xBolinha,
    yBolinha,
    raioBolinha
  );
  if (colidiu) {
    velocidadeXBolinha *= -1;
  }
}

function incluiPlacar(){
  fill(255);
  text(meusPontos, 200, 30);
  text(pontosOponente, 600, 30);
}

function pontuacaoJogo(){
  if (xBolinha > comprimentoTela - 10){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosOponente += 1;
  }
}