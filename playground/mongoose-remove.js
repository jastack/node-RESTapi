const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result => {
//   console.log(result);
// }));

// Todo.findOneAndRemove()
// Todo.findById

Todo.findByIdAndRemove('5a1391ea4af655dda2ca1825').then((todo) => {
  console.log(todo);
})
