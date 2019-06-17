// REACT
import React from 'react';
// LIBS
import styled from 'styled-components';
// UTILS
import { displayTime } from '../../utils';

const Heading = styled.h2`
  font-size: 2.8rem;
  font-weight: 900;
  margin: 0;
  margin-bottom: 1.5rem;

  @media (max-width: 950px) {
    font-size: 2.4rem;
    margin-bottom: 1.2rem;
  }
`;

const CardHeading = props => {
  const { 
    location,
    time,
    timezone,
    type
  } = props;
  return (
    <Heading>
      {type === 'current'
        ? location
        : displayTime(time, timezone).format('dddd')
      }
    </Heading>
  );
}

export default CardHeading;