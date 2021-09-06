import React from "react";
import "../Styles/Components/Testimonials.scss";
import Fade from "react-reveal/Fade";

function Testimonials() {
  return (
    <div className="testimonials__container" id="testimonios">
      <h2 className="title">Testimonios</h2>
      <div className="testimonials">
        <Fade left>
          <div className="testimonial">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ramonruizdev.appspot.com/o/img%2Fimg.jpeg?alt=media&token=4171999c-50c5-4892-8679-c7eecc6790bf"
              alt="Testimonial imagen"
            />
            <h3>@ramonruiz</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className="testimonial">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ramonruizdev.appspot.com/o/img%2Fimg.jpeg?alt=media&token=4171999c-50c5-4892-8679-c7eecc6790bf"
              alt="Testimonial imagen"
            />
            <h3>@ramonruiz</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Testimonials;
