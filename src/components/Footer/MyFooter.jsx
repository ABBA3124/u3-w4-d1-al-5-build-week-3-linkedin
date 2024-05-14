import { Container, Row, Col, Nav } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer>
      <Container className="mt-5">
        <Row className="me-auto">
          <Col xs={12} sm={6}>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 py-3">
              <Col>
                <Nav.Link href="#" className="link">
                  Informazioni
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="#" className="link">
                  Accessibilità
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="#" className="link">
                  Talent Solutions
                </Nav.Link>
              </Col>
              <div className="d-flex justify-content-start">
                <i className="bi bi-question-circle-fill"></i>
                <Nav.Link href="#" className="link">
                  Domande?
                </Nav.Link>
              </div>
            </Row>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 py-3">
              <Col>
                <Nav.Link href="#" className="link">
                  Linee guida della community
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="#" className="link">
                  Carriera
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="#" className="link">
                  Soluzione di marketing
                </Nav.Link>
              </Col>
              <div className="d-flex justify-content-start">
                <i className="bi bi-gear-fill"></i>
                <Nav.Link href="#" className="link">
                  Gestisci il tuo account o la tua privacy
                </Nav.Link>
              </div>
            </Row>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 py-3">
              <Col>
                <Nav.Link href="#" className="link">
                  Privacy e condizioni
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="#" className="link">
                  Opzioni per gli annunci pubblicitari
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="#" className="link">
                  Pubblicità
                </Nav.Link>
              </Col>
              <div className="d-flex justify-content-start">
                <i className="bi bi-shield-shaded"></i>
                <Nav.Link href="#" className="link">
                  Trasparenza sui contenuti consigliati
                </Nav.Link>
              </div>
            </Row>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4">
              <Col>
                <Nav.Link href="#" className="link">
                  Sales solutions
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="#" className="link">
                  Mobile
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="#" className="link">
                  Piccole imprese
                </Nav.Link>
              </Col>
            </Row>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4">
              <Col className="mb-2">
                <Nav.Link href="#" className="link">
                  Centro sicurezza
                </Nav.Link>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2 mt-2 copyright text-secondary">
                Linkedin Corporation © 2024
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
