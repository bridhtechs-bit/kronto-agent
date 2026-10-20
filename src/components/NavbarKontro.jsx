import { useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { BsShopWindow } from 'react-icons/bs';

export default function NavbarKontro() {
  const [expanded, setExpanded] = useState(false);

  const links = [
    { href: '#fonctionnalites', label: 'Fonctionnalités' },
    { href: '#comment-ca-marche', label: 'Comment ça marche' },
    { href: '#pour-qui', label: 'Pour qui ?' },
    { href: '#tarifs', label: 'Tarifs' },
    { href: '#temoignages', label: 'Témoignages' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <Navbar
      expand="xl"
      className="kontro-navbar fixed-top py-0"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container className="py-3">
        {/* Brand */}
        <Navbar.Brand href="#" className="d-flex align-items-center gap-2 me-4" onClick={() => setExpanded(false)}>
          <BsShopWindow size={26} style={{ color: 'var(--kontro-accent)' }} />
          <div>
            <div className="d-flex align-items-center gap-2">
              <span className="navbar-brand-name">KONTRO</span>
              <span className="navbar-brand-tag">PRO</span>
            </div>
            <div className="d-none d-lg-block" style={{ fontSize: '0.68rem', color: 'var(--kontro-text-muted)', lineHeight: 1 }}>
              Votre commerce sous contrôle
            </div>
          </div>
        </Navbar.Brand>

        {/* Toggler */}
        <Navbar.Toggle aria-controls="kontro-nav" />

        {/* Nav links */}
        <Navbar.Collapse id="kontro-nav">
          <Nav className="me-auto gap-1 mt-3 mt-xl-0">
            {links.map(link => (
              <Nav.Link
                key={link.href}
                href={link.href}
                onClick={() => setExpanded(false)}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>

          {/* Actions */}
          <div className="d-flex flex-column flex-xl-row align-items-stretch align-items-xl-center gap-2 mt-3 mt-xl-0">
            <a
              href="#connexion"
              className="btn btn-kontro-outline py-2 px-3"
              style={{ fontSize: '0.85rem' }}
              onClick={() => setExpanded(false)}
            >
              Connexion Espace Client
            </a>
            <Button
              href="#demo"
              className="btn-kontro-accent"
              style={{ fontSize: '0.85rem' }}
              onClick={() => setExpanded(false)}
            >
              Demander une démo
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
