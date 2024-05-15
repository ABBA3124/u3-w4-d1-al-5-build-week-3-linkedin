import { Col } from "react-bootstrap"
import RightBar from "./RightBar/RightBar"
import CardPost from "../CardPost/CardPost"
import CreateNewPost from "../CreateNewPost/CreateNewPost"

const HomePage = () => {
  return (
    <div className="row">
      <Col sm={4}>
        <RightBar />
      </Col>
      <Col sm={8}>
        <CreateNewPost />
        <CardPost />
      </Col>
    </div>
  )
}

export default HomePage
