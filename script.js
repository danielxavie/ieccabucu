document.addEventListener("DOMContentLoaded", () => {
  const cfg = EVENT_CONFIG;

  // ---------- Conteúdo dinâmico ----------
  document.getElementById("address-text").textContent = cfg.address;
  document.getElementById("maps-link").href = cfg.mapsUrl;
  document.getElementById("maps-link-card").href = cfg.mapsUrl;
  document.getElementById("instagram-link").href = cfg.social.instagram;
  document.getElementById("facebook-link").href = cfg.social.facebook;
  document.getElementById("whatsapp-link").href = cfg.social.whatsapp;

  const schedule = document.getElementById("schedule");
  schedule.innerHTML = cfg.schedule.map((day, index) => `
    <article class="day-card reveal" style="--delay:${index * 100}ms">
      <header class="day-head">
        <span>${day.label}</span>
        <h3>${day.date}</h3>
      </header>
      <div class="schedule-list">
        ${day.items.map(item => `
          <div class="schedule-item">
            <time>${item.time}</time>
            <div><strong>${item.title}</strong><small>${item.type}</small></div>
          </div>
        `).join("")}
      </div>
    </article>
  `).join("");

  const faqList = document.getElementById("faq-list");
  faqList.innerHTML = cfg.faq.map((item, index) => `
    <div class="faq-item">
      <button class="faq-question" aria-expanded="false" aria-controls="faq-${index}">
        <span>${item.q}</span><b>+</b>
      </button>
      <div class="faq-answer" id="faq-${index}" hidden><p>${item.a}</p></div>
    </div>
  `).join("");

  // ---------- Countdown ----------
  const target = new Date(cfg.startDate).getTime();
  const countdown = document.getElementById("countdown");
  const live = document.getElementById("event-live");
  let timerId;

  function pad(n) { return String(n).padStart(2, "0"); }

  function updateCountdown() {
    const diff = target - Date.now();

    if (diff <= 0) {
      clearInterval(timerId);
      countdown.hidden = true;
      live.hidden = false;
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("days").textContent = pad(days);
    document.getElementById("hours").textContent = pad(hours);
    document.getElementById("minutes").textContent = pad(minutes);
    document.getElementById("seconds").textContent = pad(seconds);
  }

  updateCountdown();
  timerId = setInterval(updateCountdown, 1000);

  // ---------- Compartilhamento ----------
  const modal = document.getElementById("share-modal");
  const whatsapp = document.getElementById("share-whatsapp");
  const copy = document.getElementById("share-copy");
  const native = document.getElementById("share-native");
  const status = document.getElementById("copy-status");

  function openShare() {
    const url = window.location.href.split("#")[0];
    const message = `${cfg.shareMessage}${url}`;
    whatsapp.href = `https://wa.me/?text=${encodeURIComponent(message)}`;
    modal.hidden = false;
    document.body.classList.add("modal-open");
    setTimeout(() => document.querySelector(".modal-close").focus(), 0);
  }

  document.querySelectorAll("[data-share]").forEach(btn => btn.addEventListener("click", openShare));
  document.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", () => {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  }));

  copy.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href.split("#")[0]);
      status.textContent = "Link copiado. Agora é só mandar para alguém.";
    } catch {
      status.textContent = "Não foi possível copiar automaticamente. Copie o endereço da página.";
    }
  });

  native.addEventListener("click", async () => {
    if (!navigator.share) {
      status.textContent = "O compartilhamento nativo não está disponível neste navegador.";
      return;
    }
    try {
      await navigator.share({
        title: cfg.name,
        text: cfg.shareMessage,
        url: window.location.href.split("#")[0]
      });
    } catch {}
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && !modal.hidden) {
      modal.hidden = true;
      document.body.classList.remove("modal-open");
    }
  });

  // ---------- FAQ ----------
  faqList.addEventListener("click", e => {
    const btn = e.target.closest(".faq-question");
    if (!btn) return;
    const answer = document.getElementById(btn.getAttribute("aria-controls"));
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!expanded));
    answer.hidden = expanded;
  });

  // ---------- Mobile menu ----------
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open", !open);
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
  }));

  // ---------- Scroll reveal ----------
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});
