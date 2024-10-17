import React from 'react'
import Common from './Common'
import img from './images/img2.PNG'
const About = () => {
  return (
    <div>
      <Common
        name = "  These are my Expertise"
        imgsrc = {img}
        visit = "/contact"
        btnName = "Contact"
      />
    </div>
  )
}

export default About
