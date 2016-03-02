exports.up = function(knex, Promise) {
  return knex.schema.createTable('readers', function(table){
    table.increments();
    table.string('first_name');
    table.string('last_name');
  })
};

// I SHOULD HAVE CHANGED THIS TO READERS
// but know I'm not supposed to change over
// an already saved migration
// what next?
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
