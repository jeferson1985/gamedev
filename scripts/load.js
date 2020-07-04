function preload() {
    imagemCenario = loadImage('imagens/cenario/floresta.png');
    imagemGameOver = loadImage('imagens/assets/game-over.png');
    imagemPersonagem = loadImage('imagens/personagem/correndo.png');
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
    imagemTelaInicial = loadImage('imagens/assets/telainicial.png');
    imagemVida = loadImage('imagens/assets/coracao.png');
    imagemfonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
    fita = loadJson('scripts/fita/fita.json')
    imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
    somDoJogo = loadSound('imagens/assets/sons/trilha_jogo.mp3');
    somPulo = loadSound('imagens/assets/sons/somPulo.mp3');
  
  }