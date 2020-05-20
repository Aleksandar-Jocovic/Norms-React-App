
class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(users, name, password, action) {
    users.forEach(user => {
      if (user.name === name && user.pass === password) {
        console.log(" login if stat")
        console.log(user.name, user.pass)
        console.log(name, password)

        this.authenticated = true;
        action(user.userId)
      }
    });
  }

  singin(users, singName, singPassword, singInAct, success, setUserName, setPassword, setLogin) {
    console.log('sing in', singPassword.length)
    const newuser = {
      name: singName,
      pass: singPassword,
      userId: users.length,
      norms: []
    }
    const takenNames = users.map(user => user.name)
    if (!takenNames.includes(singName) && singName != "" && singPassword.length > 5) {
      singInAct(newuser)
      success(true)
      setUserName(singName)
      setPassword(singPassword)
      setLogin(true)
    }
  }

  logout() {
    this.authenticated = false;
  }



  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();