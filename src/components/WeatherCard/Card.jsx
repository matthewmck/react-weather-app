// REACT
import React from 'react';
// LIBS
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardFace = styled.article`
  backface-visibility: hidden;
  background: #FCFCFC;
  border-radius: .8rem;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  box-sizing: border-box;
  height: 36rem;
  left: 0;
  margin-left: 2.5rem;
  max-height: 100%;
  max-width: 25rem;
  padding: 1.5rem 3rem;
  position: absolute;
  width: 100%;
  top: 0;
  transition: transform 0.3s cubic-bezier(.25,.8,.25,1);
`;

const Card = props => (
  <CardFace className={`
    ${props.toggle && (props.type === 'front' ? 'toggle-front-card' : 'toggle-back-card')}
    ${props.type === 'back' && 'back-card'}
  `}>
    {props.children}
  </CardFace>
)

Card.propTypes = {
  toggle: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(['front', 'back']).isRequired
}

export default Card;