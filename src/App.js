import React from 'react'
//pages
import Home from './pages/Home'
import DetallePelicula from './pages/DetallePelicula'

//Routing
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
//redux
import { Provider } from 'react-redux'
import store from './store'
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <div className="">
            <nav className="navbar navbar-dark bg-dark">
              <div className="container">
                <Link to="/" className="navbar-brand">App Movies</Link>
                <form className="d-flex input-group w-auto">
                  <input
                    type="search"
                    className="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <span className="input-group-text border-0" id="search-addon">
                    <i className="fas fa-search"></i>
                  </span>
                </form>
              </div>
            </nav>
            <div className="container mt-3">
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route
                  exact
                  path="/pelicula/:id"
                  component={DetallePelicula}
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
