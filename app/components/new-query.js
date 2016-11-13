import Ember from 'ember';

 export default Ember.Component.extend({

  actions:
  {
    saveQuery1()
    {
      var params = {

        author: this.get('author'),
        query: this.get('query'),
        notes: this.get('notes')

      };
      this.set('questionFormShow', false);
      this.sendAction('saveQuery', params);
    },

  showForm()
  {
    this.set('questionFormShow', true);
  }

  }
});
