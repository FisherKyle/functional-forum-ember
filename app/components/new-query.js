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
       this.set('postNewQuery', false);
       this.sendAction('saveQuery2', params);
     },

     showForm() {
       this.set('postNewQuery', true);
     },
     
   }
 });
