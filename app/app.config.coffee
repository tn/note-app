'use strict'

angular
  .module 'noteApp'
  .config (localStorageServiceProvider, markedProvider, $sceProvider) ->

    localStorageServiceProvider
      .setPrefix 'note'

    markedProvider
      .setOptions
        gfm: true

    $sceProvider.enabled false
