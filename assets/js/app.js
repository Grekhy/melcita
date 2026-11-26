/* =========================================================
   ★ CONFIGURACIÓN — ACÁ CAMBIÁS TODO ★
   Todo lo que aparece en el sitio sale de este bloque.
   ========================================================= */
const CONFIG = {

  /* ---------- Textos generales ---------- */
  texts: {
    pageTitle: "Para mi Melcita 💜",
    signature: "— Tu Benjamino",

    home: {
      eyebrow:      "Un lugarcito hecho para vos",
      title:        "Para mi Melcita",
      subtitle:     "Todo lo que te quiero decir, guardado en un solo lugar. Elegí por dónde empezar.",
      note:         "Y esto recién empieza…",
      newBadge:     "Nuevo",
      lettersNumber:  "Regalo 01",
      lettersTitle:   "Las cartas",
      lettersDesc:    "Sobres con pedacitos de todo lo que siento. El primero de todos los regalos.",
      lettersCta:     "Abrir las cartas",
      writingsNumber: "Regalo 02",
      writingsTitle:  "Escritos",
      writingsDesc:   "Palabras que quiero decirte y las escribí acá.",
      writingsCta:    "Entrar a los escritos"
    },

    letters: {
      eyebrow:       "Regalo 01",
      title:         "Las cartas",
      subtitle:      "Elegí una carta. Cada una tiene algo que quiero decirte.",
      closeButton:   "Cerrar",
      allRead:       "Ya leíste todo… pero siempre va haber algo más que te quiera decir, no me van alcanzar las palabras para decirte cuánto te amo y todo lo que te quiero dar 💜",
      envelopeLabel: "Abrir carta",
      sealSymbol:    "♥",
      empty:         "Todavía no hay cartas cargadas."
    },

    writings: {
      eyebrow:       "Regalo 02",
      title:         "Escritos",
      subtitle:      "Todos los escritos, en un solo lugar: mi corazón expresando mi amor por vos",
      countSingular: "escrito",
      countPlural:   "escritos",
      empty:         "Todavía no hay escritos acá. Pronto va a aparecer el primero.",
      signature:     "— Tu Benjamino",
      closeLabel:    "Cerrar escrito"
    },

    footer:      "Hecho con todo mi amor, para mi Melcita.",
    footerSmall: "Benjamino"
  },

  /* ---------- Cartas ---------- */
  letters: {
    // Cantidad de sobres. Si es mayor que la cantidad de mensajes, se usa
    // la cantidad de mensajes (no hay sobres vacíos).
    envelopeCount: 8,

    // true  = no se repite un mensaje hasta haber mostrado todos.
    // false = cada carta elige un mensaje al azar, pudiendo repetirse.
    avoidRepeats: true,

    messages: [
      { title: "Tulipán",
        text:  "Quiero que sepas que mi cariño nunca se marchitará.\nPor eso elegí este tulipán de tu color favorito: para que cada vez que lo mires, recuerdes el amor que siento por vos." },

      { title: "Broche",
        text:  "El broche sostiene tu precioso pelo, pero vos sostenés mi mundo, no lo olvides Melcita.\nMe cautiva el brillo y el encanto de tu pelo, es tan hermoso, me pierdo en tanta belleza..." },

      { title: "Espejo",
        text:  "Lo elegí en violeta, sí, porque te gusta y tiene una forma de espejo, pero en realidad es un pretexto para decirte cuánto te amo y lo hermosa que sos <3." },

      { title: "Lapiceras",
        text:  "Acordate de que acá tenés a alguien que cree en vos y te admira con todo lo que te esforzas, me encantaría que las utilices, te adoro." },

      { title: "Marcapáginas",
        text:  "Espero que te guste, a mí me pareció muy bonito y tenía que regalartelo. En algún momento te va a servir, así no te perdés en todos los libros que vas a leer, la mayoría manhwas seguro, mi linda fujoshi." },

      { title: "Naruto",
        text:  "Sabía que querías un peluche y quería regalarte este, quiero que sepas que te amo, y mucho! me daría algo de vergüenza decirte todo esto con mi voz, decidí escribirtelo todo acá para que lo leas, mi Melcita." },

      { title: "Monedero",
        text:  "Es adorable como vos; pero todavía no lo abras. Guardé dos regalos más dentro, pero no sé si te van a agradar, mi Melcita. Si te agradan, yo sería el más feliz del mundo." },

      { title: "Mi melcita",
        text:  "Espero que te esté gustando <3. Quise hacer algo lindo con mucho amor y quiero que recuerdes que sos muy especial para mí. Otra cosa, si notaste que los listones de la bolsita están medio chuecos o no quedaron perfectos, es porque los hice yo con todo mi amor y nunca había hecho algo así xd." }
    ]
  },

  /* ---------- Escritos ----------
     Agregá, borrá o editá libremente. Cada escrito tiene:
       title:     título
       excerpt:   texto corto que se ve en la lista (opcional)
       text:      el escrito completo. Usá \n\n para separar párrafos.
       signature: firma propia (opcional; si no se pone, usa la general)
     No hay categorías: todos los escritos se muestran juntos. */
  writings: [
    {
      id: "tu-risa",
      title: "Tu risa",
      excerpt: "No es solo una risa linda, es una melodía que me cautiva y enamora.",
      text: `No es solo una risa linda, es una melodía que me cautiva y enamora, la que se te escapa cuando estás nerviosa, o cuando te reís de algo, es adorable...

Acordate que siempre seré ese alguien que aprendió a querer los días normales porque vos los volvés especial cuando estás presente.`
    },

    {
      id: "yo-me-quedo",
      title: "Yo me quedo",
      excerpt: "Me quedo en los días que brillan, me quedo en los que pesan un montón.",
      text: `Yo me quedo.
Me quedo en los días que brillan,
me quedo en los que pesan un montón,
y voy aprendiendo, despacito,
una forma nueva de cuidarte y hacerte feliz.

Y si un día se me acaban las palabras,
te voy a amar demostrándolo:
con un abrazo que no suelta,
con un tereré hecho por mí,
con las manos te acariciaré,
y en silencio pensaré en ti,
y con todo eso lindo que a veces no me sale decir.`
    },

    {
      id: "dias-malos",
      title: "Para los días malos",
      excerpt: "No te voy a decir que todo va a estar bien siempre, pero sí te puedo prometer que no vas a estar sola.",
      text: `No te voy a decir que todo va a estar bien siempre,
pero sí te puedo prometer que no vas a estar sola:
voy a estar ahí, a tu lado, para escucharte y consolarte.
Porque no quiero que nunca se apague el brillo de tus ojos <3`
    },

    {
      id: "cuando-te-extrano",
      title: "Cuando te extraño",
      excerpt: "Cuando te extraño, mi mano busca la tuya aunque no estés.",
      text: `Me di cuenta de que cuando te extraño mi mano busca la tuya aunque no estés, tus mensajes en cualquier momento, y extraño la forma en la que me mirás y sonreís cuando yo lo hago, me encanta extrañarte y finalmente que llegue el momento de estar a tu lado <3`
    }
  ]
};

