<!DOCTYPE html>
<html lang="tr" data-variant="b">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Pilates Arte — Butik Pilates Stüdyosu</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
<script>document.documentElement.classList.add('js');</script>
</head>
<body>

<!-- ============ NAV ============ -->
<header class="nav" id="nav">
  <div class="nav__inner">
    <a href="#top" class="brand"><span class="b1">Pilates Arte</span><span class="b2">Health Studio</span></a>
    <nav class="nav__links">
      <a href="#top">Ana Sayfa</a>
      <a href="#egitmenler">Hakkımızda</a>
      <a href="#dersler">Dersler</a>
      <a href="#egitmenler">Eğitmenler</a>
      <a href="#galeri">Stüdyo</a>
      <a href="#sss">İletişim</a>
    </nav>
    <div class="nav__cta">
      <a href="#rezervasyon" class="btn">Ders Rezervasyonu</a>
      <button class="nav__burger" id="burger" aria-label="Menü">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>
<nav class="mobile-menu" id="mobileMenu">
  <a href="#top">Ana Sayfa</a>
  <a href="#dersler">Dersler</a>
  <a href="#egitmenler">Eğitmenler</a>
  <a href="#galeri">Stüdyo</a>
  <a href="#uyelik">Üyelik</a>
  <a href="#sss">İletişim</a>
  <a href="#rezervasyon" class="btn">Ders Rezervasyonu <span class="arr">→</span></a>
</nav>

