import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import RecordsReducer from "./reducers/RecordsReducer";

// Custom
import App from './components/App';

const store = createStore(RecordsReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));