import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App.jsx'
import Home from './pages/Home.jsx'
import Todo from './pages/Todo.jsx'
import Done from './pages/Done.jsx'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="todo" component={Todo} />
    <Route path="/done" component={Done}/>
  </Route>
)

export default routes
