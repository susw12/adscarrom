//def database = firebase.database();
function writeUserData(email, uname, psw) {
  firebase.database().ref('loginInfo/' + uname).set({
      password: psw,
      email: email,
      points: ''
  });
}
