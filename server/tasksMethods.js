// Methods called in tasks_list.js.
Meteor.methods({
	
	// Updates current user's number of points with the clicked task's number of points.
	incrementPoints(current_userId, task_points) {
		Meteor.users.update({_id: current_userId}, {$inc: {'points': task_points}})
	},

	// Creates a notification when user clicks on a task he made.
    createNotif(current_userId, current_username, current_username_points, task_points, task_descr) {
		Notifs.insert({
			text: current_username + " a " + task_descr + " et remporte " + task_points + " points. Bravo !",
			authorID: current_userId,
			createdAt: new Date()
		})
	}
});


