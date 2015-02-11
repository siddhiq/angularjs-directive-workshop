angular.module('todoApp').controller('LandingCtrl', ['TodoService',
    function(TodoService) {
  var self = this;

  self.todos = [];

  TodoService.query().then(function(response) {
    self.todos = response.data;

  }, function(error) {
    console.error('Error fetching list of todos', error.data);
  });

  self.magic = function(id, author) {
    console.log('Amazing magic has happened ', id, author);
  };


}]);
