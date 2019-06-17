// REACT
import React from 'react';
// LIBS
import styled from 'styled-components';

const Button = styled.button`
  background: #613DED;
  border: none;
  border-radius: .4rem;
  color: #FCFCFC;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 700;
  height: 3.5rem;
  margin-top: 2.5rem;
  padding: 0 1.5rem;
  transition: background 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    background: #4E30C1;
  }

  &:focus {
    outline: 4px solid #00a9ff;
  }
  
  @media (max-width: 950px) {
    font-size: 1.4rem;
    height: 3.7rem;
  }
`;

const Container = styled.div`
  text-align: center;
`;

const MoreInfoBTN = props => (
  <Container>
    <Button onClick={props.controlClick} tabIndex={props.toggle ? "-1" : "0"}>
      More Info
    </Button>
  </Container>
);

export default MoreInfoBTN;