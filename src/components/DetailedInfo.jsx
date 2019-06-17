import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modalActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { displayIcon, displayTime, getAverage, decimalToPercent } from '../utils';

const Details = props => {
  if (Object.keys(props.forecast).length && props.modal.index >= 0) {
    const { currently, daily, location, timezone } = props.forecast;
    const { current, index } = props.modal;
    const data = new Object();

    if (current) {
      data.dateTime = `${displayTime(currently.time, timezone).format('h:mm a')} Today`;
      data.summary = currently.summary;
      data.icon = displayIcon(currently.icon);
      data.temp = `${currently.temperature.toFixed(0)}`;
      data.feelsLike =`${currently.apparentTemperature.toFixed(0)} °F`;
      data.high = `${daily.data[0].temperatureHigh.toFixed(0)} °F`;
      data.low = `${daily.data[0].temperatureLow.toFixed(0)} °F`;
      data.rain = `${decimalToPercent(currently.precipProbability)}%`;
      data.humidity = `${decimalToPercent(currently.humidity)}%`;
      data.dewpoint = `${currently.dewPoint.toFixed(0)} °F`;
      data.wind = `${currently.windSpeed.toFixed(0)} mph`;
      data.uvindex = currently.uvIndex;
    } else {
      data.dateTime = displayTime(daily.data[index].time, timezone).format('MMMM Do, YYYY');
      data.summary = daily.data[index].summary;
      data.icon = displayIcon(daily.data[index].icon);
      data.temp = `${getAverage(daily.data[index].temperatureMin, daily.data[index].temperatureMax)}`;
      data.feelsLike = `${getAverage(daily.data[index].apparentTemperatureMin, daily.data[index].apparentTemperatureMax)} °F`;
      data.high = `${daily.data[index].temperatureHigh.toFixed(0)} °F`;
      data.low = `${daily.data[index].temperatureLow.toFixed(0)} °F`;
      data.rain = `${decimalToPercent(daily.data[index].precipProbability)}%`;
      data.humidity = `${decimalToPercent(daily.data[index].humidity)}%`;
      data.dewpoint = `${daily.data[index].dewPoint.toFixed(0)} °F`;
      data.wind = `${daily.data[index].windSpeed.toFixed(0)} mph`;
      data.uvindex = daily.data[index].uvIndex;
    }

    return (
      <React.Fragment>
          <div className="info-close-container">
            <button
              aria-label="close"
              className="info-close-btn"
              onClick={props.closeModal}
            >
              <FontAwesomeIcon icon="times" size="lg" />
            </button>
          </div>
          <section>
            <article>
              <h2>{data.dateTime}</h2>
              <p className="summary">{data.summary}</p>
              <div className="icon-container">
              <FontAwesomeIcon className="weather-icon" icon={data.icon} size="4x" />
                <p>
                  <span className="weather-temp">{data.temp}</span>
                  <span className="weather-temp-degree"> °F</span>
                </p>
              </div>
            </article>

            <div className="info-row">
              <article className="info-card">
                <p>Feels Like</p>
                <p className="info-stat">{data.feelsLike}</p>
              </article>

              <article className="info-card">
                <p>Rain</p>
                <p className="info-stat">{data.rain}</p>
              </article>
            </div>

            <div className="info-row">
              <article className="info-card">
                <p>High</p>
                <p className="info-stat">{data.high}</p>
              </article>

              <article className="info-card">
                <p>Low</p>
                <p className="info-stat">{data.low}</p>
              </article>
            </div>

            <div className="info-row">
              <article className="info-card">
                <p>Humidity</p>
                <p className="info-stat">{data.humidity}</p>
              </article>

              <article className="info-card">
                <p>Dew Point</p>
                <p className="info-stat">{data.dewpoint}</p>
              </article>
            </div>

            <div className="info-row">
              <article className="info-card">
                <p>Wind</p>
                <p className="info-stat">{data.wind}</p>
              </article>

              <article className="info-card">
                <p>UV Index</p>
                <p className="info-stat">{data.uvindex}</p>
              </article>
            </div>
          </section>
      </React.Fragment>
    );
  }

  return null;
}

const mapStateToProps = state => ({
  forecast: state.forecast,
  modal: state.modal
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Details);