import React, { Component } from 'react';
import { BoxImg, BoxOverlay, Img } from './Modal.styles';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlPress);
  }

  handlPress = ({ code }) => {
    console.log('code: ', code);
    if (code === 'Escape') {
      this.props.onClose();
    }
  };

  clickMouse = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { url, alt } = this.props;
    return (
      <BoxOverlay onClick={this.clickMouse}>
        <BoxImg>
          <Img src={url} alt={alt} />
        </BoxImg>
      </BoxOverlay>
    );
  }
}

export default Modal;
