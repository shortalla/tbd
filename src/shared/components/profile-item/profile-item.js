import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { AppContext } from '../../../context/app.context';

const StyledProfileItem = styled.div`
  height: ${rem(30)};
  background-color: ${props => props.theme.primary};
  border: ${props => props.theme.primaryLv2};
  margin: ${rem(2)} 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${rem(4)} ${rem(12)};

  &:hover {
    background-color: ${props => props.theme.primaryLv1};
    cursor: pointer;
  }

  h3 {
    margin: 0;
  }

  .count {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${rem(18)};
    width: ${rem(18)};
    background-color: ${props => props.theme.primaryLv3};
    border: 1px solid ${props => props.theme.primaryLv4};
  }
`;

function ProfileItem({name, count}) {
  const app = React.useContext(AppContext);
  console.log(app)
  return (
    <StyledProfileItem theme={app}>
      <h3>{name}</h3>
      <div className="count">{count}</div>
    </StyledProfileItem>
  );
}

export default ProfileItem;
