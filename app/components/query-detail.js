import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    deleteQuery(query) {
      if (confirm('This action is permanent. Delete this question?')) {
        this.sendAction('deleteQuery', query);
      }
    },

    deleteReply(reply) {
      this.sendAction('deleteReply', reply);
    }
  }
});
