import React, { useState, useContext } from 'react'
import auth from './auth'
import './landingPage.css'

import { GlobalContext } from '../../context/GlobalState';

const LandingPage = props => {

  const { users, singInAction } = useContext(GlobalContext);

  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const [singInUsername, setSingInUserName] = useState('')
  const [singInPassword, setSingInPassword] = useState('')

  const [error, setError] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const [login, setLogin] = useState(true);


  const onSubmit = () => {
    console.log('submit')
    //create neew user
  }

  const singIn = () => {

    class Newuser {
      constructor(name, userId, pass, norms) {
        this.name = name;
        this.pass = pass;
        this.userId = userId;
        this.norms = norms;
      }
    }

    const takenNames = users.map(user => user.name)
    console.log(takenNames)

    if (!takenNames.includes(singInUsername) /* && singInUsername.length !== 0 */) {
      const userInstance = new Newuser(singInUsername, singInPassword, users.length + 1, {})
      singInAction(userInstance)
      console.log(users)
    }
  }


  const borderDivStyle = {
    width: 111,
    height: 2,
    backgroundColor: '#5bc0de',
    sing: {
      width: 111,
      height: 2,
      backgroundColor: '#5bc0de',
      transtion: '0.9s ease',
      transform: 'translate(100%)',
    }

  }

  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Welcome to norms</h1>

      <div id="log-sing-vrap">
        <button
          id="log-sing-button"
          value="login"
          onClick={() => setLogin(true)}
        >
          Log in
        </button>
        <button
          id="log-sing-button"
          value="singin"
          onClick={() => setLogin(false)}
        >
          Sing in
        </button>
        <div className="border-div" style={login ? borderDivStyle : borderDivStyle.sing}></div>
      </div>


      {login ?
        <>
          <form
            className="form-inline my-3 my-lg-0 d-flex flex-column w-100 "
            onSubmit={onSubmit}
          >
            {error ? (
              <small className="text-danger p-0 m-0">{errorMessage}</small>
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
              auth.login(users, username, password)
              props.history.push("/app")
            }}
          >Log in</button>
        </>

        :
        <>
          <form
            className="form-inline my-3 my-lg-0 d-flex flex-column w-100 "
            onSubmit={onSubmit}
          >
            {error ? (
              <small className="text-danger p-0 m-0">{errorMessage}</small>
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
              singIn()
              /*  auth.login()
               props.history.push("/app") */
            }}
          >Log in</button>
        </>
      }
    </div>
  )
}

export default LandingPage
