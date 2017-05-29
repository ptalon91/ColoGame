// Events when user enters a name for the coloc.
Template.createColoc.events({
	'keypress .createColoc': function(evt){

		let contenu = document.getElementById('colocName').value;
		let box_message = "Voulez-vous vraiment créer ou rejoindre la coloc " + contenu + " ?";

		// Event of pressing "enter" key.
	    if (evt.which === 13 && contenu !== ''){

			// Confirmation box when creating new coloc or joining a new one
			new Confirmation({
				message: box_message,
				title: "Confirmation",
				cancelText: "Annuler",
				okText: "Oui",
				success: true,
				focus: "cancel"
			}, function (ok) {
					if (ok == true){

						// Call method on server for creating new coloc
		    			Meteor.call(
			      			'createColoc',
			      			Meteor.userId(),
			      			contenu
		    			);

		    			// Call method on server for creating new notification
		    			Meteor.call(
		    				'createJoinNotif',
							Meteor.user().username,
		    				contenu
		    			);
	  				}
			});
		}
	}
});
