import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../actions/modalActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { displayTime, displayIcon, decimalToPercent } from '../utils';

const CurrentInfo = props => {
  const { location, currently, daily, timezone } = props.forecast;
  console.log(props.forecast)
  return(
    <section className="current-container">
      {Object.keys(props.forecast).length && (
        <React.Fragment>
          <h2>{location}</h2>
          <p>{`Today ${displayTime(currently.time, timezone).format('h:mm a')}`}</p>
          <p className="summary">{currently.summary}</p>
          <div className="icon-container">
            <FontAwesomeIcon className="weather-icon" icon={displayIcon(currently.icon)} size="4x" />
            <p>
              <span className="weather-temp">{currently.temperature.toFixed(0)}</span>
              <span className="weather-temp-degree"> °F</span>
            </p>
          </div>
          <p>
            {`Feels like: ${currently.apparentTemperature.toFixed(0)}`} 
          </p>
          <p>
            {`${decimalToPercent(currently.precipProbability)}% chance of rain`}
          </p>
          <div className="info-btn-container">
            <button className="info-btn" onClick={() => props.openModal(0, true)}>More Info</button>
          </div>
        </React.Fragment>
      )}
    </section>
  );
}

const mapStateToProps = state => ({
  forecast: state.forecast
});

const mapDispatchToProps = dispatch => ({
  openModal: (index, current) => dispatch(openModal(index, current))
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentInfo);