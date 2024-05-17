import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Button, Col, Container, Image, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import "./ProfileList.css"

const ProfileList = () => {
  const profiles = useSelector((state) => state.search.profiles)
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setShow(profiles.length > 0)
  }, [profiles])

  const handleClose = () => setShow(false)

  const handleProfileSelect = (profile) => {
    navigate("/profile/selected", { state: { profile } })
  }

  return (
    <>
      {profiles.length > 0 ? (
        <Container fluid id="scroll">
          <div id="scroll-element" className="visible ">
            <Row>
              <Col md={12}>
                <div className="my-3 d-flex justify-content-evenly ">
                  <Button variant="outline-secondary rounded-5 px-2 ">
                    Persone
                  </Button>
                  <Button variant="outline-secondary rounded-5 ">Post</Button>
                  <Button variant="outline-secondary rounded-5 ">
                    Offerte di lavoro
                  </Button>
                  <Button variant="outline-secondary rounded-5 ">
                    Aziende
                  </Button>
                  <Button variant="outline-secondary rounded-5 ">Gruppi</Button>
                  <Button
                    className="d-none d-md-block"
                    variant="outline-secondary rounded-5 "
                  >
                    Prodotti
                  </Button>
                  <Button
                    className="d-none d-md-block"
                    variant="outline-secondary rounded-5 "
                  >
                    Servizi
                  </Button>
                  <Button
                    className="d-none d-md-block"
                    variant="outline-secondary rounded-5 "
                  >
                    Eventi
                  </Button>
                  <Button
                    className="d-none d-md-block"
                    variant="outline-secondary rounded-5 "
                  >
                    Corsi
                  </Button>
                  <Button
                    className="d-xl-block d-none"
                    variant="outline-secondary rounded-5 "
                  >
                    Scuole o universita
                  </Button>
                  <Button
                    className="d-xl-block d-none"
                    variant="outline-secondary rounded-5 "
                  >
                    Tutti i filtri
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      ) : (
        <div className="bg-white p-3 rounded-3 ">
          <img
            className=""
            src="/src/assets/notfound.gif"
            width={150}
            alt="Not Found"
          />
          <h3>Nessun risultato trovato</h3>
          <p className="text-secondary fs-6">
            Prova ad accorciare o riformulare i termini di ricerca
          </p>
          <Button
            variant="outline-secondary"
            className="btn-profile rounded-5 fw-bold"
            onClick={handleClose}
          >
            Modifica ricerca
          </Button>
        </div>
      )}
      {show && (
        <Container className="" id="profile">
          {profiles.length > 0 ? (
            <></>
          ) : (
            <>
              <img src="/src/assets/notfound.gif" width={150} alt="Not Found" />
              <h3>Nessun risultato trovato</h3>
              <p className="text-secondary fs-6">
                Prova ad accorciare o riformulare i termini di ricerca
              </p>
              <Button
                variant="outline-secondary"
                className="btn-profile rounded-5 fw-bold"
                onClick={handleClose}
              >
                Modifica ricerca
              </Button>
            </>
          )}
          <Row className="justify-content-center">
            <Col md={4} lg={3} className="d-none d-md-block">
              <div className="rounded-2 padding bg-white text-start job border">
                <p className="text-title">Su questa pagina </p>
                <div className="d-flex align-items-center flex-row text">
                  <span>Persone</span>
                </div>
                <div className="d-flex align-items-center flex-row text">
                  <span>Post</span>
                </div>
                <div className="d-flex align-items-center flex-row text">
                  <span>Aziende</span>
                </div>
                <div className="d-flex align-items-center flex-row text">
                  <span>Altre persone</span>
                </div>
              </div>
            </Col>
            <Col
              sm={12}
              md={8}
              lg={5}
              xl={6}
              className="bg-white rounded-2 p-4 border"
            >
              <h2 className="text-start fs-4">Persone</h2>
              <div className="d-flex align-items-center justify-content-start mb-">
                <Button
                  variant="outline-secondary mx-1 btn-size"
                  className="rounded-4"
                >
                  <span className="text-3"> 1°</span>
                </Button>
                <Button
                  variant="outline-secondary mx-2 btn-size"
                  className="rounded-4"
                >
                  <span className="text-3"> 2°</span>
                </Button>
                <Button
                  variant="outline-secondary mx-2 btn-size"
                  className="rounded-5"
                >
                  <span className="text-3"> 3° e oltre</span>
                </Button>
                <Button
                  variant="outline-secondary mx-2 btn-size"
                  className="rounded-5 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    fill="#fcb103"
                    className="bi bi-square-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z" />
                  </svg>
                  <span className="text-3 ">Anzianità</span>
                </Button>
              </div>

              {profiles.length > 0 ? (
                profiles.map((profile) => (
                  <Row
                    key={profile._id}
                    className="p-2 m-2"
                    onClick={() => handleProfileSelect(profile)}
                  >
                    <Col xs={2} sm={2} md={3} xl={2}>
                      <img
                        src={profile.image}
                        alt="Profile"
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50px",
                        }}
                      />
                    </Col>
                    <Col xs={6} sm={6} md={6}>
                      <div className="profile-f">
                        <h2>
                          {profile.name} {profile.surname}{" "}
                          <span className="text-2">• 2°</span>
                        </h2>
                        <p className="text-secondary">{profile.title}</p>
                        <p className="text-secondary">{profile.area}</p>
                        <p>{profile.bio}</p>
                      </div>
                    </Col>
                    <Col xs={3} sm={3} md={3} className="text-end">
                      <Button
                        variant="outline-primary"
                        className="btn-profile rounded-5 fw-bold"
                        onClick={handleClose}
                      >
                        Collegati
                      </Button>
                    </Col>
                  </Row>
                ))
              ) : (
                <></>
              )}
            </Col>
            <Col lg={4} xl={3} className="d-none d-lg-block">
              <Image
                className="w-100 rounded-2"
                src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
                alt="Linkedin Sales Navigator"
              />
            </Col>
          </Row>
        </Container>
      )}
    </>
  )
}

export default ProfileList
