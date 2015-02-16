'use strict'

angular
  .module 'noteApp'
  .config ($stateProvider, $urlRouterProvider) ->

    $urlRouterProvider.otherwise '/'

    $stateProvider
      .state '404',
        url: '/404'
        templateUrl: 'pages/404.html'

      .state 'new',
        url: '/new'
        templateUrl: 'notes/form.html'
        controller: 'NoteFormController as form'

      .state 'copy',
        url: '/new/:copiedId'
        templateUrl: 'notes/form.html'
        controller: 'NoteFormController as form'

      .state 'notes',
        url: '/'
        templateUrl: 'notes/notes.html'
        controller: 'NotesController as notes'

      .state 'note-detail',
        url: '/note/:noteId'
        templateUrl: 'notes/note-detail.html'
        controller: 'NoteDetailController as note'

      .state 'note-edit',
        url: '/note/:noteId/edit'
        templateUrl: 'notes/form.html'
        controller: 'NoteFormController as form'
