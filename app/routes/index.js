
import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    return this.store.findAll('query');
  },

  actions:
  {

    saveQuery(params)
    {
      var newQuery = this.store.createRecord('query', params);
      newQuery.save();
      this.transitionTo('index');
    },

    update(query, params)
    {
      Object.keys(params).forEach(function(key)
      {

        if (params[key]!== undefined)
        {
          query.set(key, params[key]);
        }

      });

      query.save();
      this.transitionTo('index');
    }
  }
});
