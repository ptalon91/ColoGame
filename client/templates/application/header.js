// Event for header template. Redirect to home page after logout.
Template.header.events({
    'click #login-buttons-logout': function (event) {
        Router.go('homePage');
    }
});