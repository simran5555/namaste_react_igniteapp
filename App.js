import React from "react";
import ReactDOM from "react-dom"

const parent = React.createElement('h1', { id: 'parent' }, "hello from react")

  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(parent)

  //package.json is configuration for npm