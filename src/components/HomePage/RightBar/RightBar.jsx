import { useEffect } from "react"
import { Button, Image, Nav } from "react-bootstrap"
import "./RightBar.css"
import banner from "../../MainProfile/linkedin.png"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserProfile } from "../../../redux/slices/profileSlice"

const RightBar = () => {
  const dispatch = useDispatch()
  const profileData = useSelector((state) => state.profile.profileData)

  useEffect(() => {
    dispatch(fetchUserProfile())
  }, [dispatch])

  return (
    <div>
      <div className="border rounded-3 bg-white mb-3">
        <div className="text-center">
          <div className="position-relative" style={{ marginBottom: "100px" }}>
            <div>
              <Image
                src={banner}
                width={"100%"}
                style={{
                  objectFit: "cover",
                  borderTopLeftRadius: "50px",
                  borderTopRightRadius: "50px",
                }}
                alt="profilo banner"
              />
            </div>
            <div className="position-relative">
              {profileData && (
                <Image
                  src={profileData.image}
                  alt="logo profilo"
                  height={"130px"}
                  className="rounded-circle border-3 position-absolute translate-middle"
                  style={{ objectFit: "cover" }}
                />
              )}
            </div>
          </div>
          <div className="p-3">
            <div className="text-center">
              {profileData ? (
                <>
                  <Nav.Link className="fs-5 bold">
                    {profileData.name} {profileData.surname}
                  </Nav.Link>
                  <p className="fs-6 text-secondary">{profileData.title}</p>
                </>
              ) : (
                <p>Caricamento dati...</p>
              )}
            </div>
            <hr />
            <Button
              className="w-100 bold text-start px-0 pt-0"
              variant="outline-light"
            >
              <p className="fs-6 mb-0 text-secondary bold">Collegamenti</p>
              <Nav.Link className="bold text-black">
                Espandi la tua rete
              </Nav.Link>
            </Button>
            <hr />
            <div className="text-start">
              <Button
                className="w-100 bold text-start px-0"
                variant="outline-light"
              >
                <p className="text-secondary mb-0">
                  Ottieni strumenti e informazioni in esclusiva
                </p>
                <div className="text-start d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#fcb103"
                    className="bi bi-square-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z" />
                  </svg>
                  <Nav.Link className="bold text-black px-1">
                    Ottieni Premium per 0 Eur
                  </Nav.Link>
                </div>
              </Button>
              <hr />
              <Button
                className="w-100 bold text-start px-0"
                variant="outline-light"
              >
                <div className="text-start d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="black"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z"></path>
                  </svg>
                  <Nav.Link className="bold text-black">
                    Elementi salvati
                  </Nav.Link>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded-3 bg-white mb-3 py-2">
        <Nav.Link className="text-primary text-start px-4 py-2 bold">
          Gruppi
        </Nav.Link>
        <div className="d-flex justify-content-between align-items-center px-4">
          <Nav.Link className="text-primary text-start  py-2 bold">
            Eventi
          </Nav.Link>
          <Button
            variant="outline-light"
            style={{ border: "none" }}
            className="rounded-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="black"
              className="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
          </Button>
        </div>
        <Nav.Link className="text-primary text-start px-4 pt-2 bold pb-2">
          Hashtag seguiti
        </Nav.Link>
        <Button className="w-100 bold p-0" variant="outline-light">
          <p className="text-black mb-0 fs-5">Scopri di più</p>
        </Button>
      </div>
    </div>
  )
}
export default RightBar
