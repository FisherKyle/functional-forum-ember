import Ember from 'ember';

export default Ember.Route.extend({

  model(params)
  {
    return this.store.findRecord('query', params.query_id);
  },

  actions:
  {

    update(query, params)
    {
      Object.keys(params).forEach(function(key)
      {
          if (params[key] !== undefined)
          {
            query.set(key,params[key]);
          }
      });

      query.save();
      this.transitionTo('index');
    },

    saveReply(params)
    {
      var newReply = this.store.createRecord('reply', params);
      var query = params.query;
      query.get('replies').addObject(newReply);

      newReply.save().then(function()
      {
       return query.save();
      });

      this.transitionTo('index');
    },

    deleteQuery(query)
    {
      query.destroyRecord();

      this.transitionTo('index');
    },

    deleteReply(reply)
    {

      reply.destroyRecord();
      this.transitionTo('index');
    }
  }
});
