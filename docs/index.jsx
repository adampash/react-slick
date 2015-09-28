'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var routes = require('./routes');

// Router.run(routes, Router.HistoryLocation, function (Handler) {
//   React.render(<Handler />, document.getElementById('rapp'));
// });

ReactDOM.render(<Router routes={ routes } />,
  document.getElementById('rapp')
)
