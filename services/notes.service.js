(function() {
  angular.module('noteApp').service('NotesService', [
    'localStorageService', function(localStorageService) {
      var NotesService;
      return new (NotesService = (function() {
        NotesService.prototype.response = [];

        function NotesService() {
          this.storage = localStorageService;
        }

        NotesService.prototype.getKeys = function() {
          return this.storage.keys();
        };

        NotesService.prototype.getNotes = function() {
          var keys, _this;
          this.clearResponse();
          keys = this.getKeys();
          _this = this;
          angular.forEach(keys, function(id) {
            return this.push(_this.getNoteById(id));
          }, this.response);
          return this.response;
        };

        NotesService.prototype.getNoteById = function(id) {
          return this.storage.get(id);
        };

        NotesService.prototype.saveNote = function(data, id) {
          return this.storage.set(id, data);
        };

        NotesService.prototype.removeNote = function(id) {
          return this.storage.remove(id);
        };

        NotesService.prototype.clearResponse = function() {
          return this.response = [];
        };

        return NotesService;

      })());
    }
  ]);

}).call(this);
