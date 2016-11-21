  import Ember from 'ember';

  export default Ember.Service.extend({

    favorites: [],

    add(query) {
      this.get('favorites').pushObject(query);
    }
    
});
