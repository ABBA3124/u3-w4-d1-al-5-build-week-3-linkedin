const Section2 = () => {
  return (
    <div className="pt-2">
      <div className="ms-4">
        <h3 className="m-0 fs-5">Risorse</h3>
        <span className="m-0 fs-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="gray"
            className="mercado-match"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
          </svg>
          <span className="fs-6 ms-1 text-secondary">Solo per te</span>
        </span>
      </div>
      <div className="ms-4 me-4 mt-1">
        <div>
          <div className="d-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
            </svg>
            <div className="ms-1">
              <strong>La mia rete</strong>
              <p className="m-0">Salva e gestisci i tuoi collegamenti e interessi.</p>
            </div>
          </div>
          <hr />
        </div>
        <div>
          <div className="d-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z"></path>
            </svg>
            <div className="ms-1">
              <strong>Elimina salvati</strong>
              <p className="m-0">Monitora le tue offerte di lavoro, i corsi e gli articoli.</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <button className="w-100 rounded-bottom-1 bg-white border-0 p-1 mb-1">Mostra tutte le risorse (4) ➡️</button>
    </div>
  )
}

export default Section2
