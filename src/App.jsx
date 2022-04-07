import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Auth from './Auth'
import Chess from './Chess'
import Ui from './Ui'



function App(props) {

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/Chess">
            <Chess />
          </Route>
          <Route exact path="/Auth">
            <Auth />
          </Route>
          <Route path="/">
            <Ui />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
