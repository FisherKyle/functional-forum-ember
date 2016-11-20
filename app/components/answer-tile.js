import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    delete(reply) {

      if (confirm('This action is permanent. Continue?')) {

        this.sendAction('deleteReply', reply);

      }
    }
  }
});
