// Methods called in tasks_list.js.
Meteor.methods({

	// Updates current user's number of points with the clicked task's number of points.
	incrementPoints(current_userId, task_points) {
		Meteor.users.update({_id: current_userId}, {$inc: {'points': task_points}})
	},

	// Creates a notification when user clicks on a task he made.
    createNotif(
    	current_userId,
    	current_colocName,
    	current_username,
    	current_username_points,
    	task_points,
    	task_descr,
    	task_name
    ){
		
		// List of different strings to create notifs.
    	let text_list = [
    		current_username + " a " + task_descr + " et gagne " + task_points + " points!",
    		task_name + " n'a plus de secret pour " + current_username + ". " + task_points + " points!",
    		"Merci à " + current_username + " qui vient de " + task_name + ". Il remporte " + task_points + " points.",
    		current_username + " vient de " + task_name + ". C'est pas trop tard. " + task_points + " points.",
    		task_points + " points pour " + current_username + " qui vient de " + task_name + ". Bravo."
    	];

    	// Random selection of one element of the text_list.
		let random_text = text_list[Math.floor(Math.random() * text_list.length)];

		// Insert in database.
		Notifs.insert({
			text: random_text,
			text_profile: "Vous avez " +  task_descr + ". Cela vous a rapporté " + task_points + " points!",
			colocName: current_colocName,
			authorID: current_userId,
			createdAt: new Date()
		})
	},

	// Creates a notification when user joins the coloc.
	createJoinNotif(current_username, current_colocName) {
		Notifs.insert({
			text: current_username + " a rejoint la Coloc " + current_colocName + ". Bienvenue, " + current_username + "!" ,
			colocName: current_colocName,
			createdAt: new Date()
		})
	},

	// Creates a task when user clicks on the add task button.
	createTask(
		current_colocName,
		current_username,
		user_task_name,
		user_task_points
	){
		Tasks.insert({
			coloc: current_colocName,
			author: current_username,
			name: user_task_name,
			descr: user_task_name,
			points: user_task_points,
			service: true,
			pending: false,
			createdAt: new Date(),
			checked: false
		})
	},

	// Remove task.
	removeTask(task_id){
		Tasks.remove(task_id);
	},

	// Update task. Set "checked" field to tru if it was false, or to false if it was true.
	updateTask(task_id, task_checked){
		Tasks.update(task_id, {$set:{checked: !task_checked}});
	}

});
