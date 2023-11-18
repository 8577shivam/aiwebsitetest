// ImageSection.js
import React from "react";
import img1 from "../assets/img/img1.jpg";
import img3 from "../assets/img/img2.jpg";
import img2 from "../assets/img/img3.jpg";
// import "./ImageSection.css"; // Import your CSS file for styling

const ImageSection = () => {
  return (
    <div className="image-container">
      <div className="box box1">
        <img src={img1} alt="Image 1" />
        <p className="imgcount">01</p>
        <div className="lower_img_section">
          <div className="imgbox">
            <img height={32} width={32} src={img1} alt="Image 1" />
            <img height={32} width={32} src={img1} alt="Image 1" />
            <img height={32} width={32} src={img1} alt="Image 1" />
            <p className="imgboxtext">Learn from best mentors</p>
          </div>

          <a className="header-link btnlink">Start Learning</a>
        </div>
      </div>
      <div className="box box2">
        <img src={img2} alt="Image 2" />
        <p className="imgcount">01</p>
        <div className="lower_img_section">
          <ul className="section-list">
            <li className="section-list-box">
              <p>Free Edit</p> <span>+</span>
            </li>
            <li className="section-list-box">
              <p>Free Edit</p> <span>+</span>
            </li>
            <li className="section-list-box">
              <p>Free Edit</p> <span>+</span>
            </li>
            <li className="section-list-box">
              <p>Free Edit</p> <span>+</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="box box3">
        <img src={img3} alt="Image 3" />
        <p className="imgcount">01</p>
        <div className="lower_img_section">
          <div className="section_grid">
            <h1 className="perf_count">+20K</h1>
            <p className="section_text">
              Glass Pattern Generated this in a week in Performance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
