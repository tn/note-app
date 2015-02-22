angular
  .module 'noteApp'
  .controller 'NoteDetailController', class NoteDetailController

    constructor: (NotesService, $stateParams, $state, marked) ->
      @note = []
      @marked = marked
      @api = NotesService
      @params = $stateParams
      @state = $state
      @getNote()

    getNote: ->
      @note.push(@api.getNoteById(@params.noteId))

    removeNote: (id) ->
      if confirm('Remove this note?')
        @api.removeNote(id)

        @state.transitionTo('notes')

    markdown: (text) ->
      @marked text


