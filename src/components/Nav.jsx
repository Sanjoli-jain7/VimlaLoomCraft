import { useEffect, useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import '../styles/nav.css';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__row container">
        <a href="/" className="nav__brand">
          <span className="nav__brand-name">{siteConfig.brandName}</span>
          <span className="nav__brand-location">{siteConfig.brandLocation}</span>
        </a>

        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`} aria-label="Primary">
          {siteConfig.navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav__link">
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.retreatsUrl}
            className="nav__link nav__link--muted"
            target="_blank"
            rel="noreferrer"
          >
            Vimla Retreats
          </a>
          <a href={siteConfig.bookCta.href} className="btn btn-outline nav__book">
            {siteConfig.bookCta.label}
          </a>
        </nav>

        <button
          className={`nav__toggle ${open ? 'nav__toggle--open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
