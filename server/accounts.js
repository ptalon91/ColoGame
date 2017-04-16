// Add a "points" field to new user's document.
Accounts.onCreateUser(function(options, user) {
	// Set points field to 0.
	user.points = 0;
	// We have to return the user. Now we have to publish the field in order to access it from the client (-> publication.js).
	return user;
});

