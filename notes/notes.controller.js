(function() {
  var NotesController;

  angular.module('noteApp').controller('NotesController', NotesController = (function() {
    function NotesController(NotesService, $state, marked) {
      this.api = NotesService;
      this.state = $state;
      this.marked = marked;
      this.isEmpty = false;
      this.getNotes();
    }

    NotesController.prototype.getNotes = function() {
      this.notes = this.api.getNotes();
      if (this.notes.length === 0) {
        return this.isEmpty = true;
      }
    };

    NotesController.prototype.formatDate = function(date) {
      return moment(date).fromNow();
    };

    NotesController.prototype.removeNote = function(id) {
      if (confirm('Remove this note?')) {
        this.api.removeNote(id);
        return this.reload();
      }
    };

    NotesController.prototype.reload = function() {
      return this.state.reload();
    };

    NotesController.prototype.markdown = function(text) {
      return this.marked(text);
    };

    return NotesController;

  })());

}).call(this);
