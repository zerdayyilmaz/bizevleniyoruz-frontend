import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import rings from "./assets/rings.png";

const withBase = (path) => {
    const base = import.meta.env.BASE_URL;
    if (path === "/") {
        return base;
    }
    if (path.startsWith("/#")) {
        return `${base}${path.slice(1)}`;
    }
    if (path.startsWith("#")) {
        return `${base}${path}`;
    }
    return `${base}${path.replace(/^\//, "")}`;
};

const handleMenuToggle = (event) => {
    if (window.innerWidth <= 960) {
        window.location.href = withBase("/menu");
        return;
    }
    const isOpen = document.body.classList.toggle("menu-open");
    event.currentTarget.setAttribute("aria-expanded", String(isOpen));
};

const setMetaDescription = (value) => {
    if (!value) {
        return;
    }
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
    }
    meta.setAttribute("content", value);
};

function PricingSection({ includeId }) {
    return (
        <section className="pricing-section" id={includeId ? "pricing" : undefined}>
            <span className="pricing-eyebrow">DAVETİYENİ ÖZELLEŞTİR</span>
            <h2>Paketini seç</h2>
            <p>Tum paketlerde zarif zarf animasyonu dahildir.</p>
            <div className="pricing-badges">
                <span>Hayalindeki davetiyeye bir adim kaldın</span>
                <span>4.9/5 · 105 yorum</span>
                <span>Yoğun dönem: teslim 3-4 hafta</span>
                <a href="#">SSS'yi gor</a>
            </div>
            <div className="pricing-cards">
                <article className="pricing-card is-featured">
                    <span className="pricing-tag">Ciftlerin favorisi</span>
                    <div className="pricing-head">
                        <h3>Premium</h3>
                        <div className="pricing-price">
                            <span className="old-price">325₺</span>
                            <span className="new-price">175₺</span>
                        </div>
                    </div>
                    <p>Baslangic icin ideal, ihtiyaca gore gelistirilebilir.</p>
                    <ul>
                        <li>4 bilgi blogu dahil</li>
                        <li>Secilen arka plan gorseli</li>
                        <li>Gelistirilmis RSVP paneli</li>
                        <li>Zarf animasyonu</li>
                    </ul>
                    <button type="button">Paketini Seç</button>
                </article>
                <article className="pricing-card">
                    <div className="pricing-head">
                        <h3>Exclusive</h3>
                        <div className="pricing-price">
                            <span className="new-price">575₺</span>
                        </div>
                    </div>
                    <p>Ust duzey detaylar ve sinirsiz ozellestirme.</p>
                    <ul>
                        <li>Sinirsiz blok</li>
                        <li>%100 ozgun tasarim</li>
                        <li>Tum ekstralar dahil</li>
                        <li>Hizli teslim 48-72 saat</li>
                    </ul>
                    <button type="button" className="ghost">Paketi sec</button>
                </article>
            </div>
        </section>
    );
}

function SiteFooter({ className = "" }) {
    return (
        <footer className={`site-footer ${className}`.trim()} id="footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <span className="footer-logo">
                        <img src={logo} alt="" aria-hidden="true" />
                        BizEvleniyoruz
                    </span>
                    <span className="footer-tagline">Dijital Dugun Davetiyeleri</span>
                </div>
                <div className="footer-socials">
                    <a href="#">Instagram</a>
                    <a href="#">Tiktok</a>
                </div>
            </div>
            <div className="footer-links">
                <a href="#">Gizlilik Politikasi</a>
                <a href="#">Cerez Politikasi</a>
                <a href="#">Kullanim Sartlari</a>
                <a href="#">Iade Politikasi</a>
            </div>
            <div className="footer-contact">
                <span>Bir sorun mu var? Bize yazin</span>
                <a className="footer-email" href="mailto:info@bizevleniyoruz.com">info@bizevleniyoruz.com</a>
            </div>
            <div className="footer-bottom">© 2026 BizEvleniyoruz. Tum haklari saklidir.</div>
        </footer>
    );
}

