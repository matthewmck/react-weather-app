// REACT
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// LIBS
import styled from 'styled-components';

// COMPONENTS
import ApparentTemp from './ApparentTemp';
import BackBTN from './BackBTN';
import CardHeading from './CardHeading';
import ChanceOfRain from './ChanceOfRain';
import DewPoint from './DewPoint';
import Card from './Card';
import Humidity from './Humidity';
import HighTemp from './HighTemp';
import LowTemp from './LowTemp';
import MoreInfoBTN from './MoreInfoBTN';
import Summary from './Summary';
import Temp from './Temp';
import TimeInfo from './TimeInfo';
import Wind from './Wind';
import UVIndex from './UVIndex';

const Article = styled.article`
  height: 40rem;
  perspective: 150rem;
  position: relative;
  width: 30rem;

  @media (max-width: 650px) {
    box-sizing: border-box;
    margin: 2.5rem auto 0 auto;
    padding: 1.5rem 3rem;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Index = props => {
  const [toggle, setToggle] = useState(false);
  const {
    apparentTemp,
    apparentMaxTemp,
    apparentMinTemp,
    chanceOfRain,
    dewPoint,
    humidity,
    type,
    location,
    time,
    timezone,
    summary,
    temp,
    tempHigh,
    tempLow,
    icon,
    wind,
    uv
  } = props;

  return(
    <Article>
      <Card type='front' toggle={toggle}>
        <CardHeading 
          location={location}
          time={time}
          timezone={timezone}
          type={type}
        />
        <TimeInfo 
          time={time}
          timezone={timezone}
          type={type}
        />
        <Summary summary={summary} />
        <Temp 
          icon={icon}
          temp={temp}
          tempHigh={tempHigh}
          tempLow={tempLow}
          type={type}
        />
        <ApparentTemp 
          apparentTemp={apparentTemp}
          apparentMaxTemp={apparentMaxTemp}
          apparentMinTemp={apparentMinTemp}
          type={type}
        />
        <ChanceOfRain chanceOfRain={chanceOfRain} />
        <MoreInfoBTN controlClick={() => setToggle(!toggle)} toggle={toggle}/>
      </Card>
      <Card type='back' toggle={toggle}>
        <BackBTN controlClick={() => setToggle(!toggle)} toggle={toggle}/>
        <Row>
          <HighTemp tempHigh={tempHigh} />
          <LowTemp tempLow={tempLow} />
        </Row>
        <Row>
          <Humidity humidity={humidity} />
          <DewPoint dewPoint={dewPoint} />
        </Row>
        <Row>
          <Wind wind={wind} />
          <UVIndex uv={uv} />
        </Row>
      </Card>
    </Article>
  );
}

Index.propTypes = {
  type: PropTypes.oneOf(['current', 'weekly']).isRequired,
  summary: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  chanceOfRain: PropTypes.number.isRequired,
  dewPoint: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  uv: PropTypes.number.isRequired,
  location: function(props, propName, componentName) {
    if (props["type"].includes("current")) {
      if (props[propName] === undefined) {
        return new Error(
          "Need location. Use 'location' prop."
        );
      }

      if (typeof props[propName] != "string") {
        return new Error(
          "Location needs to be a string"
        );
      }
    }
  },
  time: function(props, propName, componentName) {
    if (props["type"].includes("weekly")) {
      if (props[propName] === undefined) {
        return new Error(
          "Need time. Use 'time' prop."
        );
      }

      if (typeof props[propName] != "number") {
        return new Error(
          "Time needs to be a number"
        );
      }
    }
  },
  timezone: function(props, propName, componentName) {
    if (props["type"].includes("weekly")) {
      if (props[propName] === undefined) {
        return new Error(
          "Need timezone. Use 'timezone' prop."
        );
      }

      if (typeof props[propName] != "string") {
        return new Error(
          "Timezone needs to be a string"
        );
      }
    }
  },
  temp: function(props, propName, componentName) {
    if (props["type"].includes("current")) {
      if (props[propName] === undefined) {
        return new Error(
          "Need temperature. Use 'temp' prop."
        );
      }

      if (typeof props[propName] != "number") {
        return new Error(
          "Temp needs to be a number"
        );
      }
    }
  },
  tempHigh: function(props, propName, componentName) {
    if (props["type"].includes("weekly")) {
      if (props[propName] === undefined) {
        return new Error(
          "Need high temperature. Use 'tempHigh' prop."
        );
      }

      if (typeof props[propName] != "number") {
        return new Error(
          "TempHigh needs to be a number"
        );
      }
    }
  },
  tempLow: function(props, propName, componentName) {
    if (props["type"].includes("weekly")) {
      if (props[propName] === undefined) {
        return new Error(
          "Need low temperature. Use 'tempLow' prop."
        );
      }

      if (typeof props[propName] != "number") {
        return new Error(
          "TempLow needs to be a number"
        );
      }
    }
  },
  apparentTemp: function(props, propName, componentName) {
    if (props["type"].includes("current")) {
      if (props[propName] === undefined) {
        return new Error(
          "Need temperature. Use 'temp' prop."
        );
      }

      if (typeof props[propName] != "number") {
        return new Error(
          "Temp needs to be a number"
        );
      }
    }
  },
  apparentMaxTemp: function(props, propName, componentName) {
    if (props["type"].includes("weekly")) {
      if (props[propName] === undefined) {
        return new Error(
          "Need max temperature. Use 'tempMax' prop."
        );
      }

      if (typeof props[propName] != "number") {
        return new Error(
          "TempMax needs to be a number"
        );
      }
    }
  },
  apparentMinTemp: function(props, propName, componentName) {
    if (props["type"].includes("weekly")) {
      if (props[propName] === undefined) {
        return new Error(
          "Need min temperature. Use 'tempMin' prop."
        );
      }

      if (typeof props[propName] != "number") {
        return new Error(
          "TempMin needs to be a number"
        );
      }
    }
  },
}

export default Index;