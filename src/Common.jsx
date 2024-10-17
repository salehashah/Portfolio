import React from 'react'
import { NavLink } from "react-router-dom";


const Common = (props) => {
  return (
    <>
    <section id="header" className="d-flex align-item-center">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  Hi! Its <strong className="brand-name"> Noor Fatima </strong>  
                  {props.name}
                </h1>
                <p className="my-3">
                  Passionate frontend developer dedicated to crafting
                  intuitive and responsive user experiences. Leveraging the
                  latest web technologies to bring designs to life with
                  precision and creativity.
                </p>
                <div className="mt-3">
                  <NavLink to={props.visit} className="btn-get-start">
                    {props.btnName}
                  </NavLink>
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <div className="image-container">
                  <img src={props.imgsrc} className="img-fluid animated" alt ="home img"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Common
