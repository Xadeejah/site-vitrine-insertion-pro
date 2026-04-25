/* ══════════════════════════════════════════════════
   ProPath — Script JavaScript global
   Fichier : script.js
   Lié à : index.html, apropos.html, services.html, contact.html
   ══════════════════════════════════════════════════ */

/* ── 1. NAVBAR : ombre au scroll ─────────────────── */
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }
});

/* ── 2. NAV : marquer le lien actif ─────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Récupère le nom de la page courante (ex: "services.html")
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

/* ── 3. ANIMATIONS au scroll (IntersectionObserver) ─ */
document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    targets.forEach(el => {
      // Met l'animation en pause jusqu'à ce que l'élément soit visible
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });
  }
});

/* ── 4. FORMULAIRE CONTACT ───────────────────────── */
function submitForm() {
  const required = ['f-prenom', 'f-nom', 'f-email', 'f-objet', 'f-message'];
  let hasError = false;

  // Réinitialise les erreurs précédentes
  required.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.borderColor = '';
  });

  // Vérifie les champs vides
  required.forEach(id => {
    const el = document.getElementById(id);
    if (el && !el.value.trim()) {
      el.style.borderColor = '#e53e3e';
      hasError = true;
    }
  });

  // Vérifie le format de l'email
  const emailEl = document.getElementById('f-email');
  if (emailEl && emailEl.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value)) {
    emailEl.style.borderColor = '#e53e3e';
    hasError = true;
    alert('Veuillez entrer une adresse email valide.');
    return;
  }

  if (hasError) {
    alert('Veuillez remplir tous les champs obligatoires (*)');
    return;
  }

  // Affiche le message de succès
  const formBody = document.getElementById('contact-form-body');
  const formSuccess = document.getElementById('form-success');
  if (formBody) formBody.style.display = 'none';
  if (formSuccess) formSuccess.style.display = 'block';
}

/* ── 5. Retour haut de page au changement de page ── */
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});
