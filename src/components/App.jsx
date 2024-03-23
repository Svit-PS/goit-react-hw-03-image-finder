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
    loading: false,
  };

  componentDidUpdate(_, prevState) {
    console.log('prevState: ', prevState);
    console.log('State: ', this.state);

    if (
      this.state.page !== prevState.page ||
      this.state.findImg !== prevState.findImg
      //this.state.loading
    )
      this.fetchNewImg(this.state.findImg);
  }

  fetchNewImg = findImg => {
    fetchPixabay(findImg, this.state.page, PER_PAGE)
      .then(response => response.json())
      .then(data => {
        if ((data.status = 'ok')) {
          var arrImg = data.hits.map(
            ({ id, webformatURL, largeImageURL, tags }) => ({
              id,
              webformatURL,
              largeImageURL,
              tags,
            })
          );
        } else throw new Error(data.message);
        this.setState(({ cards, page, loading }) => ({
          cards: [...cards, ...arrImg],
          //page: page + 1,
          loading: false,
        }));
      })
      .catch(error => {
        alert(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        this.setState({ loading: false });
      });
    // .finally(this.setState({ loading: false }));
  };

  changeFindImg = findImg => {
    if (findImg !== this.state.findImg) {
      this.setState({ findImg, page: 1, cards: [], loading: true });
    }
  };

  onClickButtonMore = () => {
    this.setState(({ page, loading }) => ({ page: page + 1, loading: true }));
  };

  render() {
    const { cards, loading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.changeFindImg} />
        {cards.length !== 0 && <ImageGallery cards={cards}></ImageGallery>}
        {loading && <Loader></Loader>}
        {cards.length !== 0 && !loading && (
          <Button handlClick={this.onClickButtonMore} />
        )}
      </>
    );
  }
}
