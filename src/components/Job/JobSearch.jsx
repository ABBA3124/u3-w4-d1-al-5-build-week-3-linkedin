import { Button, Col, ListGroup, Row, Tab } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./JobSearch.css";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";

const JobSearch = () => {
  const jobData = useSelector(state => state.job.data);

  if (!jobData) {
    return <div>Loading...</div>;
  }

  const jobs = jobData.data;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [randomNumbers, setRandomNumbers] = useState({});

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  const randomCompany = companyId => {
    if (!randomNumbers[companyId]) {
      const newRandomNumber = getRandomNumber();
      setRandomNumbers(prevState => ({
        ...prevState,
        [companyId]: newRandomNumber,
      }));
      return newRandomNumber;
    } else {
      return randomNumbers[companyId];
    }
  };

  return (
    <div>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row id="job">
          <Col sm={4} xs={4} className="p-0">
            <div className="offerte-lavoro">
              <p>Le principali offerte di lavoro per te</p>
            </div>
            <ListGroup className="job-list">
              {jobs?.map(job => (
                <ListGroup.Item
                  action
                  href={`#${job._id}`}
                  key={job._id}
                  className="job-item"
                >
                  <div className="text-align-start mb-3 list" key={job._id}>
                    <p className="title-jobs">{job.title}</p>
                    <p className="text-dark">{job.company_name}</p>
                    <p className="text-secondary location1">
                      {job.candidate_required_location}
                    </p>
                    <div
                      className="d-flex mt-3 justify-content-start"
                      id="list"
                    >
                      <p className="text-secondary location">
                        {formatDistanceToNow(new Date(job.publication_date))}{" "}
                        {"·"}
                      </p>
                      <p className="text-success location fw-bold mx-2">
                        {randomCompany(job._id)} candidati
                        {"·"}
                      </p>
                      <img
                        src="/public/linkedin.ico"
                        alt="logo linkedIn"
                        width={15}
                        height={15}
                      />
                      <p className="text-secondary location mx-1">
                        Candidatura semplice
                      </p>
                    </div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col sm={8} xs={8}>
            <Tab.Content
              style={{ overflowX: "auto", maxHeight: "70vw" }}
              className="p-4"
            >
              {jobs?.map(job => (
                <Tab.Pane
                  eventKey={`#${job._id}`}
                  key={job._id}
                  className="items"
                >
                  <div className="d-flex align-items-center justify-content-between ">
                    <h3> {job.company_name}</h3>
                    <div>
                      <i className="bi bi-arrow-90deg-right fs-3 mx-3"></i>
                      <i className="bi bi-three-dots fs-3 mx-2 "></i>
                    </div>
                  </div>
                  <div className="d-flex mt-3 justify-content-start location-3">
                    <p className="text-secondary location-right">
                      {job.candidate_required_location}
                      {"·"}
                    </p>

                    <p className="text-secondary location-right mx-2">
                      {formatDistanceToNow(new Date(job.publication_date))}{" "}
                      {"·"}
                    </p>
                    <p className="text-success weight location-right">
                      {randomCompany(job._id)} candidati
                    </p>
                  </div>
                  <div className="d-flex align-items-center mb-4 location-3">
                    <i className="bi bi-building text-secondary fs-5"></i>

                    <p className="m-0 text-secondary ">{job.category}</p>
                  </div>
                  <div className="d-flex align-items-center mb-4 location-3">
                    <i className="bi bi-lightbulb text-secondary fs-5"></i>
                    <p className="m-0 text-secondary ">
                      Vedi come ti posizioni rispetto a{" "}
                      {randomCompany(job._id) - 3} candidati.{" "}
                    </p>
                    <p className="m-0 mx-2 text-secondary text-underline">
                      Prova Premium a 0 EUR
                    </p>
                  </div>
                  <div className="d-flex align-items-center mb-4 button">
                    <Button className=" mx-2">
                      Candidati
                      <i className="bi bi-box-arrow-up-right mx-2"></i>
                    </Button>
                    <Button
                      className="fw-bold mx-2 rounded-5 "
                      variant="outline-primary"
                    >
                      Salva
                    </Button>
                  </div>

                  <div className="text-align-start mb-3" key={job._id}>
                    <p className="fs-5 fw-bold">
                      Informazioni sull&apos;offerta di lavoro
                    </p>
                    <span
                      className="inner"
                      dangerouslySetInnerHTML={{ __html: job.description }}
                    />
                  </div>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default JobSearch;
