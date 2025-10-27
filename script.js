document.addEventListener('DOMContentLoaded', function() {
  const filtri = document.querySelectorAll('.filtro');
  const cards = document.querySelectorAll('.card');
  filtri.forEach(filtro => {
    filtro.addEventListener('click', e => {
      e.preventDefault();
      filtri.forEach(f => f.classList.remove('attivo'));
      filtro.classList.add('attivo');
      const cat = filtro.dataset.cat;
      cards.forEach(card => {
        if(cat === 'tutte' || card.dataset.cat === cat) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
