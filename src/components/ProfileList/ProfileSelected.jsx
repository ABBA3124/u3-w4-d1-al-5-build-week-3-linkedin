import React from "react"
import { Container, Row, Col, Image, Button, Nav, Alert, Stack, Dropdown, Modal } from "react-bootstrap"
import { useLocation } from "react-router-dom"
import Slider from "react-slick"
import banner from "../MainProfile/linkedin.png"
import AsideBar from "../AsideBar/asidebar"

const ProfileSelected = () => {
  const location = useLocation()
  const profile = location.state?.profile

  if (!profile) {
    return <div>Profilo non disponibile.</div>
  }

  // Opzioni per il carousel
  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  }

  return (
    <Container className="mt-3">
      <div className="row">
        <div className="col-8">
          {/* <Button href="/" variant="secondary">
            Torna ai risultati
          </Button> */}
          <div className="border rounded-3 bg-white mb-3">
            <div className="text-center">
              <div className="position-relative" style={{ marginBottom: "100px" }}>
                <div>
                  <Image
                    src={banner}
                    height={"300px"}
                    width={"100%"}
                    style={{
                      objectFit: "cover",
                      borderTopLeftRadius: "50px",
                      borderTopRightRadius: "50px",
                    }}
                    alt="profilo banner"
                  />
                </div>
                <div className="d-flex flex-row-reverse">
                  <div className="position-absolute top-100 start-0 translate-middle prova">
                    {profile && (
                      <Image
                        src={profile.image}
                        alt="logo profilo"
                        height={"150px"}
                        width={"150px"}
                        className="rounded-circle border border-3 img-profile"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="text-start">
                  {profile ? (
                    <>
                      <h1>
                        {profile.name} {profile.surname}
                      </h1>
                      <p className="fs-5">{profile.title}</p>
                      <p className="fw-lighter">
                        {profile.area}{" "}
                        <a className="text-decoration-none" href="#">
                          Informazioni di contatto
                        </a>
                      </p>
                    </>
                  ) : (
                    <p>Caricamento dati...</p>
                  )}
                </div>
                <div className="text-start d-flex">
                  <Button className="rounded-5 py-1">Disponibile per</Button>
                  <Button className="ms-2 rounded-5 border-primary text-primary py-1" variant="white">
                    Aggiungi sezione del profilo
                  </Button>
                  <Button className="ms-2 rounded-5 text-black border-black py-1" variant="white">
                    Altro
                  </Button>
                </div>
                <div className="mt-4">
                  <Slider className="custom-slider" {...settings}>
                    <div className="text-start" style={{ backgroundColor: "rgb(142, 203, 238, 0.651)" }}>
                      <div className="container-slide rounded-3 border me-2 p-1">
                        <p className="mb-0">
                          <strong>Disponibile per lavorare</strong>
                        </p>
                        <p className="mb-0">Ruoli di Sviluppatore Web, Sviluppatore front-end,..</p>
                        <Nav.Link href="#" className="text-primary">
                          Mostra dettagli
                        </Nav.Link>
                      </div>
                    </div>
                    <div className="text-start" style={{ backgroundColor: "rgb(142, 203, 238, 0.651)" }}>
                      <div className="container-slide  rounded-3 border me-2 p-1">
                        <p className="mb-0">
                          <strong>Fai sapere che stai facendo selezione</strong> e attrai <br />
                          candidati qualificati
                        </p>
                        <Nav.Link href="#" className="text-primary">
                          Inizia
                        </Nav.Link>
                      </div>
                    </div>
                    <div className="text-start" style={{ backgroundColor: "rgb(142, 203, 238, 0.651)" }}>
                      <div className="container-slide  rounded-3 border me-2 p-1">
                        <p className="mb-0">
                          <strong>altra roba </strong> candidati qualificati <br />
                          scrive linkedin <br />
                        </p>
                        <Nav.Link href="#" className="text-primary">
                          Inizia
                        </Nav.Link>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          {/* qui inizia la prima sezione */}
          <div className="border rounded-3 bg-white mb-3">
            <div className="pt-2 text-start">
              <div className="ms-4">
                <h3 className="m-0 fs-5">Analisi</h3>
                <span className="m-0 fs-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="gray"
                    className="mercado-match"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
                  </svg>
                  <span className="fs-6 ms-1 text-secondary">Solo per te</span>
                </span>
              </div>
              <div className="row justify-content-around flex-column flex-lg-row mt-1">
                <div className="col-12 col-lg-4 d-flex gap-2 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match ms-3"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                  </svg>
                  <div className="ms-1">
                    <strong>94 visualizzazioni del profilo</strong>
                    <p>Scopri chi ha visitato il tuo profilo.</p>
                  </div>
                </div>
                <div className="col-12 col-lg-4 d-flex gap-2 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match ms-3"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z"></path>
                  </svg>
                  <div className="ms-1">
                    <strong>94 visualizzazioni del profilo</strong>
                    <p>Scopri chi ha visitato il tuo profilo.</p>
                  </div>
                </div>
                <div className="col-12 col-lg-4 d-flex gap-2 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match ms-3"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
                  </svg>
                  <div className="ms-1">
                    <strong>94 visualizzazioni del profilo</strong>
                    <p>Scopri chi ha visitato il tuo profilo.</p>
                  </div>
                </div>
              </div>
              <hr />
              <Button className="w-100 rounded-bottom-1 bg-white text-black border-0 p-1 mb-1">
                Mostra tutte le risorse ➡️
              </Button>
            </div>
          </div>
          {/* qui finisce la prima sezione */}
          {/* qui inizia la seconda sezione */}
          <div className="border rounded-3 bg-white mb-3">
            <div className="pt-2 text-start">
              <div className="ms-4">
                <h3 className="m-0 fs-5">Risorse</h3>
                <span className="m-0 fs-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="gray"
                    className="mercado-match"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
                  </svg>
                  <span className="fs-6 ms-1 text-secondary">Solo per te</span>
                </span>
              </div>
              <div className="ms-4 me-4 mt-1">
                <div>
                  <div className="d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                    </svg>
                    <div className="ms-1">
                      <strong>La mia rete</strong>
                      <p className="m-0">Salva e gestisci i tuoi collegamenti e interessi.</p>
                    </div>
                  </div>
                  <hr />
                </div>
                <div>
                  <div className="d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z"></path>
                    </svg>
                    <div className="ms-1">
                      <strong>Elimina salvati</strong>
                      <p className="m-0">Monitora le tue offerte di lavoro, i corsi e gli articoli.</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <Button className="w-100 rounded-bottom-1 bg-white text-black border-0 p-1 mb-1">
                Mostra tutte le risorse (4) ➡️
              </Button>
            </div>
          </div>
          {/* qui finisce la seconda sezione */}
          {/* qui inizia la terza sezione */}
          <div className="border rounded-3 bg-white mb-3">
            <div className="pt-2 text-start">
              <div className="ms-4">
                <h3 className="m-0 fs-5">Informazioni</h3>
                <div className="mt-1">
                  {profile ? (
                    <>
                      <p className="fs-6">{profile.bio}</p>
                    </>
                  ) : (
                    <p>Caricamento dati...</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* qui fine la terza sezione */}
        </div>
        {/* ------------------------------------------------------- */}
        <div className="col-4">
          <AsideBar />
        </div>
      </div>
    </Container>
  )
}

export default ProfileSelected
