
  const canvas = document.getElementById('assinatura');
  const ctx = canvas.getContext('2d');
  let desenhando = false;

  canvas.addEventListener('mousedown', () => desenhando = true);
  canvas.addEventListener('mouseup', () => { desenhando = false; ctx.beginPath(); });
  canvas.addEventListener('mousemove', desenhar);

  function desenhar(e) {
    if (!desenhando) return;
    const rect = canvas.getBoundingClientRect();
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  }

  function limparAssinatura() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
  }

  document.querySelector("form").addEventListener("submit", () => {
    const assinaturaBase64 = canvas.toDataURL();
    document.getElementById('assinaturaImg').value = assinaturaBase64;
  });

