import { Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { auth, provider } from '../firebase';

function Login() {

    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithPopup(provider).catch((error)=>alert(error.message))
    }
  return (
   <LoginCintainer>
      <LoginInnerContainer>
        <img src='https://yt3.googleusercontent.com/ytc/AL5GRJUyNSclWVdzjF267_EFUDHth4IXcUlcQCjEfNTvSw=s900-c-k-c0x00ffffff-no-rj' alt = ''/>
        <h1> Sign in to the Chat </h1>
        <p> ankss.sr.com</p>

        <Button onClick={signIn} >
          Sign in with Google
        </Button>
      </LoginInnerContainer>
   </LoginCintainer>
  )
}

export default Login;

const LoginCintainer = styled.div`
  background-color: #f8f8f8;
  display: grid;
  height: 100vh;
  place-items: center;
`;

const LoginInnerContainer = styled.div`

   padding: 100px;
   text-align: center;
   background-color: white;
   border-radius: 10px;
   box-shadow: 0 1px 3px rgba(0,0,0,0.12) 0 1px 2px rgba(0,0,0,0.24);
  > img  {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;