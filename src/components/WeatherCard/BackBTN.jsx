// REACT
import React from 'react';
// LIBS
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = styled.button`
  background: rgba(0,0,0,0);
  border: none;
  color: #613DED;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 1.5rem 0 2.5rem 0;

  @media (max-width: 950px) {
    font-size: 1.6rem;
  }

  &:focus {
    outline: 4px solid #00a9ff;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  color: #5D38EC;
  margin-right: 0.5rem;
`;

const BackBTN = props => (
  <Button onClick={props.controlClick} tabIndex={props.toggle ? "0" : "-1"}>
    <Icon icon="arrow-left" />
    Back
  </Button>
);

export default BackBTN;