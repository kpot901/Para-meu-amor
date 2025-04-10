document.addEventListener('DOMContentLoaded', function () {
  const topFlap = document.querySelector('.top-flap');
  const envelope = document.querySelector('.envelope');
  const openBtn = document.getElementById('open');
  const closeBtn = document.getElementById('close');
  const music = document.getElementById('music');

  // Abrir a carta
  openBtn.addEventListener('click', () => {
    // Anima a aba
    topFlap.style.transform = 'scaleY(-1)';
    topFlap.style.transition = 'transform 0.5s ease';

    // Ativa efeito visual e inicia música
    envelope.classList.add('open');
    createHearts();

    // Toca a música
    if (music.paused) {
      music.play().catch(err => {
        console.warn('Erro ao tocar a música:', err);
      });
    }
  });

  // Fechar a carta
  closeBtn.addEventListener('click', () => {
    topFlap.style.transform = 'scaleY(1)';
    topFlap.style.transition = 'transform 0.5s ease';
    envelope.classList.remove('open');

    // Pausar música se quiser
    music.pause();
    music.currentTime = 0; // reseta o tempo
  });

  // Efeitos de corações
  function createHearts() {
    for (let i = 0; i < 15; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDelay = `${Math.random() * 2}s`;
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 3000);
    }
  }
});


const muteBtn = document.getElementById('mute');

muteBtn.addEventListener('click', () => {
  if (music.muted) {
    music.muted = false;
    muteBtn.textContent = '🔊';
  } else {
    music.muted = true;
    muteBtn.textContent = '🔇';
  }
});






