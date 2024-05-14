import { Button, Image, Nav } from "react-bootstrap"
import banner from "../MainProfile/linkedin.png"
import "../MainProfile/MainProfile.css"
import { useEffect } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserProfile } from "../../redux/slices/profileSlice"

const MainProfile = () => {
  const dispatch = useDispatch()
  const profileData = useSelector((state) => state.profile.profileData)
  const experiences = useSelector((state) => state.profile.experiences)

  useEffect(() => {
    dispatch(fetchUserProfile())
  }, [dispatch])

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
    <div>
      {/* qui inizia le principali info del profilo */}
      <div className="border rounded-3 bg-white mb-3">
        <div className="text-center">
          <div className="position-relative" style={{ marginBottom: "100px" }}>
            <div>
              <Image
                src={banner}
                height={"300px"}
                width={"100%"}
                style={{ objectFit: "cover", borderTopLeftRadius: "50px", borderTopRightRadius: "50px" }}
                alt="profilo banner"
              />
            </div>
            <div className="position-absolute top-100 start-0 translate-middle prova">
              {profileData && (
                <Image
                  src={profileData.image}
                  alt="logo profilo"
                  height={"150px"}
                  width={"150px"}
                  className="rounded-circle border border-3"
                />
              )}
            </div>
          </div>
          <div className="p-4">
            <div className="text-start">
              {profileData ? (
                <>
                  <h1>
                    {profileData.name} {profileData.surname}
                  </h1>
                  <p className="fs-5">{profileData.title}</p>
                  <p>
                    {profileData.area} <a href="#">Informazioni di contatto</a>
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
              <Slider className="custom-slider w-50" {...settings}>
                <div className="text-start" style={{ backgroundColor: "rgb(142, 203, 238, 0.651)" }}>
                  <div className="rounded-3 border me-2 p-1">
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
                  <div className="rounded-3 border me-2 p-1">
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
                  <div className="rounded-3 border me-2 p-1">
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
      {/* qui fine le principali info del profilo */}
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
          <div className="row justify-content-around mt-1">
            <div className="col-4 d-flex w-25">
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
                <strong>94 visualizzazioni del profilo</strong>
                <p>Scopri chi ha visitato il tuo profilo.</p>
              </div>
            </div>
            <div className="col-4 d-flex w-25">
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
                <path d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z"></path>
              </svg>
              <div className="ms-1">
                <strong>94 visualizzazioni del profilo</strong>
                <p>Scopri chi ha visitato il tuo profilo.</p>
              </div>
            </div>
            <div className="col-4 d-flex w-25">
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
              {profileData ? (
                <>
                  <p className="fs-6">{profileData.bio}</p>
                </>
              ) : (
                <p>Caricamento dati...</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* qui fine la terza sezione */}
      {/* qui inizia sezione EXPERIENCE */}
      <div className="border rounded-3 bg-white mb-3">
        <div className="pt-2 text-start">
          <div className="ms-4">
            <h3 className="m-0 fs-5">Esperienza</h3>
            <div className="mt-1">
              {experiences.length > 0 ? (
                experiences.map((exp) => (
                  <div key={exp._id} className="px-3">
                    <h5>
                      {exp.role} at {exp.company}
                    </h5>
                    <p>start date: {new Date(exp.startDate).toLocaleDateString()}</p>
                    <p>descrizione: {exp.description}</p>
                    <p>area: {exp.area}</p>
                    <p>username: {exp.username}</p>
                  </div>
                ))
              ) : (
                <p>Nessuna esperienza registrata.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* qui fine sezione EXPERIENCE */}
    </div>
  )
}

export default MainProfile
