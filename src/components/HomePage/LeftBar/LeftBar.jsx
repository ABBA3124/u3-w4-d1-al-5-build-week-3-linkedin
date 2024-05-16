import React from "react"
import "./LeftBar.css"
import { Image } from "react-bootstrap"
import FooterJob from "../../Footer/FooterJob"

const LeftBar = () => {
  return (
    <div>
      <div className=" border rounded-2 m-2 bg-white px-2">
        <div className="d-flex justify-content-between align-items-center">
          <h2>LinkedIn Notizie</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-info-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
          </svg>
        </div>
        <div className="text-secondary bold">
          <h3>Storie principali</h3>
        </div>
      </div>
      <div className=" border rounded-2 m-2">
        <Image
          className="w-100 rounded-2"
          src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
        />
      </div>
      <FooterJob />
    </div>
  )
}

export default LeftBar
