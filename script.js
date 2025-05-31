function toggleMore() {
  const moreText = document.getElementById("more-text");
  const link = document.getElementById("view-more");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    link.textContent = "View Less";
  } else {
    moreText.style.display = "none";
    link.textContent = "View More";
  }
}
//   content box     //
// Open modal
document.querySelectorAll('.view-more-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const modalId = this.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'flex'; // Fix: Use flex instead of block
      document.body.style.overflow = 'hidden'; // prevent background scroll
    }
  });
});

// Close modal on × click
document.querySelectorAll('.close-modal').forEach(btn => {
  btn.addEventListener('click', function () {
    const modal = this.closest('.modal');
    modal.style.display = 'none';
    document.body.style.overflow = ''; // allow scroll again
  });
});

// Close modal on outside click
window.addEventListener('click', function (e) {
  document.querySelectorAll('.modal').forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
});


//   FAQ secont 
const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });

  //      contact section         // 
  const toggleBtn = document.getElementById("contactToggle");
  const contactCard = document.getElementById("contactCard");

  toggleBtn.addEventListener("click", () => {
    contactCard.classList.toggle("hidden");
  });

  // Optional: Close if clicked outside
  document.addEventListener("click", (e) => {
    if (!document.querySelector(".contact-float").contains(e.target)) {
      contactCard.classList.add("hidden");
    }
  });