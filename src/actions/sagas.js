import {put, fork, take, call} from 'redux-saga/effects';
import {ZIP_CODE_CHANGED, WEATHER_DATA_CHANGED} from '../constants/actionTypes';

export function* rootSaga() {
  yield [
    onZipCodeChanged()
  ];
}

export function* onZipCodeChanged() {
  while (true) {
    const action = yield take(ZIP_CODE_CHANGED);
    let url = "http://api.openweathermap.org/data/2.5/weather?zip=" +
      action.zipcode +
      ",us&units=imperial&APPID=5da3194d0be639167f896d94e7c2d13c";
    yield fork(fetchUrl, url);
  }
}

function* fetchUrl(url) {
  const response = yield call(fetch, url);
  response.json().then(function* (json) {
   yield put({
      type: WEATHER_DATA_CHANGED,
      temperature: json.main.temp,
      city: json.name
    });
  });
}

function getWeather(zipcode) {
  return fetch("http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",us&units=imperial&APPID=5da3194d0be639167f896d94e7c2d13c")
    .then((response) => {
      response.json().then((json) => {
          return {
            temperature: json.main.temp,
            city: json.name
          };
        }
      );
    });
}
