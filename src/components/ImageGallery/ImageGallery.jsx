import { Component } from 'react';
import { ImageList } from './ImageGallery.styled';
import ImageGalleryItem from './ImageGalleryItem';
import Modal from 'components/Modal/Modal';

class ImageGallery extends Component {
  state = {
    showModal: false,
    url: '',
    alt: '',
  };

  onClickImg = (largeImageURL, tags) => {
    this.setState({
      showModal: true,
      url: largeImageURL,
      alt: tags,
    });
  };

  onCloseImg = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { showModal, url, alt } = this.state;
    return (
      <>
        <ImageList>
          {this.props.cards.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              tags={tags}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              onClickImg={this.onClickImg}
            />
          ))}
        </ImageList>
        {showModal && <Modal url={url} alt={alt} onClose={this.onCloseImg} />}
      </>
    );
  }
}

export default ImageGallery;
