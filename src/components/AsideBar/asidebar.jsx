/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"
import { Alert, Button, Dropdown, Image, Modal, Stack } from "react-bootstrap"
import "./AsideBar.css"

const AsideBar = () => {
  const [profilesData, setProfilesData] = useState(null)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const toggleAnn = () => {
    const ann = document.getElementById("annuncio")
    ann.style.display = "none"
  }
  const randomIndex = () => {
    let i = Math.floor(Math.random() * profilesData.length)
    return profilesData.slice(i, i + 40)
  }

  // let random = Math.floor(Math.random() * 5)
  // let secondRandom = Math.floor(Math.random() * (10 - 5 + 1) + 5)

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://striveschool-api.herokuapp.com/api/profile/"

      const options = {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYmRiNDE2N2U1MzAwMTVmYTY5NzAiLCJpYXQiOjE3MTU2MDY2NTgsImV4cCI6MTcxNjgxNjI1OH0.Fvewj-uKDEzpLXtToPnuADoZiHswQ4IKA83K7-3k7YE",
        },
      }
      try {
        const response = await fetch(url, options)
        const data = await response.json()
        setProfilesData(data)
        // {
        //   profilesData && console.log(randomIndex(profilesData))
        // }
      } catch (error) {
        console.error("Error fetching data: ", error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      {/* //?primo quadrante */}
      <Stack className="p-3 border rounded-2 m-2 bg-light">
        <div className="border-bottom mb-2 d-flex justify-content-between align-items-start">
          <div>
            <h3>Lingua delprofilo</h3>
            <p>Italiano</p>
          </div>
          <Button variant="transparent">
            <i className="bi bi-pen"></i>
          </Button>
        </div>
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h3>profilo pubblico e URL</h3>
            {/* //TODO url dinamico */}
            <p>https://striveschool-api.herokuapp.com/api/profile</p>
          </div>
          <Button variant="transparent">
            <i className="bi bi-pen"></i>
          </Button>
        </div>
      </Stack>
      {/* //?fine primo quadrante */}
      {/* //? INZIO SECONDO QUADRANTE */}
      <Stack id="annuncio" className="p-3 border rounded-2 m-2 bg-light">
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
            className="mb-3"
            src="https://media.licdn.com/dms/image/C5610AQFsEzF4w0wyjQ/image-shrink_1280/0/1675089976685?e=1715857200&v=beta&t=2b1VxkmhDDN_eVnCjBBXYrfT0gBUzOMrxhNbmmKwjjw"
            alt="Linkedin Sales Navigator"
          />
          <Button variant="outline-primary" className="d-block rounded-5 ">
            Provalo gratis
          </Button>
        </div>
      </Stack>
      {/* //? FINE SECONDO QUADRANTE */}
      {/* //? TERZO QUADRANTE */}
      {/* //TODO valori non statici ma dinamici da GENERARE */}
      {profilesData ? (
        <Stack className="p-3 border rounded-2 m-2 bg-light bg-light">
          <h4>Altri profili simili</h4>
          <div className="d-flex flex-column gap-2 border-bottom mb-2 ">
            {profilesData &&
              randomIndex()
                .slice(0, 2)
                .map((obj) => {
                  return (
                    <div className="d-flex gap-2 border-bottom" key={obj._id}>
                      <div className="w-25">
                        <Image className="img-side w-100" src={obj.image} />
                      </div>
                      <div className="flex-grow-1">
                        <h5>
                          {obj.name}
                          {obj.surname}
                          <span></span>
                        </h5>
                        <p>{obj.title}</p>
                        <Button
                          className="mb-4 w-50 rounded-5"
                          variant="outline-secondary"
                        >
                          <i className="bi bi-plus"></i>
                          Segui
                        </Button>
                      </div>
                    </div>
                  )
                })}
          </div>
          <div className="text-center ">
            <Button
              onClick={handleShow}
              variant="transparent"
              className="m-0 w-100"
            >
              Mostra tutto
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Persone che potresti conoscere</Modal.Title>
              </Modal.Header>
              <Modal.Body
                className="overflow-auto h-400"
                style={{ height: "400px" }}
              >
                {profilesData &&
                  randomIndex(profilesData).map((obj) => {
                    return (
                      <div
                        className="d-flex gap-2 border-bottom mb-3"
                        key={obj._id}
                      >
                        <div className="w-25">
                          <Image className="img-side w-100" src={obj.image} />
                        </div>
                        <div className="flex-grow-1">
                          <h5>
                            {obj.name}
                            {obj.surname}
                            <span></span>
                          </h5>
                          <p>{obj.title}</p>
                          <Button
                            className="mb-4 w-50 rounded-5"
                            variant="outline-secondary"
                          >
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
        <Stack className="p-3 border rounded-2 m-2 bg-light bg-light">
          <Alert className="m-0">non abbiamo trovato utenti</Alert>
        </Stack>
      )}

      {/* //? FINE TERZO QUADRANTE */}
      {/* //?INIZIO QUARTO QUADRANTE */}
      {profilesData ? (
        <Stack className="p-3 border rounded-2 m-2 bg-light bg-light">
          <h4>Persone che potresti conoscere</h4>
          <div className="d-flex flex-column gap-2 border-bottom mb-2 ">
            {profilesData &&
              randomIndex()
                .slice(0, 5)
                .map((obj) => {
                  return (
                    <div className="d-flex gap-2 border-bottom" key={obj._id}>
                      <div className="w-25">
                        <Image className="img-side w-100" src={obj.image} />
                      </div>
                      <div className="flex-grow-1">
                        <h5>
                          {obj.name}
                          {obj.surname}
                          <span></span>
                        </h5>
                        <p>{obj.title}</p>
                        <Button
                          className="mb-4 w-50 rounded-5"
                          variant="outline-secondary"
                        >
                          <i className="bi bi-person-add"></i>
                          Collegati
                        </Button>
                      </div>
                    </div>
                  )
                })}
          </div>
          <div className="text-center ">
            <Button
              onClick={handleShow}
              variant="transparent"
              className="m-0 w-100"
            >
              Mostra tutto
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Persone che potresti conoscere</Modal.Title>
              </Modal.Header>
              <Modal.Body
                className="overflow-auto h-400"
                style={{ height: "400px" }}
              >
                {profilesData &&
                  randomIndex(profilesData).map((obj) => {
                    return (
                      <div
                        className="d-flex gap-2 border-bottom mb-3"
                        key={obj._id}
                      >
                        <div className="w-25">
                          <Image className="img-side w-100" src={obj.image} />
                        </div>
                        <div className="flex-grow-1">
                          <h5>
                            {obj.name}
                            {obj.surname}
                            <span></span>
                          </h5>
                          <p>{obj.title}</p>
                          <Button
                            className="mb-4 w-50 rounded-5"
                            variant="outline-secondary"
                          >
                            <i className="bi bi-person-add"></i>
                            Collegati
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
        <Stack className="p-3 border rounded-2 m-2 bg-light bg-light">
          <Alert className="m-0">non abbiamo trovato utenti</Alert>
        </Stack>
      )}
      {/* //?FINE QUARTO QUADRANTE */}
      {/* //?quadrante immagine pubblicita */}
      <div className=" border rounded-2 m-2">
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
