// ===== Anchorline Studio — shared behavior =====

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Inject blueprint corner marks + sheet tag ---- */
  const crossSVG = `<svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
    <line x1="11" y1="0" x2="11" y2="22" stroke="#FFFFFF" stroke-width="1"/>
    <line x1="0" y1="11" x2="22" y2="11" stroke="#FFFFFF" stroke-width="1"/>
  </svg>`;
  ['tl','tr','bl','br'].forEach(pos => {
    const el = document.createElement('div');
    el.className = `corner-mark ${pos}`;
    el.innerHTML = crossSVG;
    el.setAttribute('aria-hidden', 'true');
    document.body.appendChild(el);
  });

  const sheet = document.body.getAttribute('data-sheet');
  if (sheet) {
    const tag = document.createElement('div');
    tag.className = 'sheet-tag';
    tag.textContent = sheet;
    document.body.appendChild(tag);
  }

  /* ---- Mobile nav toggle ---- */
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('navLinks');
  if (toggle && nav) {
    const scrim = document.createElement('div');
    scrim.className = 'overlay-scrim';
    scrim.id = 'navScrim';
    document.body.appendChild(scrim);

    const closeNav = () => {
      nav.classList.remove('open');
      scrim.classList.remove('show');
      toggle.setAttribute('aria-expanded', 'false');
    };
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      scrim.classList.toggle('show', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    scrim.addEventListener('click', closeNav);
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
  }

  /* ---- Auth page: tab switching between Log in / Create account ---- */
  const tabs = document.querySelectorAll('.auth-tab');
  if (tabs.length) {
    const panels = document.querySelectorAll('.auth-panel');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
        tab.setAttribute('aria-selected', 'true');
        const target = tab.getAttribute('data-target');
        panels.forEach(p => p.classList.toggle('active', p.id === target));
      });
    });
  }

  /* ---- Forms: prevent default, show a lightweight success note ---- */
  document.querySelectorAll('form[data-fake-submit]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const successEl = form.parentElement.querySelector('.form-success') ||
                         form.querySelector('.form-success');
      if (successEl) {
        successEl.classList.add('show');
      }
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        const original = btn.textContent;
        btn.textContent = 'Sent →';
        setTimeout(() => { btn.textContent = original; }, 2400);
      }
    });
  });

});
