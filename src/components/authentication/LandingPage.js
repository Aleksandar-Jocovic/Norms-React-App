import React, { useState } from 'react'
import './landingPage.css'
import Login from './Login'
import Singin from './Singin'


const LandingPage = props => {

  const [success, setSuccess] = useState(false)
  const [login, setLogin] = useState(true);

  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

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
      <h3>Welcome to norms</h3>
      {success && <h5 className="text-success">Your account is created successfuly please log in</h5>}
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
        <Login props={props} username={username} setUserName={setUserName}
          password={password} setPassword={setPassword}
        />
        :
        <Singin props={props} setSuccess={setSuccess} username={username} setUserName={setUserName}
          password={password} setPassword={setPassword} setLogin={setLogin}
        />
      }

    </div >
  )
}

export default LandingPage
