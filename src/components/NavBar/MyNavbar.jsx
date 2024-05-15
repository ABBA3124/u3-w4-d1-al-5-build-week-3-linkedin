import { Button, Col, Image, InputGroup, Row } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { useEffect, useState } from "react"
import "./MyNavBar.css"
import { useSelector, useDispatch } from "react-redux"
import { fetchProfiles } from "../../redux/slices/searchSlice"
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"

const MyNavbar = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState("")
  const profileData = useSelector((state) => state.profile.profileData)
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate()

  const location = useLocation()
  const isOnProfile = location.pathname === "/profile"

  const valueSearch = (e) => {
    setQuery(e.target.value)
  }

  const clickSearch = (e) => {
    e.preventDefault()
    dispatch(fetchProfiles(query))
    console.log("form inviato", query)
    setQuery("")
    navigate("/search")
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Container id="navbar" style={{ zIndex: "3" }}>
      <Navbar expand="lg" className="bg-body-tertiary navbar">
        <div className="mx-3">
          <Image
            src="/src/assets/linkedin.png"
            width={35}
            onClick={() => {
              navigate("/")
            }}
          />
        </div>
        <Form className="me-2 form-search" onSubmit={clickSearch}>
          <InputGroup className="d-flex flex-nowrap">
            <InputGroup.Text className="icons search-query">
              <Button variant="outline-none " type="submit">
                <i className="bi bi-search "></i>
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <div className="text-center icons mx-2">
              <i className="bi bi-house-door-fill fs-5"></i>
              <Nav.Link as={Link} to="/" className="linkNav">
                Home
              </Nav.Link>
            </div>
            <div className="text-center mx-2">
              <i className="bi bi-people-fill fs-5 "></i>
              <Nav.Link className="linkNav">Rete</Nav.Link>
            </div>
            <div className="text-center mx-2">
              <i className="bi bi-suitcase-lg-fill fs-5"></i>
              <Nav.Link className="linkNav">Lavoro</Nav.Link>
            </div>
            <div className="text-center mx-2">
              <i className="bi bi-chat-dots-fill fs-5"></i>
              <Nav.Link className="linkNav">Messaggistica</Nav.Link>
            </div>
            <div className="text-center mx-2">
              <i className="bi bi-bell-fill fs-5"></i>
              <Nav.Link className="linkNav">Notifiche</Nav.Link>
            </div>
            <div className="text-center mx-2 ">
              <i className="bi bi-person-circle fs-5"></i>
              <NavDropdown title="Tu" id="navbarScrollingDropdown1" className="mx-2 you-nav">
                <NavDropdown.Item key="account" className="fw-bold ">
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
                      <Button
                        className="linkNav outline-primary rounded-5 w-100 h-20 fw-bold btn-profile"
                        onClick={() => {
                          navigate("/profile")
                        }}
                      >
                        Visualizza profilo
                      </Button>
                    </Col>
                  </Row>
                </NavDropdown.Item>
                <NavDropdown.Item key="account1" href="#action3" className="fw-bold ">
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
            <div className="text-center container-modal mx-4 ">
              <i className="bi bi-grid-3x3-gap-fill fs-5"></i>
              <NavDropdown
                id="nav-dropdown"
                title="Per le aziende"
                className="drop dropdown-menu-center "
                align={"end"}
                menualign="right"
                style={{ zIndex: "2" }}
              >
                {/* offcanvas */}
                <Container className="m-modal modal-container" style={{ zIndex: "100" }}>
                  <Row className="modalDrop">
                    <Col className="col-12 col-md-6 col-lg-6 border-drop">
                      <p className="mb-3 fs-4 text-dark fw-bold">Le mie app</p>
                      <div className="my-2 t-modal">
                        <p className="mb-3 fs-5 text-dark-modal">Talent</p>
                        <img src="./src/assets/icon-nav2.svg" alt="play" className="b-svg mx-2" />
                        <span>Talent Insinghts</span>
                      </div>
                      <div className="my-4 t-modal">
                        <img src="./src/assets/icon-nav3.svg" alt="play" className="b-svg mx-2" />
                        <span>Pubblica un offerta di lavoro</span>
                      </div>
                      <div className="my-4 t-modal">
                        <p className="fs-5 text-dark-modal">Marketing</p>
                        <img src="./src/assets/icon-nav4.svg" alt="play" className="b-svg mx-2" />
                        <span>Pubblicizza</span>
                      </div>
                      <div className="my-4 t-modal">
                        <p className="fs-5 text-dark-modal">Learning</p>
                        <img src="./src/assets/icon-nav1.svg" alt="play" className="b-svg mx-2" />
                        <span>Learning</span>
                      </div>
                    </Col>
                    <Col className="col-12 col-md-6 col-lg-6 ">
                      <p className="mb-3 fs-4 text-dark fw-bold">Scopri altro per il business</p>
                      <div className="my-3 ">
                        <p className="fs-5 text-dark my-0">Assumi su LinkedIn</p>
                        <p className="my-0 "> Trova, attrai e assumi</p>
                      </div>
                      <div className="my-3">
                        <p className="fs-5 text-dark my-0">Vendi con LinkedIn</p>
                        <p className="my-0 ">Sblocca nuove opportunità di vendita</p>
                      </div>
                      <div className="my-3">
                        <p className="fs-5 text-dark my-0">Offerta di lavoro gratuita</p>
                        <p className="my-0 ">Ottieni rapidamente candidati qualificati</p>
                      </div>
                      <div className="my-3">
                        <p className="fs-5 text-dark my-0">Fai pubblicità su LinkedIn</p>
                        <p className="my-0 ">Acquisisci clienti e fai screscere la tua azienda</p>
                      </div>
                      <div className="my-3">
                        <p className="fs-5 text-dark my-0">Impara con LinkIn</p>
                        <p className="my-0 ">Assumi su LinkedIn</p>
                      </div>
                      <div className="my-3">
                        <p className="fs-5 text-dark my-0">Centro amministrazione</p>
                        <p className="my-0 ">Gestisci i dettagli di fatturazione e account</p>
                      </div>
                      <div>
                        <p className="mb-3 fs-5 text-dark fw-bold mt-4">
                          Crea una pagina aziendale
                          <i className="bi bi-plus-lg"></i>
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </NavDropdown>
            </div>
            <Nav.Link className="premium" role="link">
              Una rete più smart?
              <br /> Prova Premium <br /> gratuitamente
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid id="scroll">
        <div id="scroll-element" className={isVisible ? "visible" : "invisible"}>
          {isOnProfile && (
            <Row>
              <Col md={1}>
                <img src={profileData?.image} alt="img" width={40} className="rounded-5 mt-2 mx-4" />
              </Col>
              <Col md={3}>
                <p className="fw-bold my-0 mt-2">
                  {profileData ? `${profileData.name} ${profileData.surname}` : "Nome Utente"}
                </p>
                <p>{profileData ? profileData.title : "Titolo Utente"}</p>
              </Col>

              <Col md={8}>
                <div className="utenteR mt-3">
                  <Button variant="outline-secondary rounded-5 mx-2">Altro</Button>
                  <Button variant="outline-primary rounded-5">Aggiungi sezione profilo</Button>
                  <Button variant="primary rounded-5 mx-2">Disponibile per</Button>
                </div>
              </Col>
            </Row>
          )}
        </div>
      </Container>
    </Container>
  )
}

export default MyNavbar
