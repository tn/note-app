angular
  .module 'noteApp'
  .controller 'NotesController', class NotesController

    constructor: (NotesService, $state, marked) ->
      @api = NotesService
      @state = $state
      @marked = marked
      @isEmpty = false
      @getNotes()

    getNotes: ->
      @notes = @api.getNotes()

      @isEmpty = true if @notes.length is 0

    formatDate: (date) ->
      moment(date).fromNow()

    removeNote: (id) ->
      if confirm('Remove this note?')
        @api.removeNote(id)

        @reload()

    reload: ->
      @state.reload()

    markdown: (text) ->
      @marked text
