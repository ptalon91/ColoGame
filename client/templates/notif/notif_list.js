// Helpers for the notifList template. Returns every notif from the database and assign it to "notif"
// Helper for the tasksList template. Returns every tasks from the database and assign it to "tasks"
Template.notifsList.helpers({
	notifs: function() {

		return Notifs.find({colocName: Meteor.user().colocName}, {sort: {createdAt: -1}, limit: 15});

	}
});
