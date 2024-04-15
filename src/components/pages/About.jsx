import pfp from '../../assets/images/BootcampPFP.jpg'

export default function About() {
    return (
      
      <div className="about card">
        <figure className="image is-128x128">
          <img src={pfp} alt="Image of me looking at camera" />
        </figure>
        <h1 className="title is-4 pageHeader">Some Info About Me</h1>
        <p className="info">
          My name is Austin and I'm in the process of learning the MERN stack and becoming a web developer!
          So far I have expirience using javascript, HTML, CSS, React, MySql, MongoDb, Handlebars, and Graphql.
        </p>
      </div>
    );
  } 