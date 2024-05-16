import MyNavbar from "../NavBar/MyNavbar";
import MainProfile from "../MainProfile/mainprofile";
import MyFooter from "../Footer/MyFooter";
import AsideBar from "../AsideBar/asidebar";
import "../AllComponents/HomePageMain.css";
import ProfileList from "../ProfileList/ProfileList";
import HomePage from "../HomePage/HomePage";
import Message from "../NavBar/Message";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Job from "../Job/Job";

const HomePageMain = () => {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100 justify-content-between margin-main background">
        <Message />
        <MyNavbar />
        <div className="container pt-4 ">
          <div className="row">
            <div className="col-8 container">
              <div className="text-center my-2">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/Profile" element={<MainProfile />} />
                  <Route path="/Search" element={<ProfileList />} />
                  <Route path="/job" element={<Job />} />
                </Routes>
              </div>
            </div>
            <div className="col-4">
              <AsideBar />
            </div>
          </div>
        </div>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
};

export default HomePageMain;
