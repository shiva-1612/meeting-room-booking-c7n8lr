import React, { Component } from 'react';
import { render } from 'react-dom';
import Home from './Home';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from'./rootReducer';
import './style.css';


// create store

const Store = createStore(rootReducer);

render(<Provider store = {Store}> <App /> </Provider>, document.getElementById('root'));
