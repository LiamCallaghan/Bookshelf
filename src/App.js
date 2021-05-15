import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Background  from './component/common/Background'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Background}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
