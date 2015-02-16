'use strict'

angular
  .module 'noteApp'
  .config (localStorageServiceProvider) ->

    localStorageServiceProvider
      .setPrefix 'note'
