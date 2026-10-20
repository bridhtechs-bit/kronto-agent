import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { BsChevronDown } from 'react-icons/bs';

const faqs = [
  {
    q: 'KONTRO remplace-t-il mon employé ou mon caissier ?',
    a: "Non, KONTRO valorise le travail de votre employé en lui offrant un outil rapide de saisie sans calcul fastidieux, tout en apportant au propriétaire un contrôle indépendant et infalsifiable. C'est un cadre clair qui responsabilise tout le monde.",
  },
  {
    q: "Est-ce facile à utiliser pour mes employés qui ne sont pas à l'aise avec la technologie ?",
    a: "Absolument. La saisie quotidienne ne prend que 5 minutes et a été conçue pour être utilisable par n'importe qui sachant envoyer un message WhatsApp. Aucune compétence comptable n'est requise, tout est guidé pas à pas.",
  },
  {
    q: "Puis-je recevoir mes rapports automatiquement même si je suis à l'étranger ?",
    a: "Oui. Vos rapports sont expédiés automatiquement par WhatsApp et par Email dès la clôture de la journée. Vous pouvez les consulter où que vous soyez dans le monde avec une simple connexion internet sur votre téléphone.",
  },
  {
    q: "Le service peut-il être adapté aux règles particulières de mon commerce ?",
    a: "Tout à fait. Lors de la mise en place initiale, nous configurons sur-mesure vos catégories d'articles, vos modes de paiement locaux (Cash, Wave, OM, MoMo) et vos seuils d'alertes spécifiques selon votre métier.",
  },
  {
    q: "De quoi ai-je besoin pour commencer dès aujourd'hui ?",
    a: "Un simple smartphone pour votre employé et votre numéro WhatsApp pour recevoir les rapports. Nous nous occupons du paramétrage complet lors de l'installation initiale en moins de 48h.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-5 bg-white" id="faq">
      <Container className="py-4">
        {/* Header */}
        <div className="text-center mb-5">
          <span className="section-eyebrow">Clarifications</span>
          <h2 className="mb-2">Foire Aux Questions</h2>
          <p className="hero-subtitle mb-0 mx-auto" style={{ maxWidth: 520 }}>
            Tout ce que vous devez savoir pour démarrer simplement avec KONTRO.
          </p>
        </div>

        {/* Items */}
        <div className="d-flex flex-column gap-3" style={{ maxWidth: 760, margin: '0 auto' }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? 'open' : ''}`}
            >
              <div className="faq-question" onClick={() => toggle(i)}>
                <span>{faq.q}</span>
                <BsChevronDown className="faq-chevron" />
              </div>
              <div className="faq-answer">{faq.a}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
