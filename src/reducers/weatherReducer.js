import {ZIP_CODE_CHANGED, WEATHER_DATA_CHANGED} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function weatherReducer(state = initialState.weather, action) {

  switch (action.type) {
    case ZIP_CODE_CHANGED:
      return objectAssign({}, state, {zipcode: action.zipcode});

    case WEATHER_DATA_CHANGED:
      return objectAssign({}, state, {
        temperature: action.temperature,
        city: action.city
      });

    default:
      return state;
  }
}
