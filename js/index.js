    const cards = document.querySelectorAll('.cartas-img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.getElementById('closeBtn');
    const body = document.getElementById('bod-part');

    cards.forEach(img => {
        img.addEventListener('click', () => {
          lightboxImg.src = img.src;
          lightboxImg.style.borderRadius = "10px";
          lightbox.classList.add('show');
          // forzar reflujo antes de añadir la animación
          void lightbox.offsetWidth;
          lightbox.classList.add('fade-in');
          lightbox.classList.remove('fade-out');
        });
      });
  
      const closeLightbox = () => {
        lightbox.classList.remove('fade-in');
        lightbox.classList.add('fade-out');
        setTimeout(() => {
          lightbox.classList.remove('show');
          lightboxImg.src = '';
        }, 300); // igual al tiempo del transition
      };
  
      closeBtn.addEventListener('click', closeLightbox);
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
          closeLightbox();
        }
      });