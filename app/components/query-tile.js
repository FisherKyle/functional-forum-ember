import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),


  actions: {

    addToFavorites(query) {
     this.get('favorites').add(query);
   },

    showContent: function() {
      this.set('detailsVisible', true);
    },

    hideContent: function() {
     this.set('detailsVisible', false);
    },

    updateQuery(query, params) {
      this.sendAction('updateQuery', query, params);
    },

    deleteQuery(query) {
      if (confirm('This action is permanent. Delete this question?')) {
        this.sendAction('deleteQuery', query);
      }
    }
  }
});
