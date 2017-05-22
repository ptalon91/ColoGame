Template.profile.helpers({
	notifs: function() {
		
			return Notifs.find({authorID: Meteor.userId()}, {sort: {createdAt: -1}, limit: 15});	
	}
});