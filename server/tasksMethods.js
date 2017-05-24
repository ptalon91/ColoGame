// Methods called in tasks_list.js.
Meteor.methods({

	// Updates current user's number of points with the clicked task's number of points.
	incrementPoints(current_userId, task_points) {
		Meteor.users.update({_id: current_userId}, {$inc: {'points': task_points}})
	},

	// Creates a notification when user clicks on a task he made.
    createNotif(current_userId, current_colocName, current_username, current_username_points, task_points, task_descr) {
		Notifs.insert({
			authorID: current_userId,
			text: current_username + " a " + task_descr+ " et gagne " + task_points + " points!",
			colocName: current_colocName,
			createdAt: new Date()
		})
	},

	// Creates a task when user clicks on the add task button.
	createTask(current_colocName, current_username, user_task_name, user_task_points){
		Tasks.insert({
			coloc: current_colocName,
			author: current_username,
			name: user_task_name,
			descr: user_task_name,
			points: user_task_points,
			service: true,
			pending: false,
			createdAt: new Date(),
			checked: false,
			tasksDoneDate: null
		})
	},

	// Remove task.
	removeTask(task_id){
		Tasks.remove(task_id);
	},

	// Update task.
	updateTask(task_id, task_checked){
		Tasks.update(task_id, {$set:{checked: !task_checked}});
	}

});
