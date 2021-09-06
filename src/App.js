import React from 'react'
//pages
import Home from './pages/Home'
import DetallePelicula from './pages/DetallePelicula'
import Navbar from './components/Navbar'
import BuscarPage from './pages/BuscarPage'

//Routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//redux
import { Provider } from 'react-redux'
import store from './store'
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <div className="">
            <Navbar />
            <div className="container mt-3">
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route
                  exact
                  path="/pelicula/:id"
                  component={DetallePelicula}
                ></Route>
                <Route
                  exact
                  path="/buscar/:text"
                  component={BuscarPage}
                ></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    </>
  )
}

export default App
