import { Container, Row, Col } from 'react-bootstrap';
import {
  BsBarChartFill, BsCashCoin, BsWifi, BsReceipt,
  BsBoxSeam, BsBank2, BsDiagram3Fill, BsExclamationDiamondFill,
} from 'react-icons/bs';
import { FiCheckCircle } from 'react-icons/fi';

const monitors = [
  {
    icon: <BsBarChartFill size={18} />,
    title: 'Totaux des ventes',
    desc: "Chiffre d'affaires global consolidé par journée, par poste et par employé.",
  },
  {
    icon: <BsCashCoin size={18} />,
    title: 'Ventes en espèces',
    desc: "Contrôle rigoureux des billets et pièces déposés physiquement dans le tiroir caisse.",
  },
  {
    icon: <BsWifi size={18} />,
    title: 'Mobile Money & Cartes',
    desc: "Vérification croisée des soldes Wave, Orange Money, MTN MoMo et TPE.",
  },
  {
    icon: <BsReceipt size={18} />,
    title: 'Dépenses du jour',
    desc: "Pointage strict de chaque sortie d'argent avec justificatif photo obligatoire.",
  },
  {
    icon: <BsBoxSeam size={18} />,
    title: "Suivi de l'inventaire",
    desc: "Rotation des produits phares, alertes de réapprovisionnement et stocks résiduels.",
  },
  {
    icon: <BsBank2 size={18} />,
    title: 'Caisse de clôture',
    desc: "Contrôle du fond de roulement laissé en caisse et du montant net à verser à la banque.",
  },
  {
    icon: <BsDiagram3Fill size={18} />,
    title: 'Écarts de stock',
    desc: "Calcul instantané entre stock théorique vendu et stock réel restant en rayon.",
  },
  {
    icon: <BsExclamationDiamondFill size={18} />,
    title: 'Dépenses non justifiées',
    desc: "Mise en alerte immédiate et drapeau rouge sur tout retrait sans pièce justificative.",
  },
];

export default function MonitorSection() {
  return (
    <section className="py-5 bg-white">
      <Container className="py-4">
        {/* Header */}
        <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between mb-5 gap-3">
          <div>
            <span className="section-eyebrow">Surveillance Continue</span>
            <h2 className="mb-2">Ce que le service surveille</h2>
            <p className="hero-subtitle mb-0" style={{ maxWidth: 480 }}>
              Chaque poste de votre commerce est scruté avec rigueur et précision mathématique.
            </p>
          </div>
          <div className="d-none d-md-flex align-items-center gap-2"
            style={{ fontSize: '0.9rem', color: 'var(--kontro-text-muted)', whiteSpace: 'nowrap' }}>
            <FiCheckCircle style={{ color: 'var(--kontro-accent)' }} size={18} />
            8 modules de surveillance automatisés
          </div>
        </div>

        {/* Grid */}
        <Row className="g-3">
          {monitors.map((m, i) => (
            <Col key={i} xs={12} sm={6} lg={3}>
              <div className="monitor-tile h-100">
                <div className="monitor-icon">{m.icon}</div>
                <h5 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.4rem' }}>{m.title}</h5>
                <p style={{ fontSize: '0.82rem', color: 'var(--kontro-text-muted)', lineHeight: 1.7, marginBottom: 0 }}>
                  {m.desc}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
