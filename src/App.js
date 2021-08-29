import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Favorite from './components/Favorite';
import Main from './components/Main';
import { Container } from 'react-bootstrap';
class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Container>
                <Main />
              </Container>
            </Route>
            <Route exact path='/favorite'>
              <Container>
                <Favorite />
              </Container>
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
