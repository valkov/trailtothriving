// Reads the current events/sessions/gallery from Sanity and rewrites their text
// fields as localized {en,da,uk} objects, preserving images. en = existing text;
// da/uk filled below for card-level fields (long description + itinerary stay
// en-only and fall back). Output: seed-loc.ndjson -> import with --replace.
import {writeFileSync} from 'node:fs'

const PID = 'a0vcqlnf', DS = 'production', V = '2024-01-01'
const strOf = (v) => (v && typeof v === 'object' && !Array.isArray(v)) ? (v.en || '') : (v || '')
const blocksOf = (v) => Array.isArray(v) ? v : (v && Array.isArray(v.en) ? v.en : [])
const ls = (en, t) => ({_type: 'localeString', en: en || '', da: (t && t.da) || '', uk: (t && t.uk) || ''})
const lt = (en, t) => ({_type: 'localeText', en: en || '', da: (t && t.da) || '', uk: (t && t.uk) || ''})
const lb = (blocks) => ({_type: 'localeBlock', en: blocksOf(blocks), da: [], uk: []})

// da/uk translations for card-level fields, keyed by document _id
const T = {
  'event-geirangerfjord': {
    title: {da: 'Geirangerfjord & vandfald', uk: 'Гейрангер-фіорд та водоспади'},
    location: {da: 'Geiranger, Norge', uk: 'Гейрангер, Норвегія'},
    dates: {da: '11.–18. juli 2026', uk: '11–18 липня 2026'},
    duration: {da: '8 dage', uk: '8 днів'},
    price: {da: 'Fra 8.900 kr.', uk: 'від 8 900 крон'},
    blurb: {da: 'En uge i Norges mest ikoniske UNESCO-fjord — guidede vandringer på højderyggen, kolde dyp og stille aftener under midnatssolen.', uk: 'Тиждень у найвідомішому фіорді Норвегії зі списку ЮНЕСКО — походи хребтами з гідом, купання в холодній воді й тихі вечори під опівнічним сонцем.'},
  },
  'event-preikestolen': {
    title: {da: 'Preikestolen (Prædikestolen)', uk: 'Прейкестулен (Кафедра)'},
    location: {da: 'Ryfylke, Norge', uk: 'Рюфюльке, Норвегія'},
    dates: {da: '22.–26. juli 2026', uk: '22–26 липня 2026'},
    duration: {da: '5 dage', uk: '5 днів'},
    price: {da: 'Fra 5.400 kr.', uk: 'від 5 400 крон'},
    blurb: {da: 'Den klassiske tur til klippen 604 meter over Lysefjorden, plus rolige skovvandringer og en jordforbindende vejrtrækningssession på toppen.', uk: 'Класичне сходження до скелі заввишки 604 метри над Люсе-фіордом, а також усвідомлені лісові прогулянки та дихальна практика на вершині.'},
  },
  'event-lofoten': {
    title: {da: 'Lofoten-retreat', uk: 'Ретрит на Лофотенах'},
    location: {da: 'Lofoten, Norge', uk: 'Лофотени, Норвегія'},
    dates: {da: 'Sommer 2026 · datoer følger', uk: 'Літо 2026 · дати уточнюються'},
    duration: {da: '6 dage', uk: '6 днів'},
    price: {da: 'Fra 7.200 kr.', uk: 'від 7 200 крон'},
    blurb: {da: 'Takkede tinder direkte op af havet, hvide strande og arktisk lys. En reset for krop og sind i en lille gruppe.', uk: 'Гострі піки просто з моря, білі пляжі й арктичне світло. Перезавантаження для тіла й розуму в невеликій групі.'},
  },
  'event-chamonix': {
    title: {da: 'Mont Blanc · Chamonix', uk: 'Монблан · Шамоні'},
    location: {da: 'Chamonix, Frankrig', uk: 'Шамоні, Франція'},
    dates: {da: '2026 · datoer følger', uk: '2026 · дати уточнюються'},
    duration: {da: '7 dage', uk: '7 днів'},
    price: {en: 'From kr 8,500', da: 'Fra 8.500 kr.', uk: 'від 8 500 крон'},
    blurb: {da: 'Alpine enge, gletsjerudsigter og højfjeldsluft. Daglige guidede vandringer i et tempo til nærvær, ikke præstation.', uk: 'Альпійські луки, краєвиди льодовиків і високогірне повітря. Щоденні походи з гідом у темпі присутності, а не результату.'},
  },
  'session-free-intro': {
    title: {da: 'Gratis introsamtale', uk: 'Безкоштовна ознайомча розмова'},
    format: {da: 'Online · 20 min', uk: 'Онлайн · 20 хв'},
    price: {da: 'Gratis', uk: 'Безкоштовно'},
    blurb: {da: 'En afslappet snak for at se, om et samarbejde føles rigtigt, og finde det bedste udgangspunkt for dig.', uk: 'Невимушена розмова, щоб зрозуміти, чи підходить нам співпраця, і знайти найкращу відправну точку для вас.'},
  },
  'session-nature-assisted': {
    title: {da: 'Naturassisteret terapi', uk: 'Природна терапія'},
    format: {da: 'Fysisk · 60 min', uk: 'Особисто · 60 хв'},
    price: {da: '750 kr. / session', uk: '750 крон / сесія'},
    blurb: {da: 'En guidet 1:1-session udendørs — bevægelse, kropsbevidsthed og samtale i rolige naturlige omgivelser.', uk: 'Індивідуальна сесія на природі — рух, усвідомлення тіла та розмова в спокійному природному середовищі.'},
  },
  'session-psychomotor': {
    title: {da: 'Psykomotorisk terapi', uk: 'Психомоторна терапія'},
    format: {da: 'Fysisk eller online · 60 min', uk: 'Особисто або онлайн · 60 хв'},
    price: {da: '750 kr. / session', uk: '750 крон / сесія'},
    blurb: {da: 'Kropsorienteret terapi til at løsne spændinger, regulere nervesystemet og genfinde forbindelsen til dig selv.', uk: 'Тілесно-орієнтована терапія, щоб зняти напругу, заспокоїти нервову систему та відновити зв’язок із собою.'},
  },
  'session-package-5': {
    title: {da: '5-sessioners pakke', uk: 'Пакет із 5 сесій'},
    format: {da: 'Online eller fysisk', uk: 'Онлайн або особисто'},
    price: {da: '3.500 kr.', uk: '3 500 крон'},
    blurb: {da: 'En rabatteret serie på fem sessioner til dybere, vedvarende arbejde — booket i dit eget tempo.', uk: 'Серія з п’яти сесій зі знижкою для глибшої, тривалої роботи — у зручному для вас темпі.'},
  },
}

