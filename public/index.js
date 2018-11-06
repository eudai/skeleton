var ReactDOM = require('react-dom')
var App = require('./components/app.js')

var rootElement = document.querySelector('#root')

app = new App
ReactDOM.render(app.render(),rootElement)
