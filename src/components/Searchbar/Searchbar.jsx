import { Form, Header } from 'components/Searchbar/Searchbar.styled';
import { ReactComponent as SearchSvg } from '../../svg/search.svg';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  return (
    <>
      <Header>
        <Form
          onSubmit={event => {
            event.preventDefault();
            onSubmit(event.target.children.text.value);
          }}
        >
          <input
            type="text"
            name="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">
            <SearchSvg fill="black" />
          </button>
        </Form>
      </Header>
    </>
  );
};

Searchbar.prototype = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
