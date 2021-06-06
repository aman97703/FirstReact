import React, { useState } from 'react';

const Contact = () => {

  const [data, setData] = useState({
    name : "",
    email : "",
    phone : "",
    message : ""
  });

  const InputEvent = (event)=>{
    const {name,value} = event.target;
    setData((prev)=>{
      return {
        ...prev,
        [name] : value
      }
    })

  }

  const FormSubmit = (event)=>{
    event.preventDefault();
    alert(
      `
      Name : ${data.name}
      Email : ${data.email}
      Phone : ${data.phone}
      Message : ${data.message}`
    )
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={FormSubmit}>
                <div className="mb-3">
                  <label for="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name"  name="name" value={data.name} onChange={InputEvent} placeholder="Enter Your Full Name"/>
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email"  name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                  <label for="phone" className="form-label">Phone</label>
                  <input type="number" className="form-control" id="phone"  name="phone" value={data.phone} onChange={InputEvent} placeholder="+91**********"/>
                </div>
                <div className="mb-3">
                  <label for="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" name="message" value={data.message} onChange={InputEvent} rows="3"></textarea>
                </div>
                <div className="col-12">
                  <button className="btn btn-outline-primary" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Contact;
