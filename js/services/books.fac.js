app.factory('books', ['$http', function($http){
  return $http.get('../../database/database.json')
  .success(function(data){
    return data;
  })
  .error(function(error){
    return error;
  })
}]);
