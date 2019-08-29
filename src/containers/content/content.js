import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import ProfileItem from '../../shared/components/profile-item';
import { UsersContext } from '../../context/users.context';
import { AppContext } from '../../context/app.context';

const StyledContent = styled.div`
  display: flex;
  flex: 1;
  margin: auto;
  width: 100%;
  max-width: ${props => props.theme.maxWidth};

  .main {
    flex: 1 1 70%;
    padding: ${rem(20)} ${rem(20)} ${rem(20)} ${rem(0)};
  }

  .sidebar {
    flex: 1 1 30%;
    padding: ${rem(20)} ${rem(20)} ${rem(20)} ${rem(20)};
  }

  h2 {
    margin: 0;
  }
`;

function Content() {
  const items = React.useContext(UsersContext);
  const app = React.useContext(AppContext);
  const elems = items.map((item, index) => <ProfileItem key={'item-'+index} name={item.name} count={item.list.length} />)
  return (
    <StyledContent theme={app}>
      <div className="main">
        <h2>Main</h2>
        {elems}
      </div>
      <div className="sidebar">      
        <h2>Sidebar</h2>
        Test
      </div>
    </StyledContent>
  );
}

export default Content;
