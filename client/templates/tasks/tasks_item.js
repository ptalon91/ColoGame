// Helper for the tasksItem template. Returns tasks that are non admin.
Template.taskItem.helpers({
  check_if_admin: function () { return this.author != 'admin' }
})

Template.taskItem.events({

  // Call update task method (located in the server) when user clicks on the check box.
	'click .check': function(){
    
    let task_points = this.points;
    let task_descr = this.descr;
    let task_id = this._id;
    var checked = this.checked;

    Meteor.call(
      'updateTask',
      task_id,
      checked
    );
	},

  // Call remove task method (located in the sevrer) when user clicks on "supprimer".
	'click .delete': function(){
    
    let task_id = this._id;

    let box_message = "Voulez-vous vraiment supprimer cette tâche ?";
    new Confirmation({
      message: box_message,
      title: "Confirmation",
      cancelText: "Non",
      okText: "Oui",
      success: true, // whether the button should be green or red
      focus: "cancel" // which button to autofocus, "cancel" (default) or "ok", or "none"
    }, function (ok) {
      if (ok == true){
        Meteor.call(
          'removeTask',
          task_id
        );
      }
	   })
  }
});
