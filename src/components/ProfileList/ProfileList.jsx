import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Modal, Button } from "react-bootstrap"
import "./ProfileList.css"

const ProfileList = () => {
  const profiles = useSelector((state) => state.search.profiles)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (profiles.length >= 0) {
      setShow(true) // Apri il modale quando i profili vengono aggiornati
    }
  }, [profiles]) // aggiungiamo profiles come dipendenza per attivare l'effetto quando cambia

  const handleClose = () => setShow(false)

  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Risultati Ricerca</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {profiles.length > 0 ? (
            profiles.map((profile) => (
              <div key={profile._id} className="border border-2 p-2 rounded-3 m-2">
                <h2>
                  {profile.name} {profile.surname}
                </h2>
                <p>{profile.title}</p>
                <p>{profile.bio}</p>
                <p>{profile.area}</p>
                <img src={profile.image} alt="Profile" style={{ width: "100px", height: "100px" }} />
                <p>Data di creazione: {new Date(profile.createdAt).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <p>Nessun profilo trovato.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProfileList
