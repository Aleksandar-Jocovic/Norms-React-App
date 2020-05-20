import React, { useState, useContext } from 'react'
import auth from './auth'
import './landingPage.css'
import Login from './Login'
import Singin from './Singin'

import { GlobalContext } from '../../context/GlobalState';

const LandingPage = props => {

  const { users, singInAction, changeUserAction, globalSTATE } = useContext(GlobalContext);

  /*   const [username, setUserName] = useState('')
    const [password, setPassword] = useState('') */

  /*   const [singInUsername, setSingInUserName] = useState('')
    const [singInPassword, setSingInPassword] = useState('') */

  /*   const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('*username is required') */

  const [success, setSuccess] = useState(false)

  const [login, setLogin] = useState(true);

  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  /*   const handleLogIn = () => {
      let takenNames = users.map(user => user.name)
      if (!takenNames.includes(username)) {
        setErrorMessage("*username does't exis.")
        setError(true)
      } else if (takenNames.includes(singInUsername)) {
        setErrorMessage("*username is already taken")
        setError(true)
      }
      else if (username === '') {
        setError(true)
        console.log('error', error)
      } else setError(false)
  
    } */

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
          password={password} setPassword={setPassword} />
        /*         <>
                  <form className="form-inline my-3 my-lg-0 d-flex flex-column w-100 ">
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
                      handleLogIn()
        
                      auth.login(users, username, password, changeUserAction)
        
                      props.history.push("/app")
                      if (!auth.authenticated) {
                        props.history.push("/Norms-React-App")
                      }
                    }}
                  >Log in</button>
                </> */

        :
        <Singin props={props} setSuccess={setSuccess} username={username} setUserName={setUserName}
          password={password} setPassword={setPassword} setLogin={setLogin} />
        // <>
        //   <form className="form-inline my-3 my-lg-0 d-flex flex-column w-100 ">
        //     {/*             {error ? (
        //       <small id="error-msg" className="text-danger p-0 m-0">{errorMessage}</small>
        //     ) : null} */}
        //     <div>
        //       <input
        //         id="inputAuth"
        //         autoComplete="off"
        //         className="form-control mb-4"
        //         type="text"
        //         placeholder=" "
        //         value={singInUsername}
        //         onChange={(e) => setSingInUserName(e.target.value)}
        //       />
        //       <label id="labelAuth">username*</label>
        //     </div>
        //     <div>
        //       <input
        //         id="inputAuth"
        //         autoComplete="off"
        //         className="form-control mb-4"
        //         type="text"
        //         placeholder=" "
        //         value={singInPassword}
        //         onChange={(e) => setSingInPassword(e.target.value)}
        //       />
        //       <label id="labelAuth">pasword*</label>
        //     </div>

        //   </form>
        //   <button
        //     className="btn btn-info text-center"
        //     onClick={() => {
        //       console.log(singInUsername)
        //       auth.singin(users, singInUsername, singInPassword, singInAction, changeUserAction)
        //       setSuccsess(true)
        //       /*               setUserName(singInUsername)
        //                     setPassword(singInPassword) */
        //       setLogin(true)
        //     }}
        //   >Sing in</button>
        // </>
      }
    </div >
  )
}

export default LandingPage
