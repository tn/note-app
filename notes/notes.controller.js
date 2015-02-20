(function() {
  var NotesController;

  angular.module('noteApp').controller('NotesController', NotesController = (function() {
    function NotesController(NotesService, $state) {
      this.api = NotesService;
      this.state = $state;
      this.getNotes();
    }

    NotesController.prototype.getNotes = function() {
      return this.notes = this.api.getNotes();
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

    return NotesController;

  })());

}).call(this);