// Method called in tasks_list.js.
// Updates current user's number of points with the clicked task's number of points.
Meteor.methods({
  updatePoints(current_userId, task_points) {
    Meteor.users.update({_id: current_userId}, {$inc: {'points': task_points}})
  }
});