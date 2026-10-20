import { Container, Row, Col } from 'react-bootstrap';
import { BsShopWindow } from 'react-icons/bs';

const solutions = ['Rapport quotidien', 'Contrôle caisse', 'Suivi de stock', 'Alertes écarts'];
const sectors = ['Dépôts de boissons', 'Boutiques & Alimentation', 'Grossistes', 'Restaurants', 'Pharmacies'];
const pricing = ['Plan Solo & Indépendant', 'Multi-points de vente', 'Audits sur site', 'Calculateur ROI'];
const support = ['Assistance 7j/7', 'Prendre RDV avec un expert', "Centre d'aide & Guides", 'Contact commercial'];

const legalLinks = ['Mentions Légales', 'Politique de Confidentialité', 'Conditions Générales'];

export default function Footer() {
  return (
    <footer className="kontro-footer">
      <Container>
        <Row className="g-4">
          {/* Brand */}
          <Col xs={12} md={6} lg={2}>
            <div className="d-flex align-items-center gap-2 mb-2">
              <BsShopWindow size={22} style={{ color: 'var(--kontro-accent)' }} />
              <span className="footer-brand-name">KONTRO</span>
            </div>
            <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', marginBottom: '0.75rem' }}>
              par Blanco Contrôle Quotidien
            </div>
            <p style={{ fontSize: '0.82rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.55)' }}>
              Plus de contrôle. Moins de pertes. Plus de visibilité pour les gérants exigeants.
            </p>
          </Col>

          {/* Solution */}
          <Col xs={6} md={3} lg={2}>
            <div className="footer-heading">Solution</div>
            {solutions.map(s => <a key={s} href="#">{s}</a>)}
          </Col>

          {/* Sectors */}
          <Col xs={6} md={3} lg={3}>
            <div className="footer-heading">Secteurs</div>
            {sectors.map(s => <a key={s} href="#">{s}</a>)}
          </Col>

          {/* Pricing */}
          <Col xs={6} md={3} lg={2}>
            <div className="footer-heading">Tarifs & Offres</div>
            {pricing.map(p => <a key={p} href="#">{p}</a>)}
          </Col>

          {/* Support */}
          <Col xs={6} md={3} lg={3}>
            <div className="footer-heading">Support & Contact</div>
            {support.map(s => <a key={s} href="#">{s}</a>)}
          </Col>
        </Row>

        <hr className="footer-divider" />

        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
          <p className="footer-legal mb-0">
            © 2025 KONTRO by Blanco Contrôle Quotidien. Tous droits réservés.
          </p>
          <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-end">
            {legalLinks.map(l => (
              <a key={l} href="#" className="footer-legal" style={{ color: 'rgba(255,255,255,0.4)', display: 'inline' }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
