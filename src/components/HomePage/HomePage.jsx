import { Col } from "react-bootstrap"
import RightBar from "./RightBar/RightBar"
import CardPost from "../CardPost/CardPost"
import CreateNewPost from "../CreateNewPost/CreateNewPost"
import LeftBar from "./LeftBar/LeftBar"

const HomePage = () => {
  return (
    <div className="row">
      <Col className="col-12 col-md-4 col-lg-3">
        <RightBar />
      </Col>
      <Col className="col-12 col-md-8 col-lg-5">
        <CreateNewPost />
        <CardPost />
      </Col>
      <Col className="d-none d-lg-block col-lg-3">
        <LeftBar />
      </Col>
    </div>
  )
}

export default HomePage
