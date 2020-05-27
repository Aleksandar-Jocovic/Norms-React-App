
class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(users, name, password, action) {
    users.forEach(user => {
      if (user.name === name) {
        action(user.userId)
      }
      console.log(" login if stat")
      console.log(user.name, user.pass)
      console.log(name, password)

      this.authenticated = true;
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
    singInAct(newuser)
    success(true)
    setUserName(singName)
    setPassword(singPassword)
    setLogin(true)
  }

  logout() {
    this.authenticated = false;
  }



  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();