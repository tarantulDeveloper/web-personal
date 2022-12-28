import React from 'react';
import MyNavbar from "../components/MyNavbar";
import sanzhar from '../img/sanzhar.png'
import emir from '../img/emir.png'

const AssistantsPage = () => {
  return (
    <div>
      <MyNavbar />
      <div className="container">
        <div className="row my-5">
          <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center text-center">
            <h1 className="rubik text-warning">Sanzhar</h1>
            <p>Phone: +996 500 89 88 77</p>
            <p>Email: sanych@gmail.com</p>
          </div>
          <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
            <img src={sanzhar} alt="sanzhar" className="img-thumbnail img-fluid"/>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
            <img src={emir} alt="sanzhar" className="img-thumbnail img-fluid"/>
          </div>
          <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center text-center">
            <h1 className="rubik text-warning">Emir</h1>
            <p>Phone: +996 709 09 09 09</p>
            <p>Email: emir@gmail.com</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AssistantsPage;