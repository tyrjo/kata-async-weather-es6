import React, {PropTypes} from 'react';
import {
  Form,
  FormField,
  TextInput
} from 'grommet';

class TemperatureWidget extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.onZipChange = this.onZipChange.bind(this);
  }

  onZipChange(event) {
    let newZip = event.target.value;
    this.props.onZipcodeChange(newZip);
  }

  render() {
    const {zipcode, temperature, city} = this.props;
    return (
      <div>
        <div>Zip: <input
          value={zipcode}
          onChange={this.onZipChange}/>
        </div>
        <div>Temp: {temperature}</div>
        <div>City: {city}</div>
        <Form>
          <FormField>
            <TextInput
              value={zipcode}
              placeHolder="Enter a 5-digit zip"
              onDOMChange={this.onZipChange}
            />
          </FormField>
        </Form>
      </div>
    );
  }
}

TemperatureWidget.propTypes = {
  temperature: PropTypes.number.isRequired,
  zipcode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  onZipcodeChange: PropTypes.func.isRequired
};

export default TemperatureWidget;
