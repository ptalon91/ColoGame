// Add a "points" field to new user's document.
Accounts.onCreateUser(function(options, user) {
	// Set points field to 0.
	user.points = 0;

	user.colocName = null;
	// We have to return the user. Now we have to publish the field in order to access it from the client (-> publication.js).
	return user;
});
// Methods called in tasks_list.js.
Meteor.methods({
	// Updates current user's number of points with the clicked task's number of points.
	createColoc(current_userId, contenu) {
		Meteor.users.update({_id: current_userId}, {$set: {'colocName': contenu}})
	},
});
