import { Container, Row, Col } from 'react-bootstrap';
import {
  BsCashCoin, BsFileBarGraph, BsBoxSeam,
  BsReceipt, BsCalculator, BsGeoAlt,
} from 'react-icons/bs';
import { FiTrendingDown, FiAlertCircle, FiEyeOff, FiDollarSign, FiClock, FiSmile } from 'react-icons/fi';

const problems = [
  {
    icon: <BsCashCoin size={24} />,
    title: 'Caisse qui ne tombe pas juste',
    desc: "Des écarts récurrents inexpliqués en fin de journée qui finissent par rogner silencieusement votre marge nette chaque mois.",
    footer: <><FiTrendingDown /> Pertes cumulées sans traçabilité</>,
  },
  {
    icon: <BsFileBarGraph size={24} />,
    title: 'Ventes déclarées vs encaissées',
    desc: "Décalage permanent entre les montants mentionnés sur le cahier papier et l'argent liquide réellement présent dans le tiroir.",
    footer: <><FiAlertCircle /> Manipulations non vérifiées</>,
  },
  {
    icon: <BsBoxSeam size={24} />,
    title: 'Stock qui disparaît',
    desc: "Pertes sèches et coulages de marchandises sans vente correspondante ni inventaire d'entrée/sortie rigoureux en direct.",
    footer: <><FiEyeOff /> Vols internes et oublis</>,
  },
  {
    icon: <BsReceipt size={24} />,
    title: 'Dépenses sans justificatif',
    desc: "Prélèvements improvisés dans la caisse pour régler des fournisseurs ou des courses sans ticket, sans reçu ou sous reçus illisibles.",
    footer: <><FiDollarSign /> Érosion du cashflow</>,
  },
  {
    icon: <BsCalculator size={24} />,
    title: 'Suivi manuel long et stressant',
    desc: "Cahiers raturés, calculatrices manuelles et heures perdues tard le soir pour essayer de réconcilier les chiffres de la journée.",
    footer: <><FiClock /> 2h perdues chaque soir</>,
  },
  {
    icon: <BsGeoAlt size={24} />,
    title: 'Propriétaire absent du point de vente',
    desc: "Impossibilité de surveiller ses boutiques lorsque l'on est salarié, en voyage ou à la tête de plusieurs commerces simultanément.",
    footer: <><FiSmile /> Anxiété et méfiance permanente</>,
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-5 bg-alt" id="fonctionnalites">
      <Container className="py-4">
        {/* Header */}
        <div className="mb-5">
          <span className="section-eyebrow d-inline-flex align-items-center gap-1">
            <FiAlertCircle /> Angles morts &amp; Fuites financières
          </span>
          <h2 className="mb-2">Les problèmes que nous résolvons</h2>
          <p className="hero-subtitle mb-0" style={{ maxWidth: 560 }}>
            Gérer un commerce sans présence physique permanente expose à des pertes
            invisibles mais dévastatrices au quotidien.
          </p>
        </div>

        {/* Grid */}
        <Row className="g-3">
          {problems.map((p, i) => (
            <Col key={i} xs={12} md={6} lg={4}>
              <div className="problem-card h-100">
                <div className="problem-icon-box">{p.icon}</div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>{p.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--kontro-text-muted)', lineHeight: 1.75, margin: '0.5rem 0 0' }}>
                  {p.desc}
                </p>
                <div className="problem-footer">{p.footer}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
