// Helpers for the notifList template. Returns every notif from the database and assign it to "notif"
Template.notifsProfileList.helpers({
	notifs: function() {
		return Notifs.find({authorID: Meteor.userId()}, {sort: {createdAt: -1}, limit: 15});
	}
});

// Template.notifList.event({
// 	if(currentUser.points < user.points){
// 		alert(Attention êtes le dernier du classement, accomplissez une tâche pour ne pas recevoir de gage.);
// 	}
// })
