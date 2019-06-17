// REACT
import React from 'react';
// LIBS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
// UTILS
import { displayIcon, getAverage } from '../../utils';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin: 2.5rem 0;
`;

const Degree = styled.span`
  color: #5D38EC;
  font-weight: 900;
  vertical-align: top;
`;

const InnerContainer = styled.p`
  font-weight: 700;
  margin: 0;
  margin-bottom: .5rem;

    @media (max-width: 950px) {
      margin-bottom: .4rem;
    }
`;

const Temperature = styled.span`
  color: #5D38EC;
  font-size: 3.2rem;
  font-weight: 900;

    @media (max-width: 950px) {
      font-size: 3rem;
    }
`;

const Icon = styled(FontAwesomeIcon)`color: #5D38EC;`;

const Temp = props => {
  const {
    icon,
    temp,
    tempHigh,
    tempLow,
    type
  } = props;
  return(
    <Container>
      <InnerContainer>
        <Temperature>
          {type === 'current'
            ? temp.toFixed(0)
            : getAverage(tempLow, tempHigh)
          }
        </Temperature>
        <Degree> °F</Degree>
      </InnerContainer>
      <Icon icon={displayIcon(icon)} size="4x" />
    </Container>
  );
};

export default Temp;