<main id="top">

  <!-- ============ HERO A — split (secondary) ============ -->
  <section class="hero hero--a">
    <div class="wrap hero-a">
      <div class="hero-a__text">
        <div class="eyebrow-row"><span class="kicker">Butik Pilates Stüdyosu · İstanbul</span></div>
        <h1 class="display hero-a__title" data-reveal>SİZE ÖZEL<br><em>PİLATES</em><br>YOLCULUĞU..</h1>
        <p class="lead hero-a__lead" data-reveal>Güç, Denge ve Zarafet Bir Arada.</p>
        <div class="hero-a__cta" data-reveal>
          <a href="#dersler" class="btn">Dersleri keşfet <span class="arr">→</span></a>
          <a href="#rezervasyon" class="btn btn--ghost">Ders rezervasyonu</a>
        </div>
        <div class="hero-a__stats" data-reveal>
          <div><div class="num">1.200+</div><div class="lbl">Üye</div></div>
          <div><div class="num">5</div><div class="lbl">Ders türü</div></div>
          <div><div class="num">4.9</div><div class="lbl">Puan</div></div>
        </div>
      </div>
      <div class="hero-a__media" data-reveal>
        <image-slot id="hero-a" src="https://images.unsplash.com/photo-1591258370814-01609b341790?auto=format&amp;fit=crop&amp;w=1100&amp;q=80" placeholder="Hero görseli"></image-slot>
        <div class="hero-a__badge">Est.<br>2019</div>
      </div>
    </div>
  </section>

  <!-- ============ HERO B — full-bleed (reference) ============ -->
  <section class="hero hero--b">
    <div class="hero-b__stage">
      <image-slot id="hero-b" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&amp;fit=crop&amp;w=1700&amp;q=80" placeholder="Stüdyo görseli"></image-slot>
      <div class="hero-b__scrim"></div>
      <div class="hero-b__wordmark" aria-hidden="true"><span class="w1">Pilates</span><span class="w2">Arte</span></div>
      <div class="hero-b__content">
        <h1 class="hero-b__title" data-reveal>SİZE ÖZEL<br><span class="serif">PİLATES</span><br>YOLCULUĞU..</h1>
        <p class="hero-b__lead" data-reveal>Güç, Denge ve Zarafet Bir Arada.</p>
        <div class="hero-b__cta" data-reveal>
          <a href="#dersler" class="btn">Dersleri keşfet <span class="arr">→</span></a>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ FEATURES ============ -->
  <section class="section--beige" aria-label="Öne çıkanlar">
    <div class="features">
      <div class="feature" data-reveal>
        <div class="feature__icon"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="11" r="4"></circle><path d="M24 16v9m0 0l-8 9m8-9l8 9m-16-13h16"></path></svg></div>
        <h3>Kişiye Özel Yaklaşım</h3>
        <p>Her beden farklıdır. Size özel programlarla en iyi sonucu alırsınız.</p>
      </div>
      <div class="feature" data-reveal>
        <div class="feature__icon"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"><path d="M24 34c0-7 4-12 4-18 0 0-4 2-4 7-0-5-4-7-4-7 0 6 4 11 4 18z"></path><path d="M24 34c-4-4-11-5-15-3 2 5 9 7 15 3zm0 0c4-4 11-5 15-3-2 5-9 7-15 3z"></path></svg></div>
        <h3>Zihin &amp; Beden Dengesi</h3>
        <p>Pilates ile bedeninizi güçlendirirken zihninizi de sakinleştirir, dengeyi yakalarsınız.</p>
      </div>
      <div class="feature" data-reveal>
        <div class="feature__icon"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="20" width="32" height="9" rx="2"></rect><path d="M12 29v6m24-6v6M8 24H4m40 0h-4"></path><circle cx="16" cy="24.5" r="1.4"></circle></svg></div>
        <h3>Premium Ekipman</h3>
        <p>En yeni nesil reformer ekipmanlarımızla güvenli ve etkili antrenman deneyimi.</p>
      </div>
      <div class="feature" data-reveal>
        <div class="feature__icon"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"><path d="M24 38c0-12 6-22 14-26-1 13-6 22-14 24z"></path><path d="M24 38c0-9-4-16-10-19 1 10 4 16 10 17z"></path><path d="M24 38v4"></path></svg></div>
        <h3>Huzurlu &amp; Estetik Alan</h3>
        <p>Minimal, ferah ve ilham verici stüdyomuzda kendinizi özel hissedin.</p>
      </div>
    </div>
  </section>

  <!-- ============ DERSLER ============ -->
  <section class="section--cream" id="dersler">
    <div class="courses">
      <div class="courses__intro" data-reveal>
        <span class="kicker">Derslerimiz</span>
        <h2>Güç, esneklik<br>ve denge</h2>
        <p>Her seviyeye uygun pilates derslerimizle bedenini keşfet, sınırlarını aş.</p>
        <a href="#rezervasyon" class="btn btn--ghost">Tüm dersler</a>
      </div>
      <div class="courses__media">
        <image-slot id="course-img" src="https://images.unsplash.com/photo-1518459031867-a89b944bffe4?auto=format&amp;fit=crop&amp;w=900&amp;q=80" placeholder="Ders görseli"></image-slot>
      </div>
      <div class="courses__list" id="coursesList">
        <div class="course-item is-active" data-img="https://images.unsplash.com/photo-1518459031867-a89b944bffe4?auto=format&amp;fit=crop&amp;w=900&amp;q=80">
          <span class="ci-no">01</span><span class="ci-name">Reformer Pilates</span><span class="ci-line"></span>
        </div>
        <div class="course-item" data-img="https://images.unsplash.com/photo-1591258370814-01609b341790?auto=format&amp;fit=crop&amp;w=900&amp;q=80">
          <span class="ci-no">02</span><span class="ci-name">Mat Pilates</span><span class="ci-line"></span>
        </div>
        <div class="course-item" data-img="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&amp;fit=crop&amp;w=900&amp;q=80">
          <span class="ci-no">03</span><span class="ci-name">Cadillac</span><span class="ci-line"></span>
        </div>
        <div class="course-item" data-img="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&amp;fit=crop&amp;w=900&amp;q=80">
          <span class="ci-no">04</span><span class="ci-name">Klinik Pilates</span><span class="ci-line"></span>
        </div>
        <div class="course-item" data-img="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&amp;fit=crop&amp;w=900&amp;q=80">
          <span class="ci-no">05</span><span class="ci-name">Hamile Pilatesi</span><span class="ci-line"></span>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ STÜDYO ============ -->
  <section class="section" id="galeri">
    <div class="wrap">
      <div class="studio" data-reveal>
        <image-slot id="studio" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&amp;fit=crop&amp;w=1900&amp;q=80" placeholder="Stüdyo görseli"></image-slot>
        <div class="studio__scrim"></div>
        <div class="studio__text">
          <span class="kicker">Stüdyo</span>
          <h2 class="section-title" style="width: 450px">ŞEHRİN İÇİNDE KENDİNİZE AİT BİR ALAN.</h2>
          <p class="lead">Doğal ışık, sıcak tonlar ve özenle seçilmiş ekipman. Şehrin ortasında, sadece sana ayrılmış sakin bir sığınak.</p>
          <a href="#rezervasyon" class="btn">Stüdyoyu ziyaret et <span class="arr">→</span></a>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ EĞİTMEN ============ -->
  <section class="section section--cream" id="egitmenler">
    <div class="wrap">
      <div class="instructor" data-reveal>
        <div class="instructor__media">
          <image-slot id="t-1" src="uploads/pasted-1781536962047-0.png" placeholder="Eğitmen portresi"></image-slot>
          <div class="instructor__scrim"></div>
          <div class="instructor__overlay">
            <span class="kicker">Eğitmen</span>
            <h2 class="section-title">Tek <span class="serif">uzman</span>, tam ilgi</h2>
          </div>
          <div class="tag">
            <div>Kurucu<small>Hareket Uzmanı</small></div>
            <span class="chat" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.5L3 21l1.9-5.7A8.4 8.4 0 1 1 21 11.5z"></path></svg></span>
          </div>
        </div>
        <div class="instructor__text">
          <div class="instructor__role">Kişisel Eğitmeniniz</div>
          <div class="instructor__name">Ahmet Kırımlı</div>
          <p class="lead instructor__lead">Cimnastik, dans ve yüzme geçmişiyle hareketin anatomisine hâkim. Her bedene özel, güvenli ve dönüştürücü bir pilates deneyimi sunar.</p>
          <ul class="instructor__creds">
            <li>Marmara Ü. Spor Akademisi</li>
            <li>Nişantaşı Ü. Fizyoterapi</li>
            <li>BBU-TCF Sertifikalı</li>
            <li>Hareket Uzmanı</li>
            <li>Cimnastik · Dans · Yüzme</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ YORUMLAR ============ -->
  <section class="section section--dark" id="yorumlar">
    <div class="wrap">
      <div data-reveal>
        <span class="kicker">Üyelerimiz</span>
        <blockquote class="quote-feature" style="margin-top:26px">Üç ayda duruşum değişti. Burası bir salon değil; <span class="accent">bedenimle barıştığım</span> yer.</blockquote>
      </div>
      <div class="quotes">
        <div class="quote" data-reveal>
          <div class="stars">★★★★★</div>
          <p>Sırt ağrılarım bitti, her hareket tek tek düzeltiliyor.</p>
          <div class="who"><image-slot id="q-1" shape="circle" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=160&amp;q=80" placeholder=""></image-slot><div><b>Elif K.</b><span>2 yıllık üye</span></div></div>
        </div>
        <div class="quote" data-reveal>
          <div class="stars">★★★★★</div>
          <p>Küçük gruplar özel ders gibi. Atmosfer çok huzurlu.</p>
          <div class="who"><image-slot id="q-2" shape="circle" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=160&amp;q=80" placeholder=""></image-slot><div><b>Burak T.</b><span>1 yıllık üye</span></div></div>
        </div>
        <div class="quote" data-reveal>
          <div class="stars">★★★★★</div>
          <p>Reformer bağımlısı oldum. Hem keyif hem güç.</p>
          <div class="who"><image-slot id="q-3" shape="circle" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;w=160&amp;q=80" placeholder=""></image-slot><div><b>Selin A.</b><span>8 aylık üye</span></div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ ÜYELİK ============ -->
  <section class="section" id="uyelik">
    <div class="wrap">
      <div class="sec-head" data-reveal>
        <div class="sec-head__intro">
          <span class="kicker">Üyelik</span>
          <h2 class="section-title">Sana uyan <span class="serif">ritmi</span> seç</h2>
        </div>
        <p class="lead" style="max-width:30ch">Taahhüt yok, gizli ücret yok. İstediğin zaman dondur ya da iptal et.</p>
      </div>
      <div class="pricing">
        <article class="plan" data-reveal>
          <span class="plan__tag">Başlangıç</span>
          <div class="plan__name">Deneme Paketi</div>
          <div class="plan__price"><span class="cur">₺</span>950<span class="per">/ 4 ders</span></div>
          <p class="plan__desc">Tanışmak için ideal başlangıç.</p>
          <ul class="plan__list">
            <li>4 grup dersi</li>
            <li>Tüm ders türlerine erişim</li>
            <li>30 günlük geçerlilik</li>
          </ul>
          <a href="#rezervasyon" class="btn btn--ghost">Başla</a>
        </article>
        <article class="plan plan--featured" data-reveal>
          <span class="plan__tag">En popüler</span>
          <div class="plan__name">Aylık Sınırsız</div>
          <div class="plan__price"><span class="cur">₺</span>3.400<span class="per">/ ay</span></div>
          <p class="plan__desc">Düzenli pratik için sınırsız erişim.</p>
          <ul class="plan__list">
            <li>Sınırsız grup dersi</li>
            <li>Öncelikli rezervasyon</li>
            <li>Aylık 1 özel seans</li>
            <li>Misafir davet hakkı</li>
          </ul>
          <a href="#rezervasyon" class="btn">Üye ol <span class="arr">→</span></a>
        </article>
        <article class="plan" data-reveal>
          <span class="plan__tag">Birebir</span>
          <div class="plan__name">Özel Ders</div>
          <div class="plan__price"><span class="cur">₺</span>1.450<span class="per">/ seans</span></div>
          <p class="plan__desc">Sana özel program, birebir ilgi.</p>
          <ul class="plan__list">
            <li>60 dk birebir seans</li>
            <li>Kişiye özel program</li>
            <li>Esnek randevu saatleri</li>
          </ul>
          <a href="#rezervasyon" class="btn btn--ghost">İletişime geç</a>
        </article>
      </div>
    </div>
  </section>

  <!-- ============ REZERVASYON ============ -->
  <section class="section section--cream booking-sec" id="rezervasyon">
    <div class="wrap">
      <div class="sec-head" data-reveal>
        <div class="sec-head__intro">
          <span class="kicker">Rezervasyon</span>
          <h2 class="section-title">Yerini <span class="serif">ayır</span></h2>
        </div>
        <p class="lead" style="max-width:28ch">Günü ve saati seç. Dolu seanslar kapalıdır.</p>
      </div>
      <div class="booking" data-reveal>
        <div class="booking__left">
          <div class="booking__types" id="bkTypes">
            <button type="button" data-type="Mat">Mat</button>
            <button type="button" data-type="Reformer" class="is-active">Reformer</button>
            <button type="button" data-type="Barre">Barre</button>
          </div>
          <div class="cal">
            <div class="cal__head">
              <button type="button" id="bkPrev" aria-label="Önceki ay">‹</button>
              <div class="cal__month" id="bkMonth"></div>
              <button type="button" id="bkNext" aria-label="Sonraki ay">›</button>
            </div>
            <div class="cal__dow"><span>Pt</span><span>Sa</span><span>Ça</span><span>Pe</span><span>Cu</span><span>Ct</span><span>Pz</span></div>
            <div class="cal__grid" id="bkGrid"></div>
            <div class="cal__legend">
              <span><i style="background:var(--accent)"></i>Seçili</span>
              <span><i style="background:#B6553F"></i>Dolu</span>
              <span><i style="box-shadow:inset 0 0 0 1.5px var(--accent)"></i>Bugün</span>
            </div>
          </div>
        </div>
        <div class="booking__right">
          <div class="booking__date" id="bkDateLabel">Bir gün seç</div>
          <div class="booking__slots" id="bkSlots"></div>
          <div class="booking__summary" id="bkSummary"></div>
          <button type="button" class="btn booking__confirm" id="bkConfirm" disabled>Randevuyu onayla <span class="arr">→</span></button>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ CTA ============ -->
  <section class="section" id="cta">
    <div class="wrap">
      <div class="cta-band" data-reveal>
        <span class="kicker">Hadi başlayalım</span>
        <h2>Güçlü ve sağlıklı <span class="muted">halinle</span> <span class="serif">tanış</span></h2>
        <p>İlk reformer ya da mat dersin tamamen ücretsiz.</p>
        <div class="cta-band__row">
          <a href="#rezervasyon" class="btn">Dönüşüme başla <span class="arr">→</span></a>
          <a href="https://wa.me/905546776851" class="btn btn--light">WhatsApp'tan yaz</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ SSS ============ -->
  <section class="section faq-sec" id="sss">
    <div class="wrap">
      <div class="faq-grid">
        <div data-reveal>
          <span class="kicker">SSS</span>
          <h2 class="section-title">Aklındaki <span class="serif">sorular</span></h2>
          <p class="lead" style="margin-top:18px">Başka bir şey mi var? <a href="#rezervasyon" style="color:var(--accent);font-weight:500">Bize yaz →</a></p>
        </div>
        <div class="faq-list" data-reveal>
          <details class="faq" open>
            <summary>Pilates'e hiç başlamadım, uygun mu? <span class="ic"></span></summary>
            <div class="faq__body">Kesinlikle. Tüm seviyelere uygun mat ve reformer derslerimiz var; eğitmenimiz her hareketi sana göre uyarlar. Başlangıç için ideal olan Deneme Paketi'yle nazikçe başlayabilirsin.</div>
          </details>
          <details class="faq">
            <summary>Reformer ve mat arasındaki fark ne? <span class="ic"></span></summary>
            <div class="faq__body">Mat, yer minderinde kendi vücut ağırlığınla çalışır; reformer ise yaylı bir makineyle direnç ekleyerek kasları farklı açılardan çalıştırır. İkisi birbirini güzel tamamlar.</div>
          </details>
          <details class="faq">
            <summary>Ne giymeliyim, ekipman gerekli mi? <span class="ic"></span></summary>
            <div class="faq__body">Rahat hareket edebileceğin spor kıyafeti ve kaymaz çorap yeterli. Mat ve tüm ekipman stüdyoda mevcut; sadece kendini getirmen yeterli.</div>
          </details>
          <details class="faq">
            <summary>Üyeliğimi dondurabilir miyim? <span class="ic"></span></summary>
            <div class="faq__body">Evet. Aylık üyelikler taahhütsüzdür; tatil veya yoğun dönemlerde üyeliğini istediğin zaman dondurabilir ya da iptal edebilirsin.</div>
          </details>
          <details class="faq">
            <summary>Rezervasyon nasıl yapılır? <span class="ic"></span></summary>
            <div class="faq__body">Online program üzerinden saniyeler içinde yer ayırtabilirsin. Sınırsız üyeler öncelikli rezervasyon hakkına sahiptir.</div>
          </details>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ NEWSLETTER STRIP ============ -->
  <section class="newsletter-strip">
    <div class="wrap newsletter-strip__inner">
      <div data-reveal>
        <h3>Yeniliklerden haberdar ol</h3>
        <p>Özel kampanyalar ve stüdyo haberleri için bültenimize abone olun.</p>
      </div>
      <form class="newsletter" data-reveal onsubmit="return false;">
        <input type="email" placeholder="E-posta adresiniz" aria-label="E-posta adresi">
        <button type="submit">Abone Ol</button>
      </form>
    </div>
  </section>
