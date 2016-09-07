import Ember from 'ember';
import layout from '../templates/components/ember-cli-grid';

export default Ember.Component.extend({
  layout,
  init(){
    this._super(...arguments);
    this.set('plinks',this.numOfTimes());
    console.log(this.get('plinks'));
    this.set('currentpage',1);

    this.set('fields1',this.get('fields').split(','));
    this.set('headers1',this.get('headers').split(','));
    // this.set('fields1',[1,2]);
  },
  didUpdateAttrs(){
    this._super(...arguments);
    this.set('plinks',this.numOfTimes());
    console.log(this.get('plinks'));
  },
  numOfTimes(){
    var total=this.get('total');
    var size=this.get('size');
    var n = Math.ceil(total/size);
    var a=[]
    for(var i=1;i<=n;i++){
      a.push(i);
    }
    return a;
  },
  actions:{
    clickaction1(n){
      this.get('size');
      var current=this.get('currentpage');
      this.set('btn'+current,false);
      this.sendAction('clickaction1',n);
      this.set('currentpage',n);
      this.set('btn'+n,true);
      var element = this.$();
      element.css('aaaa');
      console.log(n);
      window.t=this;
    }
  }
});
