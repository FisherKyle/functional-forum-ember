import Ember from 'ember';

export default Ember.Component.extend({
  updateQueryForm: false,

  actions: {

    updateQueryForm()
    {
      this.set('updateQueryForm', true);
    },

    updateQuery(query){

      var params = {
        author: this.get('author'),
        query: this.get('query'),
        notes: this.get('notes')
      };

      this.set('updateQueryForm', false);
      this.sendAction('updateQuery', query, params);
    }
  }
});
