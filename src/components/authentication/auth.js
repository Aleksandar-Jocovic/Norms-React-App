
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

  logout() {
    this.authenticated = false;
  }



  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();