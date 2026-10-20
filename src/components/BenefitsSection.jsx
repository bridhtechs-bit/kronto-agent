import { Container, Row, Col } from 'react-bootstrap';
import {
  BsGraphUpArrow, BsShieldCheck, BsLightningChargeFill,
  BsPeopleFill, BsAirplaneFill, BsHourglassSplit,
} from 'react-icons/bs';

const benefits = [
  {
    icon: <BsGraphUpArrow size={22} />,
    title: 'Meilleure visibilité',
    desc: "Une vision nette, chiffrée et instantanée de la rentabilité réelle de chaque point de vente en un coup d'œil, sans attendre le bilan trimestriel.",
  },
  {
    icon: <BsShieldCheck size={22} />,
    title: 'Moins de pertes financières',
    desc: "Diminution drastique des fraudes, oublis d'enregistrement et disparitions de stock. Les employés savent que les comptes sont audités chaque soir.",
  },
  {
    icon: <BsLightningChargeFill size={22} />,
    title: 'Contrôle 5x plus rapide',
    desc: "Fini les heures passées à éplucher les cahiers manuscrits le soir au bureau. 2 minutes suffisent pour valider la journée.",
  },
  {
    icon: <BsPeopleFill size={22} />,
    title: 'Transparence totale',
    desc: "Une relation de travail apaisée et basée sur des chiffres vérifiables avec vos caissiers et gérants. Plus de suspicion inutile.",
  },
  {
    icon: <BsAirplaneFill size={22} />,
    title: 'Supervision à distance',
    desc: "Pilotez vos commerces depuis votre domicile, en voyage d'affaires à l'international ou en parallèle de votre activité principale.",
  },
  {
    icon: <BsHourglassSplit size={22} />,
    title: 'Gain de temps précieux',
    desc: "Libérez votre esprit et votre charge mentale pour vous concentrer sur l'expansion de vos boutiques et vos relations fournisseurs.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-5 bg-alt">
      <Container className="py-4">
        {/* Header */}
        <div className="mb-5">
          <span className="section-eyebrow">Bénéfices Concrets</span>
          <h2 className="mb-2">Pourquoi les commerçants l'utilisent</h2>
          <p className="hero-subtitle mb-0" style={{ maxWidth: 520 }}>
            Des gains mesurables dès le premier mois sur vos finances et votre tranquillité d'esprit.
          </p>
        </div>

        {/* Grid */}
        <Row className="g-4">
          {benefits.map((b, i) => (
            <Col key={i} xs={12} sm={6} lg={4}>
              <div className="kontro-card p-4 h-100">
                <div className="benefit-icon">{b.icon}</div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>{b.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--kontro-text-muted)', lineHeight: 1.75, marginTop: '0.5rem', marginBottom: 0 }}>
                  {b.desc}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
