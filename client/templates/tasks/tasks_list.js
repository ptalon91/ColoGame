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
	'click #task_content': function(){
	    
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
					Meteor.userId(),
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

Template.tasksList.events({
	'click #add_tache': function(){
	    var contenu = prompt('Entrez le nom de la tâche');
	    var points = prompt('Entrez le nombre de points');

		var newTache = document.createElement('div');
		newTache.id = 'nouvelleTache';
		newTache.className = 'notif';

		newTache.innerHTML = `<h4 class='notifTexte' id='notifTexte'>${contenu}</h4>`;
	/*	if (newTache) {
			var derniereNotif = document.getElementById('task-content');
			var element_parent = document.getElementById('toutes_notif');

			element_parent.insertBefore(newTache, derniereNotif);
			} else{};	

		var derniereNotif = document.getElementById('task_content');
		var element_parent = document.getElementById("toutes_notif");

		element_parent.insertBefore(newTache, task_content); */

		Tasks.insert({
  		  name: contenu,
 		  points: points, 
 		  service: true, 
 		  gage: true, 
  		  pending: false,
 		  createdAt: new Date(),
		});

		Meteor.call(
			'creatTache',
			task_points,
			task_descr
		);

		Meteor.call(
			'incrementPoints',		//ne fonctionne pas...
			Meteor.userId(),
			task_points
		);
	}
});

Template.taskItem.events({
	'click .ckeck': function(){
		Tasks.update(this._id, {$set:{checked: !this.checked}});
	},

	'click .delete': function(){
		Tasks.remove(this._id);
	}

});

