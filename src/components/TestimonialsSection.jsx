import { Container, Row, Col } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs';

const testimonials = [
  {
    stars: 5,
    quote: "« Avant KONTRO, je perdais au moins 80 000 XOF chaque semaine en écarts de caisse inexpliqués. Aujourd'hui, je reçois mon rapport à 21h pile. Les écarts ont chuté de 95% dès le premier mois. »",
    name: 'Amadou S.',
    role: '2 Dépôts de Boissons • Abidjan',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    stars: 5,
    quote: "« En tant que commerçante souvent en déplacement chez les fournisseurs, KONTRO est mes yeux et mes oreilles. Mes vendeuses savent que chaque dépense doit avoir une photo de facture. Une sérénité inestimable. »",
    name: 'Aïssatou D.',
    role: 'Supérette & Prêt-à-porter • Dakar',
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
  {
    stars: 5,
    quote: "« L'installation à 25 000 XOF a été rentabilisée en 48 heures. Le système fait la différence entre les paiements en cash et Mobile Money sans aucune confusion. C'est l'outil indispensable. »",
    name: 'Koffi M.',
    role: 'Restaurant-Bar Lounge • Lomé',
    avatar: 'https://i.pravatar.cc/150?img=33',
  },
];

function Stars({ count }) {
  return (
    <div className="d-flex gap-1" style={{ color: 'var(--kontro-warning)' }}>
      {Array.from({ length: count }).map((_, i) => (
        <BsStarFill key={i} size={16} />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-5 bg-alt" id="temoignages">
      <Container className="py-4">
        {/* Header */}
        <div className="text-center mb-5">
          <span className="section-eyebrow">Retours d'expérience</span>
          <h2 className="mb-2">Ce que disent nos commerçants partenaires</h2>
          <p className="hero-subtitle mb-0 mx-auto" style={{ maxWidth: 520 }}>
            Des gérants et entrepreneurs d'Afrique de l'Ouest qui ont transformé leur gestion quotidienne.
          </p>
        </div>

        {/* Cards */}
        <Row className="g-4">
          {testimonials.map((t, i) => (
            <Col key={i} xs={12} md={4}>
              <div className="testimonial-card">
                <div>
                  <Stars count={t.stars} />
                  <p className="testimonial-quote">{t.quote}</p>
                </div>
                <div className="d-flex align-items-center gap-3 pt-4 mt-3"
                  style={{ borderTop: '1px solid var(--kontro-border)' }}>
                  <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
