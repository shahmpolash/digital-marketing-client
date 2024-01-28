import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Pricing.css';

const Pricing = () => {
  const margin0 = {
    marginBottom: "0",
    marginRight: "10px",
  };

  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/packages`)
      .then((res) => res.json())
      .then((info) => setPackages(info));
  }, []);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/package-titles/`)
      .then((res) => res.json())
      .then((info) => setTitle(info));
  }, []);

  return (
    <>
      <section
        className="testimonials s2"
        data-aos="fade-up"
        data-aos-duration={3000}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="testimonials__main">
                {title.map((e, i) => (
                  <div className="block-text center" key={i}>
                    <h6 className="sub-heading">
                      <span>{e.titleTop}ss</span>
                    </h6>
                    <h3 className="heading">
                      {e.titleOne} <br />
                      {e.titleTwo}
                    </h3>
                    <p className="mt-15"> {e.description}</p>
                  </div>
                ))}
                <div className="swiper testimonials-swiper s2">
                  <div className="container">
                    <div className="row">
                      {packages.map((p, i) => (
                        <div className="col-lg-4 col-md-6 col-12 margin__mobile" key={i}>
                          <div className="swiper-slide">
                            <div className="box-testimonial center">
                              <div className="image">
                                <img src={p.img} alt="" />
                              </div>
                              <div className="info pricing">
                                <h5 className="name">${p.price} USD</h5>

                                <p>{p.packageName}</p>
                               
                              </div>
                              <li className="text1">
                                
                                <span>{p.featureOne}</span>
                              </li>
                              <li className="text1">
                                
                                <span>{p.featureTwo}</span>
                              </li>{" "}
                              <li className="text1">
                               
                                <span>{p.featureThree}</span>
                              </li>{" "}
                              <li className="text1">
                               
                                <span>{p.featureFour}</span>
                              </li>{" "}
                              <li className="text1">
                               
                                <span>{p.featureFive}</span>
                              </li>{" "}
                              <li className="text1">
                               
                                <span>{p.featureSix}</span>
                              </li>{" "}
                              <li className="text1">
                               
                                <span>{p.featureSeven}</span>
                              </li>{" "}
                              <li className="text1">
                               
                                <span>{p.featureEight}</span>
                              </li>{" "}
                              <li className="text1">
                                
                                <span>{p.featureNine}</span>
                              </li>
                              <li className="text1">
                               
                                <span>{p.featureTen}</span>
                              </li>
                              <Link class="action-btn" to={`/package/${p._id}`}>
                                {" "}
                                <span>Buy Now</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
