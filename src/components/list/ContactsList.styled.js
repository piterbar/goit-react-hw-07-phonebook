import styled from 'styled-components';

export const ContactsTitle = styled.h2`
  color: ${p => p.theme.colors.accentText};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-align: center;
`;

export const List = styled.ul`
  padding: ${p => p.theme.space[4]}px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: ${p => p.theme.colors.lightGray};
  border: 1px solid ${p => p.theme.colors.gray};
  border-radius: 0;
`;
