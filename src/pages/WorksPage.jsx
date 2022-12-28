import React from 'react'
import MyNavbar from '../components/MyNavbar'
import work_1 from '../img/first-work.png'
import alaman from '../img/alaman.png'
import work_2 from '../img/work_2.png'

const WorksPage = () => {
  return (
    <div><MyNavbar/>
      <div className="container ">
        <h1 className="text-center text-warning lobster font-monospace">My Works:</h1>
        <div id="carouselExampleDark" className="carousel carousel-dark slide pt-2 " data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={alaman} className="d-block w-100 img-fluid" alt="..." />
                <div className="carousel-caption d-none d-md-block text-danger">
                  <h5>www.alaman.kg</h5>
                  <p>Alaman wine restaurant website.</p>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={work_1} className="d-block w-100 img-fluid" alt="..." />
                <div className="carousel-caption d-none d-md-block bg-dark text-white">
                  <h5>www.skyer.kg</h5>
                  <p>Karakol Ski Base website.</p>
                </div>
            </div>
            <div className="carousel-item">
              <img src={work_2} className="d-block w-100 img-fluid" alt="..." />
                <div className="carousel-caption d-none d-md-block text-info bg-primary">
                  <h5>www.sayakat.kg</h5>
                  <p>Sayakat kg tour company website.</p>
                </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                  data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                  data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default WorksPage