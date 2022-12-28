import React from 'react';
import MyNavbar from "../components/MyNavbar";
import england from '../img/england.png'
import germany from '../img/germany.png'
import turkey from '../img/turkey.png'
import russia from '../img/russia.png'
import kr from '../img/kr.png'

const MySoftSkillsPage = () => {
  return (
    <div>
      <MyNavbar />
      <div className="container">
        <div className="row my-5 ">
          <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center "><h1 className="rubik text-info ">English</h1></div>
          <div className="col-sm-12 col-md-6">
            <img src={england} alt="england" className="img-fluid img-thumbnail"/>
          </div>
        </div>

        <div className="row my-5 ">
          <div className="col-sm-12 col-md-6">
            <img src={germany} alt="germany" className="img-fluid img-thumbnail"/>
          </div>
          <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center "><h1 className="rubik text-info ">German</h1></div>
        </div>

        <div className="row my-5 ">
          <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center "><h1 className="rubik text-info ">Turkish</h1></div>
          <div className="col-sm-12 col-md-6">
            <img src={turkey} alt="turkey" className="img-fluid img-thumbnail"/>
          </div>
        </div>

        <div className="row my-5 ">
          <div className="col-sm-12 col-md-6">
            <img src={russia} alt="germany" className="img-fluid img-thumbnail"/>
          </div>
          <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center "><h1 className="rubik text-info ">Russian</h1></div>
        </div>

        <div className="row my-5 ">
          <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center "><h1 className="rubik text-info ">Kyrgyz</h1></div>
          <div className="col-sm-12 col-md-6">
            <img src={kr} alt="turkey" className="img-fluid img-thumbnail"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySoftSkillsPage;