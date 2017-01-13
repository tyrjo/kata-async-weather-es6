import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/weatherActions';
import TemperatureWidget from '../components/TemperatureWidget';

const WeatherPage = (props) => {
  return (
      <TemperatureWidget
        zipcode={props.data.zipcode}
        temperature={props.data.temperature}
        city={props.data.city}
        onZipcodeChange={props.actions.zipCodeChanged}
      />
  );
};

WeatherPage.propTypes = {
  actions: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    data: state.weather
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherPage);
