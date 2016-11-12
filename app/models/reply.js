import DS from 'ember-data';

export default DS.Model.extend({

  author: DS.attr(),
  answer: DS.attr(),
  rating: DS.attr(),
  query: DS.belongsTo('query', { async: true })

});
