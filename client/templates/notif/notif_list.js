// Helpers for the notifList template. Returns every notif from the database and assign it to "notif"
Template.notifsList.helpers({
	notifs: function() {
		return Notifs.find({colocName: Meteor.user().colocName}, {sort: {createdAt: -1}, limit: 15});
	}
});
