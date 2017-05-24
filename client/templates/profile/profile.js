Template.profile.helpers({
	notifs: function() {
		
			return Notifs.find({authorID: Meteor.userId()}, {sort: {createdAt: -1}, limit: 15});	
	},

	//Checks if current user's colocName field equals null.
	check_if_coloc: function () { return Meteor.user().colocName == null }
});