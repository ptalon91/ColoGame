
// Tasks publication. Here, all tasks are publicated.
Meteor.publish('tasks', function() {
	return Tasks.find();
});
