import React from 'react';

class TemperatureWidget extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.onZipChange = this.onZipChange.bind(this);
    this.state = {
      zip: "",
      city: "",
      temperature: ""
    };
  }

  onZipChange(event) {
    this.setState({
      zip: event.target.value
    });
    this.getWeather();
  }

  getWeather() {
    fetch("http://api.openweathermap.org/data/2.5/weather?zip=" + this.state.zip + ",us&units=imperial&APPID=5da3194d0be639167f896d94e7c2d13c")
      .then((response) => {
        response.json().then((json) => {
            this.setState({
              temperature: json.main.temp,
              city: json.name
            });
          }
        );
      });
  }
  componentDidMount() {
    this.getWeather();
  }

  render() {
    return (
      <span>
            <div>Zip: <input
              value={this.state.zip}
              onChange={this.onZipChange}/>
            </div>
            <div>Temp: {this.state.temperature}</div>
            <div>City: {this.state.city}</div>
          </span>
    );
  }
}

TemperatureWidget.propTypes = {};

export default TemperatureWidget;
