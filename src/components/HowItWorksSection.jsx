import { Container, Row, Col } from 'react-bootstrap';
import { BsPhoneVibrate, BsCalculatorFill, BsChatDotsFill } from 'react-icons/bs';

const steps = [
  {
    num: '01',
    time: '5 min chrono',
    icon: <BsPhoneVibrate size={22} style={{ color: 'var(--kontro-accent)' }} />,
    title: "L'employé saisit les données quotidiennes",
    desc: "Chaque soir ou fin de vacation sur son smartphone : enregistrement des ventes, encaissements (Cash / Wave / MoMo), photos obligatoires des reçus de dépenses et inventaire rapide.",
    footerText: "Interface fluide accessible sans compétences comptables",
  },
  {
    num: '02',
    time: 'Algorithme KONTRO',
    timeAccent: true,
    icon: <BsCalculatorFill size={22} style={{ color: 'var(--kontro-accent)' }} />,
    title: 'Le système calcule et croise les chiffres',
    desc: (
      <>
        Vérification automatique de l'équilibre financier :{' '}
        <em>Caisse Initiale + Ventes − Dépenses = Caisse Finale</em>.
        Détection immédiate des écarts d'espèces et des articles manquants.
      </>
    ),
    footerText: "Rapprochement strict et calcul d'écart à zéro tolérance",
  },
  {
    num: '03',
    time: 'Chaque soir',
    icon: <BsChatDotsFill size={22} style={{ color: 'var(--kontro-accent)' }} />,
    title: 'Le propriétaire reçoit un rapport clair',
    desc: "Envoi automatique sur WhatsApp et Email. Vous visualisez d'un coup d'œil le chiffre net, le montant à verser, les justificatifs et les éventuelles alertes rouges à investiguer.",
    footerText: 'Notification WhatsApp directe + PDF de synthèse',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-5 bg-white" id="comment-ca-marche">
      <Container className="py-4">
        {/* Header */}
        <div className="text-center mb-5">
          <span className="section-eyebrow">Méthodologie Éprouvée</span>
          <h2 className="mb-2">Comment KONTRO fonctionne</h2>
          <p className="hero-subtitle mb-0 mx-auto" style={{ maxWidth: 520 }}>
            Un processus ultra-simple en 3 étapes, sans matériel coûteux à acheter.
            Tout se passe sur smartphone.
          </p>
        </div>

        {/* Steps */}
        <Row className="g-4">
          {steps.map((step, i) => (
            <Col key={i} xs={12} lg={4}>
              <div className="step-card h-100">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="step-number">{step.num}</div>
                  {step.timeAccent ? (
                    <span className="badge-accent">{step.time}</span>
                  ) : (
                    <span className="badge-muted">{step.time}</span>
                  )}
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{step.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--kontro-text-muted)', lineHeight: 1.8, marginTop: '0.75rem' }}>
                  {step.desc}
                </p>
                <div className="step-footer">
                  {step.icon}
                  <span>{step.footerText}</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
