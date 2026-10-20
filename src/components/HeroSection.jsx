import { Container, Row, Col } from 'react-bootstrap';
import {
  BsCheckCircleFill,
  BsArrowRight,
  BsExclamationTriangleFill,
  BsChatDotsFill,
} from 'react-icons/bs';
import {
  FiBarChart2,
  FiAlertCircle,
} from 'react-icons/fi';

const trustBadges = [
  'Rapport quotidien auto',
  'Contrôle de caisse & écarts',
  'Suivi du stock temps réel',
  'Alertes d\'anomalies instantanées',
];

export default function HeroSection() {
  return (
    <section className="hero-section" id="accueil">
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />

      <Container>
        <Row className="align-items-center gy-5">
          {/* ---- LEFT COL ---- */}
          <Col xs={12} lg={7}>
            <div className="d-flex flex-column gap-3">
              {/* Live badge */}
              <div>
                <span className="live-badge">
                  <span className="live-dot" />
                  Assistant automatisé de contrôle quotidien pour commerces &amp; PME
                </span>
              </div>

              {/* Headline */}
              <h1 className="hero-title mb-0">
                Gardez le contrôle de votre commerce,{' '}
                <span className="accent-text">même à distance</span>
              </h1>

              {/* Subhead */}
              <p className="hero-subtitle mb-0">
                KONTRO automatise le suivi quotidien de vos ventes, caisse, stocks,
                dépenses et détecte instantanément les anomalies. Recevez chaque
                soir un rapport clair et infalsifiable directement sur votre téléphone.
              </p>

              {/* CTAs */}
              <div className="d-flex flex-column flex-sm-row gap-3 align-items-stretch align-items-sm-center pt-1">
                <a href="#demo" className="btn btn-kontro-accent d-flex align-items-center justify-content-center gap-2">
                  Demander une démo
                  <BsArrowRight />
                </a>
                <a href="#tarifs" className="btn btn-kontro-outline d-flex align-items-center justify-content-center gap-2">
                  Voir les offres
                  <span className="badge-accent ms-1">Dès 15 000 XOF/mois</span>
                </a>
              </div>

              {/* Trust badges */}
              <div className="d-flex flex-wrap gap-2 pt-2">
                {trustBadges.map(badge => (
                  <span key={badge} className="trust-badge">
                    <BsCheckCircleFill className="check-icon" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </Col>

          {/* ---- RIGHT COL: Mockup ---- */}
          <Col xs={12} lg={5}>
            <DashboardMockup />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="mockup-card">
      {/* Header */}
      <div className="mockup-header d-flex align-items-start justify-content-between flex-wrap gap-2">
        <div>
          <div className="d-flex align-items-center gap-2">
            <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--kontro-text)' }}>
              Rapport de Clôture
            </span>
            <span className="badge-accent" style={{ background: 'rgba(22,163,74,0.1)', color: 'var(--kontro-success)' }}>
              KONTRO LIVE
            </span>
          </div>
          <p className="mb-0 mt-1" style={{ fontSize: '0.78rem', color: 'var(--kontro-text-muted)' }}>
            Dépôt Central Plateau • Clôturé à 20:30
          </p>
        </div>
        <span className="badge-success d-flex align-items-center gap-1">
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--kontro-success)', display: 'inline-block' }} />
          Vérifié &amp; Conforme
        </span>
      </div>

      {/* Body */}
      <div className="mockup-body d-flex flex-column gap-3">
        {/* Metrics */}
        <Row className="g-2">
          <Col xs={6}>
            <div className="metric-box">
              <div className="metric-label">Ventes Totales</div>
              <div className="metric-value">485 500 XOF</div>
              <div className="metric-sub d-flex justify-content-between">
                <span>Cash: 310k</span>
                <span style={{ color: 'var(--kontro-success)', fontWeight: 600 }}>Wave: 175.5k</span>
              </div>
            </div>
          </Col>
          <Col xs={6}>
            <div className="metric-box">
              <div className="metric-label">Dépenses Validées</div>
              <div className="metric-value">32 000 XOF</div>
              <div className="metric-sub d-flex align-items-center gap-1">
                <FiBarChart2 size={12} />
                <span>3 reçus scannés</span>
              </div>
            </div>
          </Col>
        </Row>

        {/* Reconciliation */}
        <div className="metric-box">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-1">
            <span style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--kontro-text)' }}>
              Rapprochement Caisse Espèces
            </span>
            <span className="badge-success">Écart: 0 XOF (Juste)</span>
          </div>
          <div className="d-flex justify-content-between" style={{ fontSize: '0.78rem', color: 'var(--kontro-text-muted)' }}>
            <span>Théorique : 310 000 XOF</span>
            <span>Réel : 310 000 XOF</span>
          </div>
          <div className="reconcile-bar mt-2">
            <div className="reconcile-bar-fill" style={{ width: '100%' }} />
          </div>
        </div>

        {/* Anomaly alert */}
        <div className="alert-box d-flex align-items-start gap-3">
          <div className="alert-icon">
            <BsExclamationTriangleFill size={16} />
          </div>
          <div>
            <div className="d-flex align-items-center gap-2">
              <span style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--kontro-danger)' }}>
                1 anomalie inventaire
              </span>
              <span className="badge-danger">-3 unités</span>
            </div>
            <p className="mb-0 mt-1" style={{ fontSize: '0.78rem', color: 'var(--kontro-text-muted)', lineHeight: 1.5 }}>
              Manque : Jus Mangue 1L non justifié sur la vacation de 14h.
            </p>
          </div>
        </div>

        {/* Dispatch */}
        <div className="dispatch-bar d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--kontro-success)', display: 'inline-block' }} />
            <span>Transmis via <strong>WhatsApp &amp; Email</strong></span>
          </div>
          <div className="d-flex align-items-center gap-1">
            <BsChatDotsFill size={12} style={{ color: 'var(--kontro-accent)' }} />
            <span style={{ fontWeight: 600, color: 'var(--kontro-text)', fontSize: '0.8rem' }}>Reçu à 20:31</span>
          </div>
        </div>
      </div>
    </div>
  );
}
