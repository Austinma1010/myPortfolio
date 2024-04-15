import weatherImg from '../../assets/images/weatherDashboard.png'

export default function Blog() {
    return (
        <div className="work card"> 

            <h2 className="title is-3 pageHeader">My Work</h2>
            <summary>
                <div> 
                    <h2 className="title is-5">Weather Dashboard</h2>
                    <a href="https://austinma1010.github.io/WeatherChecker/">
                    <figure class="image is-128x128">
                    <img src={weatherImg}></img>
                    </figure>
                    </a>
                </div>

                <div>
                    <h2 className="title is-5">Day Planner</h2>
                    <a href="https://austinma1010.github.io/Module5-Challenge/">
                    <figure class="image is-128x128">
                    <img src={weatherImg}></img>
                    </figure>
                    </a>
                </div>

                <div>
                    <h2 className="title is-5">PlaceHolder</h2>
                    <a>
                    <figure class="image is-128x128">
                    <img src={weatherImg}></img>
                    </figure>
                    </a>
                </div>
            </summary>

        </div>
    );
  }