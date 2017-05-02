// Helpers for the notifList template. Returns every notif from the database and assign it to "notif"
Template.notifList.events({
	
	'click .addTache': function() {

					var contenu = prompt('Entrez le nom de la tâche');

					var newTache = document.createElement('div');
					newTache.id = 'nouvelleTache';

					newTache.innerHTML = `<h4 class='notifTexte'>${contenu}</h4>`;//comment faire sans utiliser css ?

					document.body.appendChild(newTache); //insère l'objet en tant que dernier éléments => a la fin


					var derniereNotif = document.getElementById('derniereNotif');
					var element_parent = document.getElementById("toutes_notif");

					element_parent.insertBefore(newTache, derniereNotif);				
	}
});