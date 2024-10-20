import React from 'react'
import { NavLink } from 'react-router-dom'


const Cards = (props) => {
  return (
   <>
     <div className="col-md-4 col-10 mx-auto">
                <div class="card" >
                  <img src={props.imgSrc} class="card-img-top" alt={props.imgSrc} />
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold">{props.tittle}</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <NavLink to="#" class="btn btn-primary ">
                      Go somewhere
                    </NavLink>
                  </div>
                </div>
              </div>
   </>
  )
}

export default Cards
