// ============================================================
//  HIER ANPASSEN – alles Persönliche steht in diesem Block 💕
// ============================================================
const CONFIG = {
  ich: "Dein Name",
  sie: "Ihr Name",
  // Datum, an dem ihr zusammengekommen seid (JJJJ-MM-TT)
  zusammenSeit: "2024-02-14",

  geschichte: [
    { datum: "Frühling 2023", titel: "Das erste Treffen", text: "Wo habt ihr euch kennengelernt? Erzähl es hier." },
    { datum: "Sommer 2023", titel: "Das erste Date", text: "Was habt ihr gemacht? Was war lustig oder peinlich?" },
    { datum: "14. Februar 2024", titel: "Offiziell zusammen", text: "Der Tag, an dem alles angefangen hat. 💍" },
    { datum: "Heute", titel: "Und es geht weiter…", text: "Jeder Tag mit dir ist ein neues Kapitel." },
  ],

  gruende: [
    "Dein Lachen macht jeden Tag besser.",
    "Du verstehst mich ohne Worte.",
    "Mit dir wird selbst Einkaufen ein Abenteuer.",
    "Du gibst die besten Umarmungen der Welt.",
    "Du glaubst an mich, auch wenn ich es nicht tue.",
    "Deine Augen, wenn du von etwas begeistert bist.",
    "Du bist mein Lieblingsmensch – einfach so.",
  ],

  // Bilder: Lege Fotos in den Ordner "bilder/" und trage hier den Pfad ein,
  // z. B. { bild: "bilder/strand.jpg", text: "Urlaub am Meer" }.
  // Ohne "bild" wird ein süßes Emoji angezeigt.
  momente: [
    { emoji: "🌅", text: "Unser erster Sonnenuntergang" },
    { emoji: "🍕", text: "Pizza-Abende" },
    { emoji: "✈️", text: "Unsere erste Reise" },
    { emoji: "🎢", text: "Freizeitpark-Chaos" },
    { emoji: "☕", text: "Sonntagsfrühstück" },
    { emoji: "🐶", text: "Hunde streicheln" },
  ],

  brief:
    "Mein Schatz,\n\nich wollte dir einfach mal sagen, wie froh ich bin, dass es dich gibt. " +
    "Danke für jedes Lachen, jede Umarmung und jeden kleinen Moment mit dir.\n\n" +
    "Ich liebe dich – heute, morgen und an jedem Tag danach.",
};
// ============================================================

const $ = (sel) => document.querySelector(sel);

function fillNames() {
  document.querySelectorAll("[data-ich]").forEach((el) => (el.textContent = CONFIG.ich));
  document.querySelectorAll("[data-sie]").forEach((el) => (el.textContent = CONFIG.sie));
  document.title = `${CONFIG.ich} & ${CONFIG.sie} 💕`;
}

function startCounter() {
  const start = new Date(CONFIG.zusammenSeit + "T00:00:00");
  const tick = () => {
    let diff = Math.max(0, Date.now() - start.getTime());
    const tage = Math.floor(diff / 86400000);
    diff -= tage * 86400000;
    const std = Math.floor(diff / 3600000);
    diff -= std * 3600000;
    const min = Math.floor(diff / 60000);
    const sek = Math.floor((diff - min * 60000) / 1000);
    $("#c-tage").textContent = tage.toLocaleString("de-DE");
    $("#c-std").textContent = std;
    $("#c-min").textContent = min;
    $("#c-sek").textContent = sek;
  };
  tick();
  setInterval(tick, 1000);
  $("#seit-datum").textContent = start.toLocaleDateString("de-DE", {
    day: "numeric", month: "long", year: "numeric",
  });
}

function renderStory() {
  $("#timeline").innerHTML = CONFIG.geschichte
    .map(
      (s) => `
      <li class="tl-item reveal">
        <span class="tl-dot">♥</span>
        <div class="tl-card">
          <time>${s.datum}</time>
          <h3>${s.titel}</h3>
          <p>${s.text}</p>
        </div>
      </li>`
    )
    .join("");
}

function renderMoments() {
  $("#gallery").innerHTML = CONFIG.momente
    .map(
      (m, i) => `
      <figure class="polaroid reveal" style="--tilt:${i % 2 ? 2.5 : -2.5}deg">
        ${m.bild ? `<img src="${m.bild}" alt="${m.text}" loading="lazy">` : `<div class="emoji-pic">${m.emoji || "💖"}</div>`}
        <figcaption>${m.text}</figcaption>
      </figure>`
    )
    .join("");
}

function setupReasons() {
  let last = -1;
  const btn = $("#reason-btn");
  const out = $("#reason-text");
  btn.addEventListener("click", (e) => {
    let i;
    do i = Math.floor(Math.random() * CONFIG.gruende.length);
    while (i === last && CONFIG.gruende.length > 1);
    last = i;
    out.classList.remove("pop");
    void out.offsetWidth;
    out.textContent = CONFIG.gruende[i];
    out.classList.add("pop");
    burst(e.clientX, e.clientY);
  });
}

function setupLetter() {
  $("#letter-text").textContent = CONFIG.brief;
  const env = $("#envelope");
  env.addEventListener("click", () => {
    env.classList.toggle("open");
    env.setAttribute("aria-expanded", env.classList.contains("open"));
  });
}

function burst(x, y) {
  for (let i = 0; i < 12; i++) {
    const h = document.createElement("span");
    h.className = "burst";
    h.textContent = ["💖", "💕", "💗", "✨"][i % 4];
    const a = (Math.PI * 2 * i) / 12;
    h.style.left = x + "px";
    h.style.top = y + "px";
    h.style.setProperty("--dx", Math.cos(a) * 90 + "px");
    h.style.setProperty("--dy", Math.sin(a) * 90 + "px");
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 900);
  }
}

function floatingHearts() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const layer = $("#hearts");
  setInterval(() => {
    const h = document.createElement("span");
    h.className = "float-heart";
    h.textContent = Math.random() > 0.5 ? "♥" : "♡";
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = 12 + Math.random() * 22 + "px";
    h.style.animationDuration = 6 + Math.random() * 6 + "s";
    layer.appendChild(h);
    setTimeout(() => h.remove(), 12000);
  }, 700);
}

function revealOnScroll() {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

fillNames();
startCounter();
renderStory();
renderMoments();
setupReasons();
setupLetter();
floatingHearts();
revealOnScroll();
