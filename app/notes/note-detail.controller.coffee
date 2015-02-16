angular
  .module 'noteApp'
  .controller 'NoteDetailController', class NoteDetailController

    constructor: (NotesService, $stateParams) ->
      @note = []
      @api = NotesService
      @params = $stateParams
      @getNote()

    getNote: ->
      @note.push(@api.getNoteById(@params.noteId))
