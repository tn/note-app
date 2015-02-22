(function() {
  'use strict';
  angular.module('noteApp').config(function(localStorageServiceProvider, markedProvider, $sceProvider) {
    localStorageServiceProvider.setPrefix('note');
    markedProvider.setOptions({
      gfm: true
    });
    return $sceProvider.enabled(false);
  });

}).call(this);
