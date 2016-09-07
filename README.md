# Ember-cli-grid

This README outlines the details of collaborating on this Ember addon.

## Installation

* `ember install ember-cli-grid`

## Syntax

* {{ember-cli-grid title='some title'
    model=some data
    total=total
    page=page
    size=size
    clickaction1="some action for pagination"
    fields='comma separated columns'
    headers='comma separated columns'
    clickaction='link for each record in the table'
    clickactionlink='navigation route onclick of above link'}}

## Example route
* Route
```
 import Ember from 'ember';

export default Ember.Route.extend({
    //This action is called on pagination button clicks
    actions:{
      getData:function(n=1){
        this.get('controller').set('tdata',this.getData(n));
      }
    },
    // Initialize data
    setupController: function(controller, model) {
      controller.set('tdata',this.getData());
    },
    // Actual function that fetches the data. Should fetch data from ajax/ember model
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
```

*Template
```
 {{ember-cli-grid
  title='My Requests'
   model=tdata.data
   total=tdata.meta.total
   page=tdata.meta.page
   size=tdata.meta.size
   clickaction1="getData"
   fields='name,designation'
   headers='name,designation'
   clickaction='view'
   clickactionlink='sample.view'}}
```
