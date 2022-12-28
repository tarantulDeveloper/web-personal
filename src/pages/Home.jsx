import React from "react";
import MyNavbar from "../components/MyNavbar";
import "./Home.scss";
import me from "../img/me.png";
import {useNavigate} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <MyNavbar />
      <div className="container mt-3">
        <div className="row d-flex justify-content-around">
          <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center">
            <h2 className="text-info">Hello</h2>
            <h2 className="myName text-start m-0 rubik">I am <span className="text-warning">Bekzhan!</span></h2>
            <p className=" font-monospace pt-3 lobster ">I'm a Web Developer with extensive experience for over 1 year. 
            I create most secure websites.</p>
            <div className="d-flex gap-4">
              <button className="btn btn-outline-warning rounded-pill"
              onClick={() => navigate('/works')}>View Works</button>
              <button className="btn btn-outline-warning rounded-pill"
              onClick={() => navigate('/contact')}>Hire Me</button>
              </div>
            
          </div>
          <div className="col-sm-10 col-md-4 d-flex justify-content-center align-items-center ">
            <img src={me} alt="my photo" className="img-fluid rounded-circle img-thumbnail" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
