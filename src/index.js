import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import App from './components/App'
import Journal from './components/ArtJournal'
import Lettering from './components/Lettering'
import Watercolor from './components/Watercolor'

const routing = (
  <Router>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Journal">Journal</Link>
      </li>
      <li>
        <Link to="/Watercolor">Watercolor</Link>
      </li>
      <li>
        <Link to="/Lettering">Lettering</Link>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/Journal" component={Journal} />
      <Route path="/Watercolor" component={Watercolor} />
      <Route path="/Lettering" component={Lettering} />
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('app'))
