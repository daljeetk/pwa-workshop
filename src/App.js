import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('service_worker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
      
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    }).catch(function(err) {
      console.log(err)
    });
  });
  
} else {
  console.log('service worker is not supported');
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to PWA Workshop</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js here</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
