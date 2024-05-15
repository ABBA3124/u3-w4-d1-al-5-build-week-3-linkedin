import { Container, Row, Col, Nav, Form, Dropdown, DropdownButton } from "react-bootstrap"
import "./MyFooter.css"

const MyFooter = () => {
  return (
    <footer>
      <Container className="mt-5">
        <Row className="me-auto">
          <Col sm={8} className="d-flex">
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 py-2">
              <Col className="my-1 fs-6">
                <Nav.Link href="#" className="link">
                  Informazioni
                </Nav.Link>
              </Col>
              <Col className="my-1 fs-6">
                <Nav.Link href="#" className="link">
                  Accessibilità
                </Nav.Link>
              </Col>
              <Col className="my-1 fs-6">
                <Nav.Link href="#" className="link">
                  Talent Solutions
                </Nav.Link>
              </Col>

              <Col className="my-1 fs-6">
                <Nav.Link href="#" className="link">
                  Linee guida della community
                </Nav.Link>
              </Col>
              <Col className="my-1 fs-6">
                <Nav.Link href="#" className="link">
                  Carriera
                </Nav.Link>
              </Col>
              <Col className="my-1 fs-6">
                <Nav.Link href="#" className="link">
                  Soluzione di marketing
                </Nav.Link>
              </Col>

              <Col className="my-1 fs-6">
                <DropdownButton id="dropdown-button" title="Privacy e condizioni" variant="transparent">
                  <Dropdown.Item href="#/action-1">Informazioni sulla privacy</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Contratto di licenza</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Termini e condizioni delle pagine</Dropdown.Item>
                  <Dropdown.Item href="#/action-4">Informativa sui cookie</Dropdown.Item>
                  <Dropdown.Item href="#/action-5">Informativa sul copyright</Dropdown.Item>
                </DropdownButton>
              </Col>
              <Col className="my-1 fs-6">
                <Nav.Link href="#" className="link">
                  Opzioni per gli annunci pubblicitari
                </Nav.Link>
              </Col>
              <Col className="my-1 fs-6">
                <Nav.Link href="#" className="link">
                  Pubblicità
                </Nav.Link>
              </Col>

              <Col className="my-1 fs-6">
                <Nav.Link href="#" className="link">
                  Sales solutions
                </Nav.Link>
              </Col>
              <Col className="my-1 fs-6">
                <Nav.Link href="#" className="link">
                  Mobile
                </Nav.Link>
              </Col>
              <Col className="my-1 fs-6">
                <Nav.Link href="#" className="link">
                  Piccole imprese
                </Nav.Link>
              </Col>

              <Col className="mb-2">
                <Nav.Link href="#" className="link">
                  Centro sicurezza
                </Nav.Link>
              </Col>
            </Row>
            <Row className="row-cols-1 py-3" style={{ whiteSpace: "nowrap" }}>
              <Col>
                <div className="d-flex justify-content-start fs-5 py-2">
                  <i className="bi bi-question-circle-fill"></i>
                  <Nav.Link href="#" className="link px-1">
                    Domande?
                  </Nav.Link>
                </div>
                <div className="d-flex justify-content-start fs-5 py-2">
                  <i className="bi bi-gear-fill"></i>
                  <Nav.Link href="#" className="link px-1">
                    Gestisci il tuo account o la tua privacy
                  </Nav.Link>
                </div>
                <div className="d-flex justify-content-start fs-5 py-2">
                  <i className="bi bi-shield-shaded"></i>
                  <Nav.Link href="#" className="link px-1">
                    Trasparenza sui contenuti consigliati
                  </Nav.Link>
                </div>
              </Col>
            </Row>
          </Col>
          <Col sm={4} className="px-5">
            <p className="fs-6 mb-1 mt-4 text-secondary">Seleziona lingua</p>
            <Form.Select className="border-black text-secondary">
              <option>Italiano (italiano)</option>
              <option>English (english)</option>
              <option>French (french)</option>
              <option>Indian (indian)</option>
            </Form.Select>
            <br />
          </Col>
          <Row>
            <Col className="mb-2 mt-2 copyright text-secondary">Linkedin Corporation © 2024</Col>
          </Row>
        </Row>
      </Container>
    </footer>
  )
}

export default MyFooter
