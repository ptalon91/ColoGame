Accounts.onCreateUser(function(options, user) {
	user.points = 0;
	return user;
});