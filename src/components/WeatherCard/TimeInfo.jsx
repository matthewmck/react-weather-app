// REACT
import React from 'react';
// LIBS
import styled from 'styled-components';
// UTILS
import { displayTime } from '../../utils';

const Time = styled.p`
  font-weight: 700;
  margin: 0;
  margin-bottom: .5rem;

  @media (max-width: 950px) {
    margin-bottom: .4rem;
  }
`;

const TimeInfo = props => {
  const { 
    time,
    timezone,
    type
  } = props;
  return(
    <Time>
      {type === 'current'
        ? `Today ${displayTime(time, timezone).format('h:mm a')}`
        : displayTime(time, timezone).format('MMMM Do, YYYY')
      }
    </Time>
  );
}

export default TimeInfo;