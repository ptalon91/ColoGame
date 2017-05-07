// Helper for the tasksList template. Returns every tasks from the database and assign it to "tasks"
Template.tasksList.helpers({
	tasks: function() {
		return Tasks.find();
	}
});

// Event for the tasksList template.
// Calls the method "incrementPoints" defined on server side. 
// For current user, and for the clicked task's number of points
Template.tasksList.events({
	'click .task-content': function(){
	    Meteor.call('updatePoints', Meteor.userId(), this.points)
	}
});