import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 480px;
`;

export const InputContent = styled.input`
  width: 100%;
  padding-left: .5em;
  padding-right: 32px;
  height: 32px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #b6c1ce;
  line-height: 32px;
`;

export const Input = styled(InputContent)`
  transition: border-color 150ms linear;
  border-radius: 4px;
  padding: 1.5em;
  font-size: 1em;

  &:focus {
    border-color: #0063cc;
    outline: none;
  }
`;

export const Container = styled.ul`
  background: #fff;
  padding: .5em 0;
  list-style-type: none;
  min-width: 480px;
  position: absolute;
  top: 100%;
  left: 0;
  border: 1px solid #b6c1ce;
  border-radius: 4px;
  margin: 0;
  box-sizing: border-box;
  max-height: 280px;
  overflow-y: auto;
  z-index: 1;
`;

export const Item = styled.li`
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
  &:hover {
    background-color: #ebf4ff;
  }
`;

export const ItemButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  width: 100%;
  line-height: 32px;
  text-align: left;
  &:active {
    outline: none;
    color: #0076f5;
  }
`;
