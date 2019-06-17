// REACT
import React from 'react';
// LIBS
import styled from 'styled-components';
// UTILS
import { getAverage } from '../../utils';

const Container = styled.p`
  font-weight: 700;
  margin: 0;
  margin-bottom: .5rem;

  @media (max-width: 950px) {
    margin-bottom: .4rem;
  }
`;

const ApparentTemp = props => {
  const {
    apparentTemp,
    apparentMaxTemp,
    apparentMinTemp,
    type
  } = props;

  return(
    <Container>
      {type === 'current'
        ? `Feels like: ${apparentTemp.toFixed(0)}`
        : `Feels like: ${getAverage(apparentMinTemp, apparentMaxTemp)}`
      } 
    </Container>
  );
}

export default ApparentTemp;