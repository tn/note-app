angular
  .module 'noteApp'
  .controller 'NotesController', class NotesController

    constructor: (NotesService, $state) ->
      @api = NotesService
      @state = $state
      @getNotes()

    getNotes: ->
      @notes = @api.getNotes()

    formatDate: (date) ->
      moment(date).fromNow()

    removeNote: (id) ->
      if confirm('Remove this note?')
        @api.removeNote(id)

        @reload()

    reload: ->
      @state.reload()
