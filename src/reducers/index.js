import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import weather from './weatherReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  weather,
  routing: routerReducer
});

export default rootReducer;
