/* Tresundios Software — site scripts (requires bootstrap.bundle.min.js) */
(function () {
  'use strict';

  /* ---------- Case studies (source: tresundios.com/case-studies) ---------- */
  var RED = '#c74634', BLACK = '#000000', CHAR = '#333333', STONE = '#6b6b6b', SILVER = '#a6a6a6';
  var CASES = [
    { id: 'uptown', client: 'UptownIndia UK', title: 'UptownIndia UK, tea e-commerce', cat: 'Web Development · E-commerce', dur: '3 months', market: 'United Kingdom', t1: RED, t2: CHAR, tag: 'UK · Tea', kind: 'win',
      problem: 'UptownIndia needed an online store to sell its premium tea blends to UK customers, with clear product categories and secure payments.',
      solution: 'We built an easy-to-use e-commerce platform with detailed showcases for its specialty teas (Masala, Strawberry and Chocolate Chai), secure payment integration and a simple ordering flow, backed by professional product photography and a mobile-responsive design.',
      tech: ['Laravel', 'PHP', 'Bootstrap', 'HTML', 'CSS', 'JavaScript', 'Photoshop'],
      results: [['Visibility', 'A modern, secure store that raised product visibility and made buying simple for UK tea lovers.'], ['Engagement', 'Smooth online payments and mobile shopping lifted customer engagement and satisfaction.'], ['Brand', 'Professional imagery and clear categories set UptownIndia apart in a crowded market.']],
      live: 'https://uptownindia.com/ecom/', src: 'https://tresundios.com/case-studies/uptownindia-uk-tea-ecommerce' },
    { id: 'tef', client: 'TEF Community', title: 'TEF Kuwait Walkathon App', cat: 'Flutter Development', dur: '4 months', market: 'Kuwait', t1: CHAR, t2: RED, tag: 'KW', kind: 'phone',
      problem: 'TEF Kuwait needed a mobile app to track and encourage community participation in its 30-day walking challenge, with real-time step tracking and participant engagement.',
      solution: 'We built a cross-platform mobile app with automated step tracking, live leaderboards and social features, plus gamification that keeps participants motivated for all 30 days.',
      tech: ['Flutter', 'Dart'],
      results: [['Motivation', 'Members track and compare their walking, which turned the challenge into friendly competition.'], ['Participation', 'Live leaderboards and gamification raised participation and excitement around the event.'], ['Reach', 'One cross-platform build works on every member’s phone, iOS or Android.']],
      src: 'https://tresundios.com/case-studies/tef-kuwait-walkathan-app' },
    { id: 'legily', client: 'Legily UK', title: 'Legily UK, serum product portal', cat: 'Web Design & Development', dur: '2 months', market: 'United Kingdom', t1: SILVER, t2: RED, tag: 'UK', kind: 'win',
      problem: 'Legily UK needed a premium e-commerce portal for its anti-stress serums that kept its minimal brand look while improving engagement.',
      solution: 'We designed a modern landing experience in Figma built around product storytelling, with clear navigation for Shop, About and the Affiliate programme, refreshed product photography and a fully responsive build.',
      tech: ['Figma', 'Bootstrap 5', 'HTML', 'CSS', 'JavaScript', 'Photoshop'],
      results: [['Brand', 'A polished, easy-to-navigate portal that strengthens how Legily presents its products.'], ['Conversion', 'Responsive design and better imagery improved engagement and conversion.'], ['Partners', 'A simpler shopping and affiliate experience for customers and partners.']],
      src: 'https://tresundios.com/case-studies/legily-uk-serum-portal' },
    { id: 'maria', client: 'Maria Beauty Care', title: 'Maria Beauty Care, salon website', cat: 'Web Development', dur: '2 months', market: 'Salon & beauty', t1: RED, t2: BLACK, tag: 'Salon', kind: 'win',
      problem: 'Maria Beauty Care needed a professional website to showcase its premium beauty services and take bookings online, while keeping its upscale image.',
      solution: 'We built a custom WordPress theme with an elegant, premium design, online appointment scheduling, a portfolio gallery, clearer service categories and a mobile-responsive layout.',
      tech: ['WordPress', 'PHP', 'Custom theme', 'Bootstrap', 'HTML', 'CSS', 'JavaScript'],
      results: [['Bookings', 'A stronger online presence that brings in new clients and appointments.'], ['Image', 'An elegant, mobile-friendly design that reinforces the salon’s premium positioning.'], ['Operations', 'Online booking and service listings streamline day-to-day client handling.']],
      src: 'https://tresundios.com/case-studies/maria-beauty-care-portfolio' },
    { id: 'beyon', client: 'Beyon Education', title: 'Beyon Education, study abroad portal', cat: 'Web Development', dur: '5 months', market: 'Netherlands universities', t1: CHAR, t2: SILVER, tag: 'NL', kind: 'win',
      problem: 'Beyon Education needed a platform to present its European education consultancy, especially for Netherlands universities, with detailed information and a simpler student application process.',
      solution: 'We built a dynamic WordPress portal with university profiles, course catalogues, student testimonials, an interactive application system and student resource sections, covering 12+ Dutch universities.',
      tech: ['WordPress', 'Elementor', 'PHP', 'CSS', 'JavaScript'],
      results: [['12+', 'Dutch universities profiled with courses and admission details.'], ['Engagement', 'Interactive features and rich content improved student engagement and applications.'], ['Scalable', 'A flexible WordPress and Elementor setup the team can update and grow easily.']],
      src: 'https://tresundios.com/case-studies/beyon-education-study-abroad-portal' },
    { id: 'robomed', client: 'RoboMed Innovations', title: 'RoboMed Innovations, website redesign', cat: 'Web Design & Development', dur: '6 weeks', market: 'B2B healthcare', t1: STONE, t2: RED, tag: 'B2B', kind: 'win',
      problem: 'RoboMed Innovations needed a modern online presence that shows off its medical-device portfolio and engages B2B healthcare buyers.',
      solution: 'We rebuilt the site around product display and corporate buyers’ needs, with professional product photography, a clean clinical visual style and responsive layouts for desktop and mobile.',
      tech: ['Photoshop', 'HTML', 'CSS', 'JavaScript'],
      results: [['Discovery', 'The device portfolio is easier to find and more appealing to corporate buyers.'], ['Credibility', 'A modern, responsive design lifts trust and user experience for B2B clients.'], ['Sales', 'Professional imagery and clearer product information support the sales team.']],
      src: 'https://tresundios.com/case-studies/robomed-innovations-website-redesign' }
  ];

  function esc(t) { var d = document.createElement('div'); d.textContent = t; return d.innerHTML; }

  function thumb(c) {
    var inner = c.kind === 'phone'
      ? '<div class="win phone"><div class="mini-title" style="font-size:9px">Day 18 / 30</div><div class="kpi" style="font-size:20px">8,412</div><div class="s" style="width:90%"></div><div class="s" style="width:70%"></div></div>'
      : '<div class="win"><div class="dots"><i></i><i></i><i></i></div><div class="h"></div><div class="s" style="width:80%"></div><div class="s" style="width:55%"></div><div class="row-mini"><b></b><b></b><b></b></div></div>';
    return '<div class="thumb" style="--t1:' + c.t1 + ';--t2:' + c.t2 + '"><span class="mono-big">' + esc(c.tag) + '</span>' + inner + '</div>';
  }

  /* Paint card thumbnails from the data so colours live in one place */
  document.querySelectorAll('[data-thumb]').forEach(function (el) {
    var c = CASES.find(function (x) { return x.id === el.dataset.thumb; });
    if (c) el.outerHTML = thumb(c);
  });

  /* ---------- Case study modal ---------- */
  var modalEl = document.getElementById('caseModal');
  var body = document.getElementById('caseBody');
  var crumb = document.getElementById('caseCrumb');
  var modal = (window.bootstrap && modalEl) ? new bootstrap.Modal(modalEl) : null;
  var cur = 0;

  function render(i) {
    cur = (i + CASES.length) % CASES.length;
    var c = CASES[cur];
    crumb.textContent = 'Case study ' + (cur + 1) + ' of ' + CASES.length + ' · ' + c.client;
    body.innerHTML =
      '<div class="row g-4 align-items-center case-hero">' +
        '<div class="col-md-6">' + thumb(c) + '</div>' +
        '<div class="col-md-6"><div class="meta"><span class="cat">' + esc(c.cat) + '</span></div>' +
          '<h2 id="caseTitle">' + esc(c.title) + '</h2>' +
          '<div class="row g-2 mt-2">' +
            '<div class="col-6 col-sm-4"><div class="fact"><small>Client</small><b>' + esc(c.client) + '</b></div></div>' +
            '<div class="col-6 col-sm-4"><div class="fact"><small>Duration</small><b>' + esc(c.dur) + '</b></div></div>' +
            '<div class="col-12 col-sm-4"><div class="fact"><small>Market</small><b>' + esc(c.market) + '</b></div></div>' +
          '</div>' +
          '<div class="stack">' + c.tech.map(function (t) { return '<span class="chip">' + esc(t) + '</span>'; }).join('') + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="row g-3">' +
        '<div class="col-md-6"><div class="case-block"><h3>The challenge</h3><p>' + esc(c.problem) + '</p></div></div>' +
        '<div class="col-md-6"><div class="case-block"><h3>What we built</h3><p>' + esc(c.solution) + '</p></div></div>' +
      '</div>' +
      '<div><span class="eyebrow">Results achieved</span><div class="row g-3 mt-1">' +
        c.results.map(function (r) { return '<div class="col-md-4"><div class="result"><b>' + esc(r[0]) + '</b>' + esc(r[1]) + '</div></div>'; }).join('') +
      '</div></div>' +
      '<div class="case-foot"><div class="d-flex flex-wrap gap-2">' +
        (c.live ? '<a class="btn-tr btn-tr-ghost" href="' + c.live + '" target="_blank" rel="noopener">Visit live site ↗</a>' : '') +
        '<a class="btn-tr btn-tr-ghost" href="' + c.src + '" target="_blank" rel="noopener">Original case study ↗</a></div>' +
        '<a class="btn-tr btn-tr-primary" href="#contact" data-close-case>Start a project like this →</a></div>';
    body.scrollTop = 0;
  }

  function openCase(id) {
    var i = CASES.findIndex(function (c) { return c.id === id; });
    if (i < 0 || !modal) return;
    render(i);
    modal.show();
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-case]');
    if (a) { e.preventDefault(); openCase(a.dataset.case); return; }
    if (e.target.closest('[data-close-case]') && modal) modal.hide();
  });
  document.getElementById('casePrev').addEventListener('click', function () { render(cur - 1); });
  document.getElementById('caseNext').addEventListener('click', function () { render(cur + 1); });
  modalEl.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') render(cur + 1);
    if (e.key === 'ArrowLeft') render(cur - 1);
  });
  function fromHash() { var m = /^#case-([a-z]+)$/.exec(location.hash); if (m) openCase(m[1]); }
  window.addEventListener('hashchange', fromHash);
  fromHash();

  /* ---------- Spotlight on glass cards ---------- */
  document.querySelectorAll('.spot').forEach(function (el) {
    el.addEventListener('pointermove', function (e) {
      var r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  /* ---------- Close mobile menu after choosing a link ---------- */
  var nav = document.getElementById('mainNav');
  if (nav && window.bootstrap) {
    nav.addEventListener('click', function (e) {
      if (e.target.closest('.nav-link') && nav.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(nav).hide();
    });
  }

  /* ---------- Work filters ---------- */
  var btns = document.querySelectorAll('.filters button');
  btns.forEach(function (b) {
    b.addEventListener('click', function () {
      btns.forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
      var f = b.dataset.f;
      document.querySelectorAll('#workGrid [data-k]').forEach(function (col) {
        col.classList.toggle('d-none', !(f === 'all' || col.dataset.k.split(' ').indexOf(f) > -1));
      });
    });
  });

  /* ---------- Copy buttons ---------- */
  function copy(text, btn) {
    var label = btn.textContent;
    var done = function () { btn.textContent = 'Copied'; setTimeout(function () { btn.textContent = label; }, 1500); };
    try { navigator.clipboard.writeText(text).then(done, function () { btn.textContent = 'Select & copy'; }); }
    catch (err) { btn.textContent = 'Select & copy'; }
  }
  document.querySelectorAll('.copy[data-copy]').forEach(function (b) {
    b.addEventListener('click', function () { copy(b.dataset.copy, b); });
  });

  /* ---------- Enquiry form ----------
     Static hosting has no mail backend, so the form prepares the enquiry for the visitor to send.
     To deliver it directly, point the form at a form service (Formspree, Web3Forms) or a PHP mail
     script on your server and remove the preventDefault() below. */
  var form = document.getElementById('enq'), out = document.getElementById('out');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var d = new FormData(form), name = (d.get('name') || '').trim(), ct = (d.get('contact') || '').trim();
    out.hidden = false; out.className = 'note'; out.innerHTML = '';
    if (!name || !ct) { out.textContent = 'Please add your name and an email or phone number so we can reply.'; return; }
    var msg = 'Hi Tresundios,\n\nName: ' + name + '\nBusiness: ' + (d.get('biz') || '-') + '\nContact: ' + ct + '\nService: ' + d.get('svc') + '\n\n' + (d.get('msg') || '');
    var p = document.createElement('div');
    p.innerHTML = '<b>Your enquiry is ready.</b> Copy it and send it to navis@tresundios.com (or navis@tresundios.in), or WhatsApp +91 98408 55590.';
    var pre = document.createElement('pre'); pre.textContent = msg;
    var b = document.createElement('button'); b.type = 'button'; b.className = 'copy'; b.textContent = 'Copy enquiry';
    b.addEventListener('click', function () { copy(msg, b); });
    out.append(p, pre, b);
  });

  /* ---------- Footer year ---------- */
  var yr = document.getElementById('yr'); if (yr) yr.textContent = new Date().getFullYear();
})();
