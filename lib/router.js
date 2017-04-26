// router.js sets the routes to the templates.

// Router configuration.
Router.configure({
	// Load main layout template.
	layoutTemplate: 'layout',
	// Load loading template.
	loadingTemplate: 'loading',
	// Load "page not found" template.
	notFoundTemplate: 'notFound',
	// waitOn, allows to show "loading..." when loading the data from the publications, so the user knows something is happening.
	waitOn: function() { 
		return [
			Meteor.subscribe('tasks'),
			// Subscription to the points field publication.
			Meteor.subscribe('userData')
		];
	}
});

// main route, login.
Router.route('/', {name: 'homePage'});

// route to tasks.
Router.route('/tasks', {name: 'tasksList'});

// route to profile.
Router.route('/profile', {name: 'profile'});

// route to coloc.
Router.route('/coloc', {name: 'coloc'});

// route to notif.
Router.route('/notif', {name: 'notifList'});