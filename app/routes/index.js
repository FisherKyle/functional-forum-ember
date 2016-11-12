import Ember from 'ember';

var mockq = [{
    "id": 1,
    "author": "Dividad Van Tomlinpot",
    "query": "Have you or have you ever known someone whose fallen victim to diphtheria on the oregon trail?",
    "notes": "I've already tried epsom salts."
  }, {
    "id": 2,
    "author": "Sharmy Proverbencaux",
    "query": "Might someone offer the means by which I might saveth this poor scorch-ed casserole?",
    "notes": "If there exists a way in which my pastas might not be squanderethed, I'd be ever-so gratefuleth!"
  }, {
    "id": 3,
    "author": "Vincenzo Armani Marino Badoosh",
    "query": "Hey. How you doin'?",
    "notes": "Awlriight.. submit. Eyyyy..."
  }]

export default Ember.Route.extend({

  model() {
    return mockq;
  },
});
