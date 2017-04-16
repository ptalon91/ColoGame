// Ask for username only when creating an account or login.
Accounts.ui.config({
	passwordSignupFields: 'USERNAME_ONLY'
});

// Redirect to coloc page after login.
var requireLogin = function() {
    if (! Meteor.user()) {
      if (Meteor.loggingIn()) {
        Router.go('coloc');
        this.next();
      } else {
        Router.go('homePage');
        this.next();
      }
    } else {
      this.next();
    }
  }
  Router.onBeforeAction(requireLogin);