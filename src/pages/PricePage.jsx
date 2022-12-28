import React from 'react';
import MyNavbar from "../components/MyNavbar";
import markup from '../img/markup.jpg'
import spring from '../img/spring.png'
import fullstack from '../img/fullstack.png'

const PricePage = () => {
  return (
    <div>
      <MyNavbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 d-flex align-items-stretch mt-3">
            <div className="card " >
              <img src={markup} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-danger">Markup</h5>
                <p className="card-text text-info">Simple markup (html, css)</p>
                <p className='text-dark'>Price: <span className="text-danger">$100</span> (3 pages)</p>
                <a href="#" className="btn btn-primary">Order</a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 d-flex align-items-stretch mt-3">
            <div className="card" >
              <img src={spring} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-success">Backend. Java. Spring</h5>
                <p className="card-text text-primary">Spring Security, JWT, MySQL, Postgres, Email</p>
                <p className='text-dark'>Price: <span className="text-danger">$200</span> and above</p>
                <a href="#" className="btn btn-primary">Order</a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 d-flex align-items-stretch mt-3">
            <div className="card" >
              <img src={fullstack} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-success">FullStack</h5>
                <p className="card-text text-warning">React.js for frontend and Spring for backend.</p>
                <p className='text-dark'>Price: <span className="text-danger">$400</span> and above</p>
                <a href="#" className="btn btn-primary">Order</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PricePage;