import React, { useState, useContext } from 'react'
import auth from './auth'

import './landingPage.css'

import { GlobalContext } from '../../context/GlobalState';

const Login = ({ props, setUserName, setPassword, username, password }) => {

  const { users, changeUserAction } = useContext(GlobalContext);



  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const [errorPassword, setErrorPassword] = useState(false)
  const [errorMessagePassword, setErrorMessagePassword] = useState('')

  const validateInput = () => {
    let takenNames = users.map(user => user.name)
    let takenPasswords = users.map(user => user.pass)
    let goodPassword = takenPasswords.include(password)

    if (username === '') {
      setErrorMessage("*username is required.")
      setError(true)
      console.log('error', error)
    }
    if (!takenNames.includes(username) || !takenPasswords.include(password)) {
      setErrorMessage("*username or password does't match.")
      setError(true)
    }
    if (password === '') {
      setErrorMessagePassword("*password is required.")
      setErrorPassword(true)
    }
    else setError(false)

  }

  return (
    <>
      <form className="form-inline my-3 my-lg-0 d-flex flex-column">
        {error ? (
          <small id="error-msg" className="text-danger p-0 m-0">{errorMessage}</small>
        ) : null}
        <div>
          <input
            id="inputAuth"
            autoComplete="off"
            className="form-control mb-4"
            type="text"
            placeholder=" "
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label id="labelAuth">username*</label>
        </div>
        {errorPassword ? (
          <small id="error-msg-password" className="text-danger p-0 m-0">{errorMessagePassword}</small>
        ) : null}
        <div>
          <input
            id="inputAuth"
            autoComplete="off"
            className="form-control mb-4"
            type="text"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label id="labelAuth">pasword*</label>
        </div>
      </form>

      <button
        className="btn btn-info m-auto"
        onClick={() => {
          validateInput()
          auth.login(users, username, password, changeUserAction)
          props.history.push("/app")

          if (!auth.authenticated) {
            props.history.push("/Norms-React-App")
          }
        }}
      >Log in</button>
    </>
  )
}

export default Login
