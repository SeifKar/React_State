import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: "Brian Seif",
      bio: "A passionate software developer with 6 months of experience",
      imgSrc: "https://www.google.com/search?q=arsenal+logo+150+by+150&oq=arsenal+logo+150+by+150&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRiPAtIBCTEwMzk1ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#vhid=gGEfMq5P1ffl6M&vssid=_Spk9Z5u0F8ydi-gPh6XLoQc_35",
      profession: "Software Engineer"
    },
    shows: false,
    timeInterval: 0
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  };

  render() {
    const { person, shows, timeInterval } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>Toggle Profile</button>
        <p>Time since mount: {timeInterval} seconds</p>
        
        {shows && (
          <div className="profile">
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
