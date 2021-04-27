function askPassword(ok, fail) {
  let password = prompt("password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',
  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  }
};
askPassword(() => user.loginOk(), () => user.loginFail());
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
askPassword(() => user.loginOk.call(user), () => user.loginFail.call(user));
askPassword(() => user.loginOk.apply(user), () => user.loginFail.apply(user));
