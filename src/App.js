import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { photoReducer } from './Components/Redux/Reducer';
import { watchFetchingPhotoUrls } from './Components/Redux/Sagas';

import { HashRouter, Route, Switch } from 'react-router-dom';
import { Home, Changer } from './Components/pages';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  photoReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchFetchingPhotoUrls);    

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="main-div">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/photolist" component={Changer} />
              <Route  component={Home} />
            </Switch>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
