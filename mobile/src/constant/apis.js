var mode = process.env.REACT_APP_MY_VAR
var API_SERVER = 'http://133.167.73.231:8080'

if (mode === 'development') {
  API_SERVER = 'http://127.0.0.1:8080'
}

if (mode === 'production') {
  API_SERVER = 'http://133.167.73.231:8080'
}

export { API_SERVER }
