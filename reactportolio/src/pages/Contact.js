import React from "react";

// represents the html Contact page
function Contact() {
  return (
    <div className="container col-sm-8">
      <div className="row">
        <div className="col-sm-12">
          <div className="page-header">
            <h1>Contact</h1>
          </div>
        </div>
      </div>

      <div className="row-form">
        <div className="col-sm-8">
          <div className="form-group-1">
            <label for="formGroupExampleInput">Name</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Full Name"
            />
          </div>

          <div className="form-group">
            <label for="formGroupExampleInput2">Email</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Email address"
            />
          </div>

          <div className="form-group-message">
            <label for="formGroupExampleInput3">Message</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Please type your message here."
              rows="5"
            ></textarea>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
        {/* <div>
                <p> Email: aaron@adsimsllc.com <br> Phone: (312) 909-0974</p>
            </div> */}
      </div>
    </div>
  );
}

export default Contact;
