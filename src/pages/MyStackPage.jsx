import React from 'react';
import MyNavbar from "../components/MyNavbar";
import java from '../img/java.png'
import js from '../img/js.png'

const MyStackPage = () => {
  return (
    <div>
      <MyNavbar />
      <div className="container">
        <h1 className='text-center text-warning lobster font-monospace'>My Stack:</h1>
        <div className="row my-5">
          <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center">
            <h1 className='rubik text-info border-warning border-1 border'>Java</h1>
            <p className="indieFlower font-monospace">It is a powerful general-purpose programming language. It is used to develop desktop and mobile applications, big data processing, embedded systems, and so on. According to Oracle, the company that owns Java, Java runs on 3 billion devices worldwide, which makes Java one of the most popular programming languages.</p>
          </div>
          <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center">
            <img src={java} alt="java" className='img-fluid img-thumbnail'/>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center">
            <img src={js} alt="java" className='img-fluid img-thumbnail'/>
          </div>
          <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center ">
            <h1 className='rubik text-warning border-warning border-1 border'>JavaScript</h1>
            <p className="indieFlower font-monospace">JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyStackPage;