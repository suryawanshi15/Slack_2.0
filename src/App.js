import React from 'react';
import './App.css';
import { BrowserRouter as Router , Route , Routes , Link } from 'react-router-dom';
import Header from './Components/Header';
import styled from 'styled-components';
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from './firebase';
import Spinner from 'react-spinkit';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import Login from './Components/Login';
function App() {

  const [user , loading] = useAuthState(auth)

  if(loading) {
    return(
      <AppLoading>
        <AppLoadingContents>
          <img
          src='https://yt3.googleusercontent.com/ytc/AL5GRJUyNSclWVdzjF267_EFUDHth4IXcUlcQCjEfNTvSw=s900-c-k-c0x00ffffff-no-rj'
          alt=''/>

          <Spinner 
           name='ball-spin-fade-loader'
           color='purple'
           fadeIn='none'
           />
        </AppLoadingContents>
      </AppLoading>
    )
  }
  return (
    <div className="app">
      
      <Router>
        {!user ? (
          <Login/>
        ):(
          <>
      <Header/>
      <AppBody>
        <Sidebar />
        <Routes>
          <Route path="/" element = {<Chat/>}> 
          </Route>
        </Routes>
        </AppBody>
      </>
        )}
    </Router>
    </div>
  );
}

export default App;

const AppLoading = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;
  place-items: center;
`;

const AppLoadingContents = styled.div`
   text-align: center;
  padding-bottom: 100px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;

  > img {
    height: 100px;
    margin-bottom: 40px;
    padding: 20px;
  }
`;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;