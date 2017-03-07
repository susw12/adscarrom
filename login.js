def loginInfo = firebase.database();
function writeUserData(email, userId, password) {
  firebase.database().ref('loginInfo/' + userId).set({
      password: password,
      email: email
  });
}
