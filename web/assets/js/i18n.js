/* =============================================================================
   Trail to Thriving — UI localization (English / Danish / Ukrainian)
   -----------------------------------------------------------------------------
   This localizes the site's own UI text (nav, headings, buttons, copy).
   It does NOT touch CMS content (event/session/gallery titles, descriptions,
   itineraries) — that stays in whatever language it was entered in Sanity.

   Engine:
   • elements with  data-i18n="key"       -> textContent set from the dictionary
   • elements with  data-i18n-html="key"  -> innerHTML set (for copy with <strong> etc.)
   • buttons with   data-lang="en|da|uk"  -> language switcher
   • t("key") is available to main.js for JS-generated labels.
   Translations of the longer sentences are a first pass — worth a native review.
   ========================================================================== */
(function () {
  var STR = {
    en: {
      nav_events: "Events", nav_sessions: "Sessions", nav_gallery: "Gallery", nav_about: "About", nav_book: "Book",
      hero_badge: "🌿 Nature-assisted wellbeing · Denmark & Sweden",
      hero_tagline: "We hike for better mental health, well-being and self-knowledge.",
      hero_intro: "Guided therapeutic hikes, retreats and 1:1 therapy — slow down, breathe, and find your footing in the wild.",
      hero_find_event: "Find an event", hero_book_session: "Book a session",
      moments_eyebrow: "Moments on the trail", moments_heading: "Where we’ve wandered", view_full_gallery: "View full gallery →",
      events_eyebrow: "Upcoming events", events_heading: "Hikes & retreats you can book",
      events_intro: "Small groups, paced for presence rather than performance. Reserve your spot or pay securely online.",
      book_pay: "Book & pay", reserve_spot: "Reserve a spot", enquire: "Enquire", view_details: "View details →",
      book_time: "Book a time", book_free_call: "Book free call", pay_online: "Pay online", buy: "Buy", get_started: "Get started",
      sessions_eyebrow: "Work 1:1 with Tanya", sessions_heading: "Sessions & therapy",
      sessions_intro: "Tanya Ekelin is a therapist working with psychomotor and nature-assisted therapy. Pick a session, choose a time that suits you, and pay securely — online or in person.",
      sessions_note: "Sessions are confidential and tailored to you. They support wellbeing and are not a substitute for emergency or acute medical care — if you are in crisis, contact your local emergency services.",
      about_eyebrow: "About", about_heading: "Nature-assisted therapy, on foot",
      about_p1: "Trail to Thriving is led by <strong>Tanya Ekelin</strong>, a therapist working with psychomotor and nature-assisted therapy. Alongside group hikes and retreats, Tanya offers 1:1 sessions — blending movement, body awareness and time in the wild to help you slow down, reconnect and come home to yourself.",
      about_p2: "Group events welcome all levels; 1:1 sessions and therapy are available online or in person, in several languages.",
      see_events: "See events", langs_display: "Danish, English, Ukrainian",
      reviews_eyebrow: "Kind words", reviews_line: "recommend · based on 32 reviews on Facebook",
      review_q1: "Add a real guest review here. Tanya created a space where I could finally switch off and just walk.",
      review_q2: "Replace with a testimonial from your community — the hikes, the people, the calm afterwards.",
      review_q3: "A third short quote fits nicely here. Keep them to a couple of sentences.",
      review_author: "Guest review",
      cta_heading: "Ready to join us in the wild?",
      cta_text: "Book a guided hike, reserve a place on a retreat, or start with a 1:1 session. Spaces are limited to keep groups small.",
      footer_tagline: "Guided wellbeing hikes & nature retreats across Scandinavia and the Alps.",
      footer_explore: "Explore", footer_getintouch: "Get in touch", footer_made: "Made with care for the outdoors 🌲",
      footer_rights: "All rights reserved.", label_email: "Email",
      contact_heading: "Have a question?", contact_text: "Curious about a hike, a retreat or a 1:1 session? Reach out — Tanya is happy to help.", read_more: "Read more",
      gallery_back_home: "← Back home", gallery_heading: "Gallery",
      gallery_intro: "Moments from our hikes and retreats. Open a folder to explore.",
      gallery_more: "More",
      folder_back: "← All folders",
      folder_intro: "Tap any photo to enlarge.",
      gallery_cta_heading: "Like what you see?",
      gallery_cta_text: "Come and experience it for yourself — join an event or book a 1:1 session with Tanya.",
      detail_back: "← All events", detail_daybyday: "Day by day",
      detail_notfound: "Sorry, we couldn’t find that trip.", detail_see_all: "See all events",
      modal_title: "Request a time",
      modal_text: "Online booking is being set up. In the meantime, send an enquiry and we’ll get back to you with dates and details.",
      modal_email: "Email us",
      modal_hint: "Tip: add a Cal.com or Calendly link to this event/session in the CMS to embed a live calendar here.",
      page_title_home: "Trail to Thriving — Guided wellbeing hikes & nature retreats",
      page_title_gallery: "Gallery — Trail to Thriving",
      booked: "✓ Booked",
      paid_thanks: "Thanks — your test booking is confirmed.",
    },
    da: {
      nav_events: "Begivenheder", nav_sessions: "Sessioner", nav_gallery: "Galleri", nav_about: "Om os", nav_book: "Book",
      hero_badge: "🌿 Naturassisteret velvære · Danmark & Sverige",
      hero_tagline: "Vi vandrer for bedre mental sundhed, trivsel og selvindsigt.",
      hero_intro: "Guidede terapeutiske vandringer, retreats og 1:1-terapi — sæt tempoet ned, træk vejret, og find fodfæste i naturen.",
      hero_find_event: "Find en begivenhed", hero_book_session: "Book en session",
      moments_eyebrow: "Øjeblikke på stien", moments_heading: "Hvor vi har vandret", view_full_gallery: "Se hele galleriet →",
      events_eyebrow: "Kommende begivenheder", events_heading: "Vandringer & retreats, du kan booke",
      events_intro: "Små grupper i roligt tempo — nærvær frem for præstation. Reservér din plads, eller betal sikkert online.",
      book_pay: "Book & betal", reserve_spot: "Reservér plads", enquire: "Forespørg", view_details: "Se detaljer →",
      book_time: "Book et tidspunkt", book_free_call: "Book gratis samtale", pay_online: "Betal online", buy: "Køb", get_started: "Kom i gang",
      sessions_eyebrow: "Arbejd 1:1 med Tanya", sessions_heading: "Sessioner & terapi",
      sessions_intro: "Tanya Ekelin er terapeut og arbejder med psykomotorisk og naturassisteret terapi. Vælg en session, find et tidspunkt, der passer dig, og betal sikkert — online eller fysisk.",
      sessions_note: "Sessionerne er fortrolige og tilpasset dig. De understøtter trivsel og er ikke en erstatning for akut lægehjælp — er du i krise, så kontakt de lokale alarmtjenester.",
      about_eyebrow: "Om os", about_heading: "Naturassisteret terapi — til fods",
      about_p1: "Trail to Thriving ledes af <strong>Tanya Ekelin</strong>, terapeut med speciale i psykomotorisk og naturassisteret terapi. Ud over gruppevandringer og retreats tilbyder Tanya 1:1-sessioner — en blanding af bevægelse, kropsbevidsthed og tid i naturen, der hjælper dig med at sætte tempoet ned, finde ro og komme hjem til dig selv.",
      about_p2: "Gruppebegivenheder er for alle niveauer; 1:1-sessioner og terapi tilbydes online eller fysisk, på flere sprog.",
      see_events: "Se begivenheder", langs_display: "Dansk, engelsk, ukrainsk",
      reviews_eyebrow: "Pæne ord", reviews_line: "anbefaler · baseret på 32 anmeldelser på Facebook",
      review_q1: "Tilføj en rigtig anmeldelse her. Tanya skabte et rum, hvor jeg endelig kunne koble af og bare gå.",
      review_q2: "Erstat med en udtalelse fra dit fællesskab — turene, menneskene, roen bagefter.",
      review_q3: "Et tredje kort citat passer fint her. Hold dem til et par sætninger.",
      review_author: "Gæsteanmeldelse",
      cta_heading: "Klar til at komme med ud i naturen?",
      cta_text: "Book en guidet vandring, reservér en plads på et retreat, eller start med en 1:1-session. Antallet af pladser er begrænset, så grupperne forbliver små.",
      footer_tagline: "Guidede trivselsvandringer & naturretreats i Skandinavien og Alperne.",
      footer_explore: "Udforsk", footer_getintouch: "Kontakt", footer_made: "Skabt med omtanke for naturen 🌲",
      footer_rights: "Alle rettigheder forbeholdes.", label_email: "E-mail",
      contact_heading: "Har du et spørgsmål?", contact_text: "Nysgerrig på en vandring, et retreat eller en 1:1-session? Skriv til os — Tanya hjælper gerne.", read_more: "Læs mere",
      gallery_back_home: "← Tilbage til forsiden", gallery_heading: "Galleri",
      gallery_intro: "Øjeblikke fra vores vandringer og retreats. Åbn en mappe for at se mere.",
      gallery_more: "Mere",
      folder_back: "← Alle mapper",
      folder_intro: "Tryk på et billede for at forstørre.",
      gallery_cta_heading: "Kan du lide det, du ser?",
      gallery_cta_text: "Kom og oplev det selv — deltag i en begivenhed, eller book en 1:1-session med Tanya.",
      detail_back: "← Alle begivenheder", detail_daybyday: "Dag for dag",
      detail_notfound: "Beklager, vi kunne ikke finde den tur.", detail_see_all: "Se alle begivenheder",
      modal_title: "Anmod om et tidspunkt",
      modal_text: "Online-booking er ved at blive sat op. Indtil da kan du sende en forespørgsel, så vender vi tilbage med datoer og detaljer.",
      modal_email: "Skriv til os",
      modal_hint: "Tip: tilføj et Cal.com- eller Calendly-link til denne begivenhed/session i CMS’et for at indlejre en live-kalender her.",
      page_title_home: "Trail to Thriving — Guidede trivselsvandringer & naturretreats",
      page_title_gallery: "Galleri — Trail to Thriving",
      booked: "✓ Booket",
      paid_thanks: "Tak — din test-booking er bekræftet.",
    },
    uk: {
      nav_events: "Події", nav_sessions: "Сесії", nav_gallery: "Галерея", nav_about: "Про нас", nav_book: "Бронювати",
      hero_badge: "🌿 Природна терапія та добробут · Данія та Швеція",
      hero_tagline: "Ми ходимо в походи задля ментального здоров’я, добробуту й самопізнання.",
      hero_intro: "Терапевтичні походи з гідом, ретрити та індивідуальна терапія — сповільніться, дихайте та віднайдіть опору на природі.",
      hero_find_event: "Знайти подію", hero_book_session: "Забронювати сесію",
      moments_eyebrow: "Миті на стежці", moments_heading: "Де ми мандрували", view_full_gallery: "Уся галерея →",
      events_eyebrow: "Найближчі події", events_heading: "Походи та ретрити, які можна забронювати",
      events_intro: "Невеликі групи у спокійному темпі — присутність, а не результат. Зарезервуйте місце або сплатіть онлайн.",
      book_pay: "Забронювати й оплатити", reserve_spot: "Зарезервувати місце", enquire: "Запитати", view_details: "Детальніше →",
      book_time: "Обрати час", book_free_call: "Безкоштовний дзвінок", pay_online: "Оплатити онлайн", buy: "Купити", get_started: "Почати",
      sessions_eyebrow: "Індивідуально з Танею", sessions_heading: "Сесії та терапія",
      sessions_intro: "Таня Екелін — терапевтка, яка працює з психомоторною та природною терапією. Оберіть сесію, зручний час і сплатіть онлайн або особисто.",
      sessions_note: "Сесії конфіденційні та підлаштовані під вас. Вони підтримують добробут, але не замінюють невідкладної медичної допомоги — у разі кризи звертайтеся до місцевих екстрених служб.",
      about_eyebrow: "Про нас", about_heading: "Природна терапія в русі",
      about_p1: "Trail to Thriving веде <strong>Таня Екелін</strong> — терапевтка, яка працює з психомоторною та природною терапією. Окрім групових походів і ретритів, Таня проводить індивідуальні сесії — поєднання руху, усвідомлення тіла й часу на природі, щоб ви могли сповільнитися, відновитися та повернутися до себе.",
      about_p2: "Групові події підходять для будь-якого рівня; індивідуальні сесії та терапія доступні онлайн або особисто, кількома мовами.",
      see_events: "Переглянути події", langs_display: "Данська, англійська, українська",
      reviews_eyebrow: "Добрі слова", reviews_line: "рекомендують · на основі 32 відгуків у Facebook",
      review_q1: "Додайте справжній відгук гостя сюди. Таня створила простір, де я нарешті змогла вимкнутися й просто йти.",
      review_q2: "Замініть на відгук від вашої спільноти — про походи, людей і спокій після них.",
      review_q3: "Тут добре пасуватиме третя коротка цитата. Кілька речень — і досить.",
      review_author: "Відгук гостя",
      cta_heading: "Готові вирушити з нами на природу?",
      cta_text: "Забронюйте похід із гідом, зарезервуйте місце на ретриті або почніть з індивідуальної сесії. Кількість місць обмежена, щоб групи лишалися невеликими.",
      footer_tagline: "Оздоровчі походи з гідом і ретрити на природі — Скандинавія та Альпи.",
      footer_explore: "Огляд", footer_getintouch: "Контакти", footer_made: "Зроблено з турботою про природу 🌲",
      footer_rights: "Усі права захищено.", label_email: "Пошта",
      contact_heading: "Маєте запитання?", contact_text: "Цікавить похід, ретрит чи індивідуальна сесія? Напишіть нам — Таня радо допоможе.", read_more: "Дізнатися більше",
      gallery_back_home: "← На головну", gallery_heading: "Галерея",
      gallery_intro: "Миті з наших походів і ретритів. Відкрийте теку, щоб переглянути.",
      gallery_more: "Інше",
      folder_back: "← Усі теки",
      folder_intro: "Торкніться фото, щоб збільшити.",
      gallery_cta_heading: "Подобається?",
      gallery_cta_text: "Завітайте й відчуйте це самі — приєднайтеся до події або забронюйте індивідуальну сесію з Танею.",
      detail_back: "← Усі події", detail_daybyday: "День за днем",
      detail_notfound: "На жаль, ми не знайшли цю подорож.", detail_see_all: "Переглянути всі події",
      modal_title: "Запит на час",
      modal_text: "Онлайн-бронювання ще налаштовується. А поки надішліть запит, і ми повернемося до вас із датами й деталями.",
      modal_email: "Напишіть нам",
      modal_hint: "Порада: додайте посилання Cal.com або Calendly до цієї події/сесії в CMS, щоб вбудувати живий календар тут.",
      page_title_home: "Trail to Thriving — оздоровчі походи та ретрити на природі",
      page_title_gallery: "Галерея — Trail to Thriving",
      booked: "✓ Заброньовано",
      paid_thanks: "Дякуємо — вашу тестову бронь підтверджено.",
    },
  };

  function pickInitial() {
    try { var s = localStorage.getItem("ttt_lang"); if (s && STR[s]) return s; } catch (e) {}
    var n = (navigator.language || "en").slice(0, 2).toLowerCase();
    return STR[n] ? n : "en";
  }
  var current = pickInitial();

  window.t = function (key) {
    return (STR[current] && STR[current][key] != null) ? STR[current][key]
         : (STR.en[key] != null ? STR.en[key] : key);
  };
  window.getLocale = function () { return current; };

  function apply() {
    var dict = STR[current] || STR.en;
    document.documentElement.lang = current;
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n]"), function (el) {
      var v = dict[el.getAttribute("data-i18n")];
      if (v == null) v = STR.en[el.getAttribute("data-i18n")];
      if (v != null) el.textContent = v;
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n-html]"), function (el) {
      var v = dict[el.getAttribute("data-i18n-html")];
      if (v == null) v = STR.en[el.getAttribute("data-i18n-html")];
      if (v != null) el.innerHTML = v;
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-lang]"), function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === current);
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === current ? "true" : "false");
    });
  }
  window.applyI18n = apply;

  window.setLocale = function (loc) {
    if (!STR[loc] || loc === current) return;
    current = loc;
    try { localStorage.setItem("ttt_lang", loc); } catch (e) {}
    apply();
    if (typeof window.__onLocaleChange === "function") window.__onLocaleChange();
  };

  document.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest("[data-lang]") : null;
    if (b) { e.preventDefault(); window.setLocale(b.getAttribute("data-lang")); }
  });

  if (document.readyState !== "loading") apply();
  else document.addEventListener("DOMContentLoaded", apply);
})();
