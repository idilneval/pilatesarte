/* ============================================================
   ARTE STUDIO — Pilates  ·  Sage editorial luxe
   Sage green / cream / deep forest · Cormorant serif + Jost sans
   ============================================================ */

:root{
  --cream:#E4E6DA;          /* page canvas — soft sage-tinted ivory */
  --paper:#EDEEE4;          /* light cards / cream sections */
  --beige:#D6DAC6;          /* feature strip / alt sage surface */
  --ink:#23271C;            /* deep forest text */
  --ink-soft:#5E6552;
  --line:color-mix(in oklab, var(--ink) 16%, transparent);
  --line-soft:color-mix(in oklab, var(--ink) 9%, transparent);
  --sand:#CDD3BE;           /* image-slot bg — sage */

  --accent:#7A8B5E;         /* sage green — themeable */
  --accent-2:#A3B284;       /* lighter sage (on dark) */
  --on-accent:#F1F2E9;

  --dark:#2C3526;           /* deep forest panel */
  --dark-2:#202719;
  --on-dark:#E7EADD;

  --radius:3px;
  --display-wdth:100;       /* kept for tweak compat (no-op) */

  --maxw:1280px;
  --gutter:clamp(20px, 5vw, 92px);
  --section-y:clamp(70px, 9vw, 150px);

  --ease:cubic-bezier(.22,.61,.36,1);
  --font-display:"Cormorant Garamond", Georgia, serif;
  --font-ui:"Jost", system-ui, sans-serif;
  --font-body:"Jost", system-ui, sans-serif;
  --font-serif:"Cormorant Garamond", Georgia, serif;
}

*{box-sizing:border-box;}
html{-webkit-text-size-adjust:100%;scroll-behavior:smooth;}
body{
  margin:0;
  background:var(--cream);
  color:var(--ink);
  font-family:var(--font-body);
  font-weight:300;
  font-size:clamp(15px,1.05vw,16.5px);
  line-height:1.7;
  -webkit-font-smoothing:antialiased;
  text-rendering:optimizeLegibility;
  overflow-x:hidden;
}
img{max-width:100%;display:block;}
a{color:inherit;text-decoration:none;}
button{font-family:inherit;cursor:pointer;}
::selection{background:var(--accent);color:var(--on-accent);}

