import Ember from 'ember';

export default Ember.Component.extend({

  details: Ember.computed('reply.author', 'reply.rating', function() {
    return this.get('reply.author') + ' // ' + this.get('reply.rating');
  }),

  actions: {

    delete(reply) {

      if (confirm('This action is permanent. Continue?')) {

        this.sendAction('deleteReply', reply);

      }
    }
  }
});
