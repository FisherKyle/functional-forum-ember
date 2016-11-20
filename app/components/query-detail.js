import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    
    delete(query) {
      if (confirm('This action is permanent. Continue?')) {
        this.sendAction('deleteQuery', query);
      }
    },

    deleteAnswer(reply) {
      this.sendAction('deleteReply', reply);
    }
  }
});