/* =========================================================
   LÓGICA — no hace falta editar de acá para abajo
   ========================================================= */
const $ = (id) => document.getElementById(id);

const setText = (id, value) => {
  const el = $(id);
  if (el) el.textContent = value;
};

const { texts, letters: lettersConfig } = CONFIG;
const WRITINGS = Array.isArray(CONFIG.writings) ? CONFIG.writings.map((w, i) => ({
  ...w,
  id: w.id || `escrito-${i + 1}`
})) : [];

/** Mezcla un array con Fisher-Yates y devuelve una copia nueva. */
function shuffle(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Minutos de lectura aproximados. */
function readingTime(text) {
  const words = String(text || "").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 180));
}

/** Extracto para la lista de escritos. */
function excerptOf(w) {
  if (w.excerpt) return w.excerpt;
  const clean = String(w.text || "").replace(/\s+/g, " ").trim();
  return clean.length > 140 ? clean.slice(0, 140).trimEnd() + "…" : clean;
}

/* ---------- Textos de la página ---------- */
setText("home-eyebrow", texts.home.eyebrow);
setText("home-subtitle", texts.home.subtitle);
setText("home-note", texts.home.note);
setText("gift-letters-number", texts.home.lettersNumber);
setText("gift-letters-title", texts.home.lettersTitle);
setText("gift-letters-desc", texts.home.lettersDesc);
setText("gift-letters-cta", texts.home.lettersCta);
setText("gift-writings-number", texts.home.writingsNumber);
setText("gift-writings-title", texts.home.writingsTitle);
setText("gift-writings-desc", texts.home.writingsDesc);
setText("gift-writings-cta", texts.home.writingsCta);
setText("new-badge", texts.home.newBadge);
$("new-badge").hidden = !texts.home.newBadge;

