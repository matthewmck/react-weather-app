// REACT
import React from 'react';
// LIBS
import { connect } from 'react-redux';
import styled from 'styled-components';
// COMPONENTS
import Slider from './Slider';
import WeatherCard from './WeatherCard';

const Container = styled.section`
  display: flex;
  justify-content: center;
  margin: 4rem auto;
  max-width: 1170px;
  width: 100%;

  @media (max-width: 650px) {
    box-sizing: border-box;
    flex-direction: column;
    margin: 4rem 0;
    padding: 1.5rem;
  }
`;

const NoData = styled.section`
  font-size: 2.2rem;
  font-weight: 800;
  margin-top: 4rem;
  text-align: center;
`;

const WeeklyInfo = props => {
  const { daily, timezone } = props.forecast;
  const exists = Object.keys(props.forecast).length ? true : false;
  return (
    <Container>
      {exists && (
        <Slider>
          {daily.data.map((item, index) => (
            <section key={`weekly${index}`}>
              <WeatherCard
                apparentMaxTemp={item.apparentTemperatureMax}
                apparentMinTemp={item.apparentTemperatureMin}
                chanceOfRain={item.precipProbability}
                dewPoint={item.dewPoint}
                humidity={item.humidity}
                type="weekly"
                time={item.time}
                timezone={timezone}
                summary={item.summary}
                tempHigh={item.temperatureHigh}
                tempLow={item.temperatureLow}
                icon={item.icon}
                wind={item.windSpeed}
                uv={item.uvIndex}
              />
            </section>
          ))}
        </Slider>
      )}
      {!exists && <NoData>Unable to retrieve weather data 😨</NoData>}
    </Container>
  );
};

const mapStateToProps = state => ({
  forecast: state.forecast
});

export default connect(mapStateToProps)(WeeklyInfo);
