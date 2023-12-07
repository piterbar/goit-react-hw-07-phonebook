import styled from 'styled-components';

export const ContactsItem = styled.li`
  margin-left: 0;
  display: flex;
  width: auto;
  height: 40px;
  padding: ${p => p.theme.space[2]}px;
  align-items: center;
  justify-content: space-between;
  background-color: ${p => p.theme.colors.white};
  border-radius: 0;
  box-shadow: 2px 3px 15px 1px rgba(0, 0, 0, 0.1);
  & + & {
    margin-top: 10px;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.red};
  border-radius: 0;
  :hover,
  :focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.red};
  }
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.accentText};
`;
