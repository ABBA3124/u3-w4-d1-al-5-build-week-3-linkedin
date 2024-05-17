// NotFound.js
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="not-found-container text-center p-5 bg-white rounded-5 mt-5">
      <Row>
        <Col>
          <img src="/src/assets/notfound.gif" alt="notfound" width={100} />
          <h1 className="not-found-title">404</h1>
          <p className="not-found-subtitle">ERROR</p>
          <p className="not-found-message">
            Prova a tornare alla pagina precedente o consulta il nostro Centro
            assistenza per ulteriori informazioni informazione.
          </p>
          <Button as={Link} to="/" variant="outline-primary" className="mt-3">
            Torna alla Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
