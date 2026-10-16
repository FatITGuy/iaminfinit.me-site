import './style.css';

const icon = (name, className = '') => {
  const paths = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
    camera: '<path d="M14 4h-4L8 7H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2-3Z"/><circle cx="12" cy="13" r="3"/>',
    pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.1 0l2-2A5 5 0 0 0 12 3.9l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.1 0l-2 2A5 5 0 0 0 12 20.1l1.1-1.1"/>',
  };

  return `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
};

const navItems = [
  ['How it works', '#proof'],
  ['Technology', '#technology'],
  ['Use cases', '#use-cases'],
  ['About', '#about'],
];

const navLinks = navItems
  .map(([label, href]) => `<a href="${href}">${label}</a>`)
  .join('');

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <div class="header-inner">
      <a class="wordmark" href="#top" aria-label="InfinitME home">
        <span class="wordmark-mark" aria-hidden="true">∞</span>
        <span>Infinit<span>ME</span></span>
      </a>
      <nav class="desktop-nav" aria-label="Main navigation">${navLinks}</nav>
      <a class="button button-small header-cta" href="#early-access">Get early access ${icon('arrow')}</a>
      <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false">
        ${icon('menu')}
      </button>
    </div>
    <nav class="mobile-nav" aria-label="Mobile navigation" hidden>
      ${navLinks}
      <a class="mobile-nav-cta" href="#early-access">Get early access ${icon('arrow')}</a>
    </nav>
  </header>

  <main>
    <section class="hero section-grid" id="top">
      <div class="hero-backdrop" aria-hidden="true">
        <span class="orbit orbit-one"></span>
        <span class="orbit orbit-two"></span>
        <span class="orbit orbit-three"></span>
        <span class="grid-glow"></span>
      </div>
      <div class="hero-inner content-width">
        <div class="hero-copy">
          <div class="eyebrow-pill"><span></span> Built by DiceCo Technologies</div>
          <h1>Your moments.<br><span>Made everlasting.</span></h1>
          <p class="hero-description">A lasting home for memories, ideas, and important media — sealed with proof so its story can be checked for years to come.</p>
          <div class="hero-actions">
            <a class="button" href="#early-access">Get early access ${icon('arrow')}</a>
            <a class="text-link" href="#proof">Discover how it works</a>
          </div>
          <div class="hero-stats" aria-label="Service highlights">
            <div><strong>∞</strong><span>Made to endure</span></div>
            <div><strong>100%</strong><span>Verifiable</span></div>
            <div><strong>0</strong><span>Gatekeepers</span></div>
          </div>
        </div>
        <div class="hero-visual" aria-label="InfinitME digital keepsake emblem">
          <div class="visual-halo"></div>
          <div class="brand-card">
            <div class="emblem">
              <svg viewBox="0 0 112 112" role="img" aria-label="Infinity lock symbol">
                <path class="emblem-loop" d="M56 50c-8-11-15-18-25-18a24 24 0 0 0 0 48c10 0 17-7 25-18 8 11 15 18 25 18a24 24 0 0 0 0-48c-10 0-17 7-25 18Z"/>
                <path class="emblem-lock" d="M40 67h32v23H40zM47 67v-6a9 9 0 0 1 18 0v6"/>
                <circle cx="56" cy="78" r="2.5"/>
                <path d="M56 81v4"/>
              </svg>
            </div>
            <div class="brand-card-title">InfinitME</div>
            <div class="brand-card-caption">KEEP IT. PROVE IT. FOREVER.</div>
            <div class="brand-card-rule"></div>
            <div class="brand-card-tag">${icon('shield')} DIGITAL LEGACY PROTOCOL</div>
          </div>
          <span class="visual-note note-top">A moment, preserved</span>
          <span class="visual-note note-bottom">Verified. Always.</span>
        </div>
      </div>
      <a class="scroll-cue" href="#technology"><span></span> Scroll to explore</a>
    </section>

    <section class="technology section-pad" id="technology">
      <div class="content-width">
        <div class="section-heading">
          <div class="section-kicker"><span></span> The foundation</div>
          <h2>Memory, with a <span>proof layer.</span></h2>
          <p>Three ideas come together to give every saved moment a future beyond the platforms we use today.</p>
        </div>
        <div class="pillar-grid">
          <article class="pillar-card">
            <div class="card-topline"><span class="card-icon">${icon('clock')}</span><span class="card-number">01 / 03</span></div>
            <h3>Built to last</h3>
            <p>Keep photos, recordings, and notes in a durable record designed to remain accessible over time.</p>
            <div class="card-decoration decoration-orbit" aria-hidden="true">∞</div>
          </article>
          <article class="pillar-card">
            <div class="card-topline"><span class="card-icon">${icon('camera')}</span><span class="card-number">02 / 03</span></div>
            <h3>Capture with context</h3>
            <p>Attach a cryptographic signature when media is created, so its origin and integrity can be checked later.</p>
            <div class="card-decoration decoration-scan" aria-hidden="true"></div>
          </article>
          <article class="pillar-card">
            <div class="card-topline"><span class="card-icon">${icon('shield')}</span><span class="card-number">03 / 03</span></div>
            <h3>Verify independently</h3>
            <p>Use a public, tamper-evident record to check a file without relying on a single platform as the authority.</p>
            <div class="card-decoration decoration-nodes" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
          </article>
        </div>
      </div>
    </section>

    <section class="proof section-pad" id="proof">
      <div class="content-width">
        <div class="proof-intro">
          <div class="section-kicker"><span></span> Proof over time</div>
          <h2>Know what’s real.<br><span>Keep the evidence.</span></h2>
          <p>Ordinary files can lose their context. Add a verifiable record to make the history easier to trust.</p>
        </div>
        <div class="comparison">
          <article class="comparison-card ordinary">
            <div class="comparison-head"><span class="comparison-symbol">${icon('image')}</span><span class="status-label">WITHOUT A RECORD</span></div>
            <div class="photo-placeholder ordinary-photo" aria-hidden="true"><div class="photo-sun"></div><div class="photo-hill hill-a"></div><div class="photo-hill hill-b"></div><div class="photo-noise"></div><span>NO ORIGIN DATA</span></div>
            <h3>A file without context</h3>
            <p>It may be difficult to know when something was made or whether it changed after capture.</p>
            <ul class="feature-list">
              <li>${icon('close')} No reliable capture proof</li>
              <li>${icon('close')} Changes can go unnoticed</li>
              <li>${icon('close')} Depends on platform history</li>
              <li>${icon('close')} Context can be lost</li>
            </ul>
          </article>
          <div class="versus-badge" aria-hidden="true">VS</div>
          <article class="comparison-card verified">
            <div class="comparison-head"><span class="comparison-symbol">${icon('shield')}</span><span class="status-label">WITH INFINITME</span></div>
            <div class="photo-placeholder verified-photo" aria-hidden="true"><div class="photo-sun"></div><div class="photo-hill hill-a"></div><div class="photo-hill hill-b"></div><span class="verified-stamp">${icon('check')} VERIFIED</span></div>
            <h3>A record you can verify</h3>
            <p>Preserve a signed, time-stamped history alongside the media for future independent checks.</p>
            <ul class="feature-list">
              <li>${icon('check')} Signed at the source</li>
              <li>${icon('check')} Changes are detectable</li>
              <li>${icon('check')} Public proof record</li>
              <li>${icon('check')} Context that can endure</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="use-cases section-pad" id="use-cases">
      <div class="content-width">
        <div class="use-cases-heading">
          <div>
            <div class="section-kicker"><span></span> Made for real life</div>
            <h2>Some things are<br><span>worth keeping.</span></h2>
          </div>
          <p>Give the moments, records, and evidence that matter a more dependable place in the world.</p>
        </div>
        <div class="use-case-grid">
          <article class="use-case">
            <div class="use-case-art memory-art" aria-hidden="true"><span class="art-sun"></span><span class="art-frame frame-one"></span><span class="art-frame frame-two"></span><span class="art-spark">✳</span></div>
            <div class="use-case-type">PERSONAL MEMORIES</div>
            <h3>Your life, as you remember it.</h3>
            <p>Save the milestones and everyday snapshots that make a life yours, without depending on a feed to keep them visible.</p>
            <span class="use-case-index">01</span>
          </article>
          <article class="use-case">
            <div class="use-case-art journalism-art" aria-hidden="true"><span class="art-lens"></span><span class="art-line line-one"></span><span class="art-line line-two"></span><span class="art-line line-three"></span></div>
            <div class="use-case-type">JOURNALISM &amp; EVIDENCE</div>
            <h3>Keep the record clear.</h3>
            <p>Preserve media with verifiable time and origin details, helping people assess important documentation with confidence.</p>
            <span class="use-case-index">02</span>
          </article>
          <article class="use-case">
            <div class="use-case-art business-art" aria-hidden="true"><span class="doc-sheet"></span><span class="doc-seal">${icon('check')}</span><span class="doc-line"></span><span class="doc-line"></span><span class="doc-line"></span></div>
            <div class="use-case-type">BUSINESS RECORDS</div>
            <h3>Accountability that stays.</h3>
            <p>Document work and transactions with a clear history that helps teams review what happened and when.</p>
            <span class="use-case-index">03</span>
          </article>
        </div>
      </div>
    </section>

    <section class="early-access section-pad" id="early-access">
      <div class="cta-glow" aria-hidden="true"></div>
      <div class="content-width cta-inner">
        <div class="section-kicker"><span></span> Early access</div>
        <h2>Give your story<br>a <span>lasting place.</span></h2>
        <p>We’re preparing the first release. Leave your email to register your interest in getting updates.</p>
        <form class="waitlist-form">
          <label class="visually-hidden" for="waitlist-email">Email address</label>
          <input id="waitlist-email" name="email" type="email" placeholder="you@example.com" autocomplete="email" required />
          <button class="button" type="submit">Join the waitlist ${icon('arrow')}</button>
        </form>
        <p class="form-note">This local preview does not submit or store your email.</p>
        <p class="form-feedback" role="status" aria-live="polite"></p>
      </div>
    </section>
  </main>

  <footer class="site-footer" id="about">
    <div class="content-width">
      <div class="footer-top">
        <div class="footer-brand">
          <a class="wordmark" href="#top" aria-label="InfinitME home"><span class="wordmark-mark" aria-hidden="true">∞</span><span>Infinit<span>ME</span></span></a>
          <p>Make room for the memories and records that deserve to last.</p>
        </div>
        <div class="footer-column">
          <h3>Explore</h3>
          <a href="#proof">How it works</a>
          <a href="#technology">Technology</a>
          <a href="#use-cases">Use cases</a>
          <a href="#about">About</a>
          <a href="#early-access">Early access</a>
        </div>
        <div class="footer-column">
          <h3>About the project</h3>
          <p>Built by DiceCo Technologies, exploring durable digital records and verifiable media.</p>
          <span class="footer-badge">${icon('link')} Independently verifiable</span>
        </div>
      </div>
      <div class="footer-bottom"><span>© 2026 InfinitME. All rights reserved.</span><a href="https://x.com/iaminfinit" target="_blank" rel="noreferrer">Follow the project ${icon('arrow')}</a><span class="footer-domain">iaminfinit.me</span></div>
    </div>
  </footer>
`;

const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isExpanded));
  menuToggle.setAttribute('aria-label', isExpanded ? 'Open navigation' : 'Close navigation');
  menuToggle.innerHTML = icon(isExpanded ? 'menu' : 'close');
  mobileNav.hidden = isExpanded;
});

mobileNav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    mobileNav.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    menuToggle.innerHTML = icon('menu');
  }
});

document.querySelector('.waitlist-form').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('.form-feedback').textContent =
    'Thanks for your interest — email sign-up is not connected in this local preview.';
});