setText("letters-eyebrow", texts.letters.eyebrow);
setText("letters-title", texts.letters.title);
setText("letters-subtitle", texts.letters.subtitle);
setText("close-btn", texts.letters.closeButton);

setText("writings-eyebrow", texts.writings.eyebrow);
setText("writings-title", texts.writings.title);
setText("writings-subtitle", texts.writings.subtitle);
$("reader-close").setAttribute("aria-label", texts.writings.closeLabel);

setText("footer-text", texts.footer);
setText("footer-small", texts.footerSmall);

/* Título del inicio: la última palabra va en cursiva */
(function renderHomeTitle() {
  const raw = (texts.home.title || "Para mi Melcita").trim();
  const parts = raw.split(/\s+/);
  const last = parts.pop();
  const h1 = $("home-title");
  h1.textContent = "";
  if (parts.length) h1.append(document.createTextNode(parts.join(" ") + " "));
  const em = document.createElement("em");
  em.textContent = last;
  h1.append(em);
})();

/* =========================================================
   CARTAS
   ========================================================= */
const messages = Array.isArray(lettersConfig.messages) ? lettersConfig.messages : [];
const envelopeCount = Number(lettersConfig.envelopeCount) || 0;
const avoidRepeats = lettersConfig.avoidRepeats !== false;
const total = Math.min(envelopeCount, messages.length);

let deck = shuffle(messages);
let openedCount = 0;
let lastFocused = null;
let letterTimer = null;

/** Devuelve un mensaje al azar según la opción avoidRepeats. */
function drawMessage() {
  if (!avoidRepeats) return messages[Math.floor(Math.random() * messages.length)];
  if (deck.length === 0) deck = shuffle(messages); // Mazo agotado: se rebaraja
  return deck.pop();
}

function buildEnvelopes() {
  const grid = $("grid");

  if (!total) {
    grid.hidden = true;
    $("done").textContent = texts.letters.empty;
    return;
  }

  for (let i = 0; i < total; i++) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "envelope";
    btn.setAttribute("aria-label", `${texts.letters.envelopeLabel} ${i + 1}`);
    btn.innerHTML = `
      <span class="body"></span>
      <span class="paper"></span>
      <span class="flap"></span>
      <span class="seal" aria-hidden="true">${texts.letters.sealSymbol}</span>`;
    btn.addEventListener("click", () => openEnvelope(btn));
    grid.appendChild(btn);
  }
}

function openEnvelope(btn) {
  lastFocused = btn;

  // Si ya fue abierta, se vuelve a mostrar su mismo mensaje
  if (!btn._message) {
    btn._message = drawMessage();
    btn.classList.add("is-open");
    openedCount++;
  }

  // Pequeña pausa para que se vea la animación de la solapa
  clearTimeout(letterTimer);
  letterTimer = setTimeout(() => showLetter(btn._message), 450);
}

