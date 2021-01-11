import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { tours } from './infos/tours';
import Header from './Container/Header';
import Footer from './Container/Footer';
import { Home } from './Container/Home';
import { TopUsers } from './Container/TopUsers';
import Account from './Container/Account';
import Registration from './Container/Registration';

function App() {
  const [topUsersOne, setTopUsersOne] = useState([]);
  const [topUsersTwo, setTopUsersTwo] = useState([]);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [userName, setUserName] = useState(undefined);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((result) => {
        setTopUsersOne(result);
      });

    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((result) => {
        setTopUsersTwo(result);
      });
  }, []);


  return (
    <div className="App">
      <Header isAuthorized={isAuthorized} />
        <Switch>
          <Route path="/" exact component={() => <Home tours={tours} />} />
          <Route path="/topUsers" exact component={() => <TopUsers topUsersOne={topUsersOne} topUsersTwo={topUsersTwo} />} />
          {
            isAuthorized ? <Route path="/account" render={
              () => (<Account 
                userName={userName}
               />)
              } /> : <Route path="/registration" render={
                () => (<Registration 
                  isAutorized={isAuthorized}
                  cb={ (st, userName) => { setIsAuthorized(st); setUserName(userName); } }
                 />)} />
          }
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
