/* ============================================================
   ZZJJ - translations, language switcher, Google Maps init.
   ============================================================ */

const I18N = {
  sl: {
    'meta.title': 'Zdravstveni Zavod Juretić Jadranka - Psihiatrična ordinacija, Izola',
    'meta.description': 'Psihiatrična ordinacija s koncesijo v Izoli. Prešernova cesta 53, tel. 05 9933 060. Delovni čas, naročanje, samoplačniška ambulanta, avtogeni trening in dodatne informacije.',
    'nav.hours': 'Delovni čas',
    'nav.booking': 'Naročanje',
    'nav.private': 'Samoplačniška',
    'nav.services': 'Storitve',
    'nav.about': 'O nas',
    'nav.location': 'Lokacija',
    'nav.faq': 'FAQ',
    'a11y.skip': 'Skoči na vsebino',
    'hero.title': 'Zdravstveni zavod Juretić Jadranka',
    'hero.subtitle': 'Psihiatrična ordinacija s koncesijo · Izola',
    'hero.email': 'E-pošta',
    'crisis.label': 'V duševni stiski?',
    'crisis.text': 'Če ste v nevarnosti ali imate misli na samomor, takoj pokličite',
    'crisis.line112': 'Nujna medicinska pomoč',
    'crisis.line116': 'Samarijan (24/7, brezplačno in anonimno)',
    'hours.title': 'Delovni čas',
    'hours.lead': 'Ordinacija je odprta vse delovne dni.',
    'hours.break_label': 'Odmor:',
    'hours.break_text': 'ponedeljek 15:30–16:00, torek 13:00–13:30, sreda/četrtek/petek 10:30–11:00.',
    'day.mon': 'Ponedeljek',
    'day.tue': 'Torek',
    'day.wed_thu': 'Sreda, četrtek',
    'day.fri': 'Petek',
    'day.tue_fri': 'Torek - petek',
    'booking.title': 'Naročanje in kontakt',
    'booking.lead': 'Naročite se po telefonu, e-pošti, preko portala eNaročanje ali z obrazcem spodaj.',
    'booking.phone_title': 'Telefonsko naročanje',
    'booking.other_title': 'Drugi načini',
    'booking.email_label': 'E-pošta:',
    'booking.portal_label': 'Spletno:',
    'booking.mail_label': 'Osebno ali po pošti:',
    'booking.form_title': 'Spletni obrazec',
    'booking.form_note': 'Polja z * so obvezna. Za naročanje pregleda ali receptov potrebujemo ime in priimek, ZZZS številko ter en kontakt. Podatki se pošljejo preko varne povezave. Odgovorimo v 1–3 delovnih dneh.',
    'private.title': 'Samoplačniška ambulanta',
    'private.lead': 'Poleg koncesijskih obravnav nudimo tudi samoplačniške storitve.',
    'private.body': 'Samoplačniška obravnava poteka v isti ordinaciji in po enakih strokovnih standardih kot koncesijska. Za samoplačniške obiske <strong>napotnica ni potrebna</strong>. Za informacije o terminih in storitvah nas pokličite ali nam pišite na e-pošto.',
    'services.title': 'Storitve',
    'services.lead': 'Obravnavamo odraslo populacijo (od 19. leta dalje). Sodobni pristop združuje psihofarmakoterapijo z individualno prilagojenimi psihoterapevtskimi metodami.',
    'services.consult.title': 'Psihiatrične konzultacije',
    'services.consult.body': 'Prvi pregledi, kontrolni pregledi, postavitev diagnoze in načrt zdravljenja.',
    'services.therapy.title': 'Psihoterapija',
    'services.therapy.body': 'Individualne in skupinske obravnave, prilagojene posameznemu pacientu.',
    'services.autogenic.title': 'Avtogeni trening',
    'services.autogenic.body': 'Tečaji tehnik sproščanja za zmanjševanje stresa, anksioznosti in napetosti.',
    'services.online.title': 'Spletne obravnave',
    'services.online.body': 'Video posveti za uveljavljene paciente, po dogovoru.',
    'services.prevention.title': 'Preventiva',
    'services.prevention.body': 'Ozaveščanje in detabuizacija duševnih motenj ter podpora pri spoprijemanju z njimi.',
    'services.areas.title': 'Področja obravnave',
    'services.areas.body': 'Anksioznost, depresija, motnje spanja, izgorelost, stresne motnje, demenca in druge duševne motnje odraslih.',
    'about.title': 'O nas',
    'about.p1': 'Zdravstveni zavod Juretić Jadranka Portorož se ukvarja s psihiatrično dejavnostjo. V naši ambulanti obravnavamo bolnike z duševnimi motnjami in ljudi v stiski; skrbimo za odraslo populacijo (paciente starejše od 19 let).',
    'about.p2': 'Napredek znanosti omogoča sodoben pristop, ki smiselno povezuje psihofarmakoterapijo z različnimi, posameznemu bolniku prilagojenimi psihoterapevtskimi pristopi - individualno ali v skupini. Take metode izboljšajo možnost ozdravitve in kvaliteto življenja v smislu samostojnosti in dejavnejšega vključevanja v družbo.',
    'about.p3': 'Aktivno izvajamo tudi preventivne programe za ozaveščanje in detabuizacijo duševnih motenj.',
    'about.languages': '<strong>Jeziki:</strong> slovenščina, italijanščina, angleščina.',
    'location.title': 'Kje smo',
    'location.directions': 'Načrtuj pot ↗',
    'faq.title': 'Pogosta vprašanja',
    'faq.q1': 'Ali potrebujem napotnico?',
    'faq.a1': 'Za pregled pri psihiatru napotnica ni potrebna, razen kadar storitev potrebujete hitro, zelo hitro ali nujno. Za samoplačniške obravnave napotnica ni potrebna v nobenem primeru.',
    'faq.q2': 'Kakšna je čakalna doba?',
    'faq.a2': 'Čakalna doba za prvi pregled in začetek zdravljenja je po trijaži do 90 dni. Datum pregleda določimo na podlagi predhodnega osebnega pogovora v ordinaciji. Hitro: do 60 dni; zelo hitro: do 30 dni; nujno: brez čakalne dobe. Aktualni podatki so dostopni neposredno pri izvajalcu.',
    'faq.q3': 'Kaj naj prinesem na prvi pregled?',
    'faq.a3': 'Osebni dokument, kartico zdravstvenega zavarovanja, morebitno napotnico, seznam zdravil, ki jih jemljete, in izvide preteklih obravnav, če jih imate.',
    'faq.q4': 'Odgovorna oseba in zastopnik pacientovih pravic',
    'faq.a4': 'Odgovorna oseba za vodenje čakalnega seznama in pristojna za prvo obravnavo pacientovih pravic je Jadranka Juretić, dr. med., spec. psih., dosegljiva na 05 9933 060 ali zavod.juretic@gmail.com. Druga pristojna oseba je Mirjana Furlan, dr. med., spec. psih. Zastopniki pacientovih pravic so dosegljivi na spletnih straneh Ministrstva za zdravje.',
    'faq.q5': 'Nacionalne čakalne dobe',
  },

  it: {
    'meta.title': 'Istituto sanitario Juretić Jadranka - Ambulatorio psichiatrico, Isola',
    'meta.description': 'Ambulatorio psichiatrico in convenzione a Isola. Via Prešeren 53, tel. 05 9933 060. Orari, prenotazioni, attività privata, training autogeno e informazioni.',
    'nav.hours': 'Orari',
    'nav.booking': 'Prenotazioni',
    'nav.private': 'Privato',
    'nav.services': 'Servizi',
    'nav.about': 'Chi siamo',
    'nav.location': 'Dove siamo',
    'nav.faq': 'FAQ',
    'a11y.skip': 'Salta al contenuto',
    'hero.title': 'Istituto sanitario Juretić Jadranka',
    'hero.subtitle': 'Ambulatorio psichiatrico in convenzione · Isola',
    'hero.email': 'E-mail',
    'crisis.label': 'In situazione di crisi?',
    'crisis.text': 'Se sei in pericolo o hai pensieri suicidi, chiama subito',
    'crisis.line112': 'Pronto soccorso medico',
    'crisis.line116': 'Samarijan (24/7, gratuito e anonimo)',
    'hours.title': 'Orario di apertura',
    'hours.lead': 'L\'ambulatorio è aperto tutti i giorni feriali.',
    'hours.break_label': 'Pausa:',
    'hours.break_text': 'lunedì 15:30–16:00, martedì 13:00–13:30, mercoledì/giovedì/venerdì 10:30–11:00.',
    'day.mon': 'Lunedì',
    'day.tue': 'Martedì',
    'day.wed_thu': 'Mercoledì, giovedì',
    'day.fri': 'Venerdì',
    'day.tue_fri': 'Martedì - venerdì',
    'booking.title': 'Prenotazioni e contatti',
    'booking.lead': 'Prenota per telefono, e-mail, tramite il portale eNaročanje o con il modulo qui sotto.',
    'booking.phone_title': 'Prenotazione telefonica',
    'booking.other_title': 'Altri modi',
    'booking.email_label': 'E-mail:',
    'booking.portal_label': 'Online:',
    'booking.mail_label': 'Di persona o per posta:',
    'booking.form_title': 'Modulo online',
    'booking.form_note': 'I campi con * sono obbligatori. Per prenotare una visita o ricette servono nome e cognome, numero ZZZS e un contatto. I dati vengono inviati tramite connessione sicura. Rispondiamo entro 1–3 giorni lavorativi.',
    'private.title': 'Attività privata',
    'private.lead': 'Oltre alle prestazioni in convenzione offriamo anche visite private.',
    'private.body': 'Le visite private si svolgono nello stesso ambulatorio e con gli stessi standard professionali della convenzione. Per le visite private <strong>non è necessaria l\'impegnativa</strong>. Per informazioni su appuntamenti e servizi chiamaci o scrivici un\'e-mail.',
    'services.title': 'Servizi',
    'services.lead': 'Trattiamo la popolazione adulta (dai 19 anni in su). L\'approccio moderno integra la psicofarmacoterapia con metodi psicoterapeutici personalizzati.',
    'services.consult.title': 'Visite psichiatriche',
    'services.consult.body': 'Prime visite, controlli, diagnosi e piano terapeutico.',
    'services.therapy.title': 'Psicoterapia',
    'services.therapy.body': 'Trattamenti individuali e di gruppo, adattati al singolo paziente.',
    'services.autogenic.title': 'Training autogeno',
    'services.autogenic.body': 'Corsi di tecniche di rilassamento per ridurre stress, ansia e tensione.',
    'services.online.title': 'Visite online',
    'services.online.body': 'Consulti video per pazienti già in carico, su appuntamento.',
    'services.prevention.title': 'Prevenzione',
    'services.prevention.body': 'Sensibilizzazione e detabuizzazione dei disturbi mentali, e supporto nell\'affrontarli.',
    'services.areas.title': 'Aree di intervento',
    'services.areas.body': 'Ansia, depressione, disturbi del sonno, burnout, disturbi da stress, demenza e altri disturbi mentali dell\'adulto.',
    'about.title': 'Chi siamo',
    'about.p1': 'L\'Istituto sanitario Juretić Jadranka di Portorose si occupa di attività psichiatrica. Nel nostro ambulatorio trattiamo pazienti con disturbi mentali e persone in difficoltà; ci rivolgiamo alla popolazione adulta (pazienti dai 19 anni in su).',
    'about.p2': 'Il progresso scientifico permette un approccio moderno che integra la psicofarmacoterapia con diversi metodi psicoterapeutici personalizzati, individuali o di gruppo. Questi metodi migliorano le possibilità di guarigione e la qualità della vita in termini di autonomia e di partecipazione attiva alla società.',
    'about.p3': 'Realizziamo attivamente anche programmi preventivi di sensibilizzazione e detabuizzazione dei disturbi mentali.',
    'about.languages': '<strong>Lingue:</strong> sloveno, italiano, inglese.',
    'location.title': 'Dove siamo',
    'location.directions': 'Indicazioni stradali ↗',
    'faq.title': 'Domande frequenti',
    'faq.q1': 'Serve l\'impegnativa?',
    'faq.a1': 'Per la visita psichiatrica l\'impegnativa non è necessaria, tranne quando la prestazione serve in tempi rapidi, molto rapidi o urgenti. Per le visite private l\'impegnativa non serve mai.',
    'faq.q2': 'Quanto è lunga la lista d\'attesa?',
    'faq.a2': 'L\'attesa per la prima visita e l\'inizio del trattamento è, dopo triage, fino a 90 giorni. La data viene fissata sulla base di un colloquio preliminare in ambulatorio. Rapido: fino a 60 giorni; molto rapido: fino a 30 giorni; urgente: nessuna attesa. I dati aggiornati si ottengono direttamente dal prestatore.',
    'faq.q3': 'Cosa devo portare alla prima visita?',
    'faq.a3': 'Documento d\'identità, tessera sanitaria, eventuale impegnativa, elenco dei farmaci assunti e referti di precedenti visite, se disponibili.',
    'faq.q4': 'Persona responsabile e rappresentante dei diritti del paziente',
    'faq.a4': 'La persona responsabile della gestione della lista d\'attesa e competente per la prima trattazione dei diritti del paziente è Jadranka Juretić, dott.ssa in medicina, spec. psich., contattabile al 05 9933 060 o zavod.juretic@gmail.com. Altra persona competente è Mirjana Furlan, dott.ssa in medicina, spec. psich. I rappresentanti dei diritti del paziente sono raggiungibili tramite il sito del Ministero della Sanità.',
    'faq.q5': 'Liste d\'attesa nazionali',
  },

  en: {
    'meta.title': 'Juretić Jadranka Health Institute - Psychiatric Practice, Izola',
    'meta.description': 'Public-insurance psychiatric practice in Izola, Slovenia. Prešernova cesta 53, tel. +386 5 9933 060. Hours, booking, private practice, autogenic training and more.',
    'nav.hours': 'Hours',
    'nav.booking': 'Booking',
    'nav.private': 'Private',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.location': 'Location',
    'nav.faq': 'FAQ',
    'a11y.skip': 'Skip to content',
    'hero.title': 'Juretić Jadranka Health Institute',
    'hero.subtitle': 'Psychiatric practice (public insurance) · Izola',
    'hero.email': 'Email',
    'crisis.label': 'In crisis?',
    'crisis.text': 'If you are in danger or having thoughts of suicide, call',
    'crisis.line112': 'Emergency medical services',
    'crisis.line116': 'Samarijan (24/7, free and anonymous)',
    'hours.title': 'Opening hours',
    'hours.lead': 'The practice is open every weekday.',
    'hours.break_label': 'Break:',
    'hours.break_text': 'Mon 15:30–16:00, Tue 13:00–13:30, Wed/Thu/Fri 10:30–11:00.',
    'day.mon': 'Monday',
    'day.tue': 'Tuesday',
    'day.wed_thu': 'Wednesday, Thursday',
    'day.fri': 'Friday',
    'day.tue_fri': 'Tuesday - Friday',
    'booking.title': 'Booking & contact',
    'booking.lead': 'Book by phone, email, the eNaročanje portal, or the form below.',
    'booking.phone_title': 'Phone booking',
    'booking.other_title': 'Other ways',
    'booking.email_label': 'Email:',
    'booking.portal_label': 'Online:',
    'booking.mail_label': 'In person or by mail:',
    'booking.form_title': 'Online form',
    'booking.form_note': 'Fields marked * are required. To book a visit or prescription we need your name, ZZZS number and one contact. Data is sent over a secure connection. We reply within 1–3 working days.',
    'private.title': 'Private practice',
    'private.lead': 'Alongside public-insurance care we also offer private appointments.',
    'private.body': 'Private appointments take place in the same practice and meet the same professional standards as insurance-covered care. For private visits <strong>no referral is required</strong>. For information on appointments and services, call or email us.',
    'services.title': 'Services',
    'services.lead': 'We treat adults (19+). Our modern approach combines psychopharmacotherapy with psychotherapy tailored to each patient.',
    'services.consult.title': 'Psychiatric consultations',
    'services.consult.body': 'Initial assessments, follow-ups, diagnosis and treatment planning.',
    'services.therapy.title': 'Psychotherapy',
    'services.therapy.body': 'Individual and group therapy, tailored to each patient.',
    'services.autogenic.title': 'Autogenic training',
    'services.autogenic.body': 'Courses in relaxation techniques to reduce stress, anxiety and tension.',
    'services.online.title': 'Online consultations',
    'services.online.body': 'Video appointments for existing patients, by arrangement.',
    'services.prevention.title': 'Prevention',
    'services.prevention.body': 'Awareness and destigmatisation of mental illness, and support in coping with it.',
    'services.areas.title': 'Areas of treatment',
    'services.areas.body': 'Anxiety, depression, sleep disorders, burnout, stress-related disorders, dementia and other adult mental-health conditions.',
    'about.title': 'About us',
    'about.p1': 'The Juretić Jadranka Health Institute (Portorož) provides psychiatric care. Our practice treats people with mental-health conditions and those in distress; we care for adults (patients aged 19 and over).',
    'about.p2': 'Scientific advances enable a modern approach that meaningfully combines psychopharmacotherapy with various psychotherapeutic methods tailored to each patient - individually or in groups. These methods improve recovery outcomes and quality of life in terms of autonomy and active participation in society.',
    'about.p3': 'We also run prevention programmes to raise awareness and reduce stigma around mental illness.',
    'about.languages': '<strong>Languages:</strong> Slovenian, Italian, English.',
    'location.title': 'Where we are',
    'location.directions': 'Get directions ↗',
    'faq.title': 'Frequently asked questions',
    'faq.q1': 'Do I need a referral?',
    'faq.a1': 'A referral is not required for a psychiatric visit, except when the service is needed quickly, very quickly or urgently. For private appointments a referral is never required.',
    'faq.q2': 'How long is the waiting list?',
    'faq.a2': 'After triage, the wait for a first visit and start of treatment is up to 90 days. The date is set after a preliminary conversation at the practice. Fast track: up to 60 days; very fast: up to 30 days; urgent: no waiting time. Current figures are available directly from the provider.',
    'faq.q3': 'What should I bring to my first visit?',
    'faq.a3': 'ID, health-insurance card, referral (if any), a list of medications you take, and previous medical reports if available.',
    'faq.q4': 'Responsible person & patients\' rights representative',
    'faq.a4': 'The person responsible for the waiting list and for the first-stage handling of patients\' rights is Jadranka Juretić, MD, specialist in psychiatry, reachable on 05 9933 060 or zavod.juretic@gmail.com. The other authorised person is Mirjana Furlan, MD, specialist in psychiatry. Patients\' rights representatives can be found on the Ministry of Health website.',
    'faq.q5': 'National waiting times',
  },
};

/* ---------- Translation engine ---------- */

const STORAGE_KEY = 'zzjj.lang';
const SUPPORTED = ['sl', 'it', 'en'];

function detectInitialLang() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED.includes(stored)) return stored;
  const nav = (navigator.language || 'sl').slice(0, 2).toLowerCase();
  if (SUPPORTED.includes(nav)) return nav;
  return 'sl';
}

function applyLang(lang) {
  const dict = I18N[lang] || I18N.sl;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const val = dict[key];
    if (val == null) return;
    const attr = el.getAttribute('data-i18n-attr');
    if (attr) {
      el.setAttribute(attr, val);
    } else {
      el.innerHTML = val;
    }
  });

  if (dict['meta.title']) document.title = dict['meta.title'];

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });

  localStorage.setItem(STORAGE_KEY, lang);
}

document.addEventListener('DOMContentLoaded', () => {
  applyLang(detectInitialLang());
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
});
