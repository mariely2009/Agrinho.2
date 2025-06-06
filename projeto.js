function setup() {
  createCanvas(800, 500);
  noLoop();
}

function draw() {
  background(135, 206, 235); // Céu azul claro
  
  // Desenhando o solo (campo)
  fill(34, 139, 34); // Cor verde para o solo
  rect(0, height / 2, width, height / 2); // Solo verde

  // Desenhando a casa
  drawHouse(300, 250); // Posição da casa

  // Desenhando árvores
  drawTree(100, 300); // Árvore à esquerda
  drawTree(150, 280); // Árvore à esquerda
  drawTree(200, 320); // Árvore à esquerda
  drawTree(500, 270); // Árvore à direita
  drawTree(600, 290); // Árvore à direita
  drawTree(700, 310); // Árvore à direita

  // Desenhando os animais
  drawRabbit(120, 350); // Coelho à esquerda
  drawRabbit(200, 350); // Coelho à esquerda
  drawCow(400, 300); // Vaca no centro
  drawPig(600, 320); // Porco à direita
  drawBird(150, 150); // Pássaro voando
  drawBird(650, 130); // Pássaro voando

  // Desenhando o sol
  fill(255, 204, 0); // Cor do sol (amarelo)
  noStroke();
  ellipse(700, 100, 100, 100); // Sol
}

// Função para desenhar a casa
function drawHouse(x, y) {
  // Corpo da casa
  fill(255, 223, 186); // Cor da casa (bege claro)
  rect(x, y, 150, 120); // Corpo da casa
  
  // Telhado
  fill(139, 69, 19); // Cor do telhado (marrom)
  triangle(x - 20, y, x + 170, y, x + 75, y - 70); // Telhado

  // Porta
  fill(139, 69, 19); // Cor da porta (marrom)
  rect(x + 55, y + 60, 40, 60); // Porta

  // Janelas
  fill(173, 216, 230); // Cor das janelas (azul claro)
  rect(x + 10, y + 20, 40, 40); // Janela esquerda
  rect(x + 100, y + 20, 40, 40); // Janela direita
}

// Função para desenhar uma árvore
function drawTree(x, y) {
  fill(139, 69, 19); // Cor marrom para o tronco
  rect(x - 10, y, 20, 50); // Tronco da árvore
  
  fill(34, 139, 34); // Cor verde para as folhas
  ellipse(x, y - 20, 60, 60); // Folhas da árvore
}

// Função para desenhar um coelho
function drawRabbit(x, y) {
  fill(255); // Cor branca para o coelho
  ellipse(x, y - 10, 30, 30); // Corpo do coelho
  ellipse(x - 10, y - 15, 20, 20); // Cabeça do coelho
  
  // Orelhas do coelho
  fill(255, 228, 196); // Cor das orelhas (bege claro)
  ellipse(x - 20, y - 25, 10, 25); // Orelha esquerda
  ellipse(x, y - 25, 10, 25); // Orelha direita
  
  fill(0); // Cor dos olhos e nariz
  ellipse(x - 12, y - 15, 5, 5); // Olho esquerdo
  ellipse(x - 8, y - 10, 3, 3); // Nariz
}

// Função para desenhar uma vaca
function drawCow(x, y) {
  fill(255); // Cor do corpo da vaca
  ellipse(x, y, 60, 40); // Corpo da vaca
  
  fill(0); // Cor das manchas da vaca (preto)
  ellipse(x - 20, y - 10, 15, 15); // Mancha à esquerda
  ellipse(x + 20, y - 10, 15, 15); // Mancha à direita
  
  fill(255); // Cabeça da vaca
  ellipse(x, y - 40, 30, 30); // Cabeça

  // Chifres
  fill(139, 69, 19); // Cor marrom para os chifres
  triangle(x - 10, y - 50, x - 15, y - 60, x - 5, y - 55); // Chifre esquerdo
  triangle(x + 10, y - 50, x + 15, y - 60, x + 5, y - 55); // Chifre direito

  fill(0); // Olhos e nariz da vaca
  ellipse(x - 8, y - 42, 5, 5); // Olho esquerdo
  ellipse(x + 8, y - 42, 5, 5); // Olho direito
  ellipse(x, y - 35, 5, 5); // Nariz
}

// Função para desenhar um porco
function drawPig(x, y) {
  fill(255, 182, 193); // Cor rosa do porco
  ellipse(x, y, 50, 30); // Corpo do porco
  fill(255, 182, 193);
  ellipse(x, y - 25, 30, 30); // Cabeça
  
  fill(0); // Olhos do porco
  ellipse(x - 10, y - 25, 5, 5); // Olho esquerdo
  ellipse(x + 10, y - 25, 5, 5); // Olho direito
  
  fill(255, 105, 180); // Cor do focinho
  ellipse(x, y - 10, 15, 10); // Focinho

  fill(255); // Orelhas
  triangle(x - 15, y - 40, x - 20, y - 50, x - 5, y - 45); // Orelha esquerda
  triangle(x + 15, y - 40, x + 20, y - 50, x + 5, y - 45); // Orelha direita
  
  // Pernas
  fill(255, 182, 193); // Cor das pernas
  rect(x - 15, y + 10, 5, 20); // Perna esquerda
  rect(x + 10, y + 10, 5, 20); // Perna direita
}

// Função para desenhar um pássaro
function drawBird(x, y) {
  fill(255, 0, 0); // Cor vermelha para o pássaro
  ellipse(x, y, 20, 10); // Corpo do pássaro
  triangle(x - 10, y - 5, x - 20, y - 10, x - 10, y - 15); // Asa esquerda
  triangle(x + 10, y - 5, x + 20, y - 10, x + 10, y - 15); // Asa direita
  
  // Cabeça e bico do pássaro
  fill(255, 204, 0); // Cor amarela para o bico
  triangle(x, y - 5, x + 5, y - 10, x, y - 15); // Bico
}
