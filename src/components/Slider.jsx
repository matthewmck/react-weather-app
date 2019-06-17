import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let resize;

class Slider extends Component {

  state = { 
    displayNum: null,
    startIndex: null,
    endIndex: null,
    mobile: false
  }

  componentDidMount() {
    this.handleDisplayNum();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    clearTimeout(resize);
    resize = setTimeout(this.handleDisplayNum, 250);
  }

  handleDisplayNum = () => {
    switch (true) {
      case window.innerWidth >= 1300:
        return this.updateState(false, 4, 0, 3);
      case window.innerWidth >= 1000:
        return this.updateState(false, 3, 0, 2);
      case window.innerWidth >= 650:
        return this.updateState(false, 2, 0, 1);
      default:
        return this.updateState(true)
    }
  }

  updateState = (
    mobile = false, 
    displayNum = null, 
    startIndex = null, 
    endIndex = null) => this.setState({
      mobile, displayNum, startIndex, endIndex
    });

  handleNext = () => {
    const { startIndex, endIndex, displayNum } = this.state;
    this.setState({
      startIndex: startIndex + displayNum,
      endIndex: endIndex + displayNum
    });
  }

  handlePrev = () => {
    const { startIndex, endIndex, displayNum } = this.state;
    this.setState({
      startIndex: startIndex - displayNum,
      endIndex: endIndex - displayNum
    });
  }

  render() {
    const { startIndex, endIndex, displayNum, mobile } = this.state;
    const showPrevBTN = startIndex !== 0;
    const showNextBTN = endIndex < this.props.children.length - 1;

    if (mobile) {
      return this.props.children.map(item => item);
    }

    return (
      <React.Fragment>
        {showPrevBTN && (
          <div className="slider-container">
            <button className="next-btn" aria-label="previous" onClick={this.handlePrev}>
              <FontAwesomeIcon icon="chevron-left" size="3x"/>
            </button>
          </div>
        )}
        {displayNum && this.props.children.map((item, index) => {
          if (index >= startIndex && index <= endIndex) {
            return item
          }
        })}
        {showNextBTN && (
          <div className="slider-container">
            <button className="next-btn" aria-label="next" onClick={this.handleNext}>
              <FontAwesomeIcon icon="chevron-right" size="3x"/>
            </button>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Slider;