const ORDER = {
  'event-geirangerfjord': 1, 'event-preikestolen': 2, 'event-lofoten': 3, 'event-chamonix': 4,
  'session-free-intro': 1, 'session-nature-assisted': 2, 'session-psychomotor': 3, 'session-package-5': 4,
}

// real Stripe TEST Payment Links (created via CLI), keyed by document _id
const LINKS = {
  'event-geirangerfjord': 'https://buy.stripe.com/test_dRmfZjd251SBa87eDa4ZG00',
  'event-preikestolen': 'https://buy.stripe.com/test_00w4gB2nreFnfsr9iQ4ZG01',
  'event-lofoten': 'https://buy.stripe.com/test_6oU14p9PTfJrbcbeDa4ZG02',
  'event-chamonix': 'https://buy.stripe.com/test_bJe3cx9PT7cV3JJamU4ZG03',
  'session-nature-assisted': 'https://buy.stripe.com/test_bJe8wRbY1fJr7ZZ0Mk4ZG04',
  'session-psychomotor': 'https://buy.stripe.com/test_bJedRbbY154Ndkj2Us4ZG05',
  'session-package-5': 'https://buy.stripe.com/test_7sYcN7fadgNvgwv0Mk4ZG06',
}

const q = async (query) => {
  const r = await fetch(`https://${PID}.api.sanity.io/v${V}/data/query/${DS}?query=${encodeURIComponent(query)}`)
  return (await r.json()).result
}

const docs = await q('*[_type in ["event","session","galleryImage"]]')
const out = []
for (const d of docs) {
  const t = T[d._id] || {}
  if (d._type === 'event') {
    out.push({
      _id: d._id, _type: 'event', order: ORDER[d._id] || d.order || 10, hue: d.hue,
      ...((LINKS[d._id] || d.paymentUrl) ? {paymentUrl: LINKS[d._id] || d.paymentUrl} : {}),
      ...(d.bookingUrl ? {bookingUrl: d.bookingUrl} : {}),
      ...(d.thumbnail ? {thumbnail: d.thumbnail} : {}),
      ...(d.detailImage ? {detailImage: d.detailImage} : {}),
      title: ls(strOf(d.title), t.title),
      location: ls(strOf(d.location), t.location),
      dates: ls(strOf(d.dates), t.dates),
      duration: ls(strOf(d.duration), t.duration),
      price: ls((t.price && t.price.en) || strOf(d.price), t.price),
      blurb: lt(strOf(d.blurb), t.blurb),
      longDescription: lb(d.longDescription),
      itinerary: (d.itinerary || []).map((day, i) => ({
        _key: day._key || ('day' + i),
        label: ls(strOf(day.label)),
        title: ls(strOf(day.title)),
        text: lt(strOf(day.text)),
      })),
    })
  } else if (d._type === 'session') {
    out.push({
      _id: d._id, _type: 'session', order: ORDER[d._id] || d.order || 10, hue: d.hue,
      ...(d.schedulerUrl ? {schedulerUrl: d.schedulerUrl} : {}),
      ...((LINKS[d._id] || d.paymentUrl) ? {paymentUrl: LINKS[d._id] || d.paymentUrl} : {}),
      ...(d.image ? {image: d.image} : {}),
      title: ls(strOf(d.title), t.title),
      format: ls(strOf(d.format), t.format),
      price: ls((t.price && t.price.en) || strOf(d.price), t.price),
      blurb: lt(strOf(d.blurb), t.blurb),
    })
  } else if (d._type === 'galleryImage') {
    out.push({
      _id: d._id, _type: 'galleryImage', order: ORDER[d._id] || d.order || 10, hue: d.hue,
      ...(d.image ? {image: d.image} : {}),
      caption: ls(strOf(d.caption), t.caption),
    })
  }
}
writeFileSync('seed-loc.ndjson', out.map((o) => JSON.stringify(o)).join('\n') + '\n')
console.log('Wrote seed-loc.ndjson with', out.length, 'documents')
