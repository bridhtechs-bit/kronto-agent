import { Container } from 'react-bootstrap';
import { BsArrowRight, BsChatDotsFill, BsLightningChargeFill, BsShieldCheck } from 'react-icons/bs';

export default function CtaSection() {
  return (
    <section className="py-5 bg-alt" id="demo">
      <Container className="py-4">
        <div className="cta-banner">
          <div style={{ position: 'relative', zIndex: 2, maxWidth: 680 }}>
            <span
              className="d-inline-block mb-3"
              style={{
                background: 'var(--kontro-accent)',
                color: '#fff',
                fontSize: '0.7rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '0.3rem 1rem',
                borderRadius: 999,
              }}
            >
              Reprenez la main sur vos finances
            </span>

            <h2 className="cta-title mb-3">
              Commencez à mieux contrôler votre commerce dès aujourd'hui
            </h2>

            <p className="cta-subtitle mb-4">
              Rejoignez les dizaines de commerçants qui ont éliminé les pertes
              inexpliquées et dorment l'esprit tranquille chaque soir grâce à KONTRO.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 align-items-stretch align-items-sm-center mb-4">
              <a
                href="#"
                className="btn btn-kontro-accent d-flex align-items-center justify-content-center gap-2"
                style={{ padding: '0.9rem 2rem', fontSize: '0.95rem' }}
              >
                Demander une démo gratuite
                <BsArrowRight />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn d-flex align-items-center justify-content-center gap-2"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1.5px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                  borderRadius: '0.75rem',
                  padding: '0.9rem 1.75rem',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  transition: 'background 0.2s',
                }}
              >
                <BsChatDotsFill style={{ color: 'var(--kontro-accent)' }} />
                Nous contacter sur WhatsApp
              </a>
            </div>

            <div className="d-flex flex-wrap gap-3" style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)' }}>
              <span className="d-flex align-items-center gap-1">
                <BsLightningChargeFill style={{ color: 'var(--kontro-accent)' }} />
                Mise en place rapide en 48h
              </span>
              <span style={{ opacity: 0.4 }}>•</span>
              <span className="d-flex align-items-center gap-1">
                <BsShieldCheck style={{ color: 'var(--kontro-accent)' }} />
                Sans engagement de durée
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
