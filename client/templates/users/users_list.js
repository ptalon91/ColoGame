// Helpers for the usersList template. Returns users from the database who have the same colocName,
// and sort it in function of the points.
Template.usersList.helpers({
	users: function() {
		return Meteor.users.find({colocName: Meteor.user().colocName}, {sort: {points:-1}});
	}
}); 
