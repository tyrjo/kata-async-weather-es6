import * as types from '../constants/actionTypes';

// example of a thunk using the redux-thunk middleware
export function zipCodeChanged(zipcode) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel saving
    dispatch({
      type: types.ZIP_CODE_CHANGED,
      zipcode: zipcode
    });
    getWeather(zipcode, dispatch);
  }
}

function getWeather(zipcode, dispatch) {
  fetch("http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",us&units=imperial&APPID=5da3194d0be639167f896d94e7c2d13c")
    .then((response) => {
      response.json().then((json) => {
          dispatch({
            type: types.WEATHER_DATA_CHANGED,
            temperature: json.main.temp,
            city: json.name
          });
        }
      );
    });
}
