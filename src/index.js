import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './views/LoginComponent'
import TodoList from './views/TodoListView'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectectRoute from './components/protectectRoute'
import { Provider } from 'react-redux'

import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path='/todo' element={<ProtectectRoute/>}>
            <Route exact path='/todo' element={<TodoList/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
