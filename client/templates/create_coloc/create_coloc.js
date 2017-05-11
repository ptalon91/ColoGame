Template.createColoc.events({
	'keypress .createColoc': function(evt){

      if (evt.which === 13){
      let contenu = document.getElementById('colocName').value;

      Meteor.call( 
        'createColoc',
        Meteor.userId(),
        contenu
      );
    }
}})
