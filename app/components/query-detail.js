import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),

  actions: {

    delete(query) {
      if (confirm('This action is permanent. Delete this question?')) {
        this.sendAction('deleteQuery', query);
      }
    },

    deleteReply(reply) {
      this.sendAction('deleteReply', reply);
    },

    addToFavorites(query) {
      this.get('favorites').add(query);
    }

  }
});
