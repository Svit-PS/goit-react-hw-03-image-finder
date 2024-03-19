import { ButtonBlock, ButtonStyle } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ handlClick }) => {
  return (
    <ButtonBlock>
      <ButtonStyle type="button" onClick={() => handlClick()}>
        Load more
      </ButtonStyle>
    </ButtonBlock>
  );
};

Button.prototype = {
  handlClick: PropTypes.func.isRequired,
};
export default Button;
