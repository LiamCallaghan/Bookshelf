import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Bookshelf from './component/common/Bookshelf'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Bookshelf}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
