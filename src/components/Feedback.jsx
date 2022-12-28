import React from 'react';

const Feedback = ({image, author, opinion, company}) => {
  return (
    <div className="col-sm-12 col-md-4 col-lg-3 d-flex align-items-stretch mt-3">
      <div className="card mb-3" >
        <div className="row g-0">
          <div >
            <img src={image} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div >
            <div className="card-body">
              <h5 className="card-title text-warning">{author}</h5>
              <p className="card-text text-black">{opinion}</p>
              <p className="card-text text-info">Company: <small className="text-muted">{company}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;