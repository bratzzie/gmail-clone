import React, {useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Mail from './components/Mail'
import EmailList from './components/EmailList'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SendMail from './components/SendMail';
import { useSelector } from 'react-redux';
import {selectSendMessageIsOpen} from './features/mailSlice'
import {login, selectUser} from './features/userSlice'
import Login from './components/Login';
import {useDispatch} from 'react-redux'
import { auth } from './firebase';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    })
  }, []);

  return (
    <Router>
      {!user ? (
       <Login />
      ) : (
         <div className="app">

     <Header />
     <div className="app_body">
       
      <Sidebar />
      <Router>
         <Switch>
           <Route exact path="/" component={EmailList} />
            <Route path="/mail" component={Mail} />
          </Switch>
      </Router>
       
          
         
     </div>

  {sendMessageIsOpen && <SendMail />}
    </div>
      )}
      
    </Router>
   
  );
}

export default App;
