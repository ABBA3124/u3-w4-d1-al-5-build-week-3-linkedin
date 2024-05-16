import { Col, ListGroup, Row, Tab } from "react-bootstrap"
import { useSelector } from "react-redux"
import "./JobSearch.css"

const JobSearch = () => {
  const jobData = useSelector((state) => state.job.data)

  if (!jobData) {
    return <div>Loading...</div>
  }

  const jobs = jobData.data
  let getRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1
  }

  return (
    <div>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row id="job">
          <Col sm={4}>
            <ListGroup className="job-list">
              {jobs?.map((job) => (
                <ListGroup.Item action href={`#${job._id}`} key={job._id} className="job-item">
                  <div className="text-align-start mb-3" key={job._id}>
                    <p className="fw-bold text-primary">{job.title}</p>

                    <p>{job.company_name}</p>
                    <p className="text-secondary">{job.candidate_required_location}</p>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content style={{ overflowX: "auto", maxHeight: "90vw" }}>
              {jobs?.map((job) => (
                <Tab.Pane eventKey={`#${job._id}`} key={job._id}>
                  <h3> {job.category}</h3>
                  <span className="text-secondary">
                    {job.candidate_required_location}· Più di {getRandomNumber()} candidati ·
                  </span>
                  <div className="text-align-start mb-3" key={job._id}>
                    <span className="inner" dangerouslySetInnerHTML={{ __html: job.description }} />
                  </div>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  )
}

export default JobSearch
