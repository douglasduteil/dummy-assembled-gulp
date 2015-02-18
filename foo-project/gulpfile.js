
import gulp from 'gulp';

import linterTasks from 'dummy-linter-task';
import testerTasks from 'dummy-tester-task';

gulp.config = {
  foo: 'bar'
};


mergeRegistries(gulp, linterTasks, testerTasks);


console.log(gulp.tree());


////

// To modulify or merge somewhere???
function mergeRegistries(target, ...registries){

  registries.map((registry) => {
    registry.tree()
      .forEach((taskName) => target.set(taskName, registry.get(taskName)))
  });
}
