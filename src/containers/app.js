import React from 'react';
import Header from './header';
import Content from './content';
import styled from 'styled-components';
import { AppContext, app } from '../context/app.context';
import { UsersContext, users } from '../context/users.context';

const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.base};
  color: ${props => props.theme.text};
`;


function App() {
  return (
    <AppContext.Provider value={app}>
      <StyledApp theme={app}>
        <Header />
        <UsersContext.Provider value={users}>
          <Content />
        </UsersContext.Provider>
      </StyledApp>
    </AppContext.Provider>
  );
}

export default App;
