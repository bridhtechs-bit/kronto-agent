import { Container, Row, Col } from 'react-bootstrap';
import {
  BsTruck, BsShopWindow, BsBoxes, BsCupHot, BsCapsule, BsBagHeart,
} from 'react-icons/bs';
import { FiCheck } from 'react-icons/fi';

const useCases = [
  {
    icon: <BsTruck size={24} />,
    title: 'Dépôts de boissons',
    tag: 'Boissons & Brasseries',
    desc: "Gestion complexe des casiers, consignes, canettes, fûts et gros volumes d'espèces liquides à chaque rotation de camion.",
    benefit: 'Contrôle strict des flux de consignes',
  },
  {
    icon: <BsShopWindow size={24} />,
    title: 'Boutiques & Supérettes',
    tag: 'Alimentation & Libre-service',
    desc: "Surveillance continue des articles à fort risque de coulage, gestion des multiples caissiers et des petites coupures.",
    benefit: 'Réconciliation rapide par fin de poste',
  },
  {
    icon: <BsBoxes size={24} />,
    title: 'Grossistes & Demi-grossistes',
    tag: 'Négoce & Marché',
    desc: "Suivi des bons de commande, livraisons clients, paiements échelonnés et déstockage en palettes ou cartons.",
    benefit: 'Suivi des créances et acomptes',
  },
  {
    icon: <BsCupHot size={24} />,
    title: 'Restaurants, Maquis & Bars',
    tag: 'CHR & Événements',
    desc: "Rapprochement cuisine/comptoir, inventaire boissons à forte marge et gestion rigoureuse des fonds de caisse en soirée.",
    benefit: 'Clôture nocturne automatisée',
  },
  {
    icon: <BsCapsule size={24} />,
    title: 'Pharmacies & Parapharmacies',
    tag: 'Santé & Soins',
    desc: "Traçabilité stricte des encaissements mixtes, tiers-payant assurances et gestion des stocks à date d'expiration critique.",
    benefit: 'Audit régulier des flux de trésorerie',
  },
  {
    icon: <BsBagHeart size={24} />,
    title: 'Prêt-à-porter & Retail',
    tag: 'Mode & Accessoires',
    desc: "Gestion fine des pièces uniques, retours articles, remises accordées aux clients et contrôle des commissions vendeurs.",
    benefit: 'Contrôle des promotions et remises',
  },
];

export default function UseCasesSection() {
  return (
    <section className="py-5 bg-white" id="pour-qui">
      <Container className="py-4">
        {/* Header */}
        <div className="text-center mb-5">
          <span className="section-eyebrow">Secteurs d'activité</span>
          <h2 className="mb-2">Pour quels commerces ?</h2>
          <p className="hero-subtitle mb-0 mx-auto" style={{ maxWidth: 520 }}>
            KONTRO s'adapte aux spécificités opérationnelles de votre secteur
            et à vos contraintes de terrain.
          </p>
        </div>

        {/* Grid */}
        <Row className="g-4">
          {useCases.map((u, i) => (
            <Col key={i} xs={12} md={6} lg={4}>
              <div className="usecase-card h-100">
                <div className="usecase-icon">{u.icon}</div>
                <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 0 }}>{u.title}</h4>
                  <span className="badge-muted">{u.tag}</span>
                </div>
                <p style={{ fontSize: '0.87rem', color: 'var(--kontro-text-muted)', lineHeight: 1.75, marginBottom: '1rem' }}>
                  {u.desc}
                </p>
                <div className="d-flex align-items-center gap-2"
                  style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--kontro-accent)', paddingTop: '0.75rem', borderTop: '1px solid var(--kontro-border)' }}>
                  <FiCheck />
                  {u.benefit}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
