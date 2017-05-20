// Helper for the tasksList template. Returns every tasks from the database and assign it to "tasks"
Template.tasksList.helpers({
	tasks: function() {
		return Tasks.find({"$or": [{coloc: Meteor.user().colocName}, {coloc: "global"}]});
	}
});

// Event for the tasksList template.
// Calls the method "incrementPoints" and "createNotif" defined on server side.
// For current user, and for the clicked task's number of points.
Template.tasksList.events({
	'click #task_content': function(){
		
		// Parameters...
		let task_points = this.points;
		let task_descr = this.descr;
		let box_message = "Vous avez vraiment " + task_descr + " ?";

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
	},

	'click #add_tache': function(){
	    let user_task_name = prompt('Entrez le nom de la tâche');
	    let user_task_points = Number(prompt('Entrez le nombre de points'));
		/*let newTache = document.createElement('div');
			
		newTache.id = 'nouvelleTache';
		newTache.className = 'notif';
		newTache.innerHTML = `<h4 class='notifTexte' id='notifTexte'>${contenu}</h4>`;*/

	/*	if (newTache) {
			let derniereNotif = document.getElementById('task-content');
			let element_parent = document.getElementById('toutes_notif');

			element_parent.insertBefore(newTache, derniereNotif);
			} else{};

		let derniereNotif = document.getElementById('task_content');
		let element_parent = document.getElementById("toutes_notif");

		element_parent.insertBefore(newTache, task_content); */

		Meteor.call(
			'createTask',
			Meteor.user().colocName,
			Meteor.user().username,
			user_task_name,
			user_task_points
		);
	},
});