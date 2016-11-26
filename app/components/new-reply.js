import Ember from 'ember';

export default Ember.Component.extend({
  postNewReply: false,

  actions: {

    hideContent: function() {
     this.set('postNewReply', false);
    },

    replyFormShow() {
      this.set('postNewReply', true);
    },

    saveReply() {
      var params = {

        author: this.get('author'),
        answer: this.get('answer'),
        rating: 9,
        query: this.get('query')

      };

      var self = this;
      Object.keys(params).forEach(function(key) {
        self.set(key, '');
      });

      this.set('postNewReply', false);
      this.sendAction('saveReply', params);
    }
  }
});
