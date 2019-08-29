import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { AppContext } from '../../context/app.context';

const StyledHeader = styled.header`
  height: ${rem(64)};
  background-color: ${props => props.theme.baseLv1};
  border-bottom: 1px solid ${props => props.theme.baseLv2};

  h1 {
    height: ${rem(64)};
    display: flex;
    align-items: center;
    margin: auto;
    max-width: ${props => props.theme.maxWidth};
  }
`;

function Header() {
  const app = React.useContext(AppContext);
  return (
    <StyledHeader theme={app}>
      <h1>{app.title}</h1>
    </StyledHeader>
  );
}

export default Header;
