import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./ProfileList.css";

const ProfileList = () => {
  const profiles = useSelector(state => state.search.profiles);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (profiles.length >= 0) {
      setShow(true); // Apri il modale quando i profili vengono aggiornati
    }
  }, [profiles]); // aggiungiamo profiles come dipendenza per attivare l'effetto quando cambia

  const handleClose = () => setShow(false);

  return (
    <>
      {show && (
        <Container className="bg-white p-5 my-5" id="profile">
          {profiles.length > 0 ? (
            <h2 className="text-start mb-5 fs-3">Persone</h2>
          ) : (
            <>
              <img src="/src/assets/notfound.gif" width={150} />
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

          {profiles.length > 0 ? (
            profiles.map(profile => (
              <Row key={profile._id} className=" p-2  m-2">
                <Col md={3}>
                  {" "}
                  <img
                    src={profile.image}
                    alt="Profile"
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "50px",
                    }}
                  />
                </Col>

                <Col md={6}>
                  <div className="profile-f ">
                    <h2>
                      {profile.name} {profile.surname}
                    </h2>
                    <p className="fw-bold"> {profile.title}</p>
                    <p>{profile.area}</p>
                    <p>{profile.bio}</p>
                  </div>
                </Col>
                <Col md={3}>
                  <Button
                    variant="outline-primary"
                    className="btn-profile rounded-5 fw-bold"
                    onClick={handleClose}
                  >
                    Messaggio
                  </Button>
                </Col>
                <hr />
              </Row>
            ))
          ) : (
            <></>
          )}
        </Container>
      )}
    </>
  );
};

export default ProfileList;
