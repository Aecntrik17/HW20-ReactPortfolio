import React from "react";
import profilePic from "../assets/AaronSims.jpg";

// the html display for the about page
function About() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1>About Me</h1>
          <img alt="Aaron Sims" src={profilePic} />
          <p className="content">
            A natural leader with a demeanor equipped for cultivating
            relationships, effective communication, and teamwork with a proven
            track record for delivering solutions across internal and external
            partners. Currently earning a full stack web development certificate
            from the University of North Carolina at Chapel Hill.
          </p>
          <p className="content">
            Seeking an entry-level Front-End Developer opportunity where I can
            apply newly acquired HTML, Javascript, and REACT skills while
            leveraging my 15 + years of corporate and entrepreneurial experience
            within the Financial Services industry. I intend to add value by
            providing unique perspectives on end user interaction.
          </p>
          <p className="content">
            Computer science is a new venture for me yet a welcomed challenge. I
            have been working since the age of 13 and financed my self through
            college while also playing D-I athletics. I strive for perfection in
            all things professional and personal yet realize that often times
            merely excellence is attainable.
          </p>
        </div>
      </div>
    </div>
  );
}
// allows for this data in About to be accessed in other files
export default About;
