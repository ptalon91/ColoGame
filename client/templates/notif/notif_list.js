// Helpers for the notifList template. Returns every notif from the database and assign it to "notif"
// Helper for the tasksList template. Returns every tasks from the database and assign it to "tasks"
Template.notifsList.helpers({
	notifs: function() {
		return Notifs.find({}, {sort: {createdAt: -1, limit: 15}});
	}
});

/*Template.notifList.events({

	'click .addTache': function() {

					var contenu = prompt('Entrez le nom de la tâche');

					var newTache = document.createElement('div');
					newTache.id = 'nouvelleTache';
					newTache.className = 'notif';

					newTache.innerHTML = `<h4 class='notifTexte'>${contenu}</h4>`;//comment faire sans utiliser css ?

					document.body.appendChild(newTache); //insère l'objet en tant que dernier éléments => a la fin


					var derniereNotif = document.querySelector('.notif');
					var element_parent = document.getElementById("toutes_notif");

					element_parent.insertBefore(newTache, derniereNotif);			
	}
});*/