</main>

<!-- ============ FOOTER ============ -->
<footer class="footer">
  <div class="wrap">
    <div class="footer__top">
      <div class="footer__brand">
        <a href="#top" class="brand"><span class="b1">Pilates Arte</span><span class="b2">Health Studio</span></a>
        <p>Arte Pilates, bedenini ve zihnini dengelemek isteyen herkes için özel bir pilates deneyimi sunar.</p>
      </div>
      <div class="footer__col">
        <h4>Kurumsal</h4>
        <a href="#egitmenler">Hakkımızda</a>
        <a href="#galeri">Stüdyo</a>
        <a href="#egitmenler">Eğitmenler</a>
        <a href="#sss">İletişim</a>
      </div>
      <div class="footer__col">
        <h4>Dersler</h4>
        <a href="#dersler">Reformer Pilates</a>
        <a href="#dersler">Mat Pilates</a>
        <a href="#dersler">Cadillac</a>
        <a href="#dersler">Klinik Pilates</a>
        <a href="#dersler">Hamile Pilatesi</a>
      </div>
      <div class="footer__col">
        <h4>İletişim</h4>
        <a href="tel:+905546776851">+90 554 677 68 51</a>
        <a href="mailto:info@artestudio.com">info@artestudio.com</a>
        <p>Rumeli Hisarı, Bağdat Caddesi<br>Sarıyer / İstanbul</p>
        <div class="footer__social">
          <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"></circle></svg></a>
          <a href="https://wa.me/905546776851" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.5L3 21l1.9-5.7A8.4 8.4 0 1 1 21 11.5z"></path></svg></a>
          <a href="#" aria-label="Konum"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></a>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© 2026 Arte Pilates Health Studio. Tüm hakları saklıdır.</span>
    </div>
  </div>
