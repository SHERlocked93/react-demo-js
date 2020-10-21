import ReactDom from 'react-dom'
import React from 'react'
import store from './store/index'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './assets/css/index.css'

import App from './view/App'
import Dati from './view/Dati'
import Result from './view/Result'

ReactDom.render(
  <Provider store={ store }>
      <Router>
          <Route path='/' component={ App }/>
          <Route path='/dati' component={ Dati }/>
          <Route path='/result' component={ Result }/>
      </Router>
  </Provider>
  , document.getElementById('root'))
