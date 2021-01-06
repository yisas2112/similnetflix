import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import HomeContainer from './Containers/HomeContainer'
import {AppProvider} from './AppContext/AppContext'
import ItemContainer from './Containers/ItemContainer'
import Nabvar from './Components/Navbar'


function App() {
  return (
    <>
      <AppProvider>
      <BrowserRouter>
      <Nabvar/>
        <Switch>
          <Route exact path='/:type?'>
            <HomeContainer/>
          </Route>
          <Route exact path='/:type/:id'>
            <ItemContainer/>
          </Route>
        </Switch>
      </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
