(function() {
  var NoteDetailController;

  angular.module('noteApp').controller('NoteDetailController', NoteDetailController = (function() {
    function NoteDetailController(NotesService, $stateParams) {
      this.note = [];
      this.api = NotesService;
      this.params = $stateParams;
      this.getNote();
    }

    NoteDetailController.prototype.getNote = function() {
      return this.note.push(this.api.getNoteById(this.params.noteId));
    };

    return NoteDetailController;

  })());

}).call(this);
