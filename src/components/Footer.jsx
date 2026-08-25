import { siteConfig, contactInfo } from '../data/siteConfig';
import '../styles/footer.css';

const isSet = (v) => v && !v.startsWith('PASTE_');

export default function Footer() {
  const hasContact = isSet(contactInfo.address) || isSet(contactInfo.phone) || isSet(contactInfo.whatsapp) || isSet(contactInfo.email);

  return (
    <footer className="footer">
      <div className="container footer__row">
        <div>
          <p className="footer__brand">{siteConfig.brandName}</p>
          <p className="footer__parent">An experience by {siteConfig.parentBrand}</p>

          {hasContact && (
            <ul className="footer__contact">
              {isSet(contactInfo.address) && (
                <li>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {contactInfo.address}
                  </a>
                </li>
              )}
              {isSet(contactInfo.phone) && (
                <li>
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>{contactInfo.phone}</a>
                </li>
              )}
              {isSet(contactInfo.whatsapp) && (
                <li>
                  <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noreferrer">
                    WhatsApp Us
                  </a>
                </li>
              )}
              {isSet(contactInfo.email) && (
                <li>
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </li>
              )}
            </ul>
          )}
        </div>

        <nav className="footer__links" aria-label="Footer">
          {siteConfig.navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href={siteConfig.retreatsUrl} target="_blank" rel="noreferrer">
            Vimla Retreats
          </a>
        </nav>

        <a href={siteConfig.bookCta.href} className="btn btn-outline footer__cta">
          {siteConfig.bookCta.label}
        </a>
      </div>
      <p className="footer__fine container">
        © {new Date().getFullYear()} Vimla Loom Crafts. Rajasthan, India.
      </p>
    </footer>
  );
}
