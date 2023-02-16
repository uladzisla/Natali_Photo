import React from "react";
import Slider from "react-slick";
import "./SimpleSlider.css";
import Slider1 from "../../img/Slider1.jpg";
import Slider2 from "../../img/Slider2.jpg";
import Slider3 from "../../img/Slider3.jpg";
import Slider4 from "../../img/Slider4.jpg";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <section id="full-slide">
      <div>
        <Slider {...settings}>
          <div className="slide-list">
            <img className="slide-image" src={Slider1} alt={"1 ${}"} />
          </div>
          <div className="slide-list">
            <img className="slide-image" src={Slider2} alt={"2 ${}"} />
          </div>
          <div className="slide-list">
            <img className="slide-image" src={Slider3} alt={"3 ${}"} />
          </div>
          <div className="slide-list">
            <img className="slide-image" src={Slider4} alt={"4 ${}"} />
          </div>
        </Slider>
      </div>
    </section>
  );
}
