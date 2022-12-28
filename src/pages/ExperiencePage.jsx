import React from 'react';
import MyNavbar from "../components/MyNavbar";
import megacom from '../img/megacom.png'
const ExperiencePage = () => {
  return (
    <div>
      <MyNavbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center">
            <h1 className="text-white rubik">Megacom</h1>
            <p>Mobile Operator</p>
            <p className='indieFlower font-monospace'>I'm working as backend developer. Using Spring framework and Java programming language.</p>

          </div>
          <div className="col-sm-12 col-md-6">
            <img src={megacom} alt="megacom" className="img-fluid img-thumbnail"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;