import React, { Component} from 'react';
import { connect } from 'react-redux';
import { getForecast } from './actions/getForecastActions';
import { closeModal } from './actions/modalActions';
import Modal from 'react-modal';
import DetailedInfo from './components/DetailedInfo';

// PAGES
import Home from './pages/Home';

// FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faSun,
  faMoon,
  faCloudRain,
  faSnowflake,
  faWind,
  faSmog,
  faCloud,
  faCloudSun,
  faCloudMoon,
  faArrowLeft,
  faTimes,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';


library.add(
  faSun,
  faMoon,
  faCloudRain,
  faSnowflake,
  faWind,
  faSmog,
  faCloud,
  faCloudSun,
  faCloudMoon,
  faArrowLeft,
  faTimes,
  faChevronLeft,
  faChevronRight
);

Modal.setAppElement('#root')

class App extends Component {

  componentDidMount() {
    this.props.getForecast();
  }

  render() {
    return (
      <React.Fragment>
        <Home/>
        <Modal
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.props.closeModal}
          overlayClassName="ReactModal__Overlay"
          className="ReactModal__Content"
          contentLabel="Example Modal"
        >
          <DetailedInfo />
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  modalIsOpen: state.modal.modalIsOpen
})

const mapDispatchToProps = dispatch => ({
  getForecast: () => dispatch(getForecast()),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
