(function() {
  var NoteDetailController;

  angular.module('noteApp').controller('NoteDetailController', NoteDetailController = (function() {
    function NoteDetailController(NotesService, $stateParams, $state, marked) {
      this.note = [];
      this.marked = marked;
      this.api = NotesService;
      this.params = $stateParams;
      this.state = $state;
      this.getNote();
    }

    NoteDetailController.prototype.getNote = function() {
      return this.note.push(this.api.getNoteById(this.params.noteId));
    };

    NoteDetailController.prototype.removeNote = function(id) {
      if (confirm('Remove this note?')) {
        this.api.removeNote(id);
        return this.state.transitionTo('notes');
      }
    };

    NoteDetailController.prototype.markdown = function(text) {
      return this.marked(text);
    };

    return NoteDetailController;

  })());

}).call(this);
