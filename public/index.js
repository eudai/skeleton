var App = require('./views/app.js')

var app = new App

document.body.appendChild(app.render().el)

window.app = app