// Helpers for the notifProfileList template. Returns every current user's notif from the database and assign it to "notif"
Template.notifsProfileList.helpers({
	notifs: function() {
		return Notifs.find({authorID: Meteor.userId()}, {sort: {createdAt: -1}, limit: 15});
	}
});
