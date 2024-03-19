import { ButtonBlock } from 'components/Button/Button.styled';
import { Audio } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ButtonBlock>
      <Audio
        height="30"
        width="25"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
      <Audio
        height="30"
        width="25"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
      <Audio
        height="30"
        width="25"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </ButtonBlock>
  );
};
