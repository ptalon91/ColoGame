// Helpers for the usersList template. Returns every users from the database, and sort it in function of the points.
Template.usersList.helpers({
	users: function() {
		return Meteor.users.find({}, {sort: {points:-1}});
	}
});