import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullName: '',
    Phone: '',
    Email: '',
    msg: ''
  })

  const InputEvent = (event)=>{
   const {name,value} = event.target

   setData ((preVal)=>{
    return {
          ...preVal,
          [name] : value,
                }
   })
  }

  const SubmitForm = (e)=>{
    e.preventDefault();
    alert (`My name is ${data.fullName}.My Phone No is ${data.Phone}, and email id is ${data.Email}, here is what I want to say "${data.msg}"`)
  }
  return (
    <>
      <h1 className="text-center mt-4">Contact</h1>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto"></div>
          <form onSubmit={SubmitForm}>
            <div class="mb-3 justify-content-center">
              <label for="exampleInputEmail1" class="form-label">
                Full Name
              </label>
              <input
                type="name"
                class="form-control "
                id="exampleInputEmail1"
                name="fullName"
                value={data.fullName}
                onChange={InputEvent}
                placeholder="Enter Your Name"
              />
            </div>
            <div class="mb-3 justify-content-center">
              <label for="exampleInputPhone1" class="form-label">
                Phone No
              </label>
              <input
                type="Number"
                class="form-control"
                id="exampleInputEmail1"
                name="Phone"
                value={data.Phone}
                onChange={InputEvent}
                placeholder="Mobile Number"
              />
            </div>
            <div class="mb-3 justify-content-center">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="Email"
                value={data.Email}
                onChange={InputEvent}
                placeholder="example@email.com"
              />
            </div>
            <div class="mb-3 justify-content-center">
              <label
                for="exampleFormControTextarea1"
                class="form-label text-area"
              >
                Message
              </label>
              <textarea
                id="exampleFormControTextarea1"
                class="form-label"
                rows="3"
                name="msg"
                value={data.msg}
                onChange={InputEvent}
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
