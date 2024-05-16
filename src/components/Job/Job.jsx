import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Job.css";
import { useSelector } from "react-redux";
import FooterJob from "../Footer/FooterJob";

const Job = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const profileData = useSelector(state => state.profile.profileData);

  const fetchJobs = async url => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const allJobs = await response.json();
      setJobs(allJobs.data);
    } catch (error) {
      console.error("Errore fetch jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const searchJobs = query => {
    fetchJobs(
      `https://strive-benchmark.herokuapp.com/api/jobs?search=${query}`
    );
  };

  const searchByCompany = company => {
    fetchJobs(
      `https://strive-benchmark.herokuapp.com/api/jobs?company=${company}`
    );
  };

  const searchByCategory = category => {
    fetchJobs(
      `https://strive-benchmark.herokuapp.com/api/jobs?category=${category}&limit=10`
    );
  };

  useEffect(() => {
    searchByCategory("develop");
  }, []);

  return (
    <>
      <Container>
        <Row className="p-4">
          <Col md={9}>
            <Row className="p-4">
              <Col md={4}>
                <div className="rounded-4 p-4 bg-light text-start job">
                  <div className="d-flex align-items-center flex-row ">
                    <i className="bi bi-bookmark-fill me-2"></i>
                    <span className="fw-bold mx-1 my-1">
                      Le mie offerte di lavoro
                    </span>
                  </div>
                  <div className="d-flex align-items-center flex-row">
                    <i className="bi bi-list-ul me-2"></i>
                    <span className="fw-bold mx-1 my-1">Preferenze</span>
                  </div>
                  <div className="d-flex align-items-center flex-row">
                    <i className="bi bi-clipboard2-check me-2"></i>
                    <span className="fw-bold mx-1 my-1">
                      Valutazione delle competenze
                    </span>
                  </div>
                  <div className="d-flex align-items-center flex-row">
                    <i className="bi bi-youtube me-2"></i>
                    <span className="fw-bold mx-1 my-1">
                      Indicazioni per chi cerca lavoro
                    </span>
                  </div>
                </div>
              </Col>

              <Col md={8}>
                <div className="rounded-4 p-4 bg-light text-start">
                  <p className="fw-bold fs-5">
                    Le principali offerte di lavoro per te
                  </p>
                  <p className="text-secondary">
                    Sulla base del tuo profilo e della tua cronologia delle
                    ricerche
                  </p>
                  {jobs.slice(0, 4).map(job => (
                    <div className="text-align-start mb-3" key={job._id}>
                      <p className="fw-bold text-primary">{job.title}</p>

                      <p>{job.company_name}</p>
                      <p className="text-secondary">
                        {job.candidate_required_location}
                      </p>
                      <hr />
                    </div>
                  ))}
                </div>
                <div className="rounded-4 p-4 bg-light text-start mt-3 premium-job">
                  <p className=" mb-0 title-job">
                    Offerte di lavoro per cui rientri fra i migliori candidati
                  </p>
                  <p className="text-secondary fs-6 mt-0 title-job-2">
                    In base alle tue probabilità di ricevere una risposta
                  </p>

                  <div className="d-flex align-items-start premium-job-2">
                    <img
                      src={profileData?.image}
                      alt="img"
                      width={50}
                      className="rounded-5 mt-2 mx-4"
                    />

                    <div>
                      <span className="fw-bold">
                        Vedi l&apos;elenco completo delle offerte di lavoro per
                        cui saresti fra i migliori candidati
                      </span>
                      <p className="text-secondary">
                        {profileData?.name} e milioni di altri utenti usano
                        Premium
                      </p>
                      <Button className="bg-warning rounded-5 text-dark fw-bold border-0 mb-3">
                        Prova Premium per 0 EUR
                      </Button>
                      <p className="text-secondary">
                        Prova gratuita di 1 mese. Ti invieremo un promemoria 7
                        giorni prima della fine del periodo di prova.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-4 p-4 bg-light text-start mt-3">
                  <p className="fw-bold fs-5">Altre offerte di lavoro per te</p>
                  <p className="text-secondary">
                    Sulla base del tuo profilo e della tua cronologia delle
                    ricerche
                  </p>
                  {jobs.slice(0, 3).map(job => (
                    <div className="text-align-start mb-2" key={job._id}>
                      <p className="fw-bold text-primary">{job.title}</p>
                      <p>{job.company_name}</p>
                      <p className="text-secondary">
                        {job.candidate_required_location}
                      </p>
                      <hr />
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <FooterJob />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Job;
