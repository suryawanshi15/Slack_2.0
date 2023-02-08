import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material'
import AccessTimeIcon  from '@mui/icons-material/AccessTime'
import SearchIcon from '@mui/icons-material/Search'
import HelpOutline from '@mui/icons-material/HelpOutline'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
function Header() {
  const [user] = useAuthState(auth)
  return (
  <HeaderContainer>
     {/** Header Left */}
     <HeaderLeft>

      <HeaderAvatar 
      onClick={()=>auth.signOut()}
      alt= {user?.displayName}
      src= {user?.photoURL}
      />
      <AccessTimeIcon />

     </HeaderLeft>

     {/** Header Search */}
      <HeaderSearch>
        <SearchIcon />
        <input placeholder='Search FRIENDS'></input>
      </HeaderSearch>

     {/** Header Right */}
     <HeaderRight>
    <HelpOutline />
     </HeaderRight>

  </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  width: 100%;
  background-color: var(--slack-color);
  color: white;
`;

const HeaderSearch = styled.div`
   flex: 0.4;
   text-align: center;
   opacity: 1;
   background-color: #421f44;
   border-radius: 6px;
   display: flex;
   padding: 0 50px;
   color: gray;
   border: 1px gray solid;

   > input{
    border: none;
    min-width: 30vw;
    background-color: transparent;
    text-align: center;
    outline: none;
    color: white;
   }
`;

const HeaderLeft = styled.div`
   flex: 0.3;
   display: flex;
   align-items: center;
   margin-left: 20px;

   > .MuiSvgIcon-root{
    margin-left: auto;
    margin-right: 30px;
   }
`;

const HeaderRight = styled.div`
   flex: 0.3;
   display: flex;
   align-items: flex-end;

   > .MuiSvgIcon-root{
    margin-left: auto;
    margin-right: 20px;
   }
`;

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;

    :hover {
      opacity: 0.8;
    }
`;

