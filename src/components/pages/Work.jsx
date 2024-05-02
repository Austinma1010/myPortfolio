import weatherImg from '../../assets/images/weatherDashboard.png';
import movieImg from '../../assets/images/final-screenshot.png';
import dayPlanner from '../../assets/images/schedule.png';
import shapeShift from '../../assets/images/shapeshift_ex1.png';


export default function Blog() {
    return (
        <div className="work card"> 

            <h2 className="title is-3 pageHeader">My Work</h2>
            <summary className="projectContainer">
                <div className="project"> 
                    <h2 className="title is-5">Weather Dashboard</h2>
                    <a href="https://austinma1010.github.io/WeatherChecker/">
                    <figure className="img">
                    <img src={weatherImg}></img>
                    </figure>
                    </a>
                </div>

                <div className="project">
                    <h2 className="title is-5">Movie Search</h2>
                    <a href="https://austinma1010.github.io/MovieSearchEngine/">
                    <figure className="img">
                    <img src={movieImg}></img>
                    </figure>
                    </a>
                </div>

                <div className="project">
                    <h2 className="title is-5">Day Planner</h2>
                    <a>
                    <figure className="img">
                    <img src={dayPlanner}></img>
                    </figure>
                    </a>
                </div>

                <div className="project">
                    <h2 className="title is-5">ShapeShift</h2>
                    <a href='https://shape-shift2-dd464e575484.herokuapp.com/login'>
                    <figure className="img">
                    <img src={shapeShift}></img>
                    </figure>
                    </a>
                </div>

                <div className="project">
                    <h2 className="title is-5">Movie Search</h2>
                    <a>
                    <figure className="img">
                    <img src={weatherImg}></img>
                    </figure>
                    </a>
                </div>

                <div className="project">
                    <h2 className="title is-5">Movie Search</h2>
                    <a>
                    <figure className="img">
                    <img src={weatherImg}></img>
                    </figure>
                    </a>
                </div>

             

            </summary>

        </div>
    );
  }