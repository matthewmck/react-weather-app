// REACT
import React from 'react';
// LIBS
import styled from 'styled-components';

const Sum = styled.p`
  font-weight: 400;
  margin: 0;
  margin-bottom: .5rem;

  @media (max-width: 950px) {
    margin-bottom: .4rem;
  }
`;

const Summary = props => (
  <Sum>{props.summary}</Sum>
)

export default Summary;