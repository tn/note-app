angular
  .module 'noteApp'
  .service 'NotesService', ['localStorageService', (localStorageService) ->
    new class NotesService

      response: []

      constructor: ->
        @storage = localStorageService

      getKeys: ->
        @storage.keys()

      getNotes: ->
        @clearResponse()
        keys = @getKeys()
        _this = @

        angular.forEach keys, (id) ->
          @.push _this.getNoteById(id)
        , @response

        return @response

      getNoteById: (id) ->
        @storage.get id

      saveNote: (data, id) ->
        @storage.set id, data

      removeNote: (id) ->
        @storage.remove id

      clearResponse: ->
        @response = []
  ]
