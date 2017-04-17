// Helpers for the tasksList template. Returns every tasks from the database and assign it to "tasks"
Template.usersList.helpers({
	users: function() {
		return Meteor.users.find();
	}
});