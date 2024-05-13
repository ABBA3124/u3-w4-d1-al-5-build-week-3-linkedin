import MyNavbar from "../NavBar/MyNavbar"
import MainProfile from "../MainProfile/mainprofile"
import MyFooter from "../Footer/MyFooter"
import AsideBar from "../AsideBar/AsideBar"

const HomePageMain = () => {
  return (
    <div className="d-flex flex-column min-vh-100 justify-content-between">
      <MyNavbar />
      <div className="container pt-4">
        <div className="row">
          <div className="col-8">
            <MainProfile />
          </div>
          <div className="col-4">
            <AsideBar />
          </div>
        </div>
      </div>
      <MyFooter />
    </div>
  )
}

export default HomePageMain
