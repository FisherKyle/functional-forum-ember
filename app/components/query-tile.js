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

    update(query, params) {
      this.sendAction('update', query, params);
    }
  }
});
