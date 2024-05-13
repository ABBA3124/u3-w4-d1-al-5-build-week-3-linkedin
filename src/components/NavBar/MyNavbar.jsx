import { Col, Image, InputGroup, Row } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { useState } from "react"
import Modal from "react-bootstrap/Modal"
import "./MyNavBar.css"

let MyNavbar = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#">
          <Image src="/src/assets/linkedin.png" width={35} />
        </Navbar.Brand>
        <Form className="d-flex">
          <InputGroup className="me-2">
            <InputGroup.Text className="icons">
              <i className="bi bi-search"></i>
            </InputGroup.Text>
            <Form.Control type="search" placeholder="Cerca" aria-label="Cerca" className="bg-light" />
          </InputGroup>
        </Form>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <div className="text-center icons">
              <i className="bi bi-house-door-fill fs-4"></i>
              <Nav.Link href="#action1" className="link">
                Home
              </Nav.Link>
            </div>
            <div className="text-center">
              <i className="bi bi-people-fill fs-4"></i>
              <Nav.Link href="#action2">Rete</Nav.Link>
            </div>
            <div className="text-center">
              <i className="bi bi-suitcase-lg-fill fs-4"></i>
              <Nav.Link href="#action2">Lavoro</Nav.Link>
            </div>
            <div className="text-center">
              <i className="bi bi-chat-dots-fill fs-4"></i>
              <Nav.Link href="#action2">Messaggistica</Nav.Link>
            </div>
            <div className="text-center">
              <i className="bi bi-bell-fill fs-4"></i>
              <Nav.Link href="#action2">Notifiche</Nav.Link>
            </div>
            <div>
              <i className="bi bi-person-circle fs-4"></i>
              <NavDropdown title="Tu" id="navbarScrollingDropdown1">
                <NavDropdown.Item key="account" href="#action3" className="fw-bold">
                  Account
                </NavDropdown.Item>
                <NavDropdown.Item key="settings" href="#action4">
                  Impostazioni e privacy
                </NavDropdown.Item>
                <NavDropdown.Item key="help" href="#action4">
                  Guida
                </NavDropdown.Item>
                <NavDropdown.Item key="language" href="#action5">
                  Lingua
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item key="manage" href="#action6" className="fw-bold">
                  Gestisci
                </NavDropdown.Item>
                <NavDropdown.Item key="activities" href="#action5">
                  Post e attività
                </NavDropdown.Item>
                <NavDropdown.Item key="jobAccount" href="#action6">
                  Account per la pubblicazione di offerte
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item key="logout" href="#action6">
                  Esci
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className="text-center icons">
              <i className="bi bi-grid-3x3-gap-fill fs-4"></i>
              <NavDropdown title="Per le aziende" id="navbarScrollingDropdown2" onClick={handleShow} className="drop">
                {/* Modal */}
              </NavDropdown>

              <Modal show={show} onHide={handleClose} className="modal-fix">
                <Modal.Header closeButton>
                  <Modal.Title className="fw-bold">Per le aziende</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Modal.Title className="mb-3 fw-bold t-modal">Scopri altri prodotti LinkedIn</Modal.Title>
                  <div className="m-modal">
                    <Row>
                      <Col className="text-center">
                        <img src="./src/assets/icon-nav1.svg" alt="play" className="b-svg" />
                        <p>Learning</p>
                      </Col>
                      <Col className="text-center">
                        <img src="./src/assets/icon-nav2.svg" alt="play" className="b-svg" />
                        <p>Talent Insinghts</p>
                      </Col>
                      <Col className="text-center">
                        <img src="./src/assets/icon-nav3.svg" alt="play" className="b-svg" />
                        <p>Pubblica un offerta di lavoro</p>
                      </Col>
                      <Col className="text-center">
                        <img src="./src/assets/icon-nav4.svg" alt="play" className="b-svg" />
                        <p>Pubblicizza</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={3} className="text-center">
                        <img src="./src/assets/icon-nav5.svg" alt="play" className="b-svg" />
                        <p>Trova nuovi clienti</p>
                      </Col>
                      <Col md={3} className="text-center">
                        <img src="./src/assets/icon-nav6.svg" alt="play" className="b-svg" />
                        <p>Gruppi</p>
                      </Col>
                      <Col md={3} className="text-center">
                        <img src="./src/assets/icon-nav7.svg" alt="play" className="b-svg" />
                        <p>Marketplace dei servizi</p>
                      </Col>
                    </Row>
                  </div>
                  <Modal.Title className="t-modal fw-bold-modal">Scopri altro per il business</Modal.Title>
                  <div className="modal-main m-modal">
                    <div>
                      <p className="fw-bold-modal my-0">Assumi su LinkedIn</p>
                      <p className="my-0"> Trova, attrai e assumi</p>
                    </div>
                    <div>
                      <p className="fw-bold-modal  my-0">Vendi con LinkedIn</p>
                      <p className="my-0">Sblocca nuove opportunità di vendita</p>
                    </div>
                    <div>
                      <p className="fw-bold-modal  my-0">Offerta di lavoro gratuita</p>
                      <p className="my-0">Ottieni rapidamente candidati qualificati</p>
                    </div>
                    <div>
                      <p className="fw-bold-modal  my-0">Fai pubblicità su LinkedIn</p>
                      <p className="my-0">Acquisisci clienti e fai screscere la tua azienda</p>
                    </div>
                    <div>
                      <p className="fw-bold-modal  my-0">Impara con LinkIn</p>
                      <p className="my-0">Assumi su LinkedIn</p>
                    </div>
                    <div>
                      <p className="fw-bold-modal  my-0">Centro amministrazione</p>
                      <p className="my-0">Gestisci i dettagli di fatturazione e account</p>
                    </div>
                    <div>
                      <p className="fw-bold-modal my-0">Crea una pagina aziendale</p>
                      <p className="my-0">Gestisci i dettagli di fatturazione e account</p>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer className="mb-3 fw-bold t-modal ml-auto">
                  Crea una pagina aziendale<i className="bi bi-plus-lg"></i>
                </Modal.Footer>
              </Modal>
            </div>
            <Nav.Link className="premium">
              Una rete più smart?
              <br /> Prova Premium <br /> gratuitamente
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}

export default MyNavbar
