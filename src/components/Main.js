import React from 'react'
import Home from './Home'
import Login from './loginPage'
// import Admin from './admin-show-event'
import { Switch, Route } from 'react-router-dom'

const Main = () => {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/Login' component={Login}/>
          {/* <Route path='/Admin' component={Admin}/> */}
        </Switch>
      </div>      
    );
  }

  export default Main ;