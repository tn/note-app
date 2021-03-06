angular
  .module 'noteApp'
  .controller 'NoteFormController', class NoteFormController

    constructor: (NotesService, $state, $stateParams, marked) ->
      @api = NotesService
      @marked = marked
      @state = $state
      @noteId = $stateParams.noteId or false
      @copiedId = $stateParams.copiedId or false
      @note = []
      @note.push(@getNoteForEdit())

    save: (data) ->
      if angular.isObject(data)
        id = @noteId or Date.now()
        data.created_at = parseInt(id)
        data = angular.toJson(data)

        @api.saveNote(data, id)

      @state.transitionTo('notes')

    getNoteForEdit: ->
      @api.getNoteById(@noteId or @copiedId)

    markdown: (text) ->
      @marked text
