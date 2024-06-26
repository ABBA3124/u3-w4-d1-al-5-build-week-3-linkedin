import { useEffect, useState } from "react"
import { Alert, Button, Dropdown, Image, Modal, Stack } from "react-bootstrap"
import "./AsideBar.css"

const AsideBar = () => {
  const [profilesData, setProfilesData] = useState(null)
  const [show, setShow] = useState(false)
  const [startIndex, setStartIndex] = useState(0)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const toggleAnn = () => {
    const ann = document.getElementById("annuncio")
    ann.style.display = "none"
  }

  //mescolare gli utenti
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://striveschool-api.herokuapp.com/api/profile/"

      const options = {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQzYTZiOTNmZjRhNTAwMTU1ZjQyYTMiLCJpYXQiOjE3MTU3MDk2MjUsImV4cCI6MTcxNjkxOTIyNX0.OKaZmow8A7tNcV7XNX02dyp596uYGkJaI0Q8wIDTI9k",
        },
      }
      try {
        const response = await fetch(url, options)
        const data = await response.json()
        if (data) {
          const shuffledData = shuffleArray(data.slice()) // Crea una copia e mescola
          setProfilesData(shuffledData)
          const randomIndex = Math.floor(Math.random() * (shuffledData.length - 2)) // Assicurati di avere almeno due elementi da mostrare
          setStartIndex(randomIndex)
        }
      } catch (error) {
        console.error("Error fetching data: ", error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      {/* //?primo quadrante */}
      <Stack className="p-3 border rounded-2 mb-2  bg-white">
        <div className="border-bottom mb-2 d-flex justify-content-between align-items-start">
          <div className="text-start">
            <h5>Lingua del profilo</h5>
            <p className="fw-lighter">Italiano</p>
          </div>
          <Button variant="transparent">
            <i className="bi bi-pen"></i>
          </Button>
        </div>
        <div className="d-flex justify-content-between align-items-start mt-2">
          <div className="text-start">
            <h5>profilo pubblico e URL</h5>
            {/* //TODO url dinamico */}
            <p className="fw-lighter">https://striveschool-api.herokuapp.com/api/profile</p>
          </div>
          <Button variant="transparent">
            <i className="bi bi-pen"></i>
          </Button>
        </div>
      </Stack>
      {/* //?fine primo quadrante */}
      {/* //? INZIO SECONDO QUADRANTE */}
      <Stack id="annuncio" className="p-3 border rounded-2 mb-2 bg-white ">
        {/* className="d-flex justify-content-end dropdown" */}
        <Dropdown className="d-flex justify-content-end dropdown">
          <Dropdown.Toggle variant="transparent" id="dropdown-basic">
            Annuncio
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => {
                toggleAnn()
              }}
            >
              Chiudi ✖️
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p>Linkedin Sales Navigator</p>
          <Image
            src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
            alt="Linkedin Sales Navigator"
          />
          <Button variant="outline-primary" className="d-block rounded-5 ">
            Provalo gratis
          </Button>
        </div>
      </Stack>
      {/* //? FINE SECONDO QUADRANTE */}
      {/* //? TERZO QUADRANTE */}
      {profilesData ? (
        <Stack className="p-3 border rounded-2 mb-2 bg-white">
          <h4 className="text-start">Altri profili simili</h4>
          <div className="d-flex flex-column gap-2 border-bottom mb-2 ">
            {profilesData && (
              <div>
                {profilesData.slice(startIndex, startIndex + 2).map((obj) => (
                  <div className="d-flex gap-2 border-bottom p-2" key={obj._id}>
                    <div>
                      <Image roundedCircle className="img-side " src={obj.image} />
                    </div>
                    <div className="flex-grow-1 text-start">
                      <h5 className="m-0">
                        {obj.name} {obj.surname}
                      </h5>
                      <p className="mb-2">{obj.title}</p>
                      <Button className="mb-3 rounded-pill px-4 py-1" variant="outline-secondary">
                        <i className="bi bi-plus"></i> Segui
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="text-center ">
            <Button onClick={handleShow} variant="transparent" className="m-0 w-100">
              Mostra tutto
            </Button>
            <Modal id="sidebar-modal" show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Persone che potresti conoscere</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {profilesData &&
                  profilesData.slice(0, 20).map((obj) => {
                    return (
                      <div className="d-flex gap-2 border-bottom mb-2" key={obj._id}>
                        <div className="w-25">
                          <Image roundedCircle className="img-side w-100" src={obj.image} />
                        </div>
                        <div className="flex-grow-1">
                          <h5>
                            {obj.name}
                            {obj.surname}
                            <span></span>
                          </h5>
                          <p>{obj.title}</p>
                          <Button className="mb-4 w-50 rounded-5" variant="outline-secondary">
                            <i className="bi bi-plus"></i>
                            Segui
                          </Button>
                        </div>
                      </div>
                    )
                  })}
              </Modal.Body>
            </Modal>
          </div>
        </Stack>
      ) : (
        <Alert>non abbiamo torvato nessun profilo 😒 </Alert>
      )}

      {/* //? FINE TERZO QUADRANTE */}

      {/* //?  INZIO QUARTQUADRANTE */}
      {profilesData ? (
        <Stack className="p-3 border rounded-2 mb-2 bg-white">
          <h4>Persone che potresti conoscere</h4>
          <div className="d-flex flex-column gap-2 border-bottom mb-2 ">
            {profilesData &&
              profilesData.slice(0, 5).map((obj) => {
                return (
                  <div className="d-flex gap-2 border-bottom p-2" key={obj._id}>
                    <div>
                      <Image roundedCircle className="img-side " src={obj.image} />
                    </div>
                    <div className="flex-grow-1 text-start">
                      <h5 className="m-0">
                        {obj.name}
                        {obj.surname}
                        <span></span>
                      </h5>
                      <p className="mb-2">{obj.title}</p>
                      <Button className="mb-3 rounded-pill px-4 py-1" variant="outline-secondary">
                        <i className="bi bi-plus"></i>
                        Segui
                      </Button>
                    </div>
                  </div>
                )
              })}
          </div>
          <div className="text-center ">
            <Button onClick={handleShow} variant="transparent" className="m-0 w-100">
              Mostra tutto
            </Button>
            <Modal id="sidebar-modal" show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Persone che potresti conoscere</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {profilesData &&
                  profilesData.slice(0, 20).map((obj) => {
                    return (
                      <div className="d-flex gap-2 border-bottom mb-2" key={obj._id}>
                        <div className="w-25">
                          <Image roundedCircle className="img-side w-100" src={obj.image} />
                        </div>
                        <div className="flex-grow-1">
                          <h5>
                            {obj.name}
                            {obj.surname}
                            <span></span>
                          </h5>
                          <p>{obj.title}</p>
                          <Button className="mb-4 w-50 rounded-5" variant="outline-secondary">
                            <i className="bi bi-plus"></i>
                            Segui
                          </Button>
                        </div>
                      </div>
                    )
                  })}
              </Modal.Body>
            </Modal>
          </div>
        </Stack>
      ) : (
        <Alert>non abbiamo torvato nessun profilo 😒 </Alert>
      )}
      {/* //? FINE QUARTO  QUADRANTE */}
      {/* //?quadrante immagine pubblicita */}
      <div className=" border rounded-2 mb-2">
        <Image
          className="w-100 rounded-2"
          src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
        />
      </div>
      {/* //?fine quadrante img pubblicita */}
    </div>
  )
}
export default AsideBar
