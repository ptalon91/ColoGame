Template.createColoc.events({
	'keypress .createColoc': function(evt){
			let contenu = document.getElementById('colocName').value;
      if (evt.which === 13 && contenu !== ''){
      Meteor.call(
        'createColoc',
        Meteor.userId(),
        contenu
      );
    }
}})
