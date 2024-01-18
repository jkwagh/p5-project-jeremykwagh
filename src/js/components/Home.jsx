import React from "react"

const Home = () => {
    return (
      <main role="main" className="container d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h1>Welcome to EventPlanner</h1>
          <p className="lead">
            The website for all your event organizing needs
          </p>
          <p className="lead">
            Click the schedule in the navbar for a full list of events.
          </p>
          <p className="lead">
            To register for any of the listed events, please sign up.
          </p>
          <p>
            <img
              src="https://www.millertanner.com/wp-content/uploads/2022/05/shutterstock_758264113.jpg"
              alt="Event Planner"
            />
          </p>
        </div>
      </main>
    );
  };
  

export default Home;