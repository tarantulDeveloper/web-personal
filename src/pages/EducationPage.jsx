import React from 'react';
import MyNavbar from "../components/MyNavbar";
import muk from '../img/muk.jpg'
import ksusta from '../img/ksusta.jpg'

const EducationPage = () => {
  return (
    <div>
      <MyNavbar/>
      <div className="container">
        <div className="row d-flex justify-content-around pt-3">
          <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center">
            <h3 className='text-info'>Polytechnic College at the International University of the Kyrgyz Republic</h3>
            <p>2015 - 2018</p>
            <p className='lobster text-danger'>Communication networks and switching systems</p>
          </div>
          <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
            <img src={muk} alt="muk" className='img-fluid rounded img-thumbnail'/>
          </div>
        </div>


        <div className="row d-flex justify-content-around my -5">
          <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
            <img src={ksusta} alt="ksusta" className='img-fluid rounded img-thumbnail'/>
          </div>
          <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center">
            <h3 className='text-info'>Kyrgyz State University of Construction, Transport and Architecture n.a. N. Isanov</h3>
            <p>2021 - current</p>
            <p className='lobster text-danger'>Computer Science</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;