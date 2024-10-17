import React from "react";
import Common from "./Common";
import img from "./images/coder.webp"
const Home = () => {
    
  return (
   <>
    <Common
        name = " a Frontend Developer"
        imgsrc = {img}
        visit = "/About"
        btnName ="About Me"
    />
   </>
  );
};

export default Home;
