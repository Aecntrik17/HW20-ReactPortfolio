import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

// represents the html Contact page
function Contact() {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  function sendEmail(event) {
    event.preventDefault();
    console.log("ran code");

    emailjs
      .send(
        "ReactPortfolio",
        "template_8sa9j82",
        { from_name: nameInput, message: messageInput, reply_to: emailInput },
        "user_YRtEAKFB1n5e7rK9BvO8G"
      )
      .then(
        (result) => {
          setNameInput("");
          setEmailInput("");
          setMessageInput("");
          console.log(result.text);
          alert("email sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="container col-sm-8">
      <div className="row">
        <div className="col-sm-12">
          <div className="page-header">
            <h1>Contact</h1>
          </div>
        </div>
      </div>

      <form onSubmit={sendEmail}>
        <div className="row-form">
          <div className="col-sm-8">
            <div className="form-group-1">
              <label htmlFor="formGroupExampleInput">Name</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Full Name"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Email</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Email address"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>

            <div className="form-group-message">
              <label htmlFor="formGroupExampleInput3">Message</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Please type your message here."
                rows="5"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
              ></textarea>
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
