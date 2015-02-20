(function() {
  var NoteFormController;

  angular.module('noteApp').controller('NoteFormController', NoteFormController = (function() {
    function NoteFormController(NotesService, $state, $stateParams) {
      this.api = NotesService;
      this.state = $state;
      this.noteId = $stateParams.noteId || false;
      this.copiedId = $stateParams.copiedId || false;
      this.note = [];
      this.note.push(this.getNoteForEdit());
    }

    NoteFormController.prototype.save = function(data) {
      var id;
      if (angular.isObject(data)) {
        id = this.noteId || Date.now();
        data.created_at = parseInt(id);
        data = angular.toJson(data);
        this.api.saveNote(data, id);
      }
      if (this.noteId) {
        return this.state.transitionTo('note-detail', {
          noteId: this.noteId
        });
      } else {
        return this.state.transitionTo('note-detail', {
          noteId: id
        });
      }
    };

    NoteFormController.prototype.getNoteForEdit = function() {
      return this.api.getNoteById(this.noteId || this.copiedId);
    };

    return NoteFormController;

  })());

}).call(this);
