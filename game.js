var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
firebase.auth().signInWithRedirect(provider);
firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // ...
  }
  // The signed-in user info.
  var user = result.user;
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
// Step 1.
// User tries to sign in to Google.
auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(function(error) {
  // An error happened.
  if (error.code === 'auth/account-exists-with-different-credential') {
    // Step 2.
    // User's email already exists.
    // The pending Google credential.
    var pendingCred = error.credential;
    // The provider account's email address.
    var email = error.email;
    // Get registered providers for this email.
    auth.fetchProvidersForEmail(email).then(function(providers) {
      // Step 3.
      // If the user has several providers,
      // the first provider in the list will be the "recommended" provider to use.
      if (providers[0] === 'password') {
        // Asks the user his password.
        // In real scenario, you should handle this asynchronously.
        var password = promptUserForPassword(); // TODO: implement promptUserForPassword.
        auth.signInWithEmailAndPassword(email, password).then(function(user) {
          // Step 4a.
          return user.link(pendingCred);
        }).then(function() {
          // Google account successfully linked to the existing Firebase user.
          goToApp();
        });
        return;
      }
      // All the other cases are external providers.
      // Construct provider object for that provider.
      // TODO: implement getProviderForProviderId.
      var provider = getProviderForProviderId(providers[0]);
      // At this point, you should let the user know that he already has an account
      // but with a different provider, and let him validate the fact he wants to
      // sign in with this provider.
      // Sign in to provider. Note: browsers usually block popup triggered asynchronously,
      // so in real scenario you should ask the user to click on a "continue" button
      // that will trigger the signInWithPopup.
      auth.signInWithPopup(provider).then(function(result) {
        // Remember that the user may have signed in with an account that has a different email
        // address than the first one. This can happen as Firebase doesn't control the provider's
        // sign in flow and the user is free to login using whichever account he owns.
        // Step 4b.
        // Link to Google credential.
        // As we have access to the pending credential, we can directly call the link method.
        result.user.link(pendingCred).then(function() {
          // Google account successfully linked to the existing Firebase user.
          goToApp();
        });
      });
    });
  }
});

function clearErrs() {
	var errs = document.getElementsByClassName("errmssg");
	for (err in errs) {
		errs[err].style.display = 'none';
		
	}	
}

function checkEmail(email) {
 	var emailre = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 	var errors = [];
 	if (! emailre.test(email)) {
 		errors.push('emailinvalid');
	}
 
	return errors;
}

function checkPsw(psw) {
	var pswre = /^[a-zA-Z0-9!@#$%^&*()+=_-]+$/;
	var errors = [];
	if (psw.length > 30 || psw.length < 6) {
 	errors.push('pswlen');
 	}
	if ((! pswre.test(psw)) && (psw.length > 0)) {
		errors.push('pswchar');
	}
 
	return errors;


}

function checkUname(uname) {
	var unamere = /^[a-zA-Z0-9]+$/;
	var errors = [];
	if (uname.length > 20 || uname.length < 5) {
 	errors.push('unamelen');
 }
 
 
 	if ((! unamere.test(uname)) && (uname.length > 0)) {
 		errors.push('unamechar');
	}
 
 	return errors;
}


function checkSignUp() {
	var errors = [];
	var allErrors = ['unamelen', 'unamechar', 'pswlen', 'pswchar', 'repswmatch', 'emailinvalid', 'emailtaken', 'unametaken'];
	var email = document.suform.email.value;
	var uname = document.suform.uname.value;
	var psw = document.suform.psw.value;
	var repsw = document.suform.repsw.value;
 
	errors = errors.concat(checkUname(uname));
	errors = errors.concat(checkPsw(psw));
	errors = errors.concat(checkEmail(email));
  
 /* show and hide */
	for (var count in allErrors) {
 		document.getElementById('su' + allErrors[count]).style.display = 'none';
	}
	
	for (count in errors) {
 	document.getElementById('su' + errors[count]).style.display = 'block';
	}
 
 /* cancel if errors */
	if (errors.length > 0) {
 		return false;
	}
	else {
		signUp(email, password);
	}
}


function checkLogIn() {
	var errors = [];
	var allErrors = ['pswinc'];
	var uname = document.liform.uname.value;
	var psw = document.liform.psw.value;
 
 /* show and hide */
	for (var count in allErrors) {
 		document.getElementById('li' + allErrors[count]).style.display = 'none';
 	}
	for (count in errors) {
 		document.getElementById('li' + errors[count]).style.display = 'block';
	}
 
 	/*if combo is right return true*/
	if (errors.length > 0) {
		return false;
 	}
 
	return true;
 	/*if combo is right return true*/
}	

function checkChangeEmail() {
 
	var errors = [];
	var allErrors = ['pswinc', 'emailinvalid'];
	var email = document.ceform.email.value;
	var psw = document.ceform.psw.value;
 
	errors = errors.concat(checkEmail(email));
 
	 /* show and hide */
	for (var count in allErrors) {
 		document.getElementById('ce' + allErrors[count]).style.display = 'none';
	}
 	for (count in errors) {
 	
 		document.getElementById('ce' + errors[count]).style.display = 'block';
 	}
 
	/*if combo is right return true*/
	if (errors.length > 0) {
 		return false;
	}
 
	return true;
}

function checkChangePsw() {
 
	var errors = [];
	var allErrors = ['opswinc', 'pswchar', 'pswlen', 'repswmatch'];
	var opsw = document.cpform.opsw.value;
	var psw = document.cpform.psw.value;
	var repsw = document.cpform.repsw.value;
 
	errors = errors.concat(checkPsw(psw));
 
	/* repsw test */
	if (psw != repsw) {
 		errors.push('repswmatch');
	}
 
 /* show and hide */
	for (var count in allErrors) {
 		document.getElementById('cp' + allErrors[count]).style.display = 'none';
	}
 
	for (count in errors) {
 		document.getElementById('cp' + errors[count]).style.display = 'block';
 	}
 
 /*if combo is right return true*/
	if (errors.length > 0) {
 		return false;
	}
 
 
return true;

}

//--------------------------------------------------------------

var SZ, elem, two, circle, rect, group, game;



class Game {
	constructor () {
		SZ = 500;
		elem = document.getElementById('gamediv');
		
		elem.innerHTML = "";
		two = new Two({ width: this.SZ, height: this.SZ });
		two.appendTo(elem);
		circle = two.makeCircle(-70, 0, 50);
		rect = two.makeRectangle(70, 0, 100, 100);
		circle.fill = '#FF8000';
		rect.fill = 'rgba(0, 200, 255, 0.75)';
		group = two.makeGroup(circle, rect);
		group.translation.set(SZ / 2, SZ / 2);
		group.scale = 0;
		group.noStroke();
		
	}
	
	run () {
		two.bind('update', function(frameCount) {
			console.log()
			
			
			// This code is called everytime two.update() is called.
			// Effectively 60 times per second.
			if (group.scale > 0.9999) {
				group.scale = group.rotation = 0;
			}
			var t = (1 - group.scale) * 0.125;
			group.scale += t;
			group.rotation += t * 4 * Math.PI;
		}).play();
		
	}
	
	tick () {
		
		
	}
	
	
}



function run() {
	var game = new Game();
	game.run();
	
	
	
}
