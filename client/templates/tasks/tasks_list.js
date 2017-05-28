// Helper for the tasksList template. Returns global and current coloc's tasks from the database and assign it to "tasks"
Template.tasksList.helpers({
	tasks: function() {
		return Tasks.find({"$or": [{coloc: Meteor.user().colocName}, {coloc: "global"}]});
	},

	//Checks if current user's colocName field equals null.
	check_if_coloc: function () { return Meteor.user().colocName == null }
});

// Event for the tasksList template.
// Calls the method "incrementPoints" and "createNotif" defined on server side.
// For current user, and for the clicked task's number of points.
Template.tasksList.events({
	'click #task_content': function(){

		var checked = this.checked;
		
		if(checked != true){
			// Parameters...
			let task_points = this.points;
			let task_descr = this.descr;
			let task_id = this._id;
			let box_message = "Vous avez vraiment " + task_descr + " ?";

			// Confirmation box when clicking a task. "ok" is true if the user clicked on "ok", false otherwise
			new Confirmation({
			  message: box_message,
			  title: "Confirmation",
			  cancelText: "Non",
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
						Meteor.userId(),
						Meteor.user().colocName,
						Meteor.user().username,
						Meteor.user().points,
						task_points,
						task_descr
					);
					
					// Call method on server to update task's "checked" field.
					Meteor.call(
				      'updateTask',
				      task_id
				    );
					//alert("N'oubliez pas d'aller cocher la case \"Cette tâche a été faite.\"");

					// After confirmation, redirect to coloc page.
					Router.go('coloc');
				}
			});
		} else{alert('Cette tâche a déjà été effectuée, essayez ultérieurement.')};
	},


	//créer une nouvelle tache
	'click #add_tache': function(){
	    var user_task_name = prompt('Entrez le nom de la tâche');
	    
		if(user_task_name != null && user_task_name.trim() != '') {			//ne peut pas être nulle
			var user_task_points = Number(prompt('Entrez le nombre de points'));

			if(user_task_points != null){	//ne peut pas être nulle
				Meteor.call(
					'createTask',
					Meteor.user().colocName,
					Meteor.user().username,
					user_task_name,
					user_task_points
				);
			} else{
 				alert('Aucune information');
 			  }

		} else{
 			alert('Aucune information');
 		  }
 	}

});