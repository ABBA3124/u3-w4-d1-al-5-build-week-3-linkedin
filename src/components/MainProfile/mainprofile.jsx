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
  )
}

export default MainProfile
