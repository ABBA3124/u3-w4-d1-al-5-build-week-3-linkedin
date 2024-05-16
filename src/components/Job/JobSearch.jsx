import { Col, ListGroup, Row, Tab } from "react-bootstrap";
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

  // eslint-disable-next-line no-unused-vars, react-hooks/rules-of-hooks
  const [randomNumbers, setRandomNumbers] = useState(() => {
    const initialRandomNumbers = {};
    jobs.forEach(job => {
      initialRandomNumbers[job._id] = Math.floor(Math.random() * 100) + 1;
    });
    return initialRandomNumbers;
  });

  return (
    <div>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row id="job">
          <Col sm={4} className="p-0">
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
                  <div className="text-align-start mb-3">
                    <p className="title-jobs">{job.title}</p>
                    <p className="text-dark">{job.company_name}</p>
                    <p className="text-secondary location1">
                      {job.candidate_required_location}
                    </p>
                    <div className="d-flex mt-3 justify-content-start">
                      <p className="text-secondary location">
                        {formatDistanceToNow(new Date(job.publication_date))}{" "}
                        {"·"}
                      </p>
                      <p className="text-success location fw-bold mx-2">
                        {randomNumbers[job._id]} candidati{" ·"}
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
          <Col sm={8}>
            <Tab.Content style={{ overflowX: "auto", maxHeight: "90vw" }}>
              {jobs?.map(job => (
                <Tab.Pane eventKey={`#${job._id}`} key={job._id}>
                  <h3> {job.company_name}</h3>
                  <div className="d-flex mt-3 justify-content-start location-3">
                    <p className="text-secondary location-right">
                      {job.candidate_required_location}
                      {" ·"}
                    </p>
                    <p className="text-secondary location-right mx-2">
                      {formatDistanceToNow(new Date(job.publication_date))}
                      {" ·"}
                    </p>
                    <p className="text-success weight location-right">
                      {randomNumbers[job._id]} candidati
                    </p>
                  </div>
                  <div className="d-flex align-items-center mb-4 location-3">
                    <i className="bi bi-lightbulb text-secondary fs-5"></i>
                    <p className="m-0 text-secondary ">
                      Vedi come ti posizioni rispetto a{" "}
                      {randomNumbers[job._id] - 3} candidati.{" "}
                    </p>
                    <p className="m-0 mx-2 text-secondary">
                      Prova Premium a 0 EUR
                    </p>
                  </div>
                  <div className="text-align-start mb-3">
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