function showLetter(msg) {
  if (!msg) return;

  $("letter-title").textContent = msg.title || "";
  $("letter-title").hidden = !msg.title;
  $("letter-text").textContent = msg.text || "";

  const signature = $("letter-signature");
  signature.textContent = texts.signature;
  signature.hidden = !texts.signature;

  const overlay = $("letter-overlay");
  overlay.classList.add("is-visible");
  overlay.setAttribute("aria-hidden", "false");
  syncLock();
  $("close-btn").focus();
}

function closeLetter(silent = false) {
  const overlay = $("letter-overlay");
  if (!overlay.classList.contains("is-visible")) return;

  overlay.classList.remove("is-visible");
  overlay.setAttribute("aria-hidden", "true");
  syncLock();

  if (silent) return;

  if (lastFocused) {
    lastFocused.classList.add("is-read");
    lastFocused.focus({ preventScroll: true });
  }

  if (total > 0 && openedCount === total) {
    $("done").textContent = texts.letters.allRead;
  }
}

/* =========================================================
   ESCRITOS
   ========================================================= */
let readerList = [];
let readerIndex = 0;
let lastWritingFocus = null;

function renderWritings() {
  const list = $("writings-list");
  const filtered = WRITINGS;
  list.innerHTML = "";

  const label = filtered.length === 1
    ? texts.writings.countSingular
    : texts.writings.countPlural;
  setText("writings-count", `${filtered.length} ${label}`);

  if (!filtered.length) {
    const empty = document.createElement("p");
    empty.className = "writing-empty";
    empty.textContent = texts.writings.empty;
    list.appendChild(empty);
    return;
  }

  filtered.forEach((w, i) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "writing-card";
    card.style.setProperty("--i", String(i));

    const index = document.createElement("span");
    index.className = "writing-index";
    index.setAttribute("aria-hidden", "true");
    index.textContent = String(i + 1).padStart(2, "0");

    const main = document.createElement("span");
    main.className = "writing-main";

    const meta = document.createElement("span");
    meta.className = "writing-meta";
    meta.textContent = `${readingTime(w.text)} min`;

    const title = document.createElement("span");
    title.className = "writing-title";
    title.textContent = w.title || "Sin título";

    const excerpt = document.createElement("span");
    excerpt.className = "writing-excerpt";
    excerpt.textContent = excerptOf(w);

    main.append(meta, title, excerpt);

    const arrow = document.createElement("span");
    arrow.className = "writing-arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "→";

    card.append(index, main, arrow);
    card.addEventListener("click", () => openWriting(w, card));
    list.appendChild(card);
  });
}

function openWriting(writing, trigger) {
  readerList = WRITINGS;
  const index = readerList.findIndex(w => w.id === writing.id);

  readerIndex = Math.max(0, index);
  lastWritingFocus = trigger || null;

  renderReading();

  const overlay = $("writing-overlay");
  overlay.classList.add("is-visible");
  overlay.setAttribute("aria-hidden", "false");
  syncLock();

  const reader = $("reader");
  reader.scrollTop = 0;
  reader.focus({ preventScroll: true });
}

function renderReading() {
  const w = readerList[readerIndex];
  if (!w) return;

  setText("writing-kicker", `${readingTime(w.text)} min de lectura`);
  setText("writing-title", w.title || "Sin título");

  const body = $("writing-body");
  body.innerHTML = "";

  String(w.text || "")
    .split(/\n{2,}/)
    .map(p => p.trim())
    .filter(Boolean)
    .forEach(chunk => {
      const p = document.createElement("p");
      p.textContent = chunk;
      body.appendChild(p);
    });

  const signature = w.signature !== undefined ? w.signature : texts.writings.signature;
  const signatureEl = $("writing-signature");
  signatureEl.textContent = signature || "";
  signatureEl.hidden = !signature;

  $("prev-writing").disabled = readerIndex === 0;
  $("next-writing").disabled = readerIndex === readerList.length - 1;
  $("reader").scrollTop = 0;
}

