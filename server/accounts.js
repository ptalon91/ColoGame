// Add a "points" field to new user's document.
Accounts.onCreateUser(function(options, user) {
	// Set points field to 0.
	user.points = 0;

	user.colocName = null;
	// We have to return the user. Now we have to publish the field in order to access it from the client (-> publication.js).
	return user;
});
// Method called in create_coloc
Meteor.methods({
	// Update the coloc's name of the user
	createColoc(current_userId, contenu) {
		Meteor.users.update({_id: current_userId}, {$set: {'colocName': contenu}})
	},
});
