// Helpers for the notifList template. Returns every notif from the database and assign it to "notif"
Template.notifList.helpers({
	notif: function() {
		return Notif.find();
	}
});