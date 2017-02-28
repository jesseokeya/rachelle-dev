app.directive('bookView', function(){
  return{
    restrict: 'E',
    scope: {
      info: '=',
      sort: '='
    },
    templateUrl: '/templates/book.tpl.html'
  }
})
