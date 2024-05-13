import "./MyFooter.css"

const MyFooter = () => {
  return (
    <footer>
      <div className="row justify-content-center mt-5">
        <div className="col col-6">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">
            <div className="g-2">
              <a href="#" alt="footer link">
                Informazioni
              </a>
              <a href="#" alt="footer link">
                Accessibilità
              </a>
              <a href="#" alt="footer link">
                Talent Solutions
              </a>
            </div>
            <div className="g-2">
              <a href="#" alt="footer link">
                Linee guida della community
              </a>
              <a href="#" alt="footer link">
                Carriera
              </a>
              <a href="#" alt="footer link">
                Soluzione di marketing
              </a>
            </div>
            <div className="g-2">
              <a href="#" alt="footer link">
                Privacy e condizioni
              </a>
              <a href="#" alt="footer link">
                Opzioni per gli annunci pubblicitari
              </a>
              <a href="#" alt="footer link">
                Pubblicità
              </a>
            </div>
            <div className="g-2">
              <a href="#" alt="footer link">
                Sales solutions
              </a>
              <a href="#" alt="footer link">
                Mobile
              </a>
              <a href="#" alt="footer link">
                Piccole imprese
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col mb-2">
              <a href="#" alt="footer link">
                Centro sicurezza
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col mb-2 mt-2 copyright">Linkedin Corporation © 2024</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default MyFooter
