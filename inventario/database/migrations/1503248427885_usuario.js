"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UsuarioSchema extends Schema {
  up() {
    this.create("users", table => {
      table.increments();
      table.string("nombre", 80).notNullable();
      table
        .string("usuario", 80)
        .notNullable()
        .unique();
      table
        .string("email", 254)
        .notNullable()
        .unique();
      table.string("password", 60).notNullable();
      /*table
        .integer("u_padre")
        .unsigned()
        .references("id")
        .inTable("users")
        .nullable();*/
      table.timestamps();
    });
    this.alter('users', (table) => {
      table
        .integer("u_padre")
        .unsigned()
        .references("id")
        .inTable("users")
        .nullable()
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UsuarioSchema;
