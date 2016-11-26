import Ember from 'ember';

export function queryRating(params/*, hash*/) {

  var query = params[0];

  if(query.get('replies').get('length') > 3) {

    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}

export default Ember.Helper.helper(queryRating);
