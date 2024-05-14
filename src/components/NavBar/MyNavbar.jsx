import { Button, Col, Image, InputGroup, Offcanvas, Row } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { useState } from "react"
import "./MyNavBar.css"
import { useSelector, useDispatch } from "react-redux"
import { fetchProfiles } from "../../redux/slices/searchSlice"

const MyNavbar = () => {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  const dispatch = useDispatch()
  const [query, setQuery] = useState("")
  const profileData = useSelector((state) => state.profile.profileData)

  const clickSearch = (e) => {
    e.preventDefault()
    dispatch(fetchProfiles(query))
    console.log("form inviato", query)
    setQuery("")
  }

  const valueSearch = (e) => {
    setQuery(e.target.value)
  }

  return (
    <Container id="navbar">
      <Navbar expand="lg" className="bg-body-tertiary navbar">
        <div className="mx-3">
          <Image src="/src/assets/linkedin.png" width={35} />
        </div>
        <Form className="me-2" onSubmit={clickSearch}>
          <InputGroup className="d-flex flex-nowrap">
            <InputGroup.Text className="icons search-query">
              <Button variant="outline-none" type="submit">
                <i className="bi bi-search"></i>
              </Button>
            </InputGroup.Text>
            <Form.Control
              type="search"
              placeholder="Cerca"
              value={query}
              onChange={valueSearch}
              aria-label="Cerca"
              className="bg-light search search-query"
            />
          </InputGroup>
        </Form>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <div className="text-center icons mx-2">
              <i className="bi bi-house-door-fill fs-5"></i>
              <Nav.Link href="#action1" className="linkNav">
                Home
              </Nav.Link>
            </div>
            <div className="text-center mx-2">
              <i className="bi bi-people-fill fs-5"></i>
              <Nav.Link href="#action2" className="linkNav">
                Rete
              </Nav.Link>
            </div>
            <div className="text-center mx-2">
              <i className="bi bi-suitcase-lg-fill fs-5"></i>
              <Nav.Link href="#action2" className="linkNav">
                Lavoro
              </Nav.Link>
            </div>
            <div className="text-center mx-2">
              <i className="bi bi-chat-dots-fill fs-5"></i>
              <Nav.Link href="#action2" className="linkNav">
                Messaggistica
              </Nav.Link>
            </div>
            <div className="text-center mx-2">
              <i className="bi bi-bell-fill fs-5"></i>
              <Nav.Link href="#action2" className="linkNav">
                Notifiche
              </Nav.Link>
            </div>
            <div className="text-center mx-2">
              <i className="bi bi-person-circle fs-5"></i>
              <NavDropdown title="Tu" id="navbarScrollingDropdown1" className="mx-2 you-nav">
                <NavDropdown.Item key="account" href="#action3" className="fw-bold">
                  <Row>
                    <Col md={3}>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXUbkRQ_gIjq-wL09gAn4W-UqRyXUX42222g70wp4rEw&s"
                        alt="img"
                        width={60}
                      />
                    </Col>
                    <Col md={9}>
                      <p className="fw-bold">
                        {profileData ? `${profileData.name} ${profileData.surname}` : "Nome Utente"}
                      </p>
                      <p>{profileData ? profileData.title : "Titolo Utente"}</p>
                    </Col>
                    <Col md={12}>
                      <Button variant="outline-primary rounded-5 w-100 h-20 fw-bold btn-profile">
                        Visualizza profilo
                      </Button>
                    </Col>
                  </Row>
                </NavDropdown.Item>
                <NavDropdown.Item key="account" href="#action3" className="fw-bold">
                  Account
                </NavDropdown.Item>
                <NavDropdown.Item key="settings" href="#action4" className="drop-profile">
                  Impostazioni e privacy
                </NavDropdown.Item>
                <NavDropdown.Item key="help" href="#action4" className="drop-profile">
                  Guida
                </NavDropdown.Item>
                <NavDropdown.Item key="language" href="#action5" className="drop-profile">
                  Lingua
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item key="manage" href="#action6" className="fw-bold">
                  Gestisci
                </NavDropdown.Item>
                <NavDropdown.Item key="activities" href="#action5" className="drop-profile">
                  Post e attività
                </NavDropdown.Item>
                <NavDropdown.Item key="jobAccount" href="#action6" className="drop-profile">
                  Account per la pubblicazione di offerte
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item key="logout" href="#action6" className="drop-profile">
                  Esci
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className="text-center container-modal mx-4">
              <i className="bi bi-grid-3x3-gap-fill fs-5"></i>
              <NavDropdown title="Per le aziende" onClick={() => setShow(true)} className="drop" align={"start"}>
                {/* offcanvas */}
              </NavDropdown>

              <Offcanvas show={show} onHide={handleClose} placement="end" className="modal-fix">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title className="fw-bold">Per le aziende</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Offcanvas.Title className="mb-3 fw-bold t-modal">Scopri altri prodotti LinkedIn</Offcanvas.Title>
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
                  <Offcanvas.Title className="t-modal fw-bold">Scopri altro per il business</Offcanvas.Title>
                  <div className="modal-main">
                    <div>
                      <p className="fw-bold my-0">Assumi su LinkedIn</p>
                      <p className="my-0"> Trova, attrai e assumi</p>
                    </div>
                    <div>
                      <p className="fw-bold my-0">Vendi con LinkedIn</p>
                      <p className="my-0">Sblocca nuove opportunità di vendita</p>
                    </div>
                    <div>
                      <p className="fw-bold my-0">Offerta di lavoro gratuita</p>
                      <p className="my-0">Ottieni rapidamente candidati qualificati</p>
                    </div>
                    <div>
                      <p className="fw-bold my-0">Fai pubblicità su LinkedIn</p>
                      <p className="my-0">Acquisisci clienti e fai screscere la tua azienda</p>
                    </div>
                    <div>
                      <p className="fw-bold my-0">Impara con LinkIn</p>
                      <p className="my-0">Assumi su LinkedIn</p>
                    </div>
                    <div>
                      <p className="fw-bold my-0">Centro amministrazione</p>
                      <p className="my-0">Gestisci i dettagli di fatturazione e account</p>
                    </div>
                    <div>
                      <p className="fw-bold my-0">Crea una pagina aziendale</p>
                      <p className="my-0">Gestisci i dettagli di fatturazione e account</p>
                    </div>
                  </div>
                </Offcanvas.Body>
                <Offcanvas.Title className="mb-3 fw-bold mx-2 justify-content-start">
                  Crea una pagina aziendale<i className="bi bi-plus-lg"></i>
                </Offcanvas.Title>
              </Offcanvas>
            </div>
            <Nav.Link className=" premium" role="link">
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
