import React from "react";
import "./LeftBar.css";
import {
  Button,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  Image,
  Modal,
  Nav,
  Row,
} from "react-bootstrap";

const LeftBar = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <div className=" border rounded-2 m-2 bg-white px-2">
        <div className="d-flex justify-content-between align-items-center">
          <h2>LinkedIn Notizie</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-info-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
          </svg>
        </div>
        <div className="text-secondary bold">
          <h3>Storie principali</h3>
        </div>
      </div>
      <div className=" border rounded-2 m-2">
        <Image
          className="w-100 rounded-2"
          src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
        />
      </div>
      <div className="text-center">
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-2 py-2">
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
            <Nav.Link href="#" className="link pb-0">
              Centro Assistenza
            </Nav.Link>
          </Col>
          <Col className="my-1 fs-6">
            <DropdownButton
              id="dropdown-button"
              title="Privacy e condizioni"
              variant="transparent"
              className="py-0"
            >
              <Dropdown.Item href="#/action-1">
                Informazioni sulla privacy
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Contratto di licenza
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Termini e condizioni delle pagine
              </Dropdown.Item>
              <Dropdown.Item href="#/action-4">
                Informativa sui cookie
              </Dropdown.Item>
              <Dropdown.Item href="#/action-5">
                Informativa sul copyright
              </Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
        <Row>
          <Col className="my-1 fs-6">
            <Nav.Link href="#" className="link">
              Opzione per gli annunci pubblicitari
            </Nav.Link>
          </Col>
        </Row>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-2 py-2">
          <Col className="my-1 fs-6">
            <Nav.Link href="#" className="link">
              Pubblicità
            </Nav.Link>
          </Col>
          <Col className="my-1 fs-6">
            <DropdownButton
              id="dropdown-button"
              title="Servizi alle aziende"
              variant="transparent"
              className="py-0"
            >
              <Dropdown.Item href="#/action-1">
                Informazioni sulla privacy
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Contratto di licenza
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Termini e condizioni delle pagine
              </Dropdown.Item>
              <Dropdown.Item href="#/action-4">
                Informativa sui cookie
              </Dropdown.Item>
              <Dropdown.Item href="#/action-5">
                Informativa sul copyright
              </Dropdown.Item>
            </DropdownButton>
          </Col>

          <Col className="my-1 fs-6">
            <Nav.Link href="#" className="link">
              Scarica l app LinkedIn
            </Nav.Link>
          </Col>
          <Col className="my-1 fs-6">
            <Button variant="transparent" onClick={() => setModalShow(true)}>
              Altro
            </Button>

            <Modal
              {...props}
              size="xl"
              aria-labelledby="contained-modal-title-vcenter"
              show={modalShow}
              onHide={() => setModalShow(false)}
              dialogClassName="custom-modal"
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
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
                        <DropdownButton
                          id="dropdown-button"
                          title="Privacy e condizioni"
                          variant="transparent"
                        >
                          <Dropdown.Item href="#/action-1">
                            Informazioni sulla privacy
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Contratto di licenza
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Termini e condizioni delle pagine
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-4">
                            Informativa sui cookie
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-5">
                            Informativa sul copyright
                          </Dropdown.Item>
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
                    <Row
                      className="row-cols-1 py-3"
                      style={{ whiteSpace: "nowrap" }}
                    >
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
                    <p className="fs-6 mb-1 mt-4 text-secondary">
                      Seleziona lingua
                    </p>
                    <Form.Select className="border-black text-secondary">
                      <option>Italiano (italiano)</option>
                      <option>English (english)</option>
                      <option>French (french)</option>
                      <option>Indian (indian)</option>
                    </Form.Select>
                    <br />
                  </Col>
                  <Row>
                    <Col className="mb-2 mt-2 copyright text-secondary">
                      Linkedin Corporation © 2024
                    </Col>
                  </Row>
                </Row>
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
            </Modal>
          </Col>
        </Row>
        <Row>
          <Col className="my-1 fs-6 copyright text-secondary">
            Linkedin Corporation © 2024
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LeftBar;
