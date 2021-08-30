import * as React from 'react';
import * as ReactDOM from 'react-dom';

function render() :void {
  const element = <h1>Hello from React!</h1>;
  
  ReactDOM.render(element, document.body);
}

render();