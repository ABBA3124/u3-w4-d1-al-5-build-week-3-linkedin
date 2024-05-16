import React from "react"
import { Container, Row, Col, Image, Button } from "react-bootstrap"
import { useLocation } from "react-router-dom"

const ProfileSelected = () => {
  const location = useLocation()
  const profile = location.state?.profile

  if (!profile) {
    return <div>Profilo non disponibile.</div>
  }
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image src={profile.image} roundedCircle style={{ width: "200px", height: "200px" }} />
        </Col>
        <Col md={8}>
          <h2>
            {profile.name} {profile.surname}
          </h2>
          <p className="fs-5">{profile.title}</p>
          <p>{profile.bio}</p>
          <p>{profile.area}</p>
          {/* Aggiungi altri dettagli se necessario */}
        </Col>
      </Row>
      <Button href="/profiles" variant="secondary">
        Torna ai risultati
      </Button>
    </Container>
  )
}

export default ProfileSelected
