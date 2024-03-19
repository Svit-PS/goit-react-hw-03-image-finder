import styled from 'styled-components';

export const ImageList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const ImageItem = styled.li`
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 5px;
  border-bottom: 3px solid #2b2626;
  border-left: 1px solid #2b2626;
  border-right: 2px solid #2b2626;
  cursor: pointer;
`;
