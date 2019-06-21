import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getForecast } from '../actions/getForecastActions';
import WeeklyInfo from '../components/WeeklyInfo';
import WeatherCard from '../components/WeatherCard';
import styled from 'styled-components';
import img from '../img/rain.jpg';
import { conditionalExpression } from '@babel/types';

const PageTitle = styled.h1`
  color: #f5f4f6;
  font-size: 4.5rem;
  font-weight: 900;
  margin-bottom: 2rem;
  margin-top: 6rem;

  @media (max-width: 950px) {
    font-size: 4rem;
    margin-bottom: 1.6rem;
    margin-top: 4rem;
  }
`;

const Label = styled.label`
  @media (max-width: 950px) {
    max-width: 350px;
    width: 100%;
  }
`;

const LabelText = styled.div`
  color: #f5f4f6;
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;

  @media (max-width: 950px) {
    margin-bottom: 0.4rem;
  }
`;

const Input = styled.input`
  color: #323538;
  border: 1px solid #dde3e5;
  border-radius: 0.4rem;
  font-size: 1.6rem;
  font-weight: 700;
  height: 2.5rem;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 350px;

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  &:focus {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  @media (max-width: 950px) {
    box-sizing: border-box;
    font-size: 1.4rem;
    height: 3.5rem;
    max-width: 350px;
    width: 100%;
  }
`;

const Hero = styled.div`
  align-items: center;
  display: flex;
  min-height: 46vh;
  padding: 4rem;
  overflow: auto;

  background-size: cover;
  background-image: url(${img}), linear-gradient(to top left, #5d38ec, #7d60f0);

  @media (max-width: 950px) {
    padding: 2rem;
  }
`;

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 1170px;
  width: 100%;
  
  @media (max-width: 950px) {
    align-content: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const SearchContainer = styled.section`
  @media (max-width: 950px) {
    margin: auto;
    max-width: 44rem;
    width: 100%;
  }
`;

const NonBreakable = styled.div`
  @media (max-width: 950px) {
    display: flex;
    align-items: flex-end;
  }
`;

const SearchBTN = styled.button`
  background: #71efc4;
  border: none;
  border-radius: 0.4rem;
  color: #323538;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 700;
  height: 3.5rem;
  margin-left: 1rem;
  padding: 0 1.5rem;
  transition: background 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    background: #5fcca7;
  }

  &:focus {
    outline: 4px solid #00a9ff;
  }

  @media (max-width: 950px) {
    font-size: 1.4rem;
    height: 3.7rem;
  }
`;

const CurrentlyContainer = styled.div`
  @media (max-width: 950px) {
    margin: 6rem auto 0 auto;
  }
`;

class Home extends Component {

  state = { location: "" };

  updateLocation = e => this.setState({ location: e.target.value })

  handleInputEnter = e => {
    if (e.key === 'Enter') {
      return this.handleWeatherRequest();
    }
  }
  handleWeatherRequest = () => this.props.getForecast(this.state.location);

  render() {
    const { currently, daily, location, timezone } = this.props.forecast;

    return (
      <React.Fragment>
        <Hero>
          <HeroContainer>
            <SearchContainer>
              <PageTitle>Weather Forecast</PageTitle>
              <NonBreakable>
                <Label>
                  <LabelText>Location:</LabelText>
                  <Input
                    onChange={this.updateLocation}
                    onKeyPress={this.handleInputEnter}
                    name="location"
                    type="text"
                    value={this.state.location}
                  />
                </Label>
                <SearchBTN onClick={this.handleWeatherRequest}>Search</SearchBTN>
              </NonBreakable>
            </SearchContainer>
            <CurrentlyContainer>
              {Object.keys(this.props.forecast).length > 0 && (
                <WeatherCard
                  apparentTemp={currently.apparentTemperature}
                  chanceOfRain={currently.precipProbability}
                  dewPoint={currently.dewPoint}
                  humidity={currently.humidity}
                  location={location}
                  type="current"
                  time={currently.time}
                  timezone={timezone}
                  summary={currently.summary}
                  temp={currently.temperature}
                  tempHigh={daily.data[0].temperatureHigh}
                  tempLow={daily.data[0].temperatureLow}
                  icon={currently.icon}
                  wind={currently.windSpeed}
                  uv={currently.uvIndex}
                />
              )}
            </CurrentlyContainer>
          </HeroContainer>
        </Hero>
        <WeeklyInfo />
      </React.Fragment>
    );
  }
};

const mapStateToProps = state => ({
  forecast: state.forecast
});

const mapDispatchToProps = dispatch => ({
  getForecast: value => dispatch(getForecast(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
