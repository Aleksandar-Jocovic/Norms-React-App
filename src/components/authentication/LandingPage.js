import React, { useState } from 'react'
import auth from './auth'
import './landingPage.css'

const LandingPage = props => {

  const [username, setUserName] = useState('')
  const [password, setPasswprd] = useState('')
  const [error, setError] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const [login, setLogin] = useState(true);


  const onSubmit = () => {
    console.log('submit')
    //create neew user

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
                onChange={(e) => setPasswprd(e.target.value)}
              />
              <label id="labelAuth">pasword*</label>
            </div>

          </form>
          <button
            className="btn btn-info m-auto"
            onClick={() => {
              auth.login()
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
                onChange={(e) => setPasswprd(e.target.value)}
              />
              <label id="labelAuth">pasword*</label>
            </div>
            <div>
              <input
                id="inputAuth"
                autoComplete="off"
                className="form-control mb-4"
                type="text"
                placeholder=" "
                value={password}
                onChange={(e) => setPasswprd(e.target.value)}
              />
              <label id="labelAuth">pasword*</label>
            </div>

          </form>
          <button
            className="btn btn-info text-center"
            onClick={() => {
              auth.login()
              props.history.push("/app")
            }}
          >Log in</button>
        </>
      }
    </div>
  )
}

export default LandingPage
