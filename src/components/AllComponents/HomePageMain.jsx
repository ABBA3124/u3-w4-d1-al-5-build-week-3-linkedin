import MyNavbar from "../NavBar/MyNavbar"
import MainProfile from "../MainProfile/mainprofile"
import MyFooter from "../Footer/MyFooter"
import AsideBar from "../AsideBar/asidebar"
import "../AllComponents/HomePageMain.css"
import ProfileList from "../ProfileList/ProfileList"

const HomePageMain = () => {
  return (
    <div className="d-flex flex-column min-vh-100 justify-content-between margin-main background">
      <MyNavbar />
      <div className="container pt-4 ">
        <div className="row">
          <div className="col-8 container">
            <div className="text-center my-2">
              <ProfileList />
              <MainProfile />
            </div>
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
