import { Col } from "react-bootstrap"
import AsideBar from "../AsideBar/asidebar"
import MainProfile from "../MainProfile/mainprofile"

const MainProfileEAsideBar = () => {
  return (
    <div className="row">
      <Col sm={8}>
        <MainProfile />
      </Col>
      <Col sm={4}>
        <AsideBar />
      </Col>
    </div>
  )
}

export default MainProfileEAsideBar
