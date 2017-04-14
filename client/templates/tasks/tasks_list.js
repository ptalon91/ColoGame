Template.tasksList.helpers({
	tasks: function() {
		return Tasks.find();
	}
});