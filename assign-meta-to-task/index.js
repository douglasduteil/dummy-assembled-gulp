'use strict';

var extend = require('util')._extend;

module.exports = assignMetaToTask;

////

function assignMetaToTask(registry, taskName, metaData){
  registry
    .tree({deep: true})
    .forEach(function(task){
      if (task.label !== taskName) return;
      extend(task, metaData);
    })
}
