import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('query');
  },

  actions:
  {
    
    saveQuery3(params) {
      var newQuery = this.store.createRecord('query', params);
      newQuery.save();
      this.transitionTo('index');
    }

  }
});
