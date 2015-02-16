(function() {
  'use strict';
  angular.module('noteApp').config(function(localStorageServiceProvider) {
    return localStorageServiceProvider.setPrefix('note');
  });

}).call(this);
