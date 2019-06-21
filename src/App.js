import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getForecast } from './actions/getForecastActions';

// PAGES
import Home from './pages/Home';

// FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSun,
  faMoon,
  faCloudRain,
  faSnowflake,
  faWind,
  faSmog,
  faCloud,
  faCloudSun,
  faCloudMoon,
  faArrowLeft,
  faTimes,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faSun,
  faMoon,
  faCloudRain,
  faSnowflake,
  faWind,
  faSmog,
  faCloud,
  faCloudSun,
  faCloudMoon,
  faArrowLeft,
  faTimes,
  faChevronLeft,
  faChevronRight
);

class App extends Component {
  componentDidMount() {
    this.props.getForecast('New York, NY');
  }

  render() {
    return (
      <React.Fragment>
        <Home />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getForecast: value => dispatch(getForecast(value))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
