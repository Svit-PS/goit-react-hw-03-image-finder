import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import fetchPixabay from './ImageGallery/pixaboy';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { Loader } from './Loader/Loader';

const PER_PAGE = 12;
export class App extends Component {
  state = {
    cards: [],
    findImg: '',
    page: 0,
    status: 'ok',
  };

  componentDidUpdate(_, prevState) {
    if (this.state.status === 'loading') this.fetchNewImg(this.state.findImg);
  }

  fetchNewImg = findImg => {
    fetchPixabay(findImg, this.state.page + 1, PER_PAGE)
      .then(response => response.json())
      .then(cardsNew => {
        const arrImg = cardsNew.hits.map(
          ({ id, webformatURL, largeImageURL, tags }) => ({
            id,
            webformatURL,
            largeImageURL,
            tags,
          })
        );

        this.setState(({ cards, page, status }) => ({
          cards: [...cards, ...arrImg],
          page: page + 1,
          status: 'ok',
        }));
      })
      .catch(
        error =>
          alert(
            'Sorry, there are no images matching your search query. Please try again.'
          )
        // console.error()
      );
  };

  changeFindImg = findImg => {
    this.setState({ findImg, page: 0, cards: [], status: 'loading' });
  };

  onClickButtonMore = () => {
    this.setState({ status: 'loading' });
  };

  render() {
    const { cards, status } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.changeFindImg} />
        {cards.length !== 0 && <ImageGallery cards={cards}></ImageGallery>}
        {status === 'loading' && <Loader></Loader>}
        {cards.length !== 0 && status === 'ok' && (
          <Button handlClick={this.onClickButtonMore} />
        )}
      </>
    );
  }
}