function stepWriting(direction) {
  if (!$("writing-overlay").classList.contains("is-visible")) return;
  const next = readerIndex + direction;
  if (next < 0 || next >= readerList.length) return;
  readerIndex = next;
  renderReading();

  // Si el botón quedó deshabilitado, el foco vuelve al lector
  if (!document.activeElement || document.activeElement === document.body) {
    $("reader").focus({ preventScroll: true });
  }
}

function closeWriting(silent = false) {
  const overlay = $("writing-overlay");
  if (!overlay.classList.contains("is-visible")) return;

  overlay.classList.remove("is-visible");
  overlay.setAttribute("aria-hidden", "true");
  syncLock();

  if (!silent && lastWritingFocus && document.body.contains(lastWritingFocus)) {
    lastWritingFocus.focus({ preventScroll: true });
  }
}

/* =========================================================
   VENTANAS, ATAJOS Y RUTAS
   ========================================================= */
function syncLock() {
  const anyOpen = !!document.querySelector(".overlay.is-visible");
  document.body.classList.toggle("is-locked", anyOpen);

  // El fondo queda inerte mientras hay una ventana abierta
  [document.querySelector(".topbar"), $("contenido"), document.querySelector(".site-footer")].forEach(el => {
    if (!el) return;
    if (anyOpen) el.setAttribute("inert", "");
    else el.removeAttribute("inert");
  });
}

