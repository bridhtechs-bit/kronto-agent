import { Container, Row, Col } from 'react-bootstrap';
import { FiCheck, FiCheckCircle, FiSettings } from 'react-icons/fi';

const plans = [
  {
    name: 'Pack Essentiel',
    desc: 'Pour les commerces individuels et démarrages',
    price: '15 000',
    featured: false,
    features: [
      '1 point de vente',
      '1 rapport quotidien automatique',
      'Contrôle de caisse basique (espèces)',
      'Suivi des ventes et dépenses',
      'Envoi à 1 destinataire (WhatsApp / Email)',
    ],
    cta: 'Choisir Essentiel',
    ctaClass: 'btn-kontro-outline',
  },
  {
    name: 'Pack Standard',
    desc: 'Idéal pour les boutiques actives et dépôts',
    price: '30 000',
    featured: true,
    features: [
      'Tout ce qui est dans Essentiel, plus :',
      'Détection intelligente des anomalies & alertes rouges',
      'Suivi d\'inventaire détaillé & stocks critiques',
      'Historique complet des rapports & exports PDF/Excel',
      'Format de rapport sur-mesure selon secteur',
      'Jusqu\'à 2 destinataires (gérant + propriétaire)',
    ],
    cta: 'Démarrer avec Standard',
    ctaClass: 'btn-kontro-accent',
  },
  {
    name: 'Pack Premium',
    desc: 'Pour les commerces multi-points ou gros volumes',
    price: '50 000',
    featured: false,
    features: [
      'Tout ce qui est dans Standard, plus :',
      'Personnalisation totale des contrôles & formules',
      'Destinataires multiples illimités',
      'Support prioritaire 7j/7 avec conseiller dédié',
      'Assistance avancée à l\'analyse hebdomadaire',
    ],
    cta: 'Choisir Premium',
    ctaClass: 'btn-kontro-outline',
  },
];

export default function PricingSection() {
  return (
    <section className="py-5 bg-alt" id="tarifs">
      <Container className="py-4">
        {/* Header */}
        <div className="text-center mb-5">
          <span className="section-eyebrow">Tarification Transparente</span>
          <h2 className="mb-2">Nos offres d'abonnement</h2>
          <p className="hero-subtitle mb-0 mx-auto" style={{ maxWidth: 520 }}>
            Des forfaits clairs et rentabilisés dès la première anomalie évitée.
            Sans engagement de durée.
          </p>
        </div>

        {/* Cards */}
        <Row className="g-4 align-items-stretch">
          {plans.map((plan, i) => (
            <Col key={i} xs={12} md={6} lg={4}>
              <div className={`pricing-card h-100 ${plan.featured ? 'featured' : ''}`}>
                {plan.featured && (
                  <div className="pricing-badge-featured">LE PLUS POPULAIRE</div>
                )}

                <div className="flex-grow-1">
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>{plan.name}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--kontro-text-muted)', marginTop: '0.25rem' }}>
                    {plan.desc}
                  </p>

                  <div className="d-flex align-items-baseline gap-1 my-4">
                    <span className="pricing-amount">{plan.price}</span>
                    <span className="pricing-period">XOF / mois</span>
                  </div>

                  <div className="d-flex flex-column gap-1">
                    {plan.features.map((f, j) => (
                      <div key={j} className="pricing-feature">
                        <FiCheck style={{ color: 'var(--kontro-success)', flexShrink: 0, marginTop: 2 }} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <a href="#demo" className={`btn ${plan.ctaClass} w-100 py-3`}>
                    {plan.cta}
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Setup Banner */}
        <div className="kontro-card p-4 p-lg-5 mt-5 d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-4">
          <div className="d-flex align-items-start gap-3">
            <div style={{
              width: 48, height: 48, borderRadius: '0.75rem',
              background: 'rgba(249,115,22,0.1)', color: 'var(--kontro-accent)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
            }}>
              <FiSettings size={22} />
            </div>
            <div>
              <div className="d-flex flex-wrap align-items-center gap-2">
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 0 }}>
                  Installation &amp; Configuration initiale
                </h4>
                <span className="badge-muted">25 000 XOF (facturé une seule fois)</span>
              </div>
              <p className="mb-0 mt-1" style={{ fontSize: '0.85rem', color: 'var(--kontro-text-muted)', maxWidth: 640 }}>
                Comprend : Paramétrage complet de vos points de vente, personnalisation
                des formulaires pour vos employés, formation express et premier rapport
                test validé ensemble.
              </p>
            </div>
          </div>
          <a href="#demo" className="btn btn-kontro-accent flex-shrink-0">
            Réserver l'installation
          </a>
        </div>
      </Container>
    </section>
  );
}
