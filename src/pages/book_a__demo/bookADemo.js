import React from 'react';

import './book_a_demo.scss';
import Form from '../../components/form/form';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import evansimg from '../../images/evansimg.png';

function BookADemo() {
  return (
    <div>
      <div className="container">
        <Navbar />
        <div class="row align-self-start book-a-demo">
          <div class="col ">
            <h1 className=" book-a-demo-title">
              See 101 Metrics in action with a demo from our team
            </h1>
            <div className="book-a-demo-text">
              <p>
                “101Metrics intrinsically provides us with a way of connecting
                and communicating with the data that matter most to our
                analytics.”
              </p>
              <div className="evans-company">
                <img src={evansimg} alt="" />
                <p>
                  <span className="evansName">Evans Hyuinh</span>
                  <br />
                  <span>Company A</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col ">
            <div>
              <Form />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BookADemo;
