// Helper for the tasksList template. Returns every tasks from the database and assign it to "tasks"
Template.tasksList.helpers({
	tasks: function() {
		return Tasks.find();
	}
});

// Event for the tasksList template.
// Calls the method "incrementPoints" and "createNotif" defined on server side. 
// For current user, and for the clicked task's number of points.
Template.tasksList.events({
	'click .task-content': function(){
	    
		// Parameters...
		let task_points = this.points;
		let task_descr = this.descr;
		let box_message = "Confirmez-vous avoir " + task_descr + " ?";
		
		// Confirmation box when clicking a task. "ok" is true if the user clicked on "ok", false otherwise
		new Confirmation({
		  message: box_message,
		  title: "Confirmation",
		  cancelText: "Annuler",
		  okText: "Oui",
		  success: true, // whether the button should be green or red
		  focus: "cancel" // which button to autofocus, "cancel" (default) or "ok", or "none"
		}, function (ok) {
		
			if (ok == true){
				// Call method on server for incrementing user's points.
				Meteor.call(
					'incrementPoints',
					Meteor.userId(),
					task_points
				);

				// Call method on server to create a notification.
				Meteor.call(
					'createNotif',
					Meteor.user().colocName,
					Meteor.user().username,
					Meteor.user().points,
					task_points,
					task_descr
				);
				
				// After confirmation, redirect to coloc page.
				Router.go('coloc');
			}
		});
	}
});
