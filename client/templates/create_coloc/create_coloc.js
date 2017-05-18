Template.createColoc.events({
	'keypress .createColoc': function(evt){
		let contenu = document.getElementById('colocName').value;
		let box_message = "Voulez-vous vraiment créer ou rejoindre la coloc " + contenu + " ?";
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
	  			}
			});
		}
	}
});
