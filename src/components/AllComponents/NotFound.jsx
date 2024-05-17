// NotFound.js
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="not-found-container text-center p-5 rounded-5 mt-5">
      <Row>
        <Col>
          <img
            src="/src/assets/Screenshot_2024-05-17_120904-removebg-preview_1.png"
            alt="notfound"
            width={250}
          />
          <h1 className="not-found-title mb-4">Questa pagina non esiste</h1>

          <p className="not-found-message">
            Prova a tornare alla pagina precedente o consulta il nostro Centro
            assistenza per ulteriori informazioni informazione.
          </p>
          <Button
            as={Link}
            to="/"
            variant="outline-primary"
            className="mt-3 rounded-4"
          >
            Torna alla Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
