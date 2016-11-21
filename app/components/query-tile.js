import Ember from 'ember';

export default Ember.Component.extend({

  detailsVisible: false,

  actions: {

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
