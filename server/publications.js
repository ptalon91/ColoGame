
// Tasks publication. Here, all tasks are publicated.
Meteor.publish('tasks', function() {
	return Tasks.find();
});

Meteor.publish('userPoints', function () {
  if (this.userId) {
    return Meteor.users.find({ _id: this.userId }, {
      fields: { points: 1 }
    });
  } else {
    this.ready();
  }
});