/* dark sections re-scope palette */
.section--dark,.footer{
  --ink:var(--on-dark);
  --ink-soft:#9AA088;
  --line:color-mix(in oklab,#fff 14%, transparent);
  --line-soft:color-mix(in oklab,#fff 8%, transparent);
  --paper:#262E20;
  --sand:#2B331F;
  --accent:var(--accent-2);
  color:var(--ink);
}
.section--dark{background:linear-gradient(180deg, var(--dark) 0%, var(--dark-2) 100%);}
.section--cream{background:var(--paper);}
.section--beige{background:var(--beige);}

/* ---------- Type ---------- */
.display{font-family:var(--font-display);font-weight:500;line-height:1.0;letter-spacing:.005em;text-wrap:balance;}
.serif{font-family:var(--font-serif);font-style:italic;font-weight:500;}
.kicker{display:inline-flex;align-items:center;gap:.8em;font-family:var(--font-ui);font-weight:400;
  font-size:.72rem;letter-spacing:.32em;text-transform:uppercase;color:var(--accent);}
h2.section-title{font-family:var(--font-display);font-weight:500;line-height:1.02;letter-spacing:.004em;
  font-size:clamp(2.4rem,5vw,4rem);margin:0;text-wrap:balance;text-transform:uppercase;}
h2.section-title .serif{text-transform:none;font-style:italic;}
h3{font-family:var(--font-display);font-weight:500;letter-spacing:.004em;margin:0;}
p{margin:0;}
.lead{font-size:clamp(1rem,1.3vw,1.12rem);line-height:1.7;color:var(--ink-soft);font-weight:300;}

/* ---------- Layout ---------- */
.wrap{max-width:var(--maxw);margin-inline:auto;padding-inline:var(--gutter);}
.section{padding-block:var(--section-y);position:relative;}
.eyebrow-row{display:flex;align-items:center;}

/* ---------- Buttons ---------- */
.btn{display:inline-flex;align-items:center;gap:.8em;font-family:var(--font-ui);font-weight:400;
  font-size:.74rem;letter-spacing:.22em;text-transform:uppercase;
  padding:1.25em 2.2em;border-radius:var(--radius);background:var(--dark);color:var(--on-dark);border:1px solid var(--dark);
  transition:background .45s var(--ease), color .45s var(--ease), border-color .45s var(--ease);white-space:nowrap;}
.btn .arr{font-size:0;display:inline-block;transition:transform .45s var(--ease);}
.btn .arr::before{content:"→";font-size:.9rem;letter-spacing:0;}
.btn:hover{background:var(--accent);border-color:var(--accent);color:var(--on-accent);}
.btn:hover .arr{transform:translateX(5px);}
.btn--ghost{background:transparent;color:var(--ink);border-color:var(--line);}
.btn--ghost:hover{background:transparent;border-color:var(--ink);color:var(--ink);}
.btn--accent{background:var(--accent);border-color:var(--accent);color:var(--on-accent);}
.btn--light{background:transparent;color:#fff;border-color:rgba(255,255,255,.4);}
.btn--light:hover{background:#fff;border-color:#fff;color:var(--dark);}
.section--dark .btn,.footer .btn{background:var(--on-dark);color:var(--dark);border-color:var(--on-dark);}
.section--dark .btn:hover,.footer .btn:hover{background:var(--accent-2);border-color:var(--accent-2);color:var(--dark);}
.section--dark .btn--ghost{background:transparent;color:var(--on-dark);border-color:rgba(255,255,255,.3);}
.section--dark .btn--ghost:hover{border-color:var(--on-dark);}

/* ---------- Nav ---------- */
.nav{position:fixed;top:0;left:0;right:0;z-index:50;transition:background .4s, border-color .4s;border-bottom:1px solid transparent;}
.nav__inner{max-width:1440px;margin-inline:auto;padding:26px clamp(20px,4vw,52px);
  display:flex;align-items:center;justify-content:space-between;gap:20px;}
.nav.is-fixed{position:fixed;background:color-mix(in oklab,var(--cream) 92%, transparent);
  backdrop-filter:blur(14px) saturate(1.05);border-bottom:1px solid var(--line);}
.nav.is-fixed .brand,.nav.is-fixed .nav__links a{color:var(--ink);}
.nav.is-fixed .nav__inner{padding-block:16px;}
.brand{font-family:var(--font-display);line-height:1;color:#fff;transition:color .4s;white-space:nowrap;}
.brand .b1{display:block;font-weight:600;font-size:1.35rem;letter-spacing:.14em;text-transform:uppercase;}
.brand .b2{display:block;font-family:var(--font-ui);font-weight:300;font-size:.56rem;letter-spacing:.38em;text-transform:uppercase;margin-top:5px;opacity:.8;}
.nav__links{display:flex;align-items:center;gap:28px;}
.nav__links a{font-family:var(--font-ui);font-size:.74rem;font-weight:400;letter-spacing:.18em;text-transform:uppercase;
  color:rgba(255,255,255,.92);transition:opacity .2s, color .4s;position:relative;}
.nav__links a:hover{opacity:.6;}
.nav__cta{display:flex;align-items:center;gap:16px;}
.nav__cta .btn{background:transparent;border-color:rgba(255,255,255,.5);color:#fff;padding:1em 1.5em;font-size:.7rem;letter-spacing:.18em;}
.nav__cta .btn:hover{background:#fff;border-color:#fff;color:var(--dark);}
.nav.is-fixed .nav__cta .btn{border-color:var(--line);color:var(--ink);}
.nav.is-fixed .nav__cta .btn:hover{background:var(--dark);border-color:var(--dark);color:var(--on-dark);}
.nav__burger{display:none;width:46px;height:46px;border:1px solid rgba(255,255,255,.5);border-radius:var(--radius);background:transparent;
  align-items:center;justify-content:center;flex-direction:column;gap:5px;}
.nav__burger span{width:18px;height:1.4px;background:#fff;transition:.3s var(--ease);}
.nav.is-fixed .nav__burger{border-color:var(--line);}
.nav.is-fixed .nav__burger span{background:var(--ink);}
.nav.open .nav__burger span:nth-child(1){transform:translateY(6.4px) rotate(45deg);}
.nav.open .nav__burger span:nth-child(2){opacity:0;}
.nav.open .nav__burger span:nth-child(3){transform:translateY(-6.4px) rotate(-45deg);}
.mobile-menu{position:fixed;inset:0 0 0 0;top:0;z-index:49;background:var(--dark);color:var(--on-dark);
  padding:96px var(--gutter) 48px;display:flex;flex-direction:column;gap:2px;
  transform:translateY(-100%);opacity:0;pointer-events:none;transition:opacity .4s var(--ease), transform .4s var(--ease);}
.nav.open + .mobile-menu{opacity:1;transform:none;pointer-events:auto;}
.mobile-menu a{font-family:var(--font-display);font-weight:500;font-size:2.2rem;padding:13px 0;border-bottom:1px solid rgba(255,255,255,.12);letter-spacing:.02em;text-transform:uppercase;}
.mobile-menu .btn{margin-top:28px;justify-content:center;}

/* ---------- Hero ---------- */
.hero{padding:0;}
.hero--b{display:none;}
[data-variant="b"] .hero--a{display:none;}
[data-variant="b"] .hero--b{display:block;}

/* Variant B — full-bleed (reference) */
.hero-b__stage{position:relative;min-height:100vh;display:flex;align-items:center;overflow:hidden;}
.hero-b__stage image-slot{position:absolute;inset:0;width:100%;height:100%;border-radius:0;z-index:0;
  filter:brightness(.74) saturate(.92) contrast(1.02);}
.hero-b__scrim{position:absolute;inset:0;z-index:1;pointer-events:none;
  background:linear-gradient(100deg, rgba(28,23,17,.62) 0%, rgba(28,23,17,.32) 42%, rgba(28,23,17,.12) 70%, rgba(28,23,17,.34) 100%);}
.hero-b__wordmark{position:absolute;z-index:1;top:50%;right:8%;transform:translateY(-50%);text-align:center;
  font-family:var(--font-display);color:rgba(243,239,230,.30);pointer-events:none;user-select:none;
  text-shadow:0 2px 30px rgba(0,0,0,.25);}
.hero-b__wordmark .w1{display:block;font-weight:600;font-size:clamp(2.4rem,5vw,4.6rem);letter-spacing:.2em;}
.hero-b__wordmark .w2{display:block;font-family:var(--font-ui);font-weight:300;font-size:clamp(.7rem,1.2vw,1rem);letter-spacing:.7em;margin-top:8px;padding-left:.7em;}
.hero-b__content{position:relative;z-index:2;max-width:1440px;margin-inline:auto;width:100%;
  padding:0 clamp(20px,5vw,64px);color:#F4F0E8;}
.hero-b__content .kicker{color:rgba(244,240,232,.85);margin-bottom:30px;}
.hero-b__title{font-family:var(--font-display);font-weight:500;line-height:1.02;letter-spacing:.01em;color:#F6F2EA;
  font-size:clamp(2.8rem,7.2vw,6.4rem);margin:0 0 .42em;text-transform:uppercase;}
.hero-b__title .serif{font-style:italic;text-transform:none;font-weight:500;}
.hero-b__lead{max-width:40ch;margin:0 0 38px;color:rgba(244,240,232,.84);font-size:clamp(1.02rem,1.35vw,1.18rem);line-height:1.7;font-weight:300;}
.hero-b__cta{display:flex;flex-wrap:wrap;gap:16px;align-items:center;}
.hero-b__cta .btn{background:var(--dark);border-color:var(--dark);color:var(--on-dark);}
.hero-b__cta .btn:hover{background:var(--accent);border-color:var(--accent);color:var(--on-accent);}

/* Variant A — split (secondary) */
.hero-a{display:grid;grid-template-columns:1.04fr .96fr;gap:clamp(28px,4vw,72px);align-items:center;
  padding:clamp(120px,14vw,180px) 0 clamp(50px,7vw,90px);}
.hero-a__title{font-family:var(--font-display);font-weight:500;line-height:1.0;letter-spacing:.006em;text-transform:uppercase;
  font-size:clamp(3rem,8vw,6.4rem);margin:.1em 0 .36em;text-wrap:balance;}
.hero-a__title em,.hero-a__title .serif{font-style:italic;text-transform:none;color:var(--accent);}
.hero-a__lead{max-width:42ch;}
.hero-a__cta{display:flex;flex-wrap:wrap;gap:16px;margin-top:32px;}
.hero-a__stats{display:grid;grid-template-columns:repeat(3,1fr);gap:0;margin-top:50px;border-top:1px solid var(--line);}
.hero-a__stats > div{padding:22px 18px 0;border-right:1px solid var(--line);}
.hero-a__stats > div:last-child{border-right:none;}
.hero-a__stats .num{font-family:var(--font-display);font-weight:500;font-size:clamp(2rem,3.4vw,2.8rem);line-height:1;}
.hero-a__stats .lbl{font-family:var(--font-ui);font-size:.68rem;color:var(--ink-soft);margin-top:8px;text-transform:uppercase;letter-spacing:.22em;}
.hero-a__media{position:relative;}
.hero-a__media image-slot{width:100%;aspect-ratio:4/5;border-radius:var(--radius);filter:saturate(.92) brightness(.96);}
.hero-a__badge{position:absolute;top:18px;right:18px;z-index:2;width:104px;height:104px;border-radius:50%;
  background:var(--accent);color:var(--on-accent);display:grid;place-items:center;text-align:center;
  font-family:var(--font-ui);font-weight:400;font-size:.58rem;letter-spacing:.24em;line-height:1.7;text-transform:uppercase;}
.hero__caption{display:none;}

/* ---------- Features strip ---------- */
.features{display:grid;grid-template-columns:repeat(4,1fr);}
.feature{padding:clamp(40px,5vw,76px) clamp(20px,2.4vw,40px);text-align:center;border-right:1px solid var(--line);}
.feature:last-child{border-right:none;}
.feature__icon{width:46px;height:46px;margin:0 auto 26px;color:var(--accent);}
.feature__icon svg{width:100%;height:100%;display:block;}
.feature h3{font-family:var(--font-ui);font-weight:500;font-size:.82rem;letter-spacing:.22em;text-transform:uppercase;color:var(--ink);margin-bottom:18px;}
.feature p{font-size:.96rem;color:var(--ink-soft);line-height:1.7;max-width:26ch;margin-inline:auto;}

/* ---------- Courses (Dersler) ---------- */
.courses{display:grid;grid-template-columns:1fr 1.02fr 1fr;gap:0;align-items:stretch;}
.courses__intro{padding:clamp(40px,5vw,80px) clamp(28px,3.5vw,64px);display:flex;flex-direction:column;justify-content:center;}
.courses__intro .kicker{margin-bottom:26px;}
.courses__intro h2{font-family:var(--font-display);font-weight:500;text-transform:uppercase;line-height:1.02;letter-spacing:.006em;
  font-size:clamp(2.2rem,3.8vw,3.4rem);margin:0 0 24px;}
.courses__intro p{color:var(--ink-soft);max-width:34ch;margin-bottom:36px;}
.courses__media{position:relative;overflow:hidden;min-height:440px;}
.courses__media image-slot{position:absolute;inset:0;width:100%;height:100%;border-radius:0;
  filter:saturate(.94) brightness(.96);transition:opacity .5s var(--ease);}
.courses__list{background:linear-gradient(180deg, var(--dark) 0%, var(--dark-2) 100%);color:var(--on-dark);
  display:flex;flex-direction:column;justify-content:center;padding:clamp(28px,3vw,52px) clamp(28px,3vw,52px);}
.course-item{display:flex;align-items:baseline;gap:22px;padding:22px 0;border-bottom:1px solid rgba(255,255,255,.12);
  cursor:pointer;transition:padding-left .4s var(--ease);}
.course-item:last-child{border-bottom:none;}
.course-item .ci-no{font-family:var(--font-display);font-weight:500;font-size:1.7rem;color:var(--accent-2);line-height:1;min-width:1.6em;transition:color .3s;}
.course-item .ci-name{font-family:var(--font-ui);font-weight:400;font-size:.86rem;letter-spacing:.18em;text-transform:uppercase;color:rgba(236,228,214,.7);transition:color .3s;}
.course-item:hover,.course-item.is-active{padding-left:10px;}
.course-item:hover .ci-name,.course-item.is-active .ci-name{color:var(--on-dark);}
.course-item.is-active .ci-no{color:#fff;}
.course-item .ci-line{flex:1;height:1px;background:transparent;}
.course-item.is-active .ci-line{background:rgba(255,255,255,.3);}

/* ---------- Eğitmen ---------- */
.instructor{display:grid;grid-template-columns:1.12fr .88fr;gap:clamp(34px,5vw,88px);align-items:stretch;}
.instructor__media{position:relative;}
.instructor__scrim{position:absolute;inset:0 0 auto 0;height:64%;z-index:2;pointer-events:none;
  border-radius:var(--radius) var(--radius) 0 0;
  background:linear-gradient(180deg, rgba(14,19,13,.62) 0%, rgba(14,19,13,.14) 56%, transparent 100%);}
.instructor__overlay{position:absolute;top:0;left:0;right:0;z-index:3;pointer-events:none;padding:clamp(22px,2.6vw,40px);}
.instructor__overlay .kicker{color:rgba(246,242,234,.9);}
.instructor__overlay .kicker::before{background:rgba(246,242,234,.72);}
.instructor__overlay .section-title{color:#F6F2EA;margin-top:16px;max-width:12ch;text-shadow:0 2px 28px rgba(0,0,0,.5);}
.instructor__overlay .section-title .serif{color:#F6F2EA;}
.instructor__media image-slot{position:absolute;inset:0;z-index:1;width:100%;height:100%;border-radius:var(--radius);
  filter:saturate(.96) brightness(.98);transition:transform .9s var(--ease), filter .6s var(--ease);will-change:transform;}
.instructor__media:hover image-slot{filter:saturate(1.04) brightness(1.02);}
.instructor__media .tag{position:absolute;left:18px;bottom:18px;right:18px;z-index:3;background:color-mix(in oklab,var(--paper) 94%, transparent);
  backdrop-filter:blur(6px);border:1px solid var(--line);border-radius:var(--radius);
  padding:15px 20px;display:flex;align-items:center;justify-content:space-between;gap:12px;}
.instructor__media .tag > div{font-family:var(--font-display);font-size:1.35rem;line-height:1.1;}
.instructor__media .tag small{display:block;font-family:var(--font-ui);font-weight:400;font-size:.6rem;color:var(--ink-soft);margin-top:5px;text-transform:uppercase;letter-spacing:.18em;}
.instructor__media .tag .chat{width:40px;height:40px;border-radius:50%;background:var(--accent);flex:none;display:grid;place-items:center;color:var(--on-accent);}
.instructor__name{font-family:var(--font-display);font-weight:500;font-size:clamp(2.6rem,5vw,4rem);letter-spacing:.006em;line-height:1.0;margin:14px 0 10px;text-transform:uppercase;}
.instructor__role{font-family:var(--font-ui);font-size:.72rem;letter-spacing:.24em;color:var(--accent);text-transform:uppercase;}
.instructor__lead{margin:24px 0 4px;max-width:46ch;color:var(--ink-soft);}
.instructor__creds{list-style:none;margin:30px 0 0;padding:0;display:grid;grid-template-columns:1fr 1fr;gap:0;border-top:1px solid var(--line);}
.instructor__creds li{display:flex;gap:13px;align-items:center;font-size:.92rem;font-weight:300;padding:15px 0;border-bottom:1px solid var(--line-soft);}
.instructor__creds li::before{content:"";width:5px;height:5px;border-radius:50%;flex:none;background:var(--accent);}

/* ---------- Galeri ---------- */
/* ---------- Galeri / Stüdyo (tek geniş foto + üstte yazı) ---------- */
.studio{position:relative;border-radius:var(--radius);overflow:hidden;display:flex;align-items:center;
  min-height:clamp(440px,52vw,660px);}
.studio image-slot{position:absolute;inset:0;width:100%;height:100%;border-radius:0;
  filter:saturate(.96) brightness(.98);transition:transform 1.2s var(--ease);will-change:transform;}
.studio:hover image-slot{transform:scale(1.045);}
.studio__scrim{position:absolute;inset:0;z-index:1;pointer-events:none;
  background:linear-gradient(90deg, var(--cream) 3%, color-mix(in oklab,var(--cream) 90%, transparent) 30%, color-mix(in oklab,var(--cream) 32%, transparent) 52%, transparent 72%);}
.studio__text{position:relative;z-index:2;max-width:44ch;padding:clamp(30px,4vw,72px);}
.studio__text .kicker{margin-bottom:18px;}
.studio__text .section-title{margin-bottom:20px;}
.studio__text .lead{max-width:36ch;margin-bottom:30px;}
.gallery{display:grid;grid-template-columns:repeat(4,1fr);gap:clamp(10px,1vw,16px);}
.gallery image-slot{width:100%;aspect-ratio:3/4;border-radius:var(--radius);filter:saturate(.92) brightness(.96);transition:filter .5s var(--ease), transform .8s var(--ease);}
.gallery image-slot:hover{filter:saturate(1) brightness(1.02);}
.g1,.g2,.g3,.g4,.g5{grid-column:auto;}
.g5{display:none;}

/* ---------- Yorumlar ---------- */
.quote-feature{font-family:var(--font-display);font-weight:500;font-size:clamp(2rem,4.2vw,3.4rem);
  line-height:1.18;letter-spacing:.004em;max-width:26ch;margin:0 0 60px;text-wrap:balance;}
.quote-feature .accent,.quote-feature .serif{font-style:italic;color:var(--accent);}
.quotes{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border-top:1px solid var(--line);}
.quote{padding:34px clamp(20px,2vw,36px) 0 0;border-right:1px solid var(--line);}
.quote:last-child{border-right:none;padding-right:0;}
.quote .stars{color:var(--accent);letter-spacing:.3em;font-size:.74rem;}
.quote p{margin:18px 0 24px;color:var(--ink);font-size:1.3rem;line-height:1.5;font-family:var(--font-display);font-weight:500;}
.quote .who{display:flex;align-items:center;gap:13px;}
.quote .who image-slot{width:46px;height:46px;flex:none;border-radius:50%;}
.quote .who b{font-family:var(--font-ui);font-weight:500;font-size:.9rem;letter-spacing:.04em;}
.quote .who span{display:block;font-family:var(--font-ui);font-size:.68rem;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.16em;margin-top:3px;}

/* ---------- Üyelik ---------- */
.pricing{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1px solid var(--line);border-radius:var(--radius);overflow:visible;}
.plan{display:flex;flex-direction:column;background:transparent;border-right:1px solid var(--line);padding:clamp(28px,2.8vw,46px);
  position:relative;z-index:0;transform-style:preserve-3d;
  transition:transform .5s var(--ease), box-shadow .5s var(--ease), background .45s var(--ease);}
.plan::after{content:"";position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .45s var(--ease);z-index:-1;
  background:radial-gradient(420px circle at var(--mx,50%) var(--my,50%), color-mix(in oklab,var(--accent) 20%, transparent), transparent 60%);}
.plan:hover{z-index:3;box-shadow:0 36px 70px -38px rgba(42,36,29,.55);}
.plan:hover::after{opacity:1;}
.plan--featured:hover{box-shadow:0 40px 80px -34px rgba(16,12,8,.75);}
.plan:last-child{border-right:none;}
.plan--featured{background:linear-gradient(180deg, var(--dark) 0%, var(--dark-2) 100%);color:var(--on-dark);}
.plan--featured{--ink:var(--on-dark);--ink-soft:#9C9180;--line:rgba(255,255,255,.14);--accent:var(--accent-2);}
.plan__tag{font-family:var(--font-ui);font-size:.66rem;letter-spacing:.24em;text-transform:uppercase;color:var(--accent);margin-bottom:auto;}
.plan__name{font-family:var(--font-display);font-weight:500;font-size:2rem;margin:22px 0 8px;letter-spacing:.006em;}
.plan__price{font-family:var(--font-display);font-weight:500;font-size:clamp(2.8rem,4vw,3.6rem);line-height:1;display:flex;align-items:baseline;gap:6px;}
.plan__price .cur{font-size:.42em;}
.plan__price .per{font-family:var(--font-ui);font-size:.24em;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.14em;font-weight:400;}
.plan__desc{font-size:.94rem;color:var(--ink-soft);margin:18px 0 26px;}
.plan__list{list-style:none;margin:0 0 32px;padding:0;display:flex;flex-direction:column;gap:0;font-size:.94rem;font-weight:300;}
.plan__list li{display:flex;gap:11px;align-items:center;padding:12px 0;border-top:1px solid var(--line-soft);}
.plan__list li::before{content:"";width:5px;height:5px;border-radius:50%;flex:none;background:var(--accent);}
.plan .btn{margin-top:auto;justify-content:center;}
.plan:not(.plan--featured) .btn{background:transparent;color:var(--ink);border-color:var(--line);}
.plan:not(.plan--featured) .btn:hover{background:var(--dark);color:var(--on-dark);border-color:var(--dark);}
.plan--featured .btn{background:var(--on-dark);color:var(--dark);border-color:var(--on-dark);}
.plan--featured .btn:hover{background:var(--accent-2);border-color:var(--accent-2);}

/* ---------- Rezervasyon / takvim ---------- */
.booking{display:grid;grid-template-columns:1.1fr .9fr;gap:clamp(24px,3vw,56px);
  background:var(--paper);border:1px solid var(--line);border-radius:var(--radius);padding:clamp(22px,2.6vw,42px);}
.booking__types{display:flex;gap:0;margin-bottom:26px;border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;}
.booking__types button{flex:1;padding:14px 8px;border:none;border-right:1px solid var(--line);background:transparent;
  font-family:var(--font-ui);font-weight:400;font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-soft);transition:.2s;cursor:pointer;}
.booking__types button:last-child{border-right:none;}
.booking__types button:hover{color:var(--ink);}
.booking__types button.is-active{background:var(--dark);color:var(--on-dark);}
.cal__head{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;}
.cal__month{font-family:var(--font-display);font-weight:500;font-size:1.6rem;letter-spacing:.01em;}
.cal__head button{width:40px;height:40px;border:1px solid var(--line);border-radius:var(--radius);background:transparent;
  font-size:1.1rem;line-height:1;color:var(--ink);transition:.2s;cursor:pointer;display:grid;place-items:center;}
.cal__head button:hover:not(:disabled){border-color:var(--ink);}
.cal__head button:disabled{opacity:.26;cursor:not-allowed;}
.cal__dow{display:grid;grid-template-columns:repeat(7,1fr);gap:4px;margin-bottom:8px;}
.cal__dow span{text-align:center;font-family:var(--font-ui);font-size:.64rem;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.12em;}
.cal__grid{display:grid;grid-template-columns:repeat(7,1fr);gap:4px;}
.cal__day{aspect-ratio:1;border:none;background:transparent;border-radius:var(--radius);font-family:var(--font-ui);font-weight:400;
  font-size:.92rem;color:var(--ink);position:relative;display:flex;align-items:center;justify-content:center;transition:.15s;cursor:pointer;}
.cal__day:hover:not(:disabled):not(.is-sel){background:var(--cream);}
.cal__day.is-empty{visibility:hidden;pointer-events:none;}
.cal__day:disabled{color:color-mix(in oklab,var(--ink) 28%, transparent);cursor:not-allowed;}
.cal__day:disabled:not(.is-full){text-decoration:line-through;}
.cal__day.is-today{box-shadow:inset 0 0 0 1px var(--accent);}
.cal__day.is-full::after{content:"";position:absolute;bottom:6px;left:50%;transform:translateX(-50%);width:4px;height:4px;border-radius:50%;background:#B6553F;}
.cal__day.is-sel{background:var(--dark);color:var(--on-dark);font-weight:500;box-shadow:none;}
.cal__legend{display:flex;flex-wrap:wrap;gap:16px;margin-top:20px;font-family:var(--font-ui);font-size:.64rem;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.1em;}
.cal__legend span{display:flex;align-items:center;gap:6px;}
.cal__legend i{width:9px;height:9px;border-radius:50%;display:inline-block;}
.booking__right{display:flex;flex-direction:column;border-left:1px solid var(--line);padding-left:clamp(0px,2.4vw,40px);}
.booking__date{font-family:var(--font-display);font-weight:500;font-size:1.6rem;margin-bottom:20px;letter-spacing:.01em;}
.booking__slots{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-bottom:auto;}
.booking__hint{grid-column:1 / -1;color:var(--ink-soft);font-size:.92rem;line-height:1.6;}
.slot{padding:15px 16px;border:1px solid var(--line);border-radius:var(--radius);background:transparent;font-family:var(--font-ui);
  font-weight:400;font-size:.92rem;color:var(--ink);display:flex;align-items:center;justify-content:space-between;gap:8px;transition:.15s;cursor:pointer;}
.slot small{font-family:var(--font-ui);font-weight:400;font-size:.58rem;letter-spacing:.14em;color:var(--accent);text-transform:uppercase;}
.slot:hover:not(:disabled):not(.is-sel){border-color:var(--ink);}
.slot.is-sel{background:var(--dark);border-color:var(--dark);color:var(--on-dark);}
.slot.is-sel small{color:color-mix(in oklab,var(--on-dark) 80%, transparent);}
.slot:disabled{cursor:not-allowed;background:var(--cream);color:color-mix(in oklab,var(--ink) 40%, transparent);}
.slot.is-full small{color:#B6553F;}
.booking__summary{margin:26px 0 16px;font-size:.95rem;color:var(--ink-soft);line-height:1.6;min-height:1.3em;}
.booking__summary b{color:var(--ink);font-weight:500;}
.booking__ok{color:var(--accent);font-weight:500;}
.booking__confirm{width:100%;justify-content:center;}
.booking__confirm:disabled{opacity:.4;cursor:not-allowed;}

/* ---------- CTA ---------- */
.cta-band{background:var(--dark);--ink:var(--on-dark);color:var(--ink);border-radius:var(--radius);
  padding:clamp(60px,9vw,150px) clamp(28px,5vw,90px);text-align:center;position:relative;overflow:hidden;}
.cta-band .kicker{justify-content:center;display:inline-flex;margin-bottom:28px;color:var(--accent-2);}
.cta-band h2{font-family:var(--font-display);font-weight:500;font-size:clamp(2.6rem,6.2vw,5rem);line-height:1.04;letter-spacing:.006em;margin:0 auto 30px;max-width:18ch;text-wrap:balance;color:#F6F2EA;text-transform:uppercase;}
.cta-band h2 .muted{color:rgba(246,242,234,.36);}
.cta-band h2 .serif{font-style:italic;text-transform:none;color:var(--accent-2);}
.cta-band p{max-width:46ch;margin:0 auto 38px;color:rgba(246,242,234,.74);font-size:1.08rem;}
.cta-band__row{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;}

/* ---------- SSS ---------- */
.faq-grid{display:grid;grid-template-columns:.72fr 1.28fr;gap:clamp(32px,4vw,90px);align-items:start;}
.faq-list{display:flex;flex-direction:column;}
.faq{border-top:1px solid var(--line);}
.faq:last-child{border-bottom:1px solid var(--line);}
.faq summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;gap:20px;align-items:center;
  padding:28px 0;font-family:var(--font-display);font-weight:500;font-size:clamp(1.3rem,2vw,1.75rem);letter-spacing:.006em;}
.faq summary::-webkit-details-marker{display:none;}
.faq summary .ic{flex:none;width:32px;height:32px;border:1px solid var(--line);border-radius:50%;position:relative;transition:.3s;}
.faq summary .ic::before,.faq summary .ic::after{content:"";position:absolute;background:var(--ink);inset:0;margin:auto;transition:.3s var(--ease);}
.faq summary .ic::before{width:11px;height:1px;}
.faq summary .ic::after{width:1px;height:11px;}
.faq[open] summary .ic{background:var(--accent);border-color:var(--accent);}
.faq[open] summary .ic::before{background:var(--on-accent);}
.faq[open] summary .ic::after{background:var(--on-accent);transform:rotate(90deg);opacity:0;}
.faq__body{overflow:hidden;color:var(--ink-soft);font-size:1.02rem;line-height:1.7;max-width:62ch;max-height:0;padding:0;font-weight:300;
  transition:max-height .4s var(--ease),padding .4s var(--ease);}
.faq[open] .faq__body{max-height:340px;padding:0 0 30px;}

/* ---------- Newsletter strip ---------- */
.newsletter-strip{background:var(--beige);}
.newsletter-strip__inner{display:grid;grid-template-columns:1fr auto;gap:clamp(24px,4vw,64px);align-items:center;
  padding-block:clamp(40px,5vw,70px);}
.newsletter-strip h3{font-family:var(--font-display);font-weight:500;font-size:clamp(1.6rem,2.6vw,2.3rem);letter-spacing:.006em;margin-bottom:10px;text-transform:uppercase;}
.newsletter-strip p{color:var(--ink-soft);max-width:40ch;}
.newsletter{display:flex;align-items:stretch;gap:0;min-width:min(440px,80vw);border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;background:var(--paper);}
.newsletter input{flex:1;min-width:0;background:transparent;border:none;outline:none;color:var(--ink);font-family:var(--font-ui);font-weight:300;font-size:.94rem;padding:0 20px;}
.newsletter input::placeholder{color:var(--ink-soft);}
.newsletter button{flex:none;border:none;background:var(--dark);color:var(--on-dark);font-family:var(--font-ui);font-weight:400;
  font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;padding:18px 30px;cursor:pointer;transition:background .3s;}
.newsletter button:hover{background:var(--accent);}

/* ---------- Footer ---------- */
.footer{position:relative;padding-block:clamp(56px,7vw,90px) 30px;overflow:hidden;
  background:linear-gradient(180deg, var(--dark) 0%, var(--dark-2) 100%);}
.footer__top{display:grid;grid-template-columns:1.5fr 1fr 1fr 1.3fr;gap:clamp(28px,3vw,60px);position:relative;z-index:1;}
.footer__brand .brand{display:block;color:var(--on-dark);margin-bottom:20px;}
.footer__brand .brand .b1{font-size:1.7rem;}
.footer__brand p{color:var(--ink-soft);max-width:32ch;font-size:.96rem;font-weight:300;}
.footer__col h4{font-family:var(--font-ui);font-size:.68rem;font-weight:500;letter-spacing:.24em;text-transform:uppercase;color:var(--accent-2);margin:0 0 22px;}
.footer__col a,.footer__col p{display:block;color:var(--on-dark);font-size:.95rem;margin-bottom:13px;transition:color .2s;opacity:.82;font-weight:300;}
.footer__col a:hover{color:var(--accent-2);opacity:1;}
.footer__social{display:flex;gap:12px;margin-top:18px;}
.footer__social a{width:38px;height:38px;border:1px solid rgba(255,255,255,.2);border-radius:50%;display:grid;place-items:center;color:var(--on-dark);opacity:.8;transition:.3s;margin:0;}
.footer__social a:hover{background:var(--accent-2);border-color:var(--accent-2);color:var(--dark);opacity:1;}
.footer__social svg{width:17px;height:17px;}
.footer__bottom{display:flex;justify-content:center;gap:16px;flex-wrap:wrap;position:relative;z-index:1;
  margin-top:clamp(40px,5vw,68px);padding-top:24px;border-top:1px solid rgba(255,255,255,.12);
  font-family:var(--font-ui);font-size:.72rem;color:var(--ink-soft);letter-spacing:.08em;text-align:center;}

/* image-slot base */
image-slot{border-radius:var(--radius);background:var(--sand);color:var(--accent);}

/* ---------- Interactive: custom cursor ---------- */
.cursor-dot,.cursor-ring{position:fixed;top:0;left:0;border-radius:50%;pointer-events:none;z-index:9999;
  mix-blend-mode:difference;will-change:transform;}
.cursor-dot{width:7px;height:7px;background:#F4F0E6;transform:translate(-50%,-50%);}
.cursor-ring{width:40px;height:40px;border:1px solid rgba(244,240,230,.65);transform:translate(-50%,-50%);
  transition:width .35s var(--ease),height .35s var(--ease),background .35s var(--ease),border-color .35s var(--ease),opacity .3s;}
.cursor-ring.is-hover{width:72px;height:72px;background:rgba(244,240,230,.16);border-color:transparent;}
.cursor-ring.is-media::after{content:"İncele";position:absolute;inset:0;display:grid;place-items:center;
  font-family:var(--font-ui);font-size:.5rem;letter-spacing:.18em;text-transform:uppercase;color:#F4F0E6;}
.cursor-down .cursor-ring{width:30px;height:30px;}
@media (hover:hover){
  body.has-cursor,body.has-cursor a,body.has-cursor button,body.has-cursor .course-item,body.has-cursor image-slot{cursor:none;}
}
.magnetic{will-change:transform;}
.course-item .ci-no,.course-item .ci-name{transition:color .3s, transform .45s var(--ease);}

/* reveal — smooth, premium easing */
[data-reveal]{transition:opacity 1.1s cubic-bezier(.16,1,.3,1), transform 1.1s cubic-bezier(.16,1,.3,1);will-change:opacity,transform;}
html.js [data-reveal]{opacity:0;transform:translateY(34px);}
html.js [data-reveal].in{opacity:1;transform:none;}

/* soft blend at the seams of dark sections so palette shifts feel gradual */
.section--dark,.cta-band,.footer{isolation:isolate;}
.section--dark::before,.cta-band::before{content:"";position:absolute;left:0;right:0;top:0;height:120px;z-index:0;pointer-events:none;
  background:linear-gradient(180deg, color-mix(in oklab,var(--cream) 42%, transparent), transparent);}
.section--dark::after,.cta-band::after{content:"";position:absolute;left:0;right:0;bottom:0;height:120px;z-index:0;pointer-events:none;
  background:linear-gradient(0deg, color-mix(in oklab,var(--cream) 32%, transparent), transparent);}
.section--dark > .wrap,.cta-band > *{position:relative;z-index:1;}

/* ============================================================
   RESPONSIVE
   ============================================================ */
@media (max-width:1080px){
  .footer__top{grid-template-columns:1fr 1fr;}
  .footer__brand{grid-column:1 / -1;}
  .courses{grid-template-columns:1fr 1fr;}
  .courses__media{grid-column:1 / -1;order:3;min-height:380px;}
}
@media (max-width:1024px){
  .nav__links{display:none;}
  .nav__cta .btn--ghost,.nav__cta .btn{display:none;}
  .nav__burger{display:flex;}
}
@media (max-width:920px){
  .hero-a{grid-template-columns:1fr;gap:36px;padding-top:130px;}
  .hero-a__media{order:-1;max-width:560px;}
  .hero-b__wordmark{display:none;}
  .features{grid-template-columns:1fr 1fr;}
  .feature{border-bottom:1px solid var(--line);}
  .feature:nth-child(even){border-right:none;}
  .courses{grid-template-columns:1fr;}
  .courses__intro{order:1;}
  .courses__media{order:2;min-height:360px;}
  .courses__list{order:3;}
  .instructor{grid-template-columns:1fr;gap:28px;}
  .instructor__media{max-width:520px;height:clamp(440px,82vw,580px);}
  .instructor__media::before,.instructor__media::after{display:none;}
  .gallery{grid-template-columns:repeat(2,1fr);}
  .quotes{grid-template-columns:1fr;border-top:none;}
  .quote{border-right:none;border-top:1px solid var(--line);padding:26px 0;}
  .pricing{grid-template-columns:1fr;}
  .plan{border-right:none;border-bottom:1px solid var(--line);}
  .plan:last-child{border-bottom:none;}
  .faq-grid{grid-template-columns:1fr;}
  .booking{grid-template-columns:1fr;}
  .booking__right{border-left:none;border-top:1px solid var(--line);padding-left:0;padding-top:28px;}
  .newsletter-strip__inner{grid-template-columns:1fr;}
  .sec-head{grid-template-columns:1fr;}
  .sec-head .btn{justify-self:start;}
}
@media (max-width:600px){
  .features{grid-template-columns:1fr;}
  .feature{border-right:none;}
  .instructor__creds{grid-template-columns:1fr;}
  .cta-band{text-align:left;}
  .cta-band .kicker,.cta-band h2,.cta-band p{margin-inline:0;}
  .cta-band__row{justify-content:flex-start;}
  .footer__top{grid-template-columns:1fr;}
  .newsletter{min-width:0;width:100%;}
  .hero-b__cta{flex-direction:column;align-items:stretch;}
  .hero-b__cta .btn{justify-content:center;}
}
@media (max-width:380px){
  .hero-a__stats{grid-template-columns:1fr;}
  .gallery{grid-template-columns:1fr;}
}

/* sec-head shared */
.sec-head{display:grid;grid-template-columns:1fr auto;gap:24px;align-items:end;margin-bottom:clamp(40px,5vw,68px);}
.sec-head__intro{max-width:42ch;}
.sec-head .lead{margin-top:20px;}
.sec-head .section-title{margin-top:22px !important;}
