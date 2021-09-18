import ReactDOM from "react-dom";
import React from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from "./components/App";
import reducers from './reducers';


ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.querySelector("#root"));

// provider(contains refrence to reduxStore as prop(not action creaters)) => App => connect (communicates to provider using context system and provide the diff. state and action creaters as props to the child) => child components 

//context system allowns parent component to communicate with any child component evenif they hv components between them
