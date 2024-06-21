import pfp from '../../assets/images/workSelfie.png'

export default function About() {
    return (
      
<div className="about box row">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
      <img src={pfp} alt="Image of me looking at camera" />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p className="about block">
          <strong>Some Info About Me</strong>
          
          <br />
          Hello and welcome! I'm Austin, an enthusiastic web developer eager to create user-friendly websites and applications. 
          With a solid foundation in several Technologies, I have completed various projects during my education. 
          My passion for web development drives me to continuously learn and improve my skills, tackling new challenges 
          with creativity and dedication. As I embark on my professional journey, I am excited to showcase the projects I've worked on 
          and the innovative solutions I've developed. Please explore my portfolio to see my growth and the potential I bring to future projects
        </p>
      </div>
      <nav className="level is-mobile">
        <div className="level-left">
          <a className="level-item" aria-label="reply">
            <span className="icon is-small">
              <i className="fas fa-reply" aria-hidden="true"></i>
            </span>
          </a>
          <a className="level-item" aria-label="retweet">
            <span className="icon is-small">
              <i className="fas fa-retweet" aria-hidden="true"></i>
            </span>
          </a>
          <a className="level-item" aria-label="like">
            <span className="icon is-small">
              <i className="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </article>
  <nav class="panel">
  <p class="panel-heading">Technologies Used:</p>

  <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" class="panel-block">
    Javascript
  </a>
  <a target="_blank" href="https://react.dev/"  class="panel-block">
    React
  </a>
  <a target="_blank" href="https://www.mysql.com/"  class="panel-block">
    MySql
  </a>
  <a target="_blank" href="https://www.mongodb.com/"  class="panel-block">
    MongoDb
  </a>
  <a target="_blank" href="https://handlebarsjs.com/"  class="panel-block">
    Handlebars
  </a>
  <a target="_blank" href="https://graphql.org/"  class="panel-block">
    Graphql
  </a>
  <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML"  class="panel-block">
    HTML
  </a>
  <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS"  class="panel-block">
    CSS and various CSS frameworks
  </a>
  <div class="panel-block end">
  </div>
</nav>
</div>

      // <div className="about card">
      //   <figure className="image is-128x128">
      //     <img src={pfp} alt="Image of me looking at camera" />
      //   </figure>
      //   <h1 className="title is-4 pageHeader">Some Info About Me</h1>
      //   <p className="info">
      //     My name is Austin and I'm in the process of learning the MERN stack and becoming a web developer!
      //     So far I have experience using javascript, HTML, CSS, React, MySql, MongoDb, Handlebars, and Graphql.
      //   </p>
      // </div>
    );
  } 