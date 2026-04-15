const openButtons = document.querySelectorAll('.open-modal');
const modal = document.getElementById('ticketModal');
const closeBtn = document.querySelector('.modal-close');
const overlay = document.querySelector('.modal-overlay');
const concertInput = document.getElementById('concertInput');
const modalForm = document.querySelector('.modal-form');

openButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const row = button.closest('tr');

    if (row && concertInput) {
      const concertName = row.querySelector('td')?.textContent.trim() || '';
      concertInput.value = concertName;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  });
}

if (overlay) {
  overlay.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
});

if (modalForm) {
  modalForm.addEventListener('submit', (e) => {
    e.preventDefault(); // главное

    alert('Дякуємо! Ваше замовлення прийнято.');

    modal.classList.remove('active');
    document.body.style.overflow = '';
    modalForm.reset();

    if (concertInput) {
      concertInput.value = '';
    }
  });
}