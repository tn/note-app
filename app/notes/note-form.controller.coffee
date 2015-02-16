angular
  .module 'noteApp'
  .controller 'NoteFormController', class NoteFormController

    constructor: (NotesService, $state, $stateParams) ->
      @api = NotesService
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

      if @noteId
        @state.transitionTo('note-detail', { noteId: @noteId })
      else
        @state.transitionTo('note-detail', { noteId: id })

    getNoteForEdit: ->
      @api.getNoteById(@noteId or @copiedId)
