exports.up = function(knex) {
  return knex.schema.table("users", tbl => {
    tbl.string("house", 80);
  });
};

exports.down = function(knex) {
  return knex.schema.table("users", tbl => {
    tbl.dropColumn("house");
  });
};
