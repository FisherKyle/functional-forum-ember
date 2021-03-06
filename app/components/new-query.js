import Ember from 'ember';

 export default Ember.Component.extend({

  actions:
  {

    hideContent: function() {
     this.set('postNewQuery', false);
    },

    showQueryForm() {
      this.set('postNewQuery', true);
    },

    saveQuery() {

      var params = {
        author: this.get('author'),
        query: this.get('query'),
        notes: this.get('notes')

      };

      this.set('postNewQuery', false);
      this.sendAction('saveQuery', params);
    }
  }
});
