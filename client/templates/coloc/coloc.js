// helpers for coloc template.
Template.coloc.helpers({

	//Checks if current user's colocName field equals null.
	check_if_coloc: function () { return Meteor.user().colocName == null }
});
