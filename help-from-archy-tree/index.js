"use strict";

var chalk = require('chalk');
var textTable = require('text-table');

module.exports = function(archyTree){
  var help = [];
  help.push('');
  help.push(chalk.bold('Usage:'), 'gulp <task>');
  help.push('');

  help.push(chalk.bold('Tasks:'));
  var rows = archyTree.map(function(node){
    return [
      '',
      chalk.gray(node.label),
      node.description || ''
    ];
    //return [node.label, node.description];
  });
  help.push(
    textTable(rows, {align: ['', 'r', 'l' ]})
  );
  help.push('');

  return help.join('\n');
}
