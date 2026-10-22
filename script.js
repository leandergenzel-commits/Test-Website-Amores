// ============================================================
//  HIER ANPASSEN – alles Persönliche steht in diesem Block 💕
// ============================================================
const CONFIG = {
  ich: "Indi",
  sie: "Martini",
  // Datum, an dem ihr zusammengekommen seid (JJJJ-MM-TT)
  zusammenSeit: "2026-05-03",

  geschichte: [
    { datum: "Austauschjahr", titel: "Wie alles begann 🇮🇹🤝🇩🇪", text: "Martini kommt aus Ponte Caffaro in Italien und hat ihr Austauschjahr in Deutschland gemacht – ausgerechnet in Rathenow. Genau dort haben wir uns kennengelernt." },
    { datum: "Anfang April 2026", titel: "Zusammen in Montenegro 🇲🇪", text: "Sonne, Meer, ein Pool mit Bergblick und die Aussicht ganz oben vom Lovćen." },
    { datum: "Ende April 2026", titel: "AIDA-Kreuzfahrt 🛳️", text: "Griechenland & Türkei: die Akropolis in Athen, Lorbeerkränze, Volos und ganz viel Meer." },
    { datum: "3. Mai 2026", titel: "Offiziell zusammen 💍", text: "Nach der Kreuzfahrt war klar: Wir gehören zusammen." },
    { datum: "Sommer 2026", titel: "Berlin, Dresden & mehr ☀️", text: "SUP am Schlachtensee, Hertha-Fieber, Bootstouren und ein Tag in Dresden." },
    { datum: "Seitdem", titel: "Ciao Italia! 🍕", text: "Schon 3× habe ich dich in Italien besucht – einmal sogar zusammen mit meinem Kumpel Steve. Lago d'Idro, Aperitivo und dolce vita inklusive." },
    { datum: "Heute", titel: "Und es geht weiter…", text: "Jeder Tag mit dir ist ein neues Kapitel." },
  ],

  gruende: [
    "Deine Augen strahlen wie die Sonne – ist das überhaupt noch legal? ☀️",
    "Deine Haare sehen immer bombe aus – ob Locken, glatt oder kompakter Zopf.",
    "Deine Nägel sind immer perfekt. Waffenschein ist Pflicht! 💅",
    "Mit deiner süßen Art verzauberst du einfach jeden.",
    "Du hast dein Austauschjahr ausgerechnet in Rathenow gemacht – das war Schicksal.",
    "Mit dir wird jede Reise zum Abenteuer – von Athen bis zum Lago d'Idro.",
    "Dein Kussmund auf wirklich jedem Foto. 😘",
    "Du trägst sogar meinen Hertha-Schal für mich. 💙",
    "Dein Lachen macht jeden Tag besser.",
    "Du bist mein Lieblingsmensch – einfach so.",
  ],

  // Fotos liegen in "bilder/", Videos in "videos/".
  // Ein Eintrag mit "video" statt "bild" wird als kleines Video abgespielt.
  momente: [
    { bild: "bilder/montenegro-pool.jpg", text: "Sonnenterrasse", ort: "Montenegro", datum: "06.04.2026" },
    { bild: "bilder/lovcen.jpg", text: "Ganz oben auf dem Lovćen", ort: "Montenegro", datum: "April 2026" },
    { bild: "bilder/montenegro-meer.jpg", text: "Wind, Sonne & Meer", ort: "Montenegro", datum: "April 2026" },
    { bild: "bilder/akropolis.jpg", text: "Kuscheln an der Akropolis", ort: "Athen", datum: "April 2026" },
    { bild: "bilder/lorbeerkraenze.jpg", text: "Göttin & Gott mit Lorbeerkranz", ort: "Griechenland", datum: "April 2026" },
    { bild: "bilder/volos.jpg", text: "Landgang mit Meerblick", ort: "Volos", datum: "25.04.2026" },
    { bild: "bilder/ueberraschung.jpg", text: "Eine kleine Überraschung 💕" },
    { video: "videos/wiese.mp4", poster: "videos/wiese.jpg", text: "Faulenzen im Gras", datum: "24.05.2026" },
    { video: "videos/schlachtensee.mp4", poster: "videos/schlachtensee.jpg", text: "SUP am Schlachtensee", ort: "Berlin", datum: "30.05.2026" },
    { video: "videos/dresden.mp4", poster: "videos/dresden.jpg", text: "Prost aus Dresden 🍻", ort: "Dresden", datum: "06.06.2026" },
    { bild: "bilder/hertha.jpg", text: "Ha Ho He, Hertha BSC 💙", ort: "Berlin" },
    { bild: "bilder/bootstour.jpg", text: "Kapitän Indi an Bord 🚤" },
    { video: "videos/lago-idro.mp4", poster: "videos/lago-idro.jpg", text: "Bootsfahrt auf dem Lago d'Idro", ort: "Idro, Italien", datum: "30.07.2026" },
    { bild: "bilder/lago-bacio.jpg", text: "Un bacio 😘", ort: "Italien", datum: "06.08.2026" },
    { bild: "bilder/gardasee.jpg", text: "Posen am Hafen", ort: "Gardasee", datum: "Sommer 2026" },
    { bild: "bilder/aperitivo.jpg", text: "Aperitivo mit Aussicht", ort: "Italien", datum: "Sommer 2026" },
  ],

  brief:
    "Hi Martina,\n\n" +
    "du willst wissen, was ich an dir liebe? Da hab ich echt sehr viel Glück gehabt – so einen wundervollen Menschen wie dich treffe ich nie wieder.\n\n" +
    "Mit deiner süßen, netten und sympathischen Art schaffst du es immer, deine Mitmenschen zu verzaubern. Dich kann man nur mögen! " +
    "Und wenn ich dachte, deine inneren Werte sind schon der Hammer, dann haut mich dein Äußeres jedes Mal komplett vom Hocker.\n\n" +
    "Deine Haare? Immer Tagesform – mal Locken, mal glatt oder einfach ein kompakter Zopf. Egal wie, du siehst immer bombe aus! " +
    "Und nein, deine Haare sind nicht zu kurz, sie sind perfekt ;)\n\n" +
    "Wenn ich dich anschaue, fallen mir sofort deine wunderschönen Augen auf. Mit ihren wunderschönen Farben strahlen sie wie die Sonne. Ist das überhaupt noch legal?\n\n" +
    "Und auch wenn du immer ewig brauchst, dich für deine neuen Nägel zu entscheiden – am Ende sind sie immer perfekt. Waffenschein ist Pflicht!\n\n" +
    "Neben den tausend anderen Dingen, die an dir wunderschön sind, komme ich jetzt zum Wichtigsten: " +
    "Auch wenn du erst ein bisschen lernen musstest, ist dein Männergeschmack aus heutiger Sicht perfekt. " +
    "Du hast deinen Mann gefunden, der dich über alles liebt und jeden Tag versucht, dich glücklich zu machen.\n\n" +
    "Und du liebst mich auch/nicht?",
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
    .map((m, i) => {
      const media = m.video
        ? `<video src="${m.video}" poster="${m.poster || ""}" muted loop playsinline preload="none" aria-label="${m.text}"></video><span class="play-badge">▶</span>`
        : m.bild
          ? `<img src="${m.bild}" alt="${m.text}" loading="lazy">`
          : `<div class="emoji-pic">${m.emoji || "💖"}</div>`;
      const meta = [m.ort && `📍 ${m.ort}`, m.datum].filter(Boolean).join(" · ");
      return `
      <figure class="polaroid reveal" style="--tilt:${i % 2 ? 2.5 : -2.5}deg" data-index="${i}" tabindex="0">
        <div class="frame">${media}</div>
        <figcaption>${m.text}${meta ? `<small>${meta}</small>` : ""}</figcaption>
      </figure>`;
    })
    .join("");

  // Videos nur abspielen, solange sie sichtbar sind
  const io = new IntersectionObserver((entries) =>
    entries.forEach((e) => (e.isIntersecting ? e.target.play().catch(() => {}) : e.target.pause()))
  );
  document.querySelectorAll(".polaroid video").forEach((v) => io.observe(v));
}

