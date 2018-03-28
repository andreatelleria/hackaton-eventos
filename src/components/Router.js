import React from 'react'
import Home from './Main'
import Login from './loginPage'
// import Admin from './admin-show-event'
import { Switch, Route } from 'react-router-dom'


const Router = () => {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/Login' component={Login}/>
          {/* <Route path='/Admin' component={Admin}/> */}
        </Switch>
      </div>      
    );
  }

  export default Router ;