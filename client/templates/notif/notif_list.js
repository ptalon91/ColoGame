// Helpers for the notifList template. Returns every notif from the database and assign it to "notif"
Template.notifsList.helpers({
	notifs: function() {
		return Notifs.find({colocName: Meteor.user().colocName}, {sort: {createdAt: -1}, limit: 15});
	}
});

// Template.notifList.event({
// 	if(currentUser.points < user.points){
// 		alert(Attention êtes le dernier du classement, accomplissez une tâche pour ne pas recevoir de gage.);
// 	}
// });
