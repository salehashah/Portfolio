import React from "react";
import Sdata from "./Sdata";
import Cards from "./Cards"
const Skills = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
             {
              Sdata.map((val,indx) => {
                return <Cards
                  key = {indx}
                  imgSrc = {val.imgsrc}
                  tittle = {val.tittle}
                />
              })
             }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