</footer>

<!-- Tweaks mount -->
<div id="tweaks-root"></div>

<script src="image-slot.js"></script>
<script src="booking.js"></script>
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>
<script type="text/babel" src="tweaks-panel.jsx"></script>
<script type="text/babel" src="app.jsx"></script>

<!-- vanilla interactions -->
<script>
(function(){
  var nav = document.getElementById('nav');
  var onScroll = function(){ nav.classList.toggle('is-fixed', window.scrollY > 80); };
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

  // mobile menu
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobileMenu');
  burger.addEventListener('click', function(){ nav.classList.toggle('open'); });
  menu.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ nav.classList.remove('open'); }); });

  // courses — click number to swap featured image
  var list = document.getElementById('coursesList');
  var courseImg = document.getElementById('course-img');
  if(list && courseImg){
    list.querySelectorAll('.course-item').forEach(function(item){
      item.addEventListener('click', function(){
        list.querySelectorAll('.course-item').forEach(function(i){ i.classList.remove('is-active'); });
        item.classList.add('is-active');
        var img = item.getAttribute('data-img');
        if(img){ courseImg.style.opacity = '0'; setTimeout(function(){ courseImg.setAttribute('src', img); courseImg.style.opacity = '1'; }, 220); }
      });
    });
  }

  // scroll reveal — rect-based, with guaranteed fallback so nothing
  // can stay invisible if a check is missed (fixes blank content on deploy).
  var reveals = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  function revealCheck(){
    var vh = window.innerHeight || document.documentElement.clientHeight;
    for(var i=reveals.length-1; i>=0; i--){
      var el = reveals[i];
      var r = el.getBoundingClientRect();
      if(r.top < vh * 0.94 && r.bottom > -40){ el.classList.add('in'); reveals.splice(i,1); }
    }
  }
  function revealAll(){
    // hard-show everything still hidden, with transitions disabled so visibility
    // can never get stuck (some embedded/non-compositing contexts freeze CSS
    // transitions at their start value). Transition is restored right after so
    // hover effects keep working; opacity is pinned via inline !important.
    var els = document.querySelectorAll('[data-reveal]');
    els.forEach(function(el){
      el.style.transition = 'none';
      el.classList.add('in');
      el.style.setProperty('opacity','1','important');
      el.style.transform = 'none';
    });
    void document.body.offsetWidth;
    els.forEach(function(el){ el.style.transition = ''; });
    reveals.length = 0;
  }
  revealCheck();
  requestAnimationFrame(revealCheck);
  window.addEventListener('scroll', revealCheck, {passive:true});
  window.addEventListener('resize', revealCheck);
  window.addEventListener('load', revealCheck);
  setTimeout(revealCheck, 250);
  setTimeout(revealAll, 1600);
})();
</script>
<script src="interactions.js"></script>
</body>
</html>
