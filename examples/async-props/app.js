import React, { Component } from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link, IndexRoute } from 'react-router'
import AsyncProps from './async-props'

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/users/3">
          Go to user page
        </Link>
      </div>
    )
  }
}

class User extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          Go to home page
        </Link>
      </div>
    )
  }
}

// without async props, able to click from home to users and back again
// render((
//   <Router history={browserHistory}>
//     <Route path="/" component={App} >
//       <IndexRoute component={Home} />
//       <Route path="users/:id" component={User} />
//     </Route>
//   </Router>
// ), document.getElementById('example'))

// with async props, unable to
render((
  <Router render={(props) => <AsyncProps {...props} />} history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="users/:id" component={User} />
    </Route>
  </Router>
), document.getElementById('example'))
