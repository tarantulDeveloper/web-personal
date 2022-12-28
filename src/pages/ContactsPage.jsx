import React from 'react';
import MyNavbar from "../components/MyNavbar";
import {CiLocationOn} from 'react-icons/ci'
import {BsTelephone} from 'react-icons/bs'
import {FaFax} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import phone from '../img/phone.jpg'
import fax from '../img/fax.png'
import email from '../img/email.jpg'

const ContactsPage = () => {
  return (
    <div>
      <MyNavbar/>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-3 d-flex align-items-stretch mt-3">
            <div className="card w-100"  >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.8919962245895!2d74.58655641497863!3d42.87512371041152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec82198b289fb%3A0xc26504f1e955fee!2s154%20Kiev%20St%2C%20Bishkek!5e0!3m2!1sen!2skg!4v1672229875240!5m2!1sen!2skg"
                style={{border: '0px', height: '450', width: '600'}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className="card-body text-info">
                  <h5 className="card-title"><CiLocationOn /> Main Office Address</h5>
                  <p className="card-text">Bishkek City, Kiev st. 154</p>
                </div>
            </div>

          </div>
          <div className="col-sm-12 col-md-4 col-lg-3 d-flex align-items-stretch mt-3">
            <div className="card w-100"  >
              <img src={phone} alt='phone'  className='img-fluid'/>
              <div className="card-body text-info">
                <h5 className="card-title">
                  <div><BsTelephone/> Phone</div>
                  <a href="tel:+996509091625">+996 509 09 16 25</a> (Bekzhan) </h5>
              </div>
            </div>

          </div>
          <div className="col-sm-12 col-md-4 col-lg-3 d-flex align-items-stretch mt-3">
            <div className="card w-100"  >
              <img src={fax} alt='fax'  className='img-fluid'/>
              <div className="card-body text-info">
                <h5 className="card-title">
                  <div><FaFax/> Fax</div>
                  </h5>
                <p>1-344-345-5659</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-3 d-flex align-items-stretch mt-3">
            <div className="card w-100"  >
              <img src={email} alt='fax'  className='img-fluid'/>
              <div className="card-body text-info">
                <h5 className="card-title">
                  <div><AiOutlineMail/> Email</div>
                </h5>
                <p><a href = "mailto: tarantuldeveloper@gmail.com">tarantuldeveloper@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;