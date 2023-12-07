import styled from 'styled-components';

export const FilterContainer = styled.label`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${p => p.theme.space[3]}px;
  color: #333;
  align-items: center;
  justify-content: center;
`;

export const FilterInput = styled.input`
  width: 300px;
  margin-top: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[2]}px;
  border-radius: 0;
  border: 1px solid #ccc;

  :hover,
  :focus {
    border-color: #999;
    outline: none;
  }
`;

export const Text = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${p => p.theme.space[3]}px;
`;
