function showPage(name) {
    
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + name).classList.add('active');

    
    document.querySelectorAll('#navLinks a').forEach(a => {
      a.classList.toggle('active', a.dataset.page === name);
    });

   
    window.scrollTo(0, 0);

    
    setTimeout(triggerReveal, 80);
    return false;
  }

  function openLightbox(src) {
    document.getElementById('lightboxImg').src = src;
    document.getElementById('lightbox').classList.add('open');
  }

  function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
  }

  
  function triggerReveal() {
    const els = document.querySelectorAll('.page.active .reveal');
    els.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, i * 80);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  
  setTimeout(triggerReveal, 200);