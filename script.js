// ============================================================================
// 💖 CONFIGURAÇÃO FÁCIL - PERSONALIZE AQUI PARA SUA NAMORADA! 💖
// ============================================================================
const CONFIG = {
  // Nome ou apelido carinhoso que aparece no topo da cartinha:
  saudacao: "Para o amor da minha vida,",

  // Texto principal da cartinha (pode usar quebras de linha normalmente):
  textoCartinha: `Cada pedacinho desse quebra-cabeça me lembra como a minha vida ficou muito mais bonita, leve e completa depois que você chegou.

Você é o meu abraço favorito, a minha paz nos dias corridos e o sorriso mais lindo que eu tenho a sorte de admirar. Obrigado por cada momento, cada risada e por ser exatamente quem você é.

Eu te amo hoje, amanhã e em todos os próximos capítulos da nossa história!`,

  // A frase especial de destaque na cartinha:
  fraseDestaque: "“Em um mundo cheio de coisas passageiras, você é o meu lugar favorito para ficar para sempre. Eu te amo infinitamente!”",

  // Sua assinatura no final da carta:
  assinatura: "Com todo o meu amor ❤️",

  // Se quiser usar uma foto de vocês dois no quebra-cabeça, coloque o arquivo
  // na mesma pasta (ex: "nossa-foto.jpg") e escreva o nome abaixo entre aspas.
  // Se deixar vazio (""), o site cria uma ilustração romântica super fofa automaticamente!
  fotoCustomizada: ""
};

