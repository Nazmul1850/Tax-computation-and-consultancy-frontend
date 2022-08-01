import { useState } from "react"
import axios from 'axios'

const messages = {
  name : "",
  email : "",
  subject : "",
  message :""
}

const Contact = ()=> {

  const [values , setValues] = useState(messages);

  const handleChange = (e) => {
    setValues({...values, [e.target.name]:e.target.value})
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const { name, email, subject, message } = values
    const newMessage = {name , email , subject , message};
    try {
      const response = await axios.post("/user/contact",newMessage)
      console.log(response)
    } catch (error) {
      console.log(error.response)
    }
}
  return (
    <form onSubmit={onSubmit}>
        <div className="container contact">
      <h2 className="main-title text-center">CONTACT</h2>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4 mb-1">
            <input name="name" placeholder="Name" onChange={handleChange} value={values.name}  className="contact-input" />
          </div>

          <div className="col-md-4 mb-1">
            <input name="email" placeholder="Email" onChange={handleChange} value={values.email}  className="contact-input" />
          </div>
          <div className="col-md-4 mb-1">
            <input
              name="subject"
              placeholder="Subject"
              value={values.subject}
              onChange={handleChange}
              className="contact-input"
            />
          </div>
        </div>
      </div>
      <br />
      <div className="col-md-12">
      <textarea
            name="message"
            placeholder="Message"
            value={values.message}
            onChange={handleChange}
            className="contact-textarea"
          />
      </div>

      <br></br>
      <div className="row">
        <div className="col-md-12">
          <input className="form-btn" type="submit" />
        </div>
      </div>
    </div>
    </form>
    
  );
}
export default Contact;
