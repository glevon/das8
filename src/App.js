import React, { Component } from 'react'
import {BrowserRouter,Route,Link} from "react-router-dom"
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';
import {createStore} from "redux"
import {Provider} from 'react-redux'
import reducers from "./store/reducers"

let store =createStore(reducers)
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
          {console.log(store)}          
          <nav className="navbar navbar-expand-sm bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" >Singnup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login" >Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile" >Profile</Link>
            </li>
          </ul>
          </nav>
          <Route path="/" exact component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />

        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
