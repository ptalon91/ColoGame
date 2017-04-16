// router.js 

// Router configuration.
Router.configure({
	// Load main layout template.
	layoutTemplate: 'layout',
	// Load loading template.
	loadingTemplate: 'loading',
	// Load "page not found" template.
	notFoundTemplate: 'notFound',
	// waitOn, allows to show "loading..." when loading a template, so the user knows something is happening.
	waitOn: function() { 
		return Meteor.subscribe('tasks');
	}
});

// main route, login.
Router.route('/', {name: 'homePage'});

// route to tasks.
Router.route('/tasks', {name: 'tasksList'});

// route to profile.
Router.route('/profile', {name: 'profile'});

