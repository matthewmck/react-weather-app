// REACT
import React from 'react';
// LIBS
import styled from 'styled-components';

const Article = styled.article`
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0 .1rem .3rem rgba(0,0,0,0.12), 0 .1rem .2rem rgba(0,0,0,0.24);
  border-radius: .8rem;
  padding: 1rem;
  width: 9rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Label = styled.p`
  font-weight: 700;
  margin: 0;
  margin-bottom: .5rem;

  @media (max-width: 950px) {
    margin-bottom: .4rem;
  }
`;

const Stat = styled.p`
  color: #5D38EC;
  font-weight: 700;
  margin: 0;
  margin-bottom: .5rem;
  margin-top: .5rem;

  @media (max-width: 950px) {
    margin-bottom: .4rem;
  }
`;

const Wind = props => (
  <Article>
    <Label>Wind</Label>
    <Stat>{`${props.wind.toFixed(0)} mph`}</Stat>
  </Article>
);

export default Wind;