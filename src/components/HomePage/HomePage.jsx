import { Col } from "react-bootstrap"
import RightBar from "./RightBar/RightBar"
import CardPost from "../CardPost/CardPost"
import CreateNewPost from "../CreateNewPost/CreateNewPost"
import LeftBar from "./LeftBar/LeftBar"

const HomePage = () => {
  return (
    <div className="row">
      <Col sm={3}>
        <RightBar />
      </Col>
      <Col sm={6}>
        <CreateNewPost />
        <CardPost />
      </Col>
      <Col sm={3}>
        <LeftBar />
      </Col>
    </div>
  )
}

export default HomePage
