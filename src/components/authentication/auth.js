
class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(users, name, password, action) {
    users.forEach(user => {
      if (user.name === name && user.pass === password) {
        this.authenticated = true;
        action(user.userId)
      }
    });
  }

  singin(users, singName, singPassword, singInAct, changeUserAct) {
    const newuser = {
      name: singName,
      pass: singPassword,
      userId: users.length,
      norms: []
    }
    const takenNames = users.map(user => user.name)
    console.log(takenNames)
    if (!takenNames.includes(singName)) {
      singInAct(newuser)
      users.forEach(user => {
        if (user.name === singName && user.pass === singPassword) {

          changeUserAct(user.userId)
          this.authenticated = true;
        }
      });
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