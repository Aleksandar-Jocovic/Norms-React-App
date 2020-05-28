import React, { useState, useContext } from 'react'
import auth from './auth'
import './landingPage.css'

import { GlobalContext } from '../../context/GlobalState';

const Singin = ({ setUserName, setPassword, setSuccess, setLogin }) => {

  const { users, singInAction } = useContext(GlobalContext);

  const [singInUsername, setSingInUserName] = useState('')
  const [singInPassword, setSingInPassword] = useState('')

  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [errorPassword, setErrorPassword] = useState(false)
  const [errorMessagePassword, setErrorMessagePassword] = useState('')
  const [passwordHidden, setPasswordHidden] = useState(true);


  const validateInput = () => {
    let takenNames = users.map(user => user.name)

    if (!takenNames.includes(singInUsername) && singInPassword.length > 5
      && singInUsername !== '') {
      return true
    }
    if (singInUsername === '') {
      setErrorMessage("*username is required.")
      setError(true)
    }

    if (takenNames.includes(singInUsername)) {
      setErrorMessage("*username already exis.")
      setError(true)
    }

    if (singInUsername !== '' && !takenNames.includes(singInUsername)) {
      setError(false)
    }

    if (singInPassword === '') {
      setErrorMessagePassword('*password is required')
      setErrorPassword(true)
    }
    if (singInPassword !== '' && singInPassword.length < 6) {
      setErrorMessagePassword('*password must be at least 6 character long')
      setErrorPassword(true)
    }

    if (singInPassword !== '' && singInPassword.length > 6) {
      setErrorPassword(false)
    }
  }

  return (
    <>
      <form className="form-inline my-2 d-flex flex-column">
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
            value={singInUsername}
            onChange={(e) => setSingInUserName(e.target.value)}
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
            value={singInPassword}
            onChange={(e) => setSingInPassword(e.target.value)}
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
        className="btn btn-info text-center"
        onClick={() => {
          if (validateInput()) {
            auth.singin(users, singInUsername, singInPassword, singInAction,
              setSuccess, setUserName, setPassword, setLogin)
          }
        }}
      >Sing in</button>
    </>
  )
}

export default Singin
