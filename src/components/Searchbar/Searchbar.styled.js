import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  background-color: rgb(155, 245, 119);
`;

export const Form = styled.form`
  width: 350px;
  height: 50px;
  display: flex;
  position: relative;
  input {
    width: 100%;
    height: 100%;
    border: none;
    background: #fff;
    font-size: 16px;
    border-radius: 50px;
    padding: 0 60px 0 20px;
    outline: none;
  }
  button {
    position: absolute;
    top: 50%;
    right: 5px;
    width: 40px;
    height: 40px;
    border-radius: 30px;
    border: none;
    color: #fff;
    background: rgb(247, 245, 143);
    font-size: 20px;
    text-align: center;
    line-height: 40px;
    transform: translateY(-50%);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
