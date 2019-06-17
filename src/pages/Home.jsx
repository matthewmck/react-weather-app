import React from 'react';
import { connect } from 'react-redux';
import CurrentInfo from '../components/CurrentInfo';
import WeeklyInfo from '../components/WeeklyInfo';
import WeatherCard from '../components/WeatherCard';
import styled from 'styled-components';
import img from '../img/rain.jpg';

const PageTitle = styled.h1`
  color: #F5F4F6;
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
  color: #F5F4F6;
  display: block;
  font-weight: 700;
  margin-bottom: .5rem;

  @media (max-width: 950px) {
    margin-bottom: .4rem;
  }
`;

const Input = styled.input`
  color: #323538;
  border: 1px solid #DDE3E5;
  border-radius: .4rem;
  font-size: 1.6rem;
  font-weight: 700;
  height: 2.5rem;
  padding: .5rem .5rem .5rem 1rem;
  transition: box-shadow 0.3s cubic-bezier(.25,.8,.25,1);
  width: 350px;

  &:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }

  &:focus {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
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
  background-image: url(${img}), linear-gradient(
    to top left, 
    #5D38EC, #7D60F0
  );

  @media (max-width: 950px) {
    padding: 2rem;
  }
`;

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 1170px;
  width: 100%

  @media (max-width: 950px) {
    align-content: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const SearchContainer = styled.section`
  @media (max-width: 950px) {
    margin: auto;
    max-width: 100%;
    width: 44rem;
  }
`;

const NonBreakable = styled.div`
  @media (max-width: 950px) {
    display: flex;
    align-items: flex-end;
  }
`;

const SearchBTN = styled.button`
  background: #71EFC4;
  border: none;
  border-radius: .4rem;
  color: #323538;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 700;
  height: 3.5rem;
  margin-left: 1rem;
  padding: 0 1.5rem;
  transition: background 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    background: #5FCCA7;
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

const Index = props => {
  const {currently, daily, location, timezone } = props.forecast;

  return(
    <React.Fragment>
      <Hero>
        <HeroContainer>
          <SearchContainer>
          <PageTitle>Weather Forecast</PageTitle>
          <NonBreakable>
            <Label>
              <LabelText>Location:</LabelText>
              <Input type="text" name="location"/>
            </Label>
            <SearchBTN>Search</SearchBTN>
          </NonBreakable>
        </SearchContainer>
        <CurrentlyContainer>
          {Object.keys(props.forecast).length && (
            <WeatherCard 
              apparentTemp={currently.apparentTemperature}
              chanceOfRain={currently.precipProbability}
              dewPoint={currently.dewPoint}
              humidity={currently.humidity}
              location={location}
              type='current'
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
};

const mapStateToProps = state => ({
  forecast: state.forecast
});

export default connect(mapStateToProps)(Index);