import { Button, Form, Image, Modal, Nav } from "react-bootstrap"
import banner from "../MainProfile/linkedin.png"
import "../MainProfile/MainProfile.css"
import { useEffect, useState } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserProfile } from "../../redux/slices/profileSlice"

const MainProfile = () => {
  const dispatch = useDispatch()
  const profileData = useSelector((state) => state.profile.profileData)
  const experiences = useSelector((state) => state.profile.experiences)

  //modale matita quindi mofica di giusto
  const [showModal, setShowModal] = useState(false)
  const handleOpenModal = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)

  const [showModal3, setShowModal3] = useState(false)
  const handleOpenModal3 = () => setShowModal3(true)
  const handleCloseModal3 = () => setShowModal3(false)

  const [newExperience, setNewExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  })

  const [showModal2, setShowModal2] = useState(false)
  const [selectedExperience, setSelectedExperience] = useState(null)

  const handleOpenModal2 = (exp) => {
    setSelectedExperience(exp)
    setShowModal2(true)
  }
  const handleCloseModal2 = () => {
    setSelectedExperience(null)
    setShowModal2(false)
  }

  useEffect(() => {
    dispatch(fetchUserProfile())
    // console.log("id profilo corrente:", profileData.name, profileData._id)
    // console.log("contenuto di experiences:", experiences)
  }, [dispatch])

  const handleSaveChanges = async () => {
    const url = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${selectedExperience._id}`
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQzMzgyNzNmZjRhNTAwMTU1ZjQxZWYiLCJpYXQiOjE3MTU3MTUyMDIsImV4cCI6MTcxNjkyNDgwMn0.56D-3ZtDcAOznLJyQzEuje7TpZFFoBnhzR_uGs3MM2M"

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(selectedExperience),
      })

      if (!response.ok) throw new Error("Failed to update experience")
      const updatedExperience = await response.json()
      console.log("Experience updated:", updatedExperience)
      handleCloseModal2() // Chiudi il modale dopo il salvataggio
      // Aggiorna lo stato delle esperienze qui se necessario
    } catch (error) {
      console.error("Error updating experience:", error)
    }
  }

  const handleDeleteExperience = async () => {
    const url = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${selectedExperience._id}`
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQzMzgyNzNmZjRhNTAwMTU1ZjQxZWYiLCJpYXQiOjE3MTU3MTUyMDIsImV4cCI6MTcxNjkyNDgwMn0.56D-3ZtDcAOznLJyQzEuje7TpZFFoBnhzR_uGs3MM2M"

    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) throw new Error("Failed to delete experience")
      console.log("Experience deleted successfully")
      handleCloseModal2() // Chiudi il modale dopo l'eliminazione
      // Qui potresti aggiornare lo stato per rimuovere l'esperienza eliminata dall'elenco visualizzato
    } catch (error) {
      console.error("Error deleting experience:", error)
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setNewExperience((prev) => ({ ...prev, [name]: value }))
  }

  const handleSaveNewExperience = async () => {
    const userId = profileData._id // Assicurati di avere l'userId
    const url = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQzMzgyNzNmZjRhNTAwMTU1ZjQxZWYiLCJpYXQiOjE3MTU3MTUyMDIsImV4cCI6MTcxNjkyNDgwMn0.56D-3ZtDcAOznLJyQzEuje7TpZFFoBnhzR_uGs3MM2M"

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newExperience),
      })

      if (!response.ok) throw new Error("Failed to create new experience")
      const result = await response.json()
      console.log("New Experience Added:", result)
      handleCloseModal3() // Chiudi il modale dopo il salvataggio
      dispatch(fetchUserProfile()) // Opzionale: aggiorna i dati dell'utente
    } catch (error) {
      console.error("Error creating new experience:", error)
    }
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
          <div className="ms-4 me-4">
            <div className="m-0 d-flex justify-content-between">
              <h3 className="fs-5">Esperienza</h3>
              <Button variant="transparent" onClick={handleOpenModal}>
                <i className="bi bi-pencil"></i>
              </Button>
            </div>
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
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <Button variant="transparent" onClick={handleCloseModal}>
                  <i className="bi bi-arrow-left"></i>
                </Button>
                Eperienza
              </div>
              <div className=" me-auto" style={{ marginLeft: "260px" }}>
                <Button variant="transparent" onClick={handleOpenModal3}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="gray"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                  </svg>
                </Button>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Form per entrare nella modalità editor ma non fa nulla mostra solo tutte l'esperienze dopo da qui si inizia a modificare ecc.. */}
          {experiences.length > 0 ? (
            experiences.map((exp) => (
              <div key={exp._id} className="px-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5>Nomemanzione: {exp.role}</h5>
                  </div>
                  <div>
                    <Button variant="transparent" onClick={() => handleOpenModal2(exp)}>
                      <i className="bi bi-pencil"></i>
                    </Button>
                  </div>
                </div>
                <h6>Nomeazienda:{exp.company}</h6>
                <div className="d-flex">
                  <p className="me-1">start esperienza: {new Date(exp.startDate).toLocaleDateString()}</p>
                  <p>fine esperienza: {new Date(exp.endDate).toLocaleDateString()}</p>
                </div>
                <p>la località di dove hai lavorato: {exp.area}</p>
                <p>Compotenze: {exp.description}</p>
                <p>username: da togliere sicuramente {exp.username}</p>
                <hr />
              </div>
            ))
          ) : (
            <p>Nessuna esperienza registrata.</p>
          )}
        </Modal.Body>
      </Modal>
      {/* inizio modale modifica del job selezionato */}
      <Modal show={showModal2} onHide={handleCloseModal2} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="d-flex align-items-center">Modifica esperienza</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="bg-light">
            <div className="p-2">
              <h6>Informa la rete</h6>
              <div className="d-flex align-items-center">
                <p>
                  Attiva l’opzione per informare la tua rete delle principali modifiche al profilo (ad esempio un nuovo
                  lavoro) e degli anniversari lavorativi. Gli aggiornamenti possono richiedere fino a 2 ore. Scopri di
                  più sulla <strong className="text-primary">condivisione delle modifiche del profilo.</strong>
                </p>
                <Form>
                  <Form.Check type="switch" id="custom-switch" label="No" />
                </Form>
              </div>
            </div>
          </div>
          {/* Form per entrare nella modalità editor ma non fa nulla mostra solo tutte l'esperienze dopo da qui si inizia a modificare ecc.. */}
          <span className="text-secondary">* Indica che è obbligatorio</span>
          {selectedExperience && (
            <div className="px-3">
              <div className="mt-2">
                <span className="text-secondary">Qualifica*</span>
                <input
                  type="text"
                  className="rounded-1 w-100"
                  placeholder="Inserisci la tua qualifica"
                  defaultValue={selectedExperience.role}
                />
              </div>
              <div className="mt-2">
                <span className="text-secondary">Tempo di impiego</span>
                <input type="text" className="rounded-1 w-100" placeholder="che tipo di contratto ?" />
                <p>
                  Scopri di più sui {}
                  <strong className="text-primary">tipi di impiego.</strong>
                </p>
              </div>
              <div className="mt-2">
                <span className="text-secondary">Nome azienda*</span>
                <input
                  type="text"
                  className="rounded-1 w-100"
                  placeholder="Inserisci il nome dell'azienda"
                  defaultValue={selectedExperience.company}
                />
              </div>
              <div className="mt-2">
                <span className="text-secondary">Località</span>
                <input
                  type="text"
                  className="rounded-1 w-100"
                  placeholder="luogo lavoro"
                  defaultValue={selectedExperience.area}
                />
                <p className="text-secondary">Scegli un tipo di località (es. da remoto)</p>
              </div>
              <div className="mt-2">
                <Form>
                  {["checkbox"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check inline label="Attualmente ricopro questo ruolo" type={type} />
                    </div>
                  ))}
                </Form>
              </div>
              <div className="mt-2">
                <span className="text-secondary">Data di inizo*</span>
                <div className="d-flex justify-content-center ">
                  <Form className="w-100 mx-1">
                    <Form.Select>
                      {/* <option>{new Date(selectedExperience.startDate).toLocaleDateString()}</option> */}
                      <option>
                        {new Date(selectedExperience.startDate)
                          .toLocaleDateString("it-IT", { month: "long" })
                          .charAt(0)
                          .toUpperCase() +
                          new Date(selectedExperience.startDate)
                            .toLocaleDateString("it-IT", { month: "long" })
                            .slice(1)
                            .toLowerCase()}
                      </option>
                      <option>Gennaio</option>
                      <option>Febbraio</option>
                      <option>Marzo</option>
                      <option>Aprile</option>
                      <option>Maggio</option>
                      <option>Giugno</option>
                      <option>Luglio</option>
                      <option>Agosto</option>
                      <option>Settembre</option>
                      <option>Ottobre</option>
                      <option>Novembre</option>
                      <option>Dicembre</option>
                    </Form.Select>
                  </Form>
                  <Form className="w-100 mx-1">
                    <Form.Select>
                      <option>{new Date(selectedExperience.startDate).getFullYear()}</option>
                      <option>2024</option>
                      <option>2023</option>
                      <option>2022</option>
                      <option>2021</option>
                      <option>2020</option>
                      <option>2019</option>
                      <option>2018</option>
                      <option>2017</option>
                      <option>2016</option>
                      <option>2015</option>
                      <option>2014</option>
                      <option>2013</option>
                    </Form.Select>
                  </Form>
                </div>
              </div>
              <div className="mt-2">
                <span className="text-secondary">Data di fine*</span>
                <div className="d-flex justify-content-center ">
                  <Form className="w-100 mx-1">
                    <Form.Select>
                      <option>
                        {new Date(selectedExperience.endDate)
                          .toLocaleDateString("it-IT", { month: "long" })
                          .charAt(0)
                          .toUpperCase() +
                          new Date(selectedExperience.endDate)
                            .toLocaleDateString("it-IT", { month: "long" })
                            .slice(1)
                            .toLowerCase()}
                      </option>
                      <option>Gennaio</option>
                      <option>Febbraio</option>
                      <option>Marzo</option>
                      <option>Aprile</option>
                      <option>Maggio</option>
                      <option>Giugno</option>
                      <option>Luglio</option>
                      <option>Agosto</option>
                      <option>Settembre</option>
                      <option>Ottobre</option>
                      <option>Novembre</option>
                      <option>Dicembre</option>
                    </Form.Select>
                  </Form>
                  <Form className="w-100 mx-1">
                    <Form.Select>
                      <option>{new Date(selectedExperience.endDate).getFullYear()}</option>
                      <option>2024</option>
                      <option>2023</option>
                      <option>2022</option>
                      <option>2021</option>
                      <option>2020</option>
                      <option>2019</option>
                      <option>2018</option>
                      <option>2017</option>
                      <option>2016</option>
                      <option>2015</option>
                      <option>2014</option>
                      <option>2013</option>
                    </Form.Select>
                  </Form>
                </div>
              </div>
              <div className="mt-2">
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>
                      <span className="text-secondary">Descizione</span>
                    </Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>
              </div>
              <div className="mt-2">
                <div>
                  <h5>Competenze</h5>
                  <p>
                    Ti consigliamo di aggiungere le 5 competenze più utilizzate in questo ruolo. Appariranno anche nella
                    sezione Competenze.
                  </p>
                  <Button className="rounded-5 bg-white text-primary fs-6 fw-bold">+ Aggiungi media</Button>
                </div>
              </div>
              <div className="mt-2">
                <div>
                  <h5>Media</h5>
                  <p>
                    Aggiungi contenuti multimediali come immagini, documenti, siti o presentazioni. Scopri di più sui
                    <strong className="text-primary">tipi di file multimediali supportati</strong>
                  </p>
                  <Button className="rounded-5 bg-white text-primary fs-6 fw-bold">+ Aggiungi media</Button>
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <div>
            <Button variant="white" className="text-secondary" onClick={handleDeleteExperience}>
              Elimina esperienza
            </Button>
          </div>
          <div>
            <Button variant="primary" className="rounded-5" style={{ width: "70px" }} onClick={handleSaveChanges}>
              Salva
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
      {/* modale 3 per aggiungere esperienze */}
      <Modal show={showModal3} onHide={handleCloseModal3} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="d-flex align-items-center">Aggiungi esperienza</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="bg-light">
            <div className="p-2">
              <h6>Informa la rete</h6>
              <div className="d-flex align-items-center">
                <p>
                  Attiva l’opzione per informare la tua rete delle principali modifiche al profilo (ad esempio un nuovo
                  lavoro) e degli anniversari lavorativi. Gli aggiornamenti possono richiedere fino a 2 ore. Scopri di
                  più sulla <strong className="text-primary">condivisione delle modifiche del profilo.</strong>
                </p>
                <Form>
                  <Form.Check type="switch" id="custom-switch" label="No" />
                </Form>
              </div>
            </div>
          </div>
          <span className="text-secondary">* Indica che è obbligatorio</span>
          <div className="px-3">
            <div className="mt-2">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <span className="text-secondary">Qualifica*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="role"
                    value={newExperience.role}
                    onChange={handleInputChange}
                    placeholder="Esempio: Retail Sales Manager"
                  />
                </Form.Group>
              </Form>
            </div>
            <div className="mt-2">
              <span className="text-secondary">Tempo di impiego</span>
              <Form className="w-100 mx-1">
                <Form.Select>
                  <option>Seleziona</option>
                  <option>A tempo pieno</option>
                  <option>Part-time</option>
                  <option>Autonomo</option>
                  <option>Freelance</option>
                  <option>A contratto</option>
                  <option>Stage</option>
                  <option>Apprendistato</option>
                  <option>Stagionale</option>
                </Form.Select>
              </Form>
              <p>
                Scopri di più sui {}
                <strong className="text-primary">tipi di impiego.</strong>
              </p>
            </div>
            <div className="mt-2">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <span className="text-secondary">Nome azienda*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="company"
                    value={newExperience.company}
                    onChange={handleInputChange}
                    placeholder="Esempio: Microsoft"
                  />
                </Form.Group>
              </Form>
            </div>
            <div className="mt-2">
              <Form.Group className="mb-3">
                <Form.Label>
                  <span className="text-secondary">Località</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="area"
                  value={newExperience.area}
                  onChange={handleInputChange}
                  placeholder="Esempio: Milano, italia"
                />
              </Form.Group>
            </div>
            <div className="mt-2">
              <span className="text-secondary">Tipo di Località</span>
              <Form className="w-100 mx-1">
                <Form.Select>
                  <option>Seleziona</option>
                  <option>In sede</option>
                  <option>Ibrida</option>
                  <option>Da remoto</option>
                </Form.Select>
              </Form>
              <p className="text-secondary">Scegli un tipo di località (es. da remoto)</p>
            </div>
            <div className="mt-2">
              <Form>
                {["checkbox"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check inline label="Attualmente ricopro questo ruolo" type={type} />
                  </div>
                ))}
              </Form>
            </div>
            <div className="mt-2">
              <Form className="w-100 mx-1">
                <Form.Group className="mb-3">
                  <Form.Label>
                    <span className="text-secondary">Data di inizo*</span>
                  </Form.Label>
                  <Form.Control
                    type="date"
                    name="startDate"
                    value={newExperience.startDate}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Form>
            </div>
            <div className="mt-2">
              <div className="d-flex justify-content-center ">
                <Form className="w-100 mx-1">
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <span className="text-secondary">Data di fine*</span>
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="endDate"
                      value={newExperience.endDate}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Form>
              </div>
            </div>
            <div className="mt-2">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <span className="text-secondary">Descizione</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    value={newExperience.description}
                    onChange={handleInputChange}
                    rows={3}
                  />
                </Form.Group>
              </Form>
            </div>
            <div className="mt-2">
              <div>
                <h5>Competenze</h5>
                <p>
                  Ti consigliamo di aggiungere le 5 competenze più utilizzate in questo ruolo. Appariranno anche nella
                  sezione Competenze.
                </p>
                <Button className="rounded-5 bg-white text-primary fs-6 fw-bold">+ Aggiungi media</Button>
              </div>
            </div>
            <div className="mt-2">
              <div>
                <h5>Media</h5>
                <p>
                  Aggiungi contenuti multimediali come immagini, documenti, siti o presentazioni. Scopri di più sui
                  <strong className="text-primary">tipi di file multimediali supportati</strong>
                </p>
                <Button className="rounded-5 bg-white text-primary fs-6 fw-bold">+ Aggiungi media</Button>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="rounded-5" style={{ width: "70px" }} onClick={handleSaveNewExperience}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default MainProfile
