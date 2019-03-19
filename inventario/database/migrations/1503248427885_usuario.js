'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('nombre',80).notNullable()
      table.string('usuario', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.boolean("activo").defaultTo(0);
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UsuarioSchema