function trapFocus(e) {
  if (e.key !== "Tab") return;

  const overlay = document.querySelector(".overlay.is-visible");
  if (!overlay) return;

  const focusables = Array.from(
    overlay.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')
  ).filter(el => el.offsetParent !== null);

  if (!focusables.length) return;

  // Si el foco se escapó del diálogo, vuelve al primer control
  if (!overlay.contains(document.activeElement)) {
    e.preventDefault();
    focusables[0].focus();
    return;
  }

  const first = focusables[0];
  const last = focusables[focusables.length - 1];

  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

const VIEWS = ["inicio", "cartas", "escritos"];

function currentView() {
  const raw = location.hash.replace(/^#\/?/, "");
  return VIEWS.includes(raw) ? raw : "inicio";
}

function renderRoute() {
  const view = currentView();

  document.querySelectorAll(".view").forEach(section => {
    section.classList.toggle("is-active", section.dataset.view === view);
  });

  document.querySelectorAll(".nav a[data-nav]").forEach(link => {
    if (link.dataset.nav === view) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  document.body.dataset.view = view;

  const base = texts.pageTitle.replace(/[^\p{L}\p{N}\s]/gu, "").trim() || "Para mi Melcita";
  const titles = {
    inicio: base,
    cartas: `${texts.letters.title} · ${base}`,
    escritos: `${texts.writings.title} · ${base}`
  };
  document.title = titles[view];

  clearTimeout(letterTimer);
  closeLetter(true);
  closeWriting(true);
  window.scrollTo(0, 0);
}

/* =========================================================
   MÚSICA
   Melodía suave en loop. Se puede desactivar con el botón
   de la barra superior y el navegador recuerda la elección.
   ========================================================= */
const MUSIC_KEY = "melcita:music";
const MUSIC_VOLUME = .3;
const music = $("music");
const musicBtn = $("music-toggle");
let musicOn = false;
let musicBusy = false;
let musicFadeTimer = null;
let musicFadeGuard = null;
let musicGestureBound = false;

function musicPreference() {
  try { return localStorage.getItem(MUSIC_KEY); } catch { return null; }
}

function saveMusicPreference(value) {
  try { localStorage.setItem(MUSIC_KEY, value); } catch {}
}

function paintMusic(on) {
  musicBtn.setAttribute("aria-pressed", on ? "true" : "false");
  musicBtn.setAttribute("aria-label", on ? "Desactivar música" : "Activar música");
}

function fadeMusicTo(target, onDone) {
  if (musicFadeTimer) clearInterval(musicFadeTimer);
  if (musicFadeGuard) clearTimeout(musicFadeGuard);

  const from = music.volume;
  const start = performance.now();
  const duration = 900;

  const finish = () => {
    if (musicFadeTimer) {
      clearInterval(musicFadeTimer);
      musicFadeTimer = null;
    }
    if (musicFadeGuard) {
      clearTimeout(musicFadeGuard);
      musicFadeGuard = null;
    }
    music.volume = Math.max(0, Math.min(1, target));
    if (onDone) onDone();
  };

  const tick = () => {
    const k = Math.min(1, (performance.now() - start) / duration);
    const eased = k * k * (3 - 2 * k);
    music.volume = Math.max(0, Math.min(1, from + (target - from) * eased));
    if (k >= 1) finish();
  };

  musicFadeTimer = setInterval(tick, 40);
  // Si la pestaña queda en segundo plano, el navegador frena los intervalos;
  // este límite asegura que el volumen llegue igual a su destino.
  musicFadeGuard = setTimeout(finish, duration + 350);
  tick();
}

function startMusicOnGesture(event) {
  if (event.target && event.target.closest && event.target.closest("#music-toggle")) return;
  startMusic();
}

function releaseMusicGesture() {
  document.removeEventListener("pointerdown", startMusicOnGesture, true);
  document.removeEventListener("keydown", startMusicOnGesture, true);
  musicGestureBound = false;
}

function armMusicGesture() {
  if (musicGestureBound) return;
  musicGestureBound = true;
  document.addEventListener("pointerdown", startMusicOnGesture, true);
  document.addEventListener("keydown", startMusicOnGesture, true);
}

async function startMusic() {
  if (musicBusy || musicOn) return;
  musicBusy = true;
  releaseMusicGesture();

  music.volume = 0;
  try {
    await music.play();
    musicOn = true;
    paintMusic(true);
    fadeMusicTo(MUSIC_VOLUME);
  } catch {
    musicOn = false;
    paintMusic(false);
    if (musicPreference() !== "off") armMusicGesture();
  } finally {
    musicBusy = false;
  }
}

function stopMusic() {
  musicOn = false;
  paintMusic(false);
  releaseMusicGesture();
  if (musicFadeTimer) {
    clearInterval(musicFadeTimer);
    musicFadeTimer = null;
  }
  if (musicFadeGuard) {
    clearTimeout(musicFadeGuard);
    musicFadeGuard = null;
  }
  if (music.paused) {
    music.volume = 0;
    return;
  }
  fadeMusicTo(0, () => {
    music.pause();
    music.currentTime = 0;
  });
}

musicBtn.addEventListener("click", () => {
  if (musicOn) {
    saveMusicPreference("off");
    stopMusic();
  } else {
    saveMusicPreference("on");
    startMusic();
  }
});

paintMusic(false);
music.volume = 0;
if (musicPreference() !== "off") {
  // Intenta arrancar sola; si el navegador lo bloquea,
  // espera el primer toque o tecla para empezar.
  startMusic();
}

/* ---------- Eventos ---------- */
$("close-btn").addEventListener("click", () => closeLetter());
$("letter-overlay").addEventListener("click", (e) => {
  if (e.target === $("letter-overlay")) closeLetter();
});

$("reader-close").addEventListener("click", () => closeWriting());
$("prev-writing").addEventListener("click", () => stepWriting(-1));
$("next-writing").addEventListener("click", () => stepWriting(1));
$("writing-overlay").addEventListener("click", (e) => {
  if (e.target === $("writing-overlay")) closeWriting();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if ($("writing-overlay").classList.contains("is-visible")) {
      e.preventDefault();
      closeWriting();
      return;
    }
    if ($("letter-overlay").classList.contains("is-visible")) {
      e.preventDefault();
      closeLetter();
      return;
    }
  }

  if ($("writing-overlay").classList.contains("is-visible")) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      stepWriting(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      stepWriting(1);
    }
  }

  trapFocus(e);
});

window.addEventListener("hashchange", renderRoute);

/* ---------- Arranque ---------- */
buildEnvelopes();
renderWritings();
renderRoute();
