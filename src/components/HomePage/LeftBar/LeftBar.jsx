import "./LeftBar.css"
import {
  Accordion,
  Button,
  Image,
  Nav,
  Overlay,
  Tooltip,
} from "react-bootstrap"
import FooterJob from "../../Footer/FooterJob"
import { useRef, useState } from "react"

const LeftBar = () => {
  const [show, setShow] = useState(false)
  const target = useRef(null)

  const [isExpanded, setIsExpanded] = useState(false)

  const handleAccordionToggle = () => {
    setIsExpanded(!isExpanded)
  }
  return (
    <div>
      <div className=" border rounded-2 m-2 bg-white px-2 py-2 text-start">
        <div className="d-flex justify-content-between align-items-center pb-0">
          <p className="fs-4 bold m-0">LinkedIn Notizie</p>
          <Button
            ref={target}
            onClick={() => setShow(!show)}
            variant="transparent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="black"
              className="bi bi-info-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
            </svg>
          </Button>
          <Overlay target={target.current} show={show} placement="left">
            {(props) => (
              <Tooltip {...props} className="custom-tooltip fs-6  ">
                Queste sono le principali notizie e conversazioni del giorno.
                Scopri come vengono selezionate.
              </Tooltip>
            )}
          </Overlay>
        </div>
        <div className="text-secondary bold fs-5">
          <p className="mb-1">Storie principali</p>
        </div>
        <div>
          <Button
            className="w-100 bold text-start py-0 px-0 mb-2"
            variant="outline-light"
          >
            <Nav.Link className="bold text-black">
              Medicina aerospaziale decolla
              <p className="copyright text-secondary mb-0">
                21 ore fa • 2.179 lettori
              </p>
            </Nav.Link>
          </Button>
          <Button
            className="w-100 bold text-start px-0 pt-0 my-2"
            variant="outline-light"
          >
            <Nav.Link className="bold text-black">
              Quali saranno le lauree più richieste
              <p className="copyright text-secondary mb-0">
                21 ore fa • 485 lettori
              </p>
            </Nav.Link>
          </Button>
          <Button
            className="w-100 bold text-start px-0 pt-0 my-2"
            variant="outline-light"
          >
            <Nav.Link className="bold text-black">
              Dove sventolano le bandiere blu
              <p className="copyright text-secondary mb-0">
                23 ore fa • 179 lettori
              </p>
            </Nav.Link>
          </Button>
          <Button
            className="w-100 bold text-start px-0 pt-0 my-2"
            variant="outline-light"
          >
            <Nav.Link className="bold text-black">
              Dazn fa squadra con Discovery
              <p className="copyright text-secondary mb-0">
                1 giorno fa • 42.179 lettori
              </p>
            </Nav.Link>
          </Button>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item
              eventKey="0"
              className={isExpanded ? "d-block" : "d-none"}
            >
              <Accordion.Body className="py-0 px-0">
                <Button
                  className="w-100 bold text-start px-0 pt-0 my-2"
                  variant="outline-light"
                >
                  <span className="bold text-black">
                    Alle smart city mancano tecnici
                  </span>
                  <p className="text-secondary mb-0">
                    2 giorni fa • 364 lettori
                  </p>
                </Button>
                <Button
                  className="w-100 bold text-start px-0 pt-0 my-2"
                  variant="outline-light"
                >
                  <span className="bold text-black">
                    Se il paragone non aiuta
                  </span>
                  <p className="text-secondary mb-0">
                    4 giorni fa • 3564 lettori
                  </p>
                </Button>
                <Button
                  className="w-100 bold text-start px-0 pt-0 my-2"
                  variant="outline-light"
                >
                  <span className="bold text-black">
                    Italia in vetta per congressi ospitati
                  </span>
                  <p className="text-secondary mb-0">
                    3 giorni fa • 103 lettori
                  </p>
                </Button>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Button
            className={`w-100 bold text-start px-0 pt-0 my-2 text-black ${
              isExpanded ? "d-block" : "d-start"
            }`}
            variant="outline-light"
            onClick={handleAccordionToggle}
          >
            {isExpanded ? "Mostra meno" : "Mostra altro"}
          </Button>
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
