import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./App.css"
import MyNavbar from "./components/NavBar/MyNavbar"
import MainProfile from "./components/MainProfile/mainprofile"
import MyFooter from "./components/Footer/MyFooter"
import AsideBar from "./components/AsideBar/asidebar"

function App() {
  return (
    <div>
      <MyNavbar />
      <MainProfile />
      <AsideBar />
      <MyFooter />
    </div>
  )
}

export default App