function NasilCalisirPage() {
    return (
        <div className="page page-static">
            <header className="topbar">
                <div className="topbar-inner">
                    <a className="logo" href={withBase("/")} aria-label="BizEvleniyoruz ana sayfa">
                        <img src={logo} alt="BizEvleniyoruz" />
                        <span className="logo-text" aria-hidden="true">
                            {"BizEvleniyoruz".split("").map((char, index) => (
                                <span key={`${char}-${index}`} className="logo-letter">
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </span>
                    </a>

                    <button
                        className="menu-toggle"
                        type="button"
                        aria-label="Menüyü aç/kapat"
                        aria-expanded="false"
                        onClick={handleMenuToggle}
                    >
                        <span className="menu-toggle-bar"></span>
                        <span className="menu-toggle-bar"></span>
                        <span className="menu-toggle-bar"></span>
                    </button>

                    <nav className="menu">
                        <a className="menu-home" href={withBase("/")}>Ana Sayfa</a>
                        <a href={withBase("/nasil-calisir")} aria-current="page">Nasıl Çalışır</a>
                        <a href={withBase("/#design-showcase")}>Tasarımlar</a>
                        <a href={withBase("/fiyatlar")}>Fiyatlar</a>
                        <a href={withBase("/iletisim")}>İletişim</a>
                        <a className="menu-auth" href={withBase("/girisyap")}>Giriş Yap</a>
                    </nav>
                    <div className="auth">
                        <button className="auth-btn ghost" type="button" onClick={() => { window.location.href = withBase("/girisyap"); }}>
                            Giriş Yap
                        </button>
                    </div>
                </div>
            </header>

            <main className="info-page">
                <h1 className="sr-only">Nasıl Çalışır</h1>
                <section className="how-it-works">
                    <h2>Nasıl Çalışır</h2>
                    <div className="how-steps">
                        <div className="how-step">
                            <div className="how-icon">
                                <svg className="how-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 3a9 9 0 0 0 0 18c1.7 0 3-1.3 3-3 0-1.2-1-2.2-2.2-2.2h-1.5c-.9 0-1.3-.6-1.3-1.3 0-.8.6-1.5 1.5-1.5h1.5c2.8 0 5-2.2 5-5A5.9 5.9 0 0 0 12 3z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
                                    <circle cx="7.5" cy="10.5" r="1" fill="currentColor"/>
                                    <circle cx="9.5" cy="7.5" r="1" fill="currentColor"/>
                                    <circle cx="12.5" cy="6.5" r="1" fill="currentColor"/>
                                    <circle cx="6.5" cy="13.5" r="1" fill="currentColor"/>
                                </svg>
                            </div>
                            <h3>Tarzını seç</h3>
                            <p>Düğün estetiğine uyan tasarımı seç.</p>
                        </div>
                        <div className="how-step">
                            <div className="how-icon">
                                <svg className="how-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M7 4h7l4 4v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
                                    <path d="M14 4v5h5" fill="none" stroke="currentColor" strokeWidth="1.6"/>
                                    <path d="M9 12h6M9 15h6" fill="none" stroke="currentColor" strokeWidth="1.6"/>
                                </svg>
                            </div>
                            <h3>Detayları bize gönder</h3>
                            <p>Tarih, mekan, program ve önemli bilgiler.</p>
                        </div>
                        <div className="how-step">
                            <div className="how-icon">
                                <svg className="how-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M9.5 14.5l-1.5 1.5a3 3 0 0 1-4.2-4.2l2.5-2.5a3 3 0 0 1 4.2 0" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                                    <path d="M14.5 9.5l1.5-1.5a3 3 0 1 1 4.2 4.2l-2.5 2.5a3 3 0 0 1-4.2 0" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                                    <path d="M8.5 15.5l7-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <h3>Linkini al</h3>
                            <p>Dijital davetiyen hazır, paylaşmaya başla.</p>
                        </div>
                        <div className="how-step">
                            <div className="how-icon">
                                <svg className="how-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M6 8h12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                                    <path d="M6 12h12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                                    <path d="M6 16h12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                                    <circle cx="18" cy="7" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.6"/>
                                </svg>
                            </div>
                            <h3>Takip et ve güncelle</h3>
                            <p>Katılımları izle, bilgileri anında güncelle.</p>
                        </div>
                    </div>
                </section>
                <SiteFooter className="page-footer" />
            </main>
        </div>
    );
}

function PricingPage() {
    return (
        <div className="page page-static">
            <header className="topbar">
                <div className="topbar-inner">
                    <a className="logo" href={withBase("/")} aria-label="BizEvleniyoruz ana sayfa">
                        <img src={logo} alt="BizEvleniyoruz" />
                        <span className="logo-text" aria-hidden="true">
                            {"BizEvleniyoruz".split("").map((char, index) => (
                                <span key={`${char}-${index}`} className="logo-letter">
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </span>
                    </a>

                    <button
                        className="menu-toggle"
                        type="button"
                        aria-label="Menüyü aç/kapat"
                        aria-expanded="false"
                        onClick={handleMenuToggle}
                    >
                        <span className="menu-toggle-bar"></span>
                        <span className="menu-toggle-bar"></span>
                        <span className="menu-toggle-bar"></span>
                    </button>

                    <nav className="menu">
                        <a className="menu-home" href={withBase("/")}>Ana Sayfa</a>
                        <a href={withBase("/nasil-calisir")}>Nasıl Çalışır</a>
                        <a href={withBase("/#design-showcase")}>Tasarımlar</a>
                        <a href={withBase("/fiyatlar")} aria-current="page">Fiyatlar</a>
                        <a href={withBase("/iletisim")}>İletişim</a>
                        <a className="menu-auth" href={withBase("/girisyap")}>Giriş Yap</a>
                    </nav>
                    <div className="auth">
                        <button className="auth-btn ghost" type="button" onClick={() => { window.location.href = withBase("/girisyap"); }}>
                            Giriş Yap
                        </button>
                    </div>
                </div>
            </header>

            <main className="info-page">
                <h1 className="sr-only">Fiyatlar</h1>
                <PricingSection includeId={false} />
                <SiteFooter className="page-footer" />
            </main>
        </div>
    );
}

function ContactPage() {
    return (
        <div className="page page-static">
            <header className="topbar">
                <div className="topbar-inner">
                    <a className="logo" href={withBase("/")} aria-label="BizEvleniyoruz ana sayfa">
                        <img src={logo} alt="BizEvleniyoruz" />
                        <span className="logo-text" aria-hidden="true">
                            {"BizEvleniyoruz".split("").map((char, index) => (
                                <span key={`${char}-${index}`} className="logo-letter">
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </span>
                    </a>

                    <button
                        className="menu-toggle"
                        type="button"
                        aria-label="Menüyü aç/kapat"
                        aria-expanded="false"
                        onClick={handleMenuToggle}
                    >
                        <span className="menu-toggle-bar"></span>
                        <span className="menu-toggle-bar"></span>
                        <span className="menu-toggle-bar"></span>
                    </button>

                    <nav className="menu">
                        <a className="menu-home" href={withBase("/")}>Ana Sayfa</a>
                        <a href={withBase("/nasil-calisir")}>Nasıl Çalışır</a>
                        <a href={withBase("/#design-showcase")}>Tasarımlar</a>
                        <a href={withBase("/fiyatlar")}>Fiyatlar</a>
                        <a href={withBase("/iletisim")} aria-current="page">İletişim</a>
                        <a className="menu-auth" href={withBase("/girisyap")}>Giriş Yap</a>
                    </nav>
                    <div className="auth">
                        <button className="auth-btn ghost" type="button" onClick={() => { window.location.href = withBase("/girisyap"); }}>
                            Giriş Yap
                        </button>
                    </div>
                </div>
            </header>

            <main className="info-page">
                <h1 className="sr-only">İletişim</h1>
                <section className="contact-page">
                    <h2>İletişim</h2>
                    <p>Merak ettiklerin için bize yaz, en kısa sürede dönüş yapalım.</p>
                    <div className="contact-cards">
                        <div className="contact-card">
                            <span className="contact-label">E-posta</span>
                            <a href="mailto:info@bizevleniyoruz.com">info@bizevleniyoruz.com</a>
                        </div>
                        <div className="contact-card">
                            <span className="contact-label">Sosyal</span>
                            <div className="contact-links">
                                <a href="#">Instagram</a>
                                <a href="#">Tiktok</a>
                            </div>
                        </div>
                    </div>
                    <form className="contact-form">
                        <div className="contact-field">
                            <label htmlFor="contact-name">Ad Soyad</label>
                            <input id="contact-name" name="name" type="text" placeholder="Adınızı yazın" autoComplete="name" />
                        </div>
                        <div className="contact-field">
                            <label htmlFor="contact-email">E-posta</label>
                            <input id="contact-email" name="email" type="email" placeholder="ornek@mail.com" autoComplete="email" />
                        </div>
                        <div className="contact-field">
                            <label htmlFor="contact-topic">Konu</label>
                            <input id="contact-topic" name="topic" type="text" placeholder="Kısaca konu" />
                        </div>
                        <div className="contact-field full">
                            <label htmlFor="contact-message">Mesaj</label>
                            <textarea id="contact-message" name="message" rows="5" placeholder="Mesajınızı yazın"></textarea>
                        </div>
                        <button className="contact-submit" type="button">Gönder</button>
                    </form>
                </section>
                <SiteFooter className="page-footer" />
            </main>
        </div>
    );
}

function ReviewsPage() {
    return (
        <div className="page page-static">
            <header className="topbar">
                <div className="topbar-inner">
                    <a className="logo" href={withBase("/")} aria-label="BizEvleniyoruz ana sayfa">
                        <img src={logo} alt="BizEvleniyoruz" />
                        <span className="logo-text" aria-hidden="true">
                            {"BizEvleniyoruz".split("").map((char, index) => (
                                <span key={`${char}-${index}`} className="logo-letter">
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </span>
                    </a>

                    <button
                        className="menu-toggle"
                        type="button"
                        aria-label="Menüyü aç/kapat"
                        aria-expanded="false"
                        onClick={handleMenuToggle}
                    >
                        <span className="menu-toggle-bar"></span>
                        <span className="menu-toggle-bar"></span>
                        <span className="menu-toggle-bar"></span>
                    </button>

                    <nav className="menu">
                        <a className="menu-home" href={withBase("/")}>Ana Sayfa</a>
                        <a href={withBase("/nasil-calisir")}>Nasıl Çalışır</a>
                        <a href={withBase("/#design-showcase")}>Tasarımlar</a>
                        <a href={withBase("/fiyatlar")}>Fiyatlar</a>
                        <a href={withBase("/iletisim")}>İletişim</a>
                        <a className="menu-auth" href={withBase("/girisyap")}>Giriş Yap</a>
                    </nav>
                    <div className="auth">
                        <button className="auth-btn ghost" type="button" onClick={() => { window.location.href = withBase("/girisyap"); }}>
                            Giriş Yap
                        </button>
                    </div>
                </div>
            </header>

            <main className="info-page">
                <h1 className="sr-only">Yorumlar</h1>
                <section className="reviews-page">
                    <h2>Yorumlar</h2>
                    <p>Yakında burada gerçek çiftlerin yorumlarını göreceksin.</p>
                </section>
                <SiteFooter className="page-footer" />
            </main>
        </div>
    );
}

function LoginPage() {
    return (
        <div className="page page-static">
            <div className="page-back">
                <a className="back-btn" href={withBase("/")}>{"<"} GERİ</a>
            </div>
            <main className="login-page">
                <section className="login-card">
                    <h1>Giriş Yap</h1>
                    <p>Hesabına erişmek için bilgilerini gir.</p>
                    <form className="login-form">
                        <label className="login-field">
                            <span>E-posta</span>
                            <input type="email" name="email" placeholder="ornek@mail.com" autoComplete="email" />
                        </label>
                        <label className="login-field">
                            <span>Şifre</span>
                            <input type="password" name="password" placeholder="••••••••" autoComplete="current-password" />
                        </label>
                        <div className="login-actions">
                            <a className="login-link" href={withBase("/sifremi-unuttum")}>Şifremi unuttum</a>
                            <button className="login-submit" type="button">Giriş Yap</button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
}

function ForgotPasswordPage() {
    return (
        <div className="page page-static">
            <div className="page-back">
                <a className="back-btn" href={withBase("/girisyap")}>{"<"} GERİ</a>
            </div>
            <main className="login-page">
                <section className="login-card">
                    <h1>Şifreyi Sıfırla</h1>
                    <p>E-postanı gir, sana sıfırlama bağlantısı gönderelim.</p>
                    <form className="login-form">
                        <label className="login-field">
                            <span>E-posta</span>
                            <input type="email" name="email" placeholder="ornek@mail.com" autoComplete="email" />
                        </label>
                        <div className="login-actions">
                            <a className="login-link" href={withBase("/girisyap")}>Girişe dön</a>
                            <button className="login-submit" type="button">Bağlantı Gönder</button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
}

function MenuPage() {
    return (
        <div className="page page-static menu-page">
            <div className="page-back">
                <button className="back-btn" type="button" onClick={() => window.history.back()}>
                    {"<"} GERİ
                </button>
            </div>
            <nav className="menu-page-nav">
                <a href={withBase("/")}>Ana Sayfa</a>
                <a href={withBase("/nasil-calisir")}>Nasıl Çalışır</a>
                <a href={withBase("/#design-showcase")}>Tasarımlar</a>
                <a href={withBase("/fiyatlar")}>Fiyatlar</a>
                <a href={withBase("/iletisim")}>İletişim</a>
                <a href={withBase("/girisyap")}>Giriş Yap</a>
            </nav>
        </div>
    );
}

function App() {
    const [openFaq, setOpenFaq] = useState(null);
    const base = import.meta.env.BASE_URL.replace(/\/$/, "");
    const rawPath = window.location.pathname;
    const pathname = base && rawPath.startsWith(base) ? rawPath.slice(base.length) || "/" : rawPath;
    const isNasilCalisir = pathname === "/nasil-calisir";
    const isFiyatlar = pathname === "/fiyatlar";
    const isIletisim = pathname === "/iletisim";
    const isYorumlar = pathname === "/yorumlar";
    const isGirisYap = pathname === "/girisyap";
    const isSifremiUnuttum = pathname === "/sifremi-unuttum";
    const isMenu = pathname === "/menu";

    useEffect(() => {
        const metaMap = {
            "/": {
                title: "BizEvleniyoruz | Dijital Düğün Davetiyesi",
                description:
                    "Dijital düğün davetiyesi ile misafir yönetimi, RSVP ve özel tasarımlar. BizEvleniyoruz ile davetiyeni dakikalar içinde paylaş.",
            },
            "/nasil-calisir": {
                title: "Nasıl Çalışır | BizEvleniyoruz",
                description:
                    "BizEvleniyoruz dijital düğün davetiyesi nasıl hazırlanır? Tasarım seçimi, içerik, teslim ve paylaşım adımlarını keşfedin.",
            },
            "/fiyatlar": {
                title: "Fiyatlar | BizEvleniyoruz",
                description:
                    "Dijital düğün davetiyesi paketleri ve fiyatları. Premium ve Exclusive seçeneklerini karşılaştırın.",
            },
            "/iletisim": {
                title: "İletişim | BizEvleniyoruz",
                description:
                    "BizEvleniyoruz ile iletişime geçin. Sorularınız için e-posta ve form üzerinden bize ulaşın.",
            },
            "/yorumlar": {
                title: "Yorumlar | BizEvleniyoruz",
                description:
                    "BizEvleniyoruz dijital davetiye deneyimini yaşayan çiftlerin yorumları ve geri bildirimleri.",
            },
            "/girisyap": {
                title: "Giriş Yap | BizEvleniyoruz",
                description:
                    "Hesabınıza giriş yaparak davetiye yönetimi ve RSVP takibine erişin.",
            },
            "/sifremi-unuttum": {
                title: "Şifreyi Sıfırla | BizEvleniyoruz",
                description:
                    "BizEvleniyoruz hesabınız için şifre sıfırlama bağlantısı alın.",
            },
            "/menu": {
                title: "Menü | BizEvleniyoruz",
                description:
                    "BizEvleniyoruz menüsü: sayfalara hızlı erişim ve yönlendirmeler.",
            },
        };
        const meta = metaMap[pathname] || metaMap["/"];
        document.title = meta.title;
        setMetaDescription(meta.description);
    }, [pathname]);

    useEffect(() => {
        // Disable parallax on mobile
        if (window.innerWidth < 768) {
            document.documentElement.style.setProperty("--rx", "0px");
            document.documentElement.style.setProperty("--ry", "0px");
            document.body.style.setProperty("--rx", "0px");
            document.body.style.setProperty("--ry", "0px");
            document.body.classList.remove("menu-open");

            if (!isMenu) {
                const targets = document.querySelectorAll(
                    "section, .hero-inner, .hero-phones, .hero-features, .compare-cards, .feature-table, .design-showcase, .dashboard-section, .pricing-section, .difference-section, .faq-section, .cta-section, .site-footer, .contact-cta"
                );
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                entry.target.classList.add("is-visible");
                                observer.unobserve(entry.target);
                            }
                        });
                    },
                    { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
                );

                targets.forEach((node) => {
                    node.classList.add("mobile-reveal");
                    observer.observe(node);
                    const rect = node.getBoundingClientRect();
                    if (rect.top < window.innerHeight * 0.9) {
                        node.classList.add("is-visible");
                    }
                });

                return () => observer.disconnect();
            }
            return;
        }

        if (isNasilCalisir || isFiyatlar || isIletisim || isYorumlar || isGirisYap || isSifremiUnuttum || isMenu) {
            document.body.classList.remove("menu-open");
            return undefined;
        }
        const handleMove = (event) => {
            const { clientX, clientY } = event;
            document.documentElement.style.setProperty("--mx", `${clientX}px`);
            document.documentElement.style.setProperty("--my", `${clientY}px`);
            document.body.style.setProperty("--mx", `${clientX}px`);
            document.body.style.setProperty("--my", `${clientY}px`);
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const offsetX = (clientX - centerX) / 170;
            const offsetY = (clientY - centerY) / 170;
            document.documentElement.style.setProperty("--rx", `${offsetX}px`);
            document.documentElement.style.setProperty("--ry", `${offsetY}px`);
            document.body.style.setProperty("--rx", `${offsetX}px`);
            document.body.style.setProperty("--ry", `${offsetY}px`);
        };

        const handleScroll = () => {
            document.body.classList.toggle("is-scrolled", window.scrollY > 10);
        };

        const pricingSection = document.querySelector("#pricing");
        const observer = pricingSection
            ? new IntersectionObserver(
                ([entry]) => {
                    document.body.classList.toggle("hide-sticky-cta", entry.isIntersecting);
                },
                { threshold: 0, rootMargin: "0px 0px -40% 0px" }
              )
            : null;
        let stickyLightFromDark = false;
        const updateStickyCtaTheme = () => {
            document.body.classList.toggle("light-sticky-cta", stickyLightFromDark);
            document.body.classList.toggle("light-sections", stickyLightFromDark);
        };
        const darkSections = document.querySelectorAll(".design-showcase, .difference-section");
        const stickyObserver = darkSections.length
            ? new IntersectionObserver(
                (entries) => {
                    stickyLightFromDark = entries.some((entry) => entry.isIntersecting);
                    updateStickyCtaTheme();
                },
                { threshold: 0.35 }
              )
            : null;

        window.addEventListener("mousemove", handleMove);
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        if (observer && pricingSection) {
            observer.observe(pricingSection);
        }
        if (stickyObserver) {
            darkSections.forEach((section) => stickyObserver.observe(section));
        }

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("scroll", handleScroll);
            if (observer) {
                observer.disconnect();
            }
            if (stickyObserver) {
                stickyObserver.disconnect();
            }
        };
    }, [isNasilCalisir, isFiyatlar, isIletisim, isYorumlar, isGirisYap, isSifremiUnuttum]);

    const handleCtaClick = () => {
        window.location.href = withBase("/fiyatlar");
    };

    const faqs = [
        {
            q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            q: "Lorem ipsum dolor sit amet?",
            a: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            q: "Lorem ipsum dolor sit amet, consectetur?",
            a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            q: "Lorem ipsum dolor sit amet, sed do eiusmod?",
            a: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            q: "Lorem ipsum dolor sit amet, consectetur adipiscing?",
            a: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        },
        {
            q: "Lorem ipsum dolor sit amet, quis nostrud?",
            a: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
        },
    ];

    if (isNasilCalisir) {
        return <NasilCalisirPage />;
    }

    if (isFiyatlar) {
        return <PricingPage />;
    }

    if (isIletisim) {
        return <ContactPage />;
    }

    if (isYorumlar) {
        return <ReviewsPage />;
    }

    if (isGirisYap) {
        return <LoginPage />;
    }

    if (isSifremiUnuttum) {
        return <ForgotPasswordPage />;
    }

    if (isMenu) {
        return <MenuPage />;
    }

    return (
        <>
            <div className="hearts-area" aria-hidden="true">
                <span className="heart" style={{ left: "12%", "--delay": "0s", "--duration": "10s", "--size": "26px" }} />
                <span className="heart" style={{ left: "32%", "--delay": "1.4s", "--duration": "11s", "--size": "24px" }} />
                <span className="heart" style={{ left: "52%", "--delay": "0.8s", "--duration": "12s", "--size": "30px" }} />
                <span className="heart" style={{ left: "72%", "--delay": "1.9s", "--duration": "10.5s", "--size": "25px" }} />
                <span className="heart" style={{ left: "88%", "--delay": "2.4s", "--duration": "12.5s", "--size": "28px" }} />
                <span className="dot" style={{ left: "22%", "--delay": "0.7s", "--duration": "9.5s", "--size": "6px" }} />
                <span className="dot" style={{ left: "60%", "--delay": "1.6s", "--duration": "11.5s", "--size": "5px" }} />
                <span className="dot" style={{ left: "80%", "--delay": "0.4s", "--duration": "10.8s", "--size": "7px" }} />
            </div>

            <div className="page">
                <header className="topbar">
                    <div className="topbar-inner">
                        <a className="logo" href={withBase("/")} aria-label="BizEvleniyoruz ana sayfa">
                            <img src={logo} alt="BizEvleniyoruz" />
                            <span className="logo-text" aria-hidden="true">
                                {"BizEvleniyoruz".split("").map((char, index) => (
                                    <span key={`${char}-${index}`} className="logo-letter">
                                        {char === " " ? "\u00A0" : char}
                                    </span>
                                ))}
                            </span>
                        </a>

                        <button
                        className="menu-toggle"
                        type="button"
                        aria-label="Menüyü aç/kapat"
                        aria-expanded="false"
                        onClick={handleMenuToggle}
                    >
                        <span className="menu-toggle-bar"></span>
                        <span className="menu-toggle-bar"></span>
                        <span className="menu-toggle-bar"></span>
                    </button>

                        <nav className="menu">
                            <a className="menu-home" href={withBase("/")}>Ana Sayfa</a>
                            <a href={withBase("/nasil-calisir")}>NASIL ÇALIŞIR</a>
                            <a href={withBase("/#design-showcase")}>Tasarımlar</a>
                            <a href={withBase("/fiyatlar")}>FİYATLAR</a>
                            <a href={withBase("/iletisim")}>İLETİŞİM</a>
                            <a className="menu-auth" href={withBase("/girisyap")}>GİRİŞ YAP</a>
                        </nav>
                        <div className="auth">
                            <button className="auth-btn ghost" type="button" onClick={() => { window.location.href = withBase("/girisyap"); }}>
                                GİRİŞ YAP
                            </button>
                        </div>
                    </div>
                </header>

                <main className="hero">
                    <img className="hero-rings" src={rings} alt="" aria-hidden="true" />
                    <div className="hero-inner">
                        <h1 className="reveal" style={{ "--delay": "0.3s" }}>
                            <span>Dijital Düğün</span>
                            <span>Davetiyeleri</span>
                            <span className="subhead">Hatırlanmak</span>
                            <span className="subhead"><span className="cap"></span>İçin Tasarlandı</span>
                        </h1>
                        <p className="hero-subhead reveal" style={{ "--delay": "0.45s" }}>
                            Katılım teyidi, misafir listesi, konum ve müzik özellikleriyle modern bir dijital
                            düğün davetiyesi oluşturun.
                        </p>
                        <div className="hero-actions reveal" style={{ "--delay": "0.6s" }}>
                            <button className="hero-btn primary" type="button" onClick={handleCtaClick}>
                                Davetiyeni Oluştur
                            </button>
                            <button className="hero-btn ghost" type="button">
                                Demo Gör
                            </button>
                        </div>
                        <div className="hero-phones reveal" style={{ "--delay": "0.75s" }} aria-hidden="true">
                            <div className="hero-phone"></div>
                        </div>
                        <div className="hero-features">
                            <h2>Dijital davetiyenin içinde neler var?</h2>
                            <ul>
                                <li>Kişiselleştirilmiş tasarım & tema</li>
                                <li>Misafirlerin katılım teyidi</li>
                                <li>Misafir listesi</li>
                                <li>Harita ve mekan bilgisi</li>
                            </ul>
                        </div>
                        <div className="hero-divider" aria-hidden="true"></div>
                        <div className="hero-compare">
                            <h2>KARŞILAŞTIRMA</h2>
                            <h3>Kağıt Davetiyeler - Dijital Davetiyeler</h3>
                            <p>Geleneksel olanı tekrarlamak yerine,detaylarıyla öne çıkan modern bir 
                                davetiye deneyimi.</p>
                            <p className="compare-strong">
                                BizEvleniyoruz, tasarım ve deneyimden ödün vermeden
                                sadelik, estetik ve zarafeti bir araya getiren
                                özenle tasarlanmış seçkin bir dijital alternatiftir.
                            </p>
                        </div>
                        <div className="compare-cards">
                            <article className="compare-card is-muted compare-left">
                                <div className="card-title">
                                    <span className="card-icon" aria-hidden="true">
                                        <svg className="card-icon-svg" viewBox="0 0 24 24">
                                            <path d="M4 6h16v12H4z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
                                            <path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                                        </svg>
                                    </span>
                                    <div>
                                        <h4>Kağıt Davetiye</h4>
                                        <span className="card-subtitle">Yaklaşık fiyat 120 kişi</span>
                                    </div>
                                </div>
                                <div className="card-rows">
                                    <div className="card-row">
                                        <span>Tasarım</span>
                                        <span>150₺</span>
                                    </div>
                                    <div className="card-row">
                                        <span>Baskı (130 adet)</span>
                                        <span>260₺</span>
                                    </div>
                                    <div className="card-row">
                                        <span>Zarf + mühür</span>
                                        <span>104₺</span>
                                    </div>
                                    <div className="card-row">
                                        <span>Kargo</span>
                                        <span>120₺</span>
                                    </div>
                                </div>
                                <div className="card-total">
                                    <span>Toplam</span>
                                    <span className="price-muted">~634₺</span>
                                </div>
                            </article>
                            <article className="compare-card is-highlight compare-right">
                                <div className="card-title">
                                    <span className="card-icon" aria-hidden="true">
                                        <svg className="card-icon-svg" viewBox="0 0 24 24">
                                            <rect x="7" y="3.5" width="10" height="17" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.6"/>
                                            <circle cx="12" cy="17" r="0.8" fill="currentColor"/>
                                        </svg>
                                    </span>
                                    <div>
                                        <h4>Dijital Davetiye</h4>
                                        <span className="card-subtitle">En iyi tercih</span>
                                    </div>
                                </div>
                                <div className="card-badges">
                                    <span className="badge">
                                        <strong>+400₺ tasarruf</strong>
                                        <small>Baskı ve kargo ücreti yok</small>
                                    </span>
                                    <span className="badge">
                                        <strong>Misafir paneli</strong>
                                        <small>Anlık katılım cevapları</small>
                                    </span>
                                    <span className="badge">
                                        <strong>Hep erişilebilir</strong>
                                        <small>Tüm misafirlerin telefonunda</small>
                                    </span>
                                    <span className="badge">
                                        <strong>Anında teslim</strong>
                                        <small>48-72 saat içinde hazır</small>
                                    </span>
                                </div>
                                <div className="card-total">
                                    <span>Sadece</span>
                                    <span className="price-strong">175₺</span>
                                </div>
                            </article>
                        </div>
                        <div className="feature-table">
                            <h3>Özel dijital özellikler</h3>
                            <div className="feature-grid">
                                <div className="feature-header">Özellik</div>
                                <div className="feature-header">Kağıt</div>
                                <div className="feature-header">Dijital</div>

                                <div className="feature-row">Bilgi güncellemeleri</div>
                                <div className="feature-row is-off">✕</div>
                                <div className="feature-row is-on">✓</div>

                                <div className="feature-row">Katılım takibi</div>
                                <div className="feature-row is-off">✕</div>
                                <div className="feature-row is-on">✓</div>

                                <div className="feature-row">Etkileşimli harita</div>
                                <div className="feature-row is-off">✕</div>
                                <div className="feature-row is-on">✓</div>

                                <div className="feature-row">Canlı geri sayım</div>
                                <div className="feature-row is-off">✕</div>
                                <div className="feature-row is-on">✓</div>

                                <div className="feature-row">Fotoğraf galerisi</div>
                                <div className="feature-row is-off">✕</div>
                                <div className="feature-row is-on">✓</div>

                                <div className="feature-row">Arka plan müziği</div>
                                <div className="feature-row is-off">✕</div>
                                <div className="feature-row is-on">✓</div>
                            </div>
                            <p className="feature-note">Her dijital davetiye, kağıt kullanımını azaltır ve karbon ayak izini düşürür.</p>
                        </div>
                        <section className="design-showcase" id="design-showcase">
                            <span className="design-eyebrow">ÖZEL TASARIMLAR</span>
                            <h2>Tarzını seç, benzersiz olsun</h2>
                        <p>
                            <span>Her tema, hikayeni anlatacak şekilde</span>
                            <span>özenle tasarlandı.</span>
                        </p>
                            <div className="design-gallery">
                                <article className="design-card">
                                    <div className="design-thumb">GÖRSEL</div>
                                    <div className="design-card-content">
                                        <h3>The Venue</h3>
                                        <span>Lokasyonunuzdan esinlenir</span>
                                        <button type="button">Demo gör</button>
                                    </div>
                                </article>
                                <article className="design-card">
                                    <div className="design-thumb">GÖRSEL</div>
                                    <div className="design-card-content">
                                        <h3>Sweet Love</h3>
                                        <span>Modern ve romantik</span>
                                        <button type="button">Demo gör</button>
                                    </div>
                                </article>
                                <article className="design-card">
                                    <div className="design-thumb">GÖRSEL</div>
                                    <div className="design-card-content">
                                        <h3>Adventurers</h3>
                                        <span>Özgür ve maceracı</span>
                                        <button type="button">Demo gör</button>
                                    </div>
                                </article>
                                <article className="design-card">
                                    <div className="design-thumb">GÖRSEL</div>
                                    <div className="design-card-content">
                                        <h3>Floral</h3>
                                        <span>Zarif ve klasik</span>
                                        <button type="button">Demo gör</button>
                                    </div>
                                </article>
                                <article className="design-card">
                                    <div className="design-thumb">GÖRSEL</div>
                                    <div className="design-card-content">
                                        <h3>Minimalist</h3>
                                        <span>Sade ve şık</span>
                                        <button type="button">Demo gör</button>
                                    </div>
                                </article>
                            </div>
                            <div className="contact-cta">
                                <p>
                                    Aklında başka bir şey mi var?{" "}
                                    <a className="contact-link" href="#">Bize ulaş.</a>
                                </p>
                            </div>
                        </section>
                        <section className="dashboard-section">
                            <span className="dashboard-eyebrow">ÖZEL YÖNETİM PANELİ</span>
                            <h2>Her şey kontrol altında<br />tek bir yerde</h2>
                            <p>Davetiyenizle birlikte her şeyi tek panelden kolayca yönetin.</p>
                            <div className="dashboard-mock">
                                <div className="dashboard-topbar">
                                    <span className="dot red"></span>
                                    <span className="dot yellow"></span>
                                    <span className="dot green"></span>
                                    <span className="dashboard-url">panel.bizevleniyoruz.com</span>
                                </div>
                                <div className="dashboard-stats">
                                    <div className="stat-card">
                                        <span className="stat-value">42</span>
                                        <span className="stat-label">Onaylandı</span>
                                    </div>
                                    <div className="stat-card">
                                        <span className="stat-value">8</span>
                                        <span className="stat-label">Beklemede</span>
                                    </div>
                                    <div className="stat-card">
                                        <span className="stat-value">3</span>
                                        <span className="stat-label">Reddedildi</span>
                                    </div>
                                </div>
                                <div className="dashboard-list">
                                    <div className="list-row">
                                        <span className="list-dot ok">✓</span>
                                        <span>Maria Garcia</span>
                                        <span className="list-tag">Vejetaryen</span>
                                    </div>
                                    <div className="list-row">
                                        <span className="list-dot ok">✓</span>
                                        <span>Carlos Lopez</span>
                                        <span className="list-tag">Glutensiz</span>
                                    </div>
                                    <div className="list-row">
                                        <span className="list-dot warn">!</span>
                                        <span>Ana Martinez</span>
                                        <span className="list-tag">Laktozsuz</span>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard-features">
                                <article className="dash-card">
                                    <div className="dash-icon">
                                        <svg className="dash-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
                                            <circle cx="8" cy="9" r="3" fill="none" stroke="currentColor" strokeWidth="1.6"/>
                                            <circle cx="16" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.6"/>
                                            <path d="M3.5 18a4.5 4.5 0 0 1 9 0" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                                            <path d="M13.5 18a3.5 3.5 0 0 1 7 0" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                                        </svg>
                                    </div>
                                    <h3>Katılım kontrolü</h3>
                                    <p>Kim geliyor, kim gelmiyor anlık görün.</p>
                                </article>
                                <article className="dash-card">
                                    <div className="dash-icon">
                                        <svg className="dash-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M19 5c-5.5 0-9 3.8-9 9 3.8 0 9-3.5 9-9z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                                            <path d="M5 19c0-4.4 4.1-8 9-8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                                        </svg>
                                    </div>
                                    <h3>Beslenme tercihleri</h3>
                                    <p>Alerji ve özel istekleri yönetin.</p>
                                </article>
                                <article className="dash-card">
                                    <div className="dash-icon">
                                        <svg className="dash-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M5 19V9M10 19V5M15 19v-7M20 19v-3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                                        </svg>
                                    </div>
                                    <h3>Net istatistikler</h3>
                                    <p>Katılım durumunu tek bakışta görün.</p>
                                </article>
                                <article className="dash-card">
                                    <div className="dash-icon">
                                        <svg className="dash-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M12 4v10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                                            <path d="M8.5 10.5l3.5 3.5 3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                                            <path d="M5 20h14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                                        </svg>
                                    </div>
                                    <h3>Liste dışa aktarım</h3>
                                    <p>Bilgileri kolayca indirin.</p>
                                </article>
                            </div>
                        </section>
                        <section className="difference-section">
                            <span className="difference-eyebrow">FARKI GÖR</span>
                            <h2>Düğünün için sıradan değil,<br /><em>olağanüstü</em> bir davetiye</h2>
                            <p>Misafirlerinin ilk izlenimi burada başlar. Sade bir davetiye değil, unutulmaz bir an.</p>
                            <div className="difference-grid">
                                <div className="difference-column">
                                    <h3>Geleneksel Davetiye</h3>
                                    <div className="difference-item">
                                        <span className="difference-icon muted">✕</span>
                                        <span>Bir çekmecede unutulur</span>
                                    </div>
                                    <div className="difference-item">
                                        <span className="difference-icon muted">✕</span>
                                        <span>Herkeste aynı, kişiliksiz</span>
                                    </div>
                                    <div className="difference-item">
                                        <span className="difference-icon muted">✕</span>
                                        <span>Sadece kağıt, duygu yok</span>
                                    </div>
                                    <div className="difference-item">
                                        <span className="difference-icon muted">✕</span>
                                        <span>Kim geliyor belli değil</span>
                                    </div>
                                    <div className="difference-item">
                                        <span className="difference-icon muted">✕</span>
                                        <span>Baskı ve kargo masrafı</span>
                                    </div>
                                </div>
                                <div className="difference-column">
                                    <h3>BizEvleniyoruz Davetiyesi</h3>
                                    <div className="difference-item">
                                        <span className="difference-icon">✓</span>
                                        <span>Misafirlerin unutmayacağı bir deneyim</span>
                                    </div>
                                    <div className="difference-item">
                                        <span className="difference-icon">✓</span>
                                        <span>Hikayene özel illüstrasyonlar</span>
                                    </div>
                                    <div className="difference-item">
                                        <span className="difference-icon">✓</span>
                                        <span>Müzik, animasyon ve anılar</span>
                                    </div>
                                    <div className="difference-item">
                                        <span className="difference-icon">✓</span>
                                        <span>RSVP paneli ile tam kontrol</span>
                                    </div>
                                    <div className="difference-item">
                                        <span className="difference-icon">✓</span>
                                        <span>Herkese anında teslim</span>
                                    </div>
                                </div>
                            </div>
                            <p className="difference-quote">
                                “Düğünün ilk etkisi davetiyeyle başlar. Unutulmaz kıl.”
                            </p>
                        </section>
                        <section className="faq-section">
                            <h2>Sıkça Sorulan Sorular</h2>
                            <div className="faq-list">
                                {faqs.map((item, index) => (
                                    <div key={item.q} className={`faq-item${openFaq === index ? " is-open" : ""}`}>
                                        <button
                                            type="button"
                                            className="faq-question"
                                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                            aria-expanded={openFaq === index}
                                        >
                                            <span>{item.q}</span>
                                            <span className="faq-chevron" aria-hidden="true">▾</span>
                                        </button>
                                        {openFaq === index && <div className="faq-answer">{item.a}</div>}
                                    </div>
                                ))}
                            </div>
                        </section>
                        <div className="hero-divider" aria-hidden="true"></div>
                        <section className="cta-section">
                            <span className="cta-eyebrow">HİKAYENİ BAŞLAT</span>
                            <h2>Unutulmaz bir davetiye için hazır mısın?</h2>
                            <p>Bizimle iletişime geç, hayalindeki davetiyeyi birlikte oluşturalım.</p>
                            <div className="cta-actions">
                                <button type="button" className="cta-primary" onClick={handleCtaClick}>
                                    Böyle bir davetiye istiyorum
                                </button>
                                <button type="button" className="cta-secondary">Örnek davetiyeyi gör</button>
                            </div>
                        </section>
                        <SiteFooter className="home-footer" />
                    </div>
                </main>
            </div>
            <div className="bottom-blur" aria-hidden="true"></div>
            <div className="sticky-cta">
                <button className="sticky-cta-btn" type="button" onClick={handleCtaClick}>
                    <span className="cta-title">175₺'den başlayan fiyatlarla</span>
                    <span className="cta-subtitle">Formu doldurarak devam et</span>
                </button>
            </div>
        </>
    );
}

export default App;