// ============================================================================
// 🎨 GERADOR DE ARTE FOFA (usado se fotoCustomizada estiver vazio)
// ============================================================================
function gerarIlustracaoRomanticaDataURI() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffdde1"/>
        <stop offset="50%" stop-color="#ffb3c1"/>
        <stop offset="100%" stop-color="#ff758f"/>
      </linearGradient>
      <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ff4d6d"/>
        <stop offset="100%" stop-color="#c9184a"/>
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#a4133c" flood-opacity="0.3"/>
      </filter>
    </defs>

    <!-- Fundo suave -->
    <rect width="600" height="600" fill="url(#bg)"/>

    <!-- Círculos decorativos mágicos -->
    <circle cx="300" cy="300" r="240" fill="#fff0f3" opacity="0.45"/>
    <circle cx="300" cy="300" r="190" fill="#ffffff" opacity="0.65"/>

    <!-- Estrelinhas e mini corações nos cantos -->
    <g fill="#ffffff" opacity="0.85">
      <circle cx="95" cy="110" r="8"/>
      <circle cx="510" cy="120" r="10"/>
      <circle cx="110" cy="490" r="9"/>
      <circle cx="495" cy="485" r="7"/>
      <path d="M130 80 C130 70, 115 70, 115 80 C115 70, 100 70, 100 80 C100 95, 115 105, 115 110 C115 105, 130 95, 130 80 Z" fill="#ff4d6d"/>
      <path d="M500 85 C500 75, 485 75, 485 85 C485 75, 470 75, 470 85 C470 100, 485 110, 485 115 C485 110, 500 100, 500 85 Z" fill="#ff4d6d"/>
      <path d="M125 505 C125 495, 110 495, 110 505 C110 495, 95 495, 95 505 C95 520, 110 530, 110 535 C110 530, 125 520, 125 505 Z" fill="#c9184a"/>
      <path d="M510 500 C510 490, 495 490, 495 500 C495 490, 480 490, 480 500 C480 515, 495 525, 495 530 C495 525, 510 515, 510 500 Z" fill="#c9184a"/>
    </g>

    <!-- Grande Coração Central -->
    <path filter="url(#glow)" d="M300 465 C300 465, 120 345, 120 215 C120 140, 180 105, 240 105 C275 105, 300 130, 300 155 C300 130, 325 105, 360 105 C420 105, 480 140, 480 215 C480 345, 300 465, 300 465 Z" fill="url(#heartGrad)" stroke="#ffffff" stroke-width="10"/>

    <!-- Brilho do coração -->
    <path d="M165 195 C165 160, 195 140, 225 140" fill="none" stroke="#ffccd5" stroke-width="10" stroke-linecap="round" opacity="0.7"/>

    <!-- Dois Ursinhos / Bichinhos Fofos Apaixonados no Centro -->
    <!-- Bichinho Esquerdo (Branquinho) -->
    <g transform="translate(235, 275)">
      <circle cx="-28" cy="-35" r="16" fill="#fff5f7" stroke="#592e39" stroke-width="4"/>
      <circle cx="-28" cy="-35" r="8" fill="#ffb3c1"/>
      <circle cx="28" cy="-35" r="16" fill="#fff5f7" stroke="#592e39" stroke-width="4"/>
      <circle cx="28" cy="-35" r="8" fill="#ffb3c1"/>
      <ellipse cx="0" cy="0" rx="44" ry="38" fill="#ffffff" stroke="#592e39" stroke-width="4"/>
      <!-- Bochechas -->
      <ellipse cx="-22" cy="6" rx="8" ry="5" fill="#ff8fa3"/>
      <ellipse cx="22" cy="6" rx="8" ry="5" fill="#ff8fa3"/>
      <!-- Olhinhos felizes -->
      <path d="M-18 -6 Q-13 -14 -8 -6" fill="none" stroke="#592e39" stroke-width="4" stroke-linecap="round"/>
      <path d="M8 -6 Q13 -14 18 -6" fill="none" stroke="#592e39" stroke-width="4" stroke-linecap="round"/>
      <!-- Focinho -->
      <path d="M-5 4 Q0 9 5 4" fill="none" stroke="#592e39" stroke-width="3.5" stroke-linecap="round"/>
    </g>

    <!-- Bichinho Direito (Rosinha) -->
    <g transform="translate(365, 275)">
      <circle cx="-28" cy="-35" r="16" fill="#ffe5ec" stroke="#592e39" stroke-width="4"/>
      <circle cx="-28" cy="-35" r="8" fill="#ff8fa3"/>
      <circle cx="28" cy="-35" r="16" fill="#ffe5ec" stroke="#592e39" stroke-width="4"/>
      <circle cx="28" cy="-35" r="8" fill="#ff8fa3"/>
      <ellipse cx="0" cy="0" rx="44" ry="38" fill="#fff0f3" stroke="#592e39" stroke-width="4"/>
      <!-- Lacinho fofo -->
      <path d="M15 -42 L32 -50 L28 -32 Z" fill="#ff4d6d" stroke="#592e39" stroke-width="2.5"/>
      <path d="M15 -42 L4 -30 L2 -48 Z" fill="#ff4d6d" stroke="#592e39" stroke-width="2.5"/>
      <circle cx="15" cy="-41" r="4.5" fill="#ffd166" stroke="#592e39" stroke-width="2"/>
      <!-- Bochechas -->
      <ellipse cx="-22" cy="6" rx="8" ry="5" fill="#ff758f"/>
      <ellipse cx="22" cy="6" rx="8" ry="5" fill="#ff758f"/>
      <!-- Olhinhos -->
      <circle cx="-13" cy="-6" r="4.5" fill="#592e39"/>
      <circle cx="13" cy="-6" r="4.5" fill="#592e39"/>
      <path d="M-5 4 Q0 9 5 4" fill="none" stroke="#592e39" stroke-width="3.5" stroke-linecap="round"/>
    </g>

    <!-- Coraçãozinho entre eles -->
    <path d="M300 220 C300 212, 288 212, 288 220 C288 212, 276 212, 276 220 C276 232, 288 240, 288 245 C288 240, 300 232, 300 220 Z" fill="#ffd166" stroke="#592e39" stroke-width="2.5" transform="translate(12, -15)"/>

    <!-- Faixa Inferior com Texto -->
    <rect x="135" y="485" width="330" height="62" rx="31" fill="#ffffff" stroke="#ff8fa3" stroke-width="4"/>
    <text x="300" y="525" font-family="Georgia, serif" font-size="30" font-weight="bold" fill="#c9184a" text-anchor="middle">Eu Te Amo ❤️</text>
  </svg>`;

  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

// ============================================================================
// 🎵 EFEITOS SONOROS FOFOS (Web Audio API - não precisa de arquivo externo)
// ============================================================================
let somAtivo = true;
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

function tocarNota(freq, duracao = 0.14, tipo = "sine", delay = 0, volume = 0.12) {
  if (!somAtivo) return;
  try {
    initAudio();
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const now = audioCtx.currentTime + delay;

    osc.type = tipo;
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duracao);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + duracao + 0.02);
  } catch (e) {
    // Ignorar caso navegador bloqueie áudio antes de interação
  }
}

function somClique() {
  tocarNota(523.25, 0.1, "sine", 0, 0.1); // C5
}

function somTroca() {
  tocarNota(587.33, 0.1, "triangle", 0, 0.12); // D5
  tocarNota(783.99, 0.15, "triangle", 0.06, 0.12); // G5
}

function somVitoria() {
  const notas = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
  notas.forEach((n, idx) => {
    tocarNota(n, 0.28, "triangle", idx * 0.11, 0.15);
  });
}

function somAbrirCarta() {
  const notas = [659.25, 783.99, 987.77, 1318.5]; // E5, G5, B5, E6
  notas.forEach((n, idx) => {
    tocarNota(n, 0.32, "sine", idx * 0.12, 0.14);
  });
}

// ============================================================================
// 🧩 LÓGICA DO QUEBRA-CABEÇA 3x3
// ============================================================================
const TOTAL_PECAS = 9;
let ordemPecas = []; // posição atual -> qual índice original está lá
let pecaSelecionada = null;
let imagemAtual = "";
let jogoResolvido = false;

const boardEl = document.getElementById("puzzle-board");
const hintOverlayEl = document.getElementById("hint-overlay");
const progressTextEl = document.getElementById("progress-text");
const progressHeartsEl = document.getElementById("progress-hearts");

function inicializarImagem() {
  if (CONFIG.fotoCustomizada && CONFIG.fotoCustomizada.trim() !== "") {
    imagemAtual = CONFIG.fotoCustomizada;
  } else {
    imagemAtual = gerarIlustracaoRomanticaDataURI();
  }
  hintOverlayEl.style.backgroundImage = `url("${imagemAtual}")`;
}

function embaralharPecas() {
  jogoResolvido = false;
  pecaSelecionada = null;
  boardEl.classList.remove("solved");

  ordemPecas = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  // Embaralha garantindo que não comece já resolvido e tenha um nível gostoso de jogar
  do {
    for (let i = ordemPecas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ordemPecas[i], ordemPecas[j]] = [ordemPecas[j], ordemPecas[i]];
    }
  } while (contarPecasCertas() > 3);

  renderizarTabuleiro();
}

function contarPecasCertas() {
  let certas = 0;
  for (let i = 0; i < TOTAL_PECAS; i++) {
    if (ordemPecas[i] === i) certas++;
  }
  return certas;
}

function atualizarProgresso() {
  const certas = contarPecasCertas();
  progressTextEl.textContent = `${certas} de ${TOTAL_PECAS} pedacinhos no lugar`;

  let coracoesHTML = "";
  for (let i = 0; i < TOTAL_PECAS; i++) {
    coracoesHTML += i < certas ? "❤️" : "🤍";
  }
  progressHeartsEl.innerHTML = coracoesHTML;
}

function renderizarTabuleiro() {
  boardEl.innerHTML = "";

  ordemPecas.forEach((indiceOriginal, posicaoAtual) => {
    const tile = document.createElement("div");
    tile.className = "puzzle-tile";

    if (pecaSelecionada === posicaoAtual) {
      tile.classList.add("selected");
    }
    if (indiceOriginal === posicaoAtual && !jogoResolvido) {
      tile.classList.add("correct");
    }

    // Calcula posição X e Y da fatia 3x3 (0%, 50%, 100%)
    const col = indiceOriginal % 3;
    const row = Math.floor(indiceOriginal / 3);
    const posX = col * 50;
    const posY = row * 50;

    tile.style.backgroundImage = `url("${imagemAtual}")`;
    tile.style.backgroundPosition = `${posX}% ${posY}%`;

    tile.addEventListener("click", () => clicarPeca(posicaoAtual));
    boardEl.appendChild(tile);
  });

  atualizarProgresso();
}

function clicarPeca(posicao) {
  if (jogoResolvido) return;

  if (pecaSelecionada === null) {
    pecaSelecionada = posicao;
    somClique();
    renderizarTabuleiro();
  } else if (pecaSelecionada === posicao) {
    pecaSelecionada = null;
    somClique();
    renderizarTabuleiro();
  } else {
    // Troca as duas peças!
    const temp = ordemPecas[pecaSelecionada];
    ordemPecas[pecaSelecionada] = ordemPecas[posicao];
    ordemPecas[posicao] = temp;
    pecaSelecionada = null;

    somTroca();
    renderizarTabuleiro();
    verificarVitoria();
  }
}

function verificarVitoria() {
  if (contarPecasCertas() === TOTAL_PECAS) {
    jogoResolvido = true;
    boardEl.classList.add("solved");
    somVitoria();
    lancarConfetesCoracoes(42);

    setTimeout(() => {
      mostrarEstagioEnvelope();
    }, 1300);
  }
}

// ============================================================================
// 💌 TRANSIÇÃO PARA O ENVELOPE E A CARTINHA
// ============================================================================
const stagePuzzleEl = document.getElementById("stage-puzzle");
const stageEnvelopeEl = document.getElementById("stage-envelope");
const stageLetterEl = document.getElementById("stage-letter");
const envelopeWrapperEl = document.getElementById("envelope-wrapper");

function mostrarEstagioEnvelope() {
  stagePuzzleEl.classList.add("hidden");
  stageEnvelopeEl.classList.remove("hidden");
}

function abrirEnvelope() {
  if (envelopeWrapperEl.classList.contains("open")) return;
  envelopeWrapperEl.classList.add("open");
  somAbrirCarta();
  lancarConfetesCoracoes(35);

  setTimeout(() => {
    stageEnvelopeEl.classList.add("hidden");
    stageLetterEl.classList.remove("hidden");
    preencherCartinha();
  }, 950);
}

function preencherCartinha() {
  document.getElementById("letter-greeting").textContent = CONFIG.saudacao;
  document.getElementById("letter-body").textContent = CONFIG.textoCartinha;
  document.getElementById("letter-quote").textContent = CONFIG.fraseDestaque;
  document.getElementById("letter-signature").textContent = CONFIG.assinatura;
}

// ============================================================================
// ✨ CONFETES DE CORAÇÕES E FUNDO ANIMADO
// ============================================================================
function lancarConfetesCoracoes(quantidade = 30) {
  const emojis = ["❤️", "💖", "💘", "💝", "✨", "🌸", "💕"];
  for (let i = 0; i < quantidade; i++) {
    const el = document.createElement("div");
    el.className = "confetti-piece";
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    const startX = window.innerWidth / 2 + (Math.random() - 0.5) * 140;
    const startY = window.innerHeight / 2;

    const angle = Math.random() * Math.PI * 2;
    const distance = 90 + Math.random() * 260;
    const tx = Math.cos(angle) * distance + "px";
    const ty = Math.sin(angle) * distance - 80 + "px";
    const rot = (Math.random() - 0.5) * 520 + "deg";

    el.style.left = startX + "px";
    el.style.top = startY + "px";
    el.style.setProperty("--tx", tx);
    el.style.setProperty("--ty", ty);
    el.style.setProperty("--rot", rot);
    el.style.animationDuration = 1 + Math.random() * 1.1 + "s";

    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2200);
  }
}

function criarCoracoesFlutuantesFundo() {
  const container = document.getElementById("bg-hearts");
  const simbolos = ["♥", "❤", "✦", "♡"];
  for (let i = 0; i < 18; i++) {
    const span = document.createElement("span");
    span.className = "floating-heart";
    span.textContent = simbolos[i % simbolos.length];
    span.style.left = Math.random() * 100 + "vw";
    span.style.fontSize = 14 + Math.random() * 22 + "px";
    span.style.animationDuration = 8 + Math.random() * 10 + "s";
    span.style.animationDelay = Math.random() * 8 + "s";
    container.appendChild(span);
  }
}

// ============================================================================
// 🎮 EVENTOS DOS BOTÕES
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  criarCoracoesFlutuantesFundo();
  inicializarImagem();
  embaralharPecas();

  // Botão de espiar a imagem original
  const btnHint = document.getElementById("btn-hint");
  const mostrarDica = () => hintOverlayEl.classList.add("active");
  const esconderDica = () => hintOverlayEl.classList.remove("active");

  btnHint.addEventListener("mousedown", mostrarDica);
  btnHint.addEventListener("mouseup", esconderDica);
  btnHint.addEventListener("mouseleave", esconderDica);
  btnHint.addEventListener("touchstart", (e) => {
    e.preventDefault();
    mostrarDica();
  });
  btnHint.addEventListener("touchend", esconderDica);

  // Botão de resolver rapidinho caso ela queira ir direto pra surpresa
  document.getElementById("btn-autosolve").addEventListener("click", () => {
    ordemPecas = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    pecaSelecionada = null;
    renderizarTabuleiro();
    verificarVitoria();
  });

  // Abrir envelope ao clicar
  envelopeWrapperEl.addEventListener("click", abrirEnvelope);
  document.getElementById("btn-open-envelope").addEventListener("click", abrirEnvelope);

  // Botão de chuva de amor na cartinha
  let cliquesAmor = 0;
  const frasesExtras = [
    "Você ganhou +1.000.000 de beijos e abraços! 🥰",
    "Cada clique é um 'eu te amo' que meu coração manda pra você! 💓",
    "Meta do dia: fazer a namorada mais linda do mundo sorrir! ✨",
    "Amor infinito desbloqueado com sucesso! ♾️❤️"
  ];

  document.getElementById("btn-more-love").addEventListener("click", () => {
    cliquesAmor++;
    somVitoria();
    lancarConfetesCoracoes(35);
    const msgEl = document.getElementById("love-counter-msg");
    msgEl.textContent = frasesExtras[(cliquesAmor - 1) % frasesExtras.length];
  });

  // Voltar para jogar de novo
  document.getElementById("btn-replay").addEventListener("click", () => {
    stageLetterEl.classList.add("hidden");
    envelopeWrapperEl.classList.remove("open");
    stagePuzzleEl.classList.remove("hidden");
    embaralharPecas();
  });
});
