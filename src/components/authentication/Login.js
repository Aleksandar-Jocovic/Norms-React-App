import React, { useState, useContext } from 'react'
import auth from './auth'

import './landingPage.css'

import { GlobalContext } from '../../context/GlobalState';

const Login = ({ props, setUserName, setPassword, username, password }) => {

  const { users, changeUserAction } = useContext(GlobalContext);

  const [passwordHidden, setPasswordHidden] = useState(true);
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [errorPassword, setErrorPassword] = useState(false)
  const [errorMessagePassword, setErrorMessagePassword] = useState('')

  const validateInput = () => {
    let takenNames = users.map(user => user.name)
    let takenPasswords = users.map(user => user.pass)

    if (takenNames.includes(username) && takenPasswords.includes(password)) {
      return true
    }

    if (username === '') {
      setErrorMessage("*username is required.")
      setError(true)
    } else setError(false)

    if ((username !== '' && !takenNames.includes(username)) ||
      (password !== '' && !takenPasswords.includes(password))) {
      setErrorMessage("*username or password does't match.")
      setError(true)
    }

    if (password === '') {
      setErrorMessagePassword("*password is required.")
      setErrorPassword(true)
    }
    if (password.length > 0) setErrorPassword(false)
  }

  return (
    <>
      <form className="form-inline my-2 my-lg-0 d-flex flex-column">
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
            id="inputAuthPassword"
            autoComplete="off"
            className="form-control mb-4"
            type={passwordHidden ? 'password' : 'text'}
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="password-hidden-btn" onClick={(e) => {
            e.preventDefault()
            setPasswordHidden(!passwordHidden)
          }}>
            {passwordHidden ? 'show' : 'hide'}
          </button>
          <label id="labelAuth">pasword*</label>
        </div>
      </form>

      <button
        className="btn btn-info m-auto"
        onClick={() => {
          if (validateInput()) {
            auth.login(users, username, password, changeUserAction)
            props.history.push("/app")
          }

          if (!auth.authenticated) {
            props.history.push("/")
          }
        }}
      >Log in</button>
    </>
  )
}

export default Login
