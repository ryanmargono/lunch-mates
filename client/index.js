import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Nav from './components/Nav'
import { MuiThemeProvider } from 'material-ui'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/home/Home'
import Manage from './components/manage/Manage'
import History from './components/history/History'

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/manage' component={Manage} />
          <Route exact path='/history' component={History} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
)
