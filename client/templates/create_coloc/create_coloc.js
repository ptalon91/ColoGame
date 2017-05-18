Template.createColoc.events({
	'keypress .createColoc': function(evt){
		let contenu = document.getElementById('colocName').value;
		let box_message = "Voulez-vous vraiment créer ou rejoindre la coloc " + contenu + " ?";
    if (evt.which === 13 && contenu !== ''){
			// Confirmation box when creating new coloc or new joining one
			new Confirmation({
				message: box_message,
				title: "Confirmation",
				cancelText: "Annuler",
				okText: "Oui",
				success: true, // whether the button should be green or red
				focus: "cancel" // which button to autofocus, "cancel" (default) or "ok", or "none"
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