function setupLightbox() {
  const box = $("#lightbox");
  const content = $("#lb-content");
  const caption = $("#lb-caption");
  const open = (i) => {
    const m = CONFIG.momente[i];
    content.innerHTML = m.video
      ? `<video src="${m.video}" controls autoplay loop playsinline></video>`
      : `<img src="${m.bild}" alt="${m.text}">`;
    caption.textContent = [m.text, m.ort, m.datum].filter(Boolean).join(" · ");
    box.hidden = false;
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    box.hidden = true;
    content.innerHTML = "";
    document.body.style.overflow = "";
  };
  $("#gallery").addEventListener("click", (e) => {
    const fig = e.target.closest(".polaroid");
    if (fig && CONFIG.momente[fig.dataset.index].emoji === undefined) open(fig.dataset.index);
  });
  $("#gallery").addEventListener("keydown", (e) => {
    const fig = e.target.closest(".polaroid");
    if (fig && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); open(fig.dataset.index); }
  });
  box.addEventListener("click", (e) => e.target.closest("#lb-content img, #lb-content video") || close());
  document.addEventListener("keydown", (e) => e.key === "Escape" && !box.hidden && close());
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
  const letter = $("#letter");
  env.addEventListener("click", () => {
    const isOpen = env.classList.toggle("open");
    letter.classList.toggle("open", isOpen);
    env.setAttribute("aria-expanded", isOpen);
    $("#envelope-hint").textContent = isOpen ? "Tippe nochmal, um den Brief zu schließen ✉️" : "Tippe auf den Umschlag ✉️";
  });

  // "Bitte ankreuzen" – "Nicht" lässt sich nicht auswählen 😏
  const yes = $("#opt-auch");
  const no = $("#opt-nicht");
  yes.addEventListener("click", (e) => {
    yes.classList.add("checked");
    yes.setAttribute("aria-pressed", "true");
    $("#answer").textContent = "Wusste ich's doch! Ti amo ❤️";
    const r = yes.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + r.height / 2);
    burst(e.clientX || r.left, e.clientY || r.top);
  });
  const dodge = (e) => {
    e.preventDefault();
    const x = (Math.random() - 0.5) * 160;
    const y = (Math.random() - 0.5) * 80;
    no.style.transform = `translate(${x}px, ${y}px)`;
  };
  no.addEventListener("mouseenter", dodge);
  no.addEventListener("touchstart", dodge, { passive: false });
  no.addEventListener("click", dodge);
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
setupLightbox();
setupReasons();
setupLetter();
floatingHearts();
revealOnScroll();
