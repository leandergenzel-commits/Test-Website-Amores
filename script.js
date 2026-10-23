// ============================================================
//  HIER ANPASSEN – alles Persönliche steht in diesem Block 💕
// ============================================================
const CONFIG = {
  ich: "Indi",
  sie: "Martini",
  // Datum, an dem ihr zusammengekommen seid (JJJJ-MM-TT)
  zusammenSeit: "2026-05-03",

  geschichte: [
    { datum: "Austauschjahr", titel: "Wie alles begann 🇮🇹🤝🇩🇪", text: "Martini kommt aus Ponte Caffaro in Italien und hat ihr Austauschjahr in Deutschland gemacht – ausgerechnet in Rathenow. Schicksal! Richtig Fahrt aufgenommen hat alles beim McDonald's-Ranking im Bett: Crispy McBacon auf die 1! 🍔" },
    { datum: "Rathenow & Berlin", titel: "Unsere Zeit in Deutschland 🏡", text: "Muttis Geburtstag 😉, Tanzen in der Braue, Hangover 2 auf Netflix, Abende mit den Jungs bei Steve oder in der 7, Cocktails an Amys Geburtstag, Abende bei mir in Berlin und Hertha im Olympiastadion – Ha Ho He! 💙" },
    { datum: "Anfang April 2026", titel: "Zusammen in Montenegro 🇲🇪", text: "Unser Trip mit eigenem Hotelzimmer: Sonne, Meer, ein Pool mit Bergblick und die Aussicht ganz oben vom Lovćen." },
    { datum: "Ende April 2026", titel: "AIDA-Kreuzfahrt 🛳️", text: "Griechenland & Türkei: Akropolis, Lorbeerkränze, Volos und ganz viel Meer. Es gab Höhen und Tiefen – aber alles in allem war es magisch ✨" },
    { datum: "3. Mai 2026", titel: "Offiziell zusammen 💍", text: "Nach der Kreuzfahrt war klar: Wir gehören zusammen." },
    { datum: "Mai & Juni 2026", titel: "Sommer in Deutschland ☀️", text: "SUP am Schlachtensee, Bootfahren in Brandenburg und unser Ausflug nach Dresden zum Mammutmarsch 🦣" },
    { datum: "Juli 2026", titel: "Italien, Teil 1 🍕", text: "Mit Unterstützung von Steve habe ich deine Freunde und deine Familie kennengelernt – aufgeregt, aber es war ein Fest! Ponte Caffaro, Bootsfahrt auf dem Idrosee, das Fest in Bagolino, Essen mit deinem Papa, die Gastfreundschaft deiner Mama, Steve waxen und Baden am Gardasee." },
    { datum: "Ende August 2026", titel: "Italien, Teil 2 🍹", text: "Brescia-Trip und Essen mit Ricardo, das legendäre Video bei deinen Großeltern 🚬☕️🥃, viele Aperitivos, Baitoni, SUP und Steinkunst am Ufer des Idrosees. Beim Abschied am Flughafen blieb mein Herz in Bergamo." },
    { datum: "Oktober 2026", titel: "Italien, Teil 3 🍂", text: "Nach sechs langen Wochen endlich wieder: BER → BGY! Herbstliche Berge, neue Restaurants, Essen bei Großeltern, Papa und Freunden – und Sabri, die beste Frau, bei der ich mich wie zu Hause fühle." },
    { datum: "Heute", titel: "Und es geht weiter…", text: "Jeder Abschied ist nur bis zum nächsten Wiedersehen. Jeder Tag mit dir ist ein neues Kapitel." },
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
    "Crispy McBacon auf Platz 1 – du hast einfach Geschmack. 🍔",
    "Deine Socken – immer ein Hingucker. 🧦",
    "Du siehst sogar im Stranger-Things-Shirt und mit kaputter Schlafhose süß aus.",
    "Unsere Talkrunden abends im Bett – ohne Handy, ohne TV, nur wir zwei.",
    "Hangover 2 ist mit dir einfach der beste Film.",
    "Du hast sogar den Mammutmarsch mit mir durchgezogen. 🦣",
    "Du hast mich deiner Familie und deinen Freunden vorgestellt – und ich durfte mich sofort wie zu Hause fühlen.",
    "Mit dir habe ich ein zweites Zuhause in Ponte Caffaro gefunden. 🇮🇹",
    "Deine Grimassen im Auto bringen mich jedes Mal zum Lachen. 😜",
    "Die abendlichen Kuscheleinheiten mit dir sind unverzichtbar.",
    "Ein Blick in dein hübsches Gesicht und mein Tag ist gerettet.",
    "Du bist ein guter Mensch – durch und durch.",
    "Bei jedem Abschied bleibt mein Herz bei dir in Italien.",
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
    { video: "videos/dresden.mp4", poster: "videos/dresden.jpg", text: "Mammutmarsch 🦣🍻", ort: "Dresden", datum: "06.06.2026" },
    { bild: "bilder/hertha.jpg", text: "Ha Ho He, Hertha BSC 💙", ort: "Berlin" },
    { bild: "bilder/bootstour.jpg", text: "Kapitän Indi an Bord 🚤", ort: "Brandenburg" },
    { video: "videos/lago-idro.mp4", poster: "videos/lago-idro.jpg", text: "Bootsfahrt auf dem Lago d'Idro", ort: "Idro, Italien", datum: "30.07.2026" },
    { bild: "bilder/lago-bacio.jpg", text: "Un bacio 😘", ort: "Italien", datum: "06.08.2026" },
    { bild: "bilder/gardasee.jpg", text: "Posen am Gardasee", ort: "Gardasee", datum: "Sommer 2026" },
    { bild: "bilder/aperitivo.jpg", text: "Aperitivo mit Aussicht", ort: "Italien", datum: "Sommer 2026" },
    { video: "videos/bondone.mp4", poster: "videos/bondone.jpg", text: "Bummeln durch Bondone", ort: "Bondone, Trentino", datum: "29.08.2026" },
    { video: "videos/bergrestaurant.mp4", poster: "videos/bergrestaurant.jpg", text: "Essen mit Bergblick 🍝", ort: "Italien" },
    { bild: "bilder/nachtspaziergang.jpg", text: "Nachts unterwegs 🌙", ort: "Italien" },
    { video: "videos/herbst-picknick.mp4", poster: "videos/herbst-picknick.jpg", text: "Herbstsonne in den Bergen 🍂", ort: "Italien", datum: "16.10.2026" },
    { video: "videos/grimassen.mp4", poster: "videos/grimassen.jpg", text: "Grimassen-Queen im Auto 😜", ort: "Bei Tione, Trentino", datum: "17.10.2026" },
    { bild: "bilder/bergstrasse.jpg", text: "Roadtrip durch die Berge", ort: "Trentino", datum: "Oktober 2026" },
    { video: "videos/lernpause.mp4", poster: "videos/lernpause.jpg", text: "Schule ruft – aber erst kurz kuscheln 📚", ort: "Italien", datum: "Oktober 2026" },
  ],

  brief:
    "Hey Martina,\n\n" +
    "mein Herz. Wir sind jetzt schon ein paar Monate zusammen und ich muss sagen: Die Zeit verfliegt wirklich. Es fühlt sich für mich noch an, als wäre es gestern gewesen, als wir zusammen im Bett das McDonald's-Ranking gemacht haben – Crispy McBacon auf die 1! Das war der Moment, an dem unsere gemeinsame Zeit so richtig Fahrt aufgenommen hat.\n\n" +
    "Ich weiß noch, wie du in deinem Stranger-Things-T-Shirt und der kaputten Schlafhose mit deiner fröhlichen, süßen und sympathischen Art durch unser Haus gelaufen bist. Das Einzige, was sich ständig geändert hat, waren deine Socken – immer ein Hingucker.\n\n" +
    "Ich glaube, es war Schicksal, dass du genau nach Rathenow gekommen bist und wir so viele schöne und lustige Erinnerungen zusammen erleben konnten. Ich denke da an Muttis Geburtstag 😉, das Tanzen in der Braue, Netflixabende mit unserem Lieblingsfilm Hangover 2, Abende mit meinen Jungs bei Steve oder in der 7, Bootfahren in Brandenburg, Cocktails mixen an Amys Geburtstag oder einfach eine ausführliche Talkrunde abends im Bett – ohne Handy und TV, einfach wir beide zu zweit.\n\n" +
    "Daneben haben wir auch außerhalb von Rathenow viel erlebt: Abende bei mir in Berlin, die Hertha-Spiele im Olympiastadion (Ha Ho He!), unser Trip nach Montenegro mit eigenem Hotelzimmer, die Kreuzfahrt, die – obwohl es Höhen und Tiefen gab – alles in allem magisch war ✨, und unser Ausflug nach Dresden zum Mammutmarsch.\n\n" +
    "Außerdem denke ich an die mittlerweile drei Ausflüge nach Italien. Der erste im Juli, bei dem ich mit Unterstützung von Steve alle deine Freunde und deine Familie kennenlernen durfte. Auch wenn ich aufgeregt war, war es immer ein Fest! Wir haben Ponte Caffaro und den Idrosee entdeckt – inklusive Bootsfahrt –, waren in Bagolino zum Fest und viel mit deinem Papa essen, ich habe die Liebe und Gastfreundschaft deiner Mama genossen, wir haben Steve gewaxt und waren am Gardasee zum Sightseeing und Baden.\n\n" +
    "Auch wenn der Abschied schwer war, konnten wir uns Ende August schon wiedersehen. Die Freizeit war diesmal geringer, weil ich arbeiten und lernen musste, aber es war trotzdem wunderschön! Angefangen mit dem Brescia-Trip und Essen gehen mit Ricardo, dem Essen bei deinen Großeltern mit dem legendären Video 🚬☕️🥃, vielen Aperitivos, dem Besuch in Baitoni, einer entspannten Runde SUP und am letzten Abend, voller Trauer, dem Bau von Steinkunst am Ufer des Idrosees. Was uns beiden wahrscheinlich besonders im Kopf bleibt, ist der sehr intensive und lange Abschied am Flughafen. In dem Moment hatte ich das Gefühl, mein Herz bleibt in Bergamo.\n\n" +
    "Nach sehr langen sechs Wochen voller Aufregung und Vermissen war es dann wieder so weit: Das Ticket von BER nach BGY ist gebucht und Indi sitzt nach ziemlich stressiger Anreise wieder im Flieger. Endlich! Auch wenn du dieses Mal sehr in die Schule eingebunden warst, war es wieder eine wunderschöne Zeit. Ich konnte viel von der Natur und Landschaft erkunden, wir haben neue Orte in Form von Restaurants entdeckt und waren bei deinen Großeltern, deinem Papa und mit deinen Freunden essen. Besonders erwähnen muss ich natürlich meine geliebte Sabri, die mir mit vollem Herzen immer das Gefühl gegeben hat, dass ich mich wie zu Hause fühlen kann – beste Frau!\n\n" +
    "Die allerbeste Frau, mein Martinchen, hat dazu natürlich auch einen entscheidenden Beitrag geleistet: Die abendlichen Kuscheleinheiten und der Blick in dein hübsches Gesicht sind für mich unverzichtbar!\n\n" +
    "Leider hat nun auch diese schöne Zeit ein Ende. Ich muss wieder nach Hause – vielleicht sitze ich sogar gerade im Flieger, während du das liest.\n\n" +
    "Amore, jetzt habe ich so viele Worte geschrieben, obwohl die Message des Ganzen so einfach ist: DU BIST DIE TOLLSTE FRAU, DIE ICH JEMALS KENNENGELERNT HABE, UND ICH BIN GLÜCKLICH, DICH ZU HABEN. Ich bin wirklich verliebt – in deine inneren Werte, weil du süß, sympathisch und einfach ein guter Mensch bist, aber auch in dein Äußeres. Du bist wirklich wunderschön und ich liebe alles an dir, von deinem Körper über dein wunderschönes Gesicht bis zu deinen Haaren 😉\n\n" +
    "Amore, ich hoffe, wir sehen uns bald wieder! Wenn du mich überhaupt noch wiedersehen möchtest?",
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
  yes.addEventListener("click", () => {
    yes.classList.add("checked");
    yes.setAttribute("aria-pressed", "true");
    no.disabled = true;
    $("#answer").textContent = "Wusste ich's doch! Bis ganz bald, Amore ❤️";
    celebrate();
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

// Großer Herz-Regen für das "Ja"
function celebrate() {
  const overlay = document.createElement("div");
  overlay.className = "celebrate";
  overlay.innerHTML = `<div class="big-heart">❤️</div><p>Ti amo, ${CONFIG.sie}!</p>`;
  document.body.appendChild(overlay);
  const emojis = ["💖", "💕", "💗", "❤️", "😍", "✨", "🥰"];
  for (let i = 0; i < 80; i++) {
    const h = document.createElement("span");
    h.className = "rain";
    h.textContent = emojis[i % emojis.length];
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = 18 + Math.random() * 26 + "px";
    h.style.animationDelay = Math.random() * 1.5 + "s";
    h.style.animationDuration = 2.2 + Math.random() * 1.8 + "s";
    overlay.appendChild(h);
  }
  for (let i = 0; i < 4; i++) setTimeout(() => burst(innerWidth * (0.2 + Math.random() * 0.6), innerHeight * (0.3 + Math.random() * 0.4)), i * 350);
  overlay.addEventListener("click", () => overlay.remove());
  setTimeout(() => overlay.remove(), 4800);
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

function startAtTop() {
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  if (location.hash) history.replaceState(null, "", location.pathname + location.search);
  window.scrollTo(0, 0);
  window.addEventListener("load", () => window.scrollTo(0, 0));
  $(".scroll-hint").addEventListener("click", (e) => {
    e.preventDefault();
    $("#zeit").scrollIntoView({ behavior: "smooth" });
  });
}

startAtTop();
fillNames();
startCounter();
renderStory();
renderMoments();
setupLightbox();
setupReasons();
setupLetter();
floatingHearts();
revealOnScroll();
