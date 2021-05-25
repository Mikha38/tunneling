import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import {getRingsByDate, getAllDates, checkArrays} from './redux/store';

let draw = (state)=>{
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} 
        allDate={getAllDates()} 
        getRingsByDate={getRingsByDate} 
        checkArrays={checkArrays} 
        updateRing={store.updateRing.bind(store)} 
        getPump={store.getPump.bind(store)} 
        updatePump={store.updatePump.bind(store)}
        insertRing={store.insertRing.bind(store)}
        insertRingData={store.insertRingData.bind(store)}
        />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
store.observer(draw)
store.observer();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
