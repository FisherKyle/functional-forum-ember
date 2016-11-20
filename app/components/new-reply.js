import Ember from 'ember';

export default Ember.Component.extend({
  postNewReply: false,

  actions:
  {

    showForm()
    {
      this.set('postNewReply', true);
    },

    saveAnswer()
    {
      var params =
      {
        author: this.get('author'),
        answer: this.get('answer'),
        query: this.get('query')
      };

      this.set('postNewReply', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
