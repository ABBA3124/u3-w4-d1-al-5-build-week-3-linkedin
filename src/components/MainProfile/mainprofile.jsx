import { Button, Image } from "react-bootstrap"
import banner from "../MainProfile/linkedin.png"
import "../MainProfile/MainProfile.css"
import { useEffect, useState } from "react"

const MainProfile = () => {
  const [profileData, setProfileData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://striveschool-api.herokuapp.com/api/profile/6551e9ffc55e7e0018f83c01"
      // const id = "6551e9ffc55e7e0018f83c01"
      // const urlCompleta = url + id
      const options = {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzljYTE2N2U1MzAwMTVmYTY5ODQiLCJpYXQiOjE3MTU1ODc1MzAsImV4cCI6MTcxNjc5NzEzMH0.y7UvJ406k0BxdWFWksz4dvS9wpHr6hVRSLgJmnoySyk",
        },
      }
      try {
        const response = await fetch(url, options)
        const data = await response.json()
        setProfileData(data)
        console.log("cosa mi arriva dopo la fetch del main", data)
      } catch (error) {
        console.error("errore nella fetch mainpage: ", error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="text-center bg-warning">
      <div className="position-relative" style={{ marginBottom: "100px" }}>
        <div>
          <Image src={banner} height={"300px"} width={"100%"} style={{ objectFit: "cover" }} alt="profilo banner" />
        </div>
        <div className="position-absolute top-100 start-0 translate-middle prova">
          <Image
            src="https://media.licdn.com/dms/image/D4E35AQHM5FTtvxFydg/profile-framedphoto-shrink_200_200/0/1714374002661?e=1716199200&v=beta&t=1UyWISvh2PCy4xXyM5vgUcebaQHtJoki3rK1tQ0V1ro"
            alt="logo profilo"
            height={"180px"}
            className="rounded-circle border border-3"
          />
        </div>
      </div>
      <div className="text-start ms-4">
        {profileData ? profileData.nome : "Nome Utente"}
        {profileData ? (
          <>
            <h1>
              {profileData.name} {profileData.surname}
            </h1>
            <p className="fs-5">{profileData.title}</p>
            <p>
              {profileData.area}{" "}
              <a href="#" className="">
                Informazioni di contatto
              </a>
            </p>
          </>
        ) : (
          <p>Caricamento dati...</p>
        )}
      </div>
      <div className="me-auto text-start">
        <Button className="ms-2 rounded-5 py-1">Disponibile per</Button>
        <Button className="ms-2 rounded-5 border-primary text-primary py-1" variant="white">
          Aggiungi sezione del profilo
        </Button>
        <Button className="ms-2 rounded-5 text-black border-black py-1" variant="white">
          Altro
        </Button>
      </div>
      <div className="container ms-auto me-auto mt-2 text-start">
        <div className="row">
          <div className="col-6">
            <div className="rounded-3 p-2 border" style={{ backgroundColor: "rgb(142, 203, 238, 0.651)" }}>
              <p className="mb-0">
                <strong>Disponiile per lavorare</strong>
              </p>
              <p className="mb-0">Ruoli di Sviluppatore Web, Sviluppatore front-end,..</p>
              <a href="#">Mostra dettagli</a>
            </div>
          </div>
          <div className="col-6">
            <div className="rounded-3 p-2 border bg-white">
              <p className="mb-0">
                <strong style={{ fontWeight: "600" }}>Fai sapere che stai facendo selezione</strong> e attrai candidati
                qualificati.
              </p>
              <a href="#">Mostra dettagli</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainProfile
