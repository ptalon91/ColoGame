Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'mainLogin'});

Router.route('/tasks', {name: 'tasksList'});
