import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

const PlaceholderCard = () => {
  return (
    <div className="d-flex justify-content-around   ">
      <Card style={{ width: "60vh" }} className="p-2 ">
        <Placeholder
          as={Card.Title}
          animation="glow"
          className="align-items-start"
        >
          <Placeholder
            xs={1}
            className="rounded-5 mt-3 me-5 p-2"
            style={{ borderRadius: "203em" }}
          />
          <Placeholder xs={11} className=" mt-3 w-50" />
          <Placeholder xs={0} className="mx-3 my-3" />
          <Placeholder xs={11} className="my-3" />
        </Placeholder>

        <Card.Img
          src="/src/assets/placeholder3.gif"
          alt="placeholder"
          className="rounded-3 "
        />
        <hr />
        <Card.Body>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={2} className="rounded-5 mx-2" />
            <Placeholder xs={2} className="rounded-5 mx-2" />
            <Placeholder xs={2} className="rounded-5 mx-2" />
            <Placeholder xs={2} className="rounded-5 mx-2" />
          </Placeholder>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PlaceholderCard;
