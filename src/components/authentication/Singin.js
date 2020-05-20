import React, { useState, useContext } from 'react'
import auth from './auth'

import './landingPage.css'

import { GlobalContext } from '../../context/GlobalState';

const Singin = ({ props, setUserName, setPassword, username, password, setSuccess, setLogin }) => {

  const { users, singInAction, changeUserAction, globalSTATE } = useContext(GlobalContext);

  const [singInUsername, setSingInUserName] = useState('')
  const [singInPassword, setSingInPassword] = useState('')

  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const [errorPassword, setErrorPassword] = useState(false)
  const [errorMessagePassword, setErrorMessagePassword] = useState('')

  const validateInput = () => {
    let takenNames = users.map(user => user.name)
    if (singInUsername === '') {
      setErrorMessage("*username is required.")
      setError(true)
    }
    else if (takenNames.includes(singInUsername)) {
      setErrorMessage("*username already exis.")
      setError(true)
    }
    if (singInPassword < 6) {
      setErrorMessagePassword('*password must be at least 6 character long')
      setErrorPassword(true)
    } else {
      setError(false)
      setErrorPassword(false)
      console.log('ggod input')
    }
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
            id="inputAuth"
            autoComplete="off"
            className="form-control mb-4"
            type="text"
            placeholder=" "
            value={singInPassword}
            onChange={(e) => setSingInPassword(e.target.value)}
          />
          <label id="labelAuth">pasword*</label>
        </div>

      </form>
      <button
        className="btn btn-info text-center"
        onClick={() => {
          validateInput()
          auth.singin(users, singInUsername, singInPassword, singInAction,
            setSuccess, setUserName, setPassword, setLogin)
        }}
      >Sing in</button>
    </>
  )
}

export default Singin
