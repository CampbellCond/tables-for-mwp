import React from 'react'
import styled from 'styled-components'
import LoginInput from './LoginInput'
import ArtJournal from './ArtJournal'
import Watercolor from './Watercolor'
import Lettering from './Lettering'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

const LoggedInWrap = styled.div``

const LinkWrap = styled.div``

const LoginWrap = styled.div``

const InputWrap = styled.div``

class App extends React.Component {

  state = {
    password: ''
  }

  handleSetValue = ( e ) => {
  this.setState({password: e.target.value})
  }

  render() {
    if (this.state.password === 'Paris2014') {
      return (
        <LoggedInWrap>
          <h1>General Kenobi</h1>
          <Router>
    <LinkWrap>
      <nav>
        <ul>
          <li>
            <Link to="/Watercolor">Watercolor</Link>
          </li>
          <li>
            <Link to="/HandLettering">Lettering</Link>
          </li>
          <li>
            <Link to="/DarthJournal">Art Journal</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/Watercolor">
          <Watercolor />
        </Route>
        <Route path="/HandLettering">
          <Lettering />
        </Route>
        <Route path="/DarthJournal">
          <ArtJournal />
        </Route>
      </Switch>
    </LinkWrap>
  </Router>
        </LoggedInWrap>
      )
    } else {
    return (
      <LoginWrap>
        <h1>Please enter password</h1>
        <InputWrap>
          <LoginInput onSetValue={this.handleSetValue} />
        </InputWrap>
      </LoginWrap>
    )
  }
}
}

export default App
