
class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(users, name, password) {
    users.forEach(user => {
      if (user.name === name && user.pass === password) {
        this.authenticated = true;
        return;
      }
    });
    console.log('no user with that name')
  }

  logout() {
    this.authenticated = false;
  }



  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();