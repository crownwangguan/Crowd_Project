'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket, Auth) {
    this.$http = $http;
    this.awesomeThings = [];
    this.isAdmin = Auth.isAdmin;
    $http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      socket.syncUpdates('thing', this.awesomeThings);
    });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }
  // skPromise = Smooch.init({
  //   appToken: '3im59z54frso1izah5lo9x26u',
  //   givenName: this.user.name,
  //   email: this.user.email,
  //   customText: {
  //       headerText: 'How can we help?',
  //       inputPlaceholder: 'Type a message...',
  //       sendButtonText: 'Send',
  //       introText: 'This is the beginning of your conversation.<br/> Ask us anything!',
  //       settingsText: 'You can leave us your email so that we can get back to you this way.',
  //       settingsReadOnlyText: 'We\'ll get back to you at this email address if we missed you.',
  //       settingsInputPlaceholder: 'Your email address',
  //       settingsSaveButtonText: 'Save',
  //       settingsHeaderText: 'Email Settings',
  //       settingsNotificationText: 'In case we\'re slow to respond you can <a href="#" data-ui-settings-link>leave us your email</a>.'
  //   }
  // }).then(function() {
  //     Smooch.open();
  // });;
  
  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('crowdSourcingApp')
  .controller('MainController', MainController);

})();
