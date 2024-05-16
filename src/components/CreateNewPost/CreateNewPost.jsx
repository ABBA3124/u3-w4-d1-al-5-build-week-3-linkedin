import "./CreateNewPost.css"
import { useEffect, useState } from "react"
import { Button, Dropdown, Form, Image, InputGroup, Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserProfile } from "../../redux/slices/profileSlice"

const CreateNewPost = () => {
  const profile = useSelector((state) => state.profile.profileData)
  const dispatch = useDispatch()

  const [show, setShow] = useState(false)

  const [postText, setPostText] = useState("")
  const [showPostsModal, setShowPostsModal] = useState(false)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    dispatch(fetchUserProfile())
  }, [dispatch])

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  const handlePostsModalClose = () => setShowPostsModal(false)
  const handlePostsModalShow = async () => {
    await fetchAllPosts()
    setShowPostsModal(true)
  }

  const handlePostTextChange = (event) => {
    setPostText(event.target.value)
  }

  const handleSubmitPost = async () => {
    const url = "https://striveschool-api.herokuapp.com/api/posts/"
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQzMzgyNzNmZjRhNTAwMTU1ZjQxZWYiLCJpYXQiOjE3MTU3MTUyMDIsImV4cCI6MTcxNjkyNDgwMn0.56D-3ZtDcAOznLJyQzEuje7TpZFFoBnhzR_uGs3MM2M"

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text: postText }),
      })

      if (!response.ok) throw new Error("nessuna risposta non è ok")
      const result = await response.json()
      console.log("Post creato con successo dal createnewpost.jsx:", result)
      setPostText("") // resetta il testo del post dopo l'invio
      handleClose() // chiude il modale delle post
    } catch (error) {
      console.error("errore nella creazione 46:", error)
    }
  }

  const fetchAllPosts = async () => {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQzMzgyNzNmZjRhNTAwMTU1ZjQxZWYiLCJpYXQiOjE3MTU3MTUyMDIsImV4cCI6MTcxNjkyNDgwMn0.56D-3ZtDcAOznLJyQzEuje7TpZFFoBnhzR_uGs3MM2M`,
      },
    })
    if (response.ok) {
      const data = await response.json()
      setPosts(data.filter((post) => post.user._id === profile._id))
    } else {
      console.error("Errore nel caricamento dei post")
    }
  }
  const [showPostsModalModifica, setShowPostsModalModifica] = useState(false)
  const handlePostsModalCloseModifica = () => setShowPostsModalModifica(false)
  const handlePostsModalShowModifica = () => setShowPostsModalModifica(true)
  showPostsModalModifica

  return (
    <>
      <div className="bg-white p-3 rounded-2">
        <Button variant="primary" onClick={handlePostsModalShow}>
          Mostra tutti i miei post
        </Button>

        <Modal show={showPostsModal} onHide={handlePostsModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>I miei post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {posts
              .filter((post) => post.user._id === profile._id)
              .map((post) => (
                <div key={post._id}>
                  <div className="d-flex justify-content-between">
                    <div>
                      <div className="d-flex align-items-center">
                        <div>
                          <Image style={{ width: "48px" }} className="rounded-5 me-3" src={post.user.image} thumbnail />
                        </div>
                        <div>
                          <p>{post.text}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Button variant="transparent" onClick={handlePostsModalShowModifica}>
                        <i className="bi bi-pencil"></i>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </Modal.Body>
        </Modal>
        <Modal show={showPostsModalModifica} onHide={handlePostsModalCloseModifica}>
          <Modal.Header closeButton>
            <Modal.Title>Modifica post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {posts
              .filter((post) => post.user._id === profile._id)
              .map((post) => (
                <div key={post._id}>
                  <div className="d-flex justify-content-between">
                    <div>
                      <div className="d-flex align-items-center">
                        <div>
                          <Image style={{ width: "48px" }} className="rounded-5 me-3" src={post.user.image} thumbnail />
                        </div>
                        <div>
                          <p>{post.text}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Button variant="transparent">
                        <i className="bi bi-pencil"></i>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </Modal.Body>
        </Modal>
        <div className="d-flex mb-3   gap-2">
          <Image roundedCircle style={{ width: "48px" }} src={profile && profile.image} />
          <Button onClick={handleShow} variant="outline-secondary" className="m-0 w-100 rounded-pill border border-2">
            <span>Avvia un post</span>
          </Button>
          <Modal id="post-modal" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Image roundedCircle style={{ width: "48px" }} src={profile && profile.image} className="me-2" />
              <Modal.Title>
                {profile && profile.name} {profile && profile.surname}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <InputGroup>
                <Form.Control
                  as="textarea"
                  value={postText}
                  onChange={handlePostTextChange}
                  placeholder="Di cosa vorresti parlare?"
                  style={{ height: "100px" }}
                />
              </InputGroup>
              <div>
                <Button variant="transparent" className="rounded-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#666666"
                    className="bi bi-image"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
                  </svg>
                </Button>
                <Button variant="transparent" className="rounded-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#666666"
                    className="bi bi-calendar3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                  </svg>
                </Button>
                <Button variant="transparent" className="rounded-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#666666"
                    className="bi bi-plus-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                    />
                  </svg>
                </Button>
                <Button variant="transparent" className="rounded-circle"></Button>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" className="rounded-pill px-3" onClick={handleSubmitPost}>
                Pubblica
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="d-flex flex-wrap justify-content-around ">
          <Button variant="outline-secondary" className="fw-medium border-0 d-flex align-items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#378ee7"
              className="bi bi-image"
              viewBox="0 0 16 16"
            >
              <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
              <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
            </svg>
            Contenuti multimediali
          </Button>
          <Button variant="outline-secondary" className="fw-medium border-0 d-flex align-items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#c37d16"
              className="bi bi-calendar3"
              viewBox="0 0 16 16"
            >
              <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
              <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
            </svg>
            Evento
          </Button>
          <Button variant="outline-secondary" className="fw-medium border-0 d-flex align-items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#e06847"
              className="bi bi-justify"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
              />
            </svg>
            Scrivi un articolo
          </Button>
        </div>
      </div>
      <div>
        <Dropdown className="d-flex align-items-center w-100">
          <hr className="flex-grow-1 me-2" />
          <Dropdown.Toggle className="d-flex align-items-center" variant="transparent" id="dropdown-basic">
            <span className="fw-lighter">Seleziona la visualizzazione del feed:</span>
            <span className="fw-medium">Più rilevanti per primi</span>
          </Dropdown.Toggle>

          <Dropdown.Menu className="w-50">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  )
}
export default CreateNewPost
