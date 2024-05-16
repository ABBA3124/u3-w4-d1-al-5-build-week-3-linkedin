import { Col } from "react-bootstrap"
import AsideBar from "../AsideBar/asidebar"
import MainProfile from "../MainProfile/mainprofile"

const MainProfileEAsideBar = () => {
  return (
    <div className="row ">
      <Col className="ms-auto" sm={12} md={7} lg={8} xl={7}>
        <MainProfile />
      </Col>
      <Col className="me-auto" sm={12} md={5} lg={4} xl={3}>
        <AsideBar />
      </Col>
    </div>
  )
}

export default MainProfileEAsideBar
