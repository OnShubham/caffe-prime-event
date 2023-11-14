import React from "react";
import { Carousel } from "antd";
import img1 from "../../Assets/images/darya-tryfanava-5gSlzRZE3RQ-unsplash.jpg";
import img2 from "../../Assets/images/jacek-dylag-PR-B3hhcOZY-unsplash.jpg";
import img3 from "../../Assets/images/gritt-zheng-77M4EfAOn-w-unsplash.jpg";
import img4 from "../../Assets/images/fakhrul-fadillah-OFauWbPMypQ-unsplash.jpg";

const carouselStyle = {
  maxWidth: "100%",
  maxHeight: "400px",
  textAlign: "center",
  overflow: "hidden",
};

const imgStyle = {
  width: "100%",
  height: "400px",
  objectFit: "cover",
};

const slideStyle = {
  maxWidth: "100%",
  maxHeight: "400px",
};

function Slidex() {
  return (
    <div style={slideStyle}>
      <Carousel autoplay style={carouselStyle}>
        <div>
          <img src={img1} style={imgStyle} alt="Slide 1" />
        </div>
        <div> 
          
          <img src={img2} style={imgStyle} alt="Slide 2" />
        </div>
        <div>
          <img src={img3} style={imgStyle} alt="Slide 3" />
        </div>
        <div>
          <img src={img4} style={imgStyle} alt="Slide 4" />
        </div>
      </Carousel>
    </div>
  );
}

export default Slidex;
