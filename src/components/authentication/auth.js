const getLocalStoreageAuthenticated = () => {
  if (localStorage.getItem('state-norms-auth') === null) {
    return false
  } else {
    return JSON.parse(localStorage.getItem('state-norms-auth'));
  }
};


class Auth {
  constructor() {
    //this.authenticated = false;
    this.authenticated = getLocalStoreageAuthenticated()
  }


  login(users, name, password, action) {
    users.forEach(user => {
      if (user.name === name) {
        action(user.userId)
      }
      this.authenticated = true;

      localStorage.setItem('state-norms-auth', JSON.stringify(true));
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
    //this.authenticated = false;
    localStorage.setItem('state-norms-auth', JSON.stringify(true));

  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();