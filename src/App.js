import React from 'react';
import LandingPage from './Components/Pages/AboutUs';
import Nav from './Components/Nav';
import LoginPage from './Components/Pages/LoginPage';
import {Switch, Route} from 'react-router-dom';
import SignupPage from './Components/Pages/SignupPage';
import CompliantPage from './Components/Pages/CompliantPage';
import Payrent from './Components/Pages/Payrent';
import GlobalStyle from './Components/GlobalStyle';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/loginpage">
          <LoginPage />
        </Route>
        <Route path="/signuppage" >
          <SignupPage />
        </Route>
        <Route path="/compliantpage" >
          <CompliantPage />
        </Route>
        <Route path="/payrent" >
          <Payrent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
