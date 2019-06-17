// REACT
import React from 'react';
// LIBS
import styled from 'styled-components';
// UTILS
import { decimalToPercent } from '../../utils';

const Container = styled.p`
  font-weight: 700;
  margin: 0;
  margin-bottom: .5rem;

  @media (max-width: 950px) {
    margin-bottom: .4rem;
  }
`;

const ChanceOfRain = props => (
  <Container>
    {`${decimalToPercent(props.chanceOfRain)}% chance of rain`}
  </Container>
);

export default ChanceOfRain;