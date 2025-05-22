
  const canvas = document.getElementById('assinatura');
  const ctx = canvas.getContext('2d');
  let desenhando = false;

  // Mouse
  canvas.addEventListener('mousedown', () => desenhando = true);
  canvas.addEventListener('mouseup', () => {
    desenhando = false;
    ctx.beginPath();
  });
  canvas.addEventListener('mousemove', (e) => {
    desenhar(e.clientX, e.clientY, e);
  });

  // Touch
  canvas.addEventListener('touchstart', (e) => {
    desenhando = true;
    e.preventDefault(); // Impede rolagem da tela
  });
  canvas.addEventListener('touchend', () => {
    desenhando = false;
    ctx.beginPath();
  });
  canvas.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    desenhar(touch.clientX, touch.clientY, e);
    e.preventDefault();
  });

  function desenhar(x, y, e) {
    if (!desenhando) return;

    const rect = canvas.getBoundingClientRect();
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';
    ctx.lineTo(x - rect.left, y - rect.top);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x - rect.left, y - rect.top);
  }

  function limparAssinatura() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
  }

  // Antes de enviar o formulário, salvar a imagem base64
  document.querySelector("form").addEventListener("submit", () => {
    const assinaturaBase64 = canvas.toDataURL();
    document.getElementById('assinaturaImg').value = assinaturaBase64;
  });

