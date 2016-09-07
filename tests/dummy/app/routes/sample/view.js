import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(params){
       this.set('idd',params.queryParams.idd);
   },  
  setupController: function(controller,model,params){
    controller.set('model',model);
    controller.set('idd',params.queryParams.idd);
  }
});
