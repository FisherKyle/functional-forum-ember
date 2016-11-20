
import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      queries: this.store.findAll('query'),
      replies: this.store.findAll('reply')
    });
  },

  actions: {

    saveQuery(params)
    {
      var newQuery = this.store.createRecord('query', params);
      newQuery.save();
      this.transitionTo('index');
    }
    
  }
});
