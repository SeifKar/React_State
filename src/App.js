import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "A software engineer from Silicon Valley.",
        imgSrc: "https://via.placeholder.com/150", // Replace with a valid image URL
        profession: "Software Engineer",
      },
      shows: false,
      timeElapsed: 0,
    };

    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ timeElapsed: prevState.timeElapsed + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, timeElapsed } = this.state;

    return (
      <div className="App">
        <h1>Profile</h1>
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        
        {shows && (
          <div>
            <h2>{fullName}</h2>
            <img src={imgSrc} alt={fullName} />
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}

        <p>Time since component mounted: {timeElapsed} seconds</p>
      </div>
    );
  }
}

export default App;
