import styled from 'styled-components';

export const BoxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(15, 15, 15, 0.82);
  width: 100%;
  height: 100%;
  z-index: 90;
`;

export const BoxImg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 60%;
  height: 60%;
`;

export const Img = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
