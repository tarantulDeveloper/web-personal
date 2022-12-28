import React from 'react';
import data from '../data/data'
import Feedback from "../components/Feedback";
import MyNavbar from "../components/MyNavbar";

const FeedbackPage = () => {
  return (
    <>
      <MyNavbar />
      <div className="container">
        <div className='row'>
          {data.map((i,index) => (

            <Feedback image={i.image} author={i.author} company={i.company} opinion={i.opinion}  key={index}/>
          ))}
        </div>
      </div>

    </>

  );
};

export default FeedbackPage;