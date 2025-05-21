
  const canvas = document.getElementById('assinatura');
  const ctx = canvas.getContext('2d');
  let desenhando = false;

  canvas.addEventListener('mousedown', () => desenhando = true);
  canvas.addEventListener('mouseup', () => { desenhando = false; ctx.beginPath(); });
  canvas.addEventListener('mousemove', desenhar);

  function desenhar(e) {
    if (!desenhando) return;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  }

  function limparAssinatura() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
  }

  document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();

    // Captura a imagem da assinatura
    const assinaturaBase64 = canvas.toDataURL();
    document.getElementById('assinaturaImg').value = assinaturaBase64;

    // Envia os dados via fetch para seu Apps Script
    const formData = new FormData(this);

    })
    .then(response => response.text())
    .then(data => {
      alert('Formulário enviado com sucesso!');
      document.getElementById('formulario').reset();
      limparAssinatura();
    })
    .catch(error => {
      alert('Erro ao enviar. Tente novamente.');
      console.error(error);
    });

