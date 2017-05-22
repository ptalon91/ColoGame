// Event for header template. Redirect to home page after logout.
Template.header.events({
    'click #login-buttons-logout': function (event) {
        Router.go('homePage');
    }
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