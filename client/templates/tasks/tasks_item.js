// Helper for the tasksItem template. Returns tasks that are non admin.
Template.taskItem.helpers({
  check_if_admin: function () { return this.author != 'admin' }
})

Template.taskItem.events({

  // Call update task method (located in the server) when user clicks on the check box.
	'click .ckeck': function(){
    Meteor.call(
      'updateTask',
      this._id,
      this.checked
    );
	},

  // Call remove task method (located in the sevrer) when user clicks on "supprimer".
	'click .delete': function(){
    Meteor.call(
      'removeTask',
      this._id
    );
	},

	
});



/*let countdown = new ReactiveCountdown(5);

//compte a rebours
/*
let countdown = new ReactiveCountdown(5);
countdown.start(function() {
   alert('c est fini');
});

Template.car.helpers({
    getCountdown: function() {
        return countdown.get();
    }
});*/