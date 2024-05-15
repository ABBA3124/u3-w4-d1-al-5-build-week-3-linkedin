import { useState } from "react";
import { useSelector } from "react-redux";
import { Accordion, Container } from "react-bootstrap";
import "./Message.css";

function Message() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const profileData = useSelector(state => state.profile.profileData);

  const handleAccordionOpen = () => {
    setIsTransitioning(true);
  };

  const handleAccordionClose = () => {
    setIsTransitioning(false);
  };

  return (
    <Container id="message">
      <div className="fixed-bottom-right">
        <Accordion
          activeKey={isOpen ? "0" : ""}
          onOpen={handleAccordionOpen}
          onClose={handleAccordionClose}
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header
              className="accordion-header"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="position-relative mb-2">
                <img
                  src={profileData?.image}
                  alt="img"
                  width={40}
                  className="rounded-5 mx-3 mt-3 "
                />
                <span className="mx-3 position-absolute top-100 start-50 translate-middle p-2 bg-success border border-light rounded-circle"></span>
              </div>
              <p className="mb-1 mx-2 text-dark fw-bold">Messaggistica</p>
              <i className="bi bi-three-dots mx-2"></i>

              <i className="bi bi-pencil-square mx-2"></i>
            </Accordion.Header>
            <Accordion.Body
              className={`accordion-show p-1 ${isOpen ? "open" : "closed"} ${
                isTransitioning ? "transition" : ""
              }`}
            >
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex">
                  <img
                    src={profileData?.image}
                    alt="img"
                    width={40}
                    className="rounded-2 mx-3 "
                  />
                  <p className="mt-2 fw-bold">
                    {profileData?.name} {profileData?.surname}
                  </p>
                </div>
                <div>
                  <i className="bi bi-arrow-right-short fs-2"></i>
                </div>
              </div>
              <div className="mx-3 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </Container>
  );
}

export default Message;
