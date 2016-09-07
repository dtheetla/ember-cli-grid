import Ember from 'ember';

export default Ember.Route.extend({
    actions:{
      getData:function(n=1){
        this.get('controller').set('tdata',this.getData(n));
      }
    },
    setupController: function(controller, model) {
      controller.set('tdata',this.getData());
    },
    getData: function(n=1){
      var r={}
      if(n==1){
        r={
        data:[
          {id:1,name:'name1',designation:'designation1'},
          {id:2,name:'name2',designation:'designation2'},
          {id:3,name:'name3',designation:'designation3'},
          {id:4,name:'name4',designation:'designation4'},
          {id:5,name:'name5',designation:'designation5'},
        ],
        meta:{
          total:10,
          page:1,
          size:5
        }
      }
    }
    else{
      r={
      data:[
        {id:6,name:'name6',designation:'designation6'},
        {id:7,name:'name7',designation:'designation7'},
        {id:8,name:'name8',designation:'designation8'},
        {id:9,name:'name9',designation:'designation9'},
        {id:10,name:'name10',designation:'designation10'}
      ],
      meta:{
        total:10,
        page:2,
        size:5
      }
    }
    }
      return r;
    }
});
