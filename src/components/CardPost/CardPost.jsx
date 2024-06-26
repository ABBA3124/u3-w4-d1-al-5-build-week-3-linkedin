import { useEffect, useState, useRef } from "react";
import { Button, Card, Image } from "react-bootstrap";
import "./CardPost.css";
import PlaceholderCard from "./PlaceholderCard";

const CardPost = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(15);
  const [isVisible, setIsVisible] = useState(true);
  const loadMoreRef = useRef(null);
  const [comments, setComments] = useState({});
  const [showComments, setShowComments] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://striveschool-api.herokuapp.com/api/posts/";
      const options = {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQzMzgyNzNmZjRhNTAwMTU1ZjQxZWYiLCJpYXQiOjE3MTU3MTUyMDIsImV4cCI6MTcxNjkyNDgwMn0.56D-3ZtDcAOznLJyQzEuje7TpZFFoBnhzR_uGs3MM2M",
        },
      };
      try {
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          const sortedData = data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setAllPosts(sortedData);
          setIsVisible(false);
        } else {
          throw new Error("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setVisibleCount(prevCount => prevCount + 10);
        }
      },
      { threshold: 1.0 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [loadMoreRef]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (visibleCount < allPosts.length) {
        setVisibleCount(prevCount => Math.min(prevCount + 10, allPosts.length));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [visibleCount, allPosts.length]);

  // Fetch dei commenti per ciascun post
  useEffect(() => {
    async function fetchComments() {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQzMzgyNzNmZjRhNTAwMTU1ZjQxZWYiLCJpYXQiOjE3MTU3MTUyMDIsImV4cCI6MTcxNjkyNDgwMn0.56D-3ZtDcAOznLJyQzEuje7TpZFFoBnhzR_uGs3MM2M",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        const commentsByPostId = data.reduce((acc, comment) => {
          (acc[comment.elementId] = acc[comment.elementId] || []).push(comment);
          return acc;
        }, {});
        setComments(commentsByPostId);
      }
    }
    fetchComments();
  }, []);

  const toggleCommentsVisibility = postId => {
    setShowComments(prev => ({ ...prev, [postId]: !prev[postId] }));
  };

  return (
    <div className="mt-3">
      {isVisible && <PlaceholderCard />}
      {allPosts.slice(0, visibleCount).map(post => (
        <div key={post._id} className="mt-3">
          <Card className="p-1">
            <div className="d-flex gap-1 align-items-center mt-1 px-2">
              <div>
                <Image
                  roundedCircle
                  className="img-card "
                  src={post.user.image}
                />
              </div>
              <div className="text-start me-auto">
                <div className="d-flex gap-1">
                  <span className="mb-1 mr-1 fw-bold">{post.user.name}</span>

                  <span className="fw-bold">{post.user.surname}</span>
                </div>
                <p className="m-0 fw-lighter">{post.user.title}</p>
                <small className="mb-1 fw-lighter">
                  Aggiunto il:{new Date(post.createdAt).toLocaleDateString()}
                </small>
              </div>
              <Button
                id="collegati"
                className="me-2 d-flex align-items-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                  <path
                    fillRule="evenodd"
                    d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"
                  />
                </svg>
                Collegati
              </Button>
            </div>
            <Card.Body className="border-bottom">
              <div className="text-start">
                <p className="mb-1">{post.text}</p>
              </div>
              <Card.Img src={post.image} />
            </Card.Body>
            <div className="mt-2 d-flex justify-content-around p-2">
              <div>
                <Button
                  className="btn-feed d-flex align-items-center gap-1 p-1"
                  variant="transparent"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-hand-thumbs-up"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                  </svg>
                  <span className="d-none d-xl-block">Mi piace</span>
                </Button>
              </div>

              <Button
                className="btn-feed d-flex align-items-center gap-1 p-1"
                variant="transparent"
                onClick={() => toggleCommentsVisibility(post._id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chat-text"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                  <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8m0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5" />
                </svg>
                <span className="d-none d-xl-block">
                  {showComments[post._id]
                    ? "Nascondi Commenti"
                    : "Mostra Commenti"}
                </span>
              </Button>

              <Button
                className="btn-feed d-flex align-items-center gap-1 p-1"
                variant="transparent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-left-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"
                  />
                </svg>
                <span className="d-none d-xl-block">Diffondi il post</span>
              </Button>
              <Button
                className="btn-feed d-flex align-items-center gap-1 p-1"
                variant="transparent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-send-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                </svg>
                <span className="d-none d-xl-block">Invia</span>
              </Button>
            </div>
            <div>
              <div>
                {showComments[post._id] && (
                  <div className="p-3" style={{ marginTop: "10px" }}>
                    <div
                      className="d-flex align-items-center"
                      style={{ fontSize: "15px" }}
                    >
                      <div className="me-2">
                        <Image
                          roundedCircle
                          style={{ width: "38px" }}
                          src="https://media.licdn.com/dms/image/D4E35AQHM5FTtvxFydg/profile-framedphoto-shrink_100_100/0/1714374002661?e=1716548400&v=beta&t=Yxfpqv7fB2ZuRSX1OCrEZ4NWEcrA8gouap3auuvgtrk"
                        />
                      </div>
                      <div className="p-2 rounded-5 border border-1 border-secondary w-100 ">
                        <div className="d-flex align-items-center">
                          <div className="text-start">
                            <input
                              type="text"
                              placeholder="Aggiungi un commento..."
                              className="border-0"
                            />
                          </div>
                          <div className="ms-auto fs-6">
                            <i className="bi bi-emoji-smile-fill me-3 text-dark"></i>
                            <i className="bi bi-card-image me-1 text-dark"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* --------------------- */}
                {showComments[post._id] &&
                  comments[post.elementId] &&
                  comments[post.elementId].map(comment => (
                    <div className="mt-3">
                      <div className="d-flex">
                        <div className="me-2">
                          <Image
                            roundedCircle
                            style={{ width: "38px" }}
                            src="https://media.licdn.com/dms/image/D4E35AQHM5FTtvxFydg/profile-framedphoto-shrink_100_100/0/1714374002661?e=1716548400&v=beta&t=Yxfpqv7fB2ZuRSX1OCrEZ4NWEcrA8gouap3auuvgtrk"
                            alt="immagine di chi ha commentato"
                          />
                        </div>
                        <div className="w-100">
                          <div className="bg-light p-2 " key={comment._id}>
                            <div className="d-flex justify-content-between">
                              <div>
                                <h6 className="text-start">
                                  Nome Utente <br />{" "}
                                  <span
                                    className=" text-secondary"
                                    style={{ fontSize: "12px" }}
                                  >
                                    --Che titola ha l'utente
                                  </span>
                                </h6>
                              </div>
                              <div>
                                <i className="bi bi-three-dots"></i>
                              </div>
                            </div>
                            <p
                              className="text-start p-2"
                              style={{ fontSize: "14px" }}
                            >
                              {comment.comment}
                            </p>
                          </div>
                          <div className="d-flex mt-1">
                            <div className="border-end fw-bold">
                              <Button
                                className="bg-transparent text-secondary border-0"
                                style={{ fontSize: "12px" }}
                              >
                                Consiglia
                              </Button>
                            </div>
                            <div>
                              <Button
                                className="bg-transparent text-secondary border-0"
                                style={{ fontSize: "12px" }}
                              >
                                Rispondi
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </Card>
        </div>
      ))}
      {visibleCount < allPosts.length && (
        <div ref={loadMoreRef} style={{ height: "20px", margin: "10px 0" }}>
          <h1>Caricamento in corso...</h1>
        </div>
      )}
    </div>
  );
};

export default CardPost;
