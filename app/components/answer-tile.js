import Ember from 'ember';

export default Ember.Component.extend({

  author-rating: Ember.computed('reply.author', 'reply.rating', function() {
    return " Rating for " + this.get('reply.author') + "'s answer : " +  this.get('reply.rating');
  }),

  actions: {

    deleteReply(reply) {

      if (confirm('This action is permanent. Continue?')) {

        this.sendAction('deleteReply', reply);

      }
    }
  }
});
