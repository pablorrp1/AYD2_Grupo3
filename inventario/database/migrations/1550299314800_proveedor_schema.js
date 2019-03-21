'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProveedorSchema extends Schema {
  up () {
    this.create('Proveedor', (table) => {
      table.increments()
      table.string('nombre').notNullable()
      table.string('direccion').notNullable()
      table.integer('telefono').unsigned().notNullable()
      table.string('email', 254).notNullable().unique()
      table.integer('cod_usuario').unsigned().references('id').inTable('usuario')
      table.timestamps()

    })
  }

  down () {
    this.drop('Proveedor')
  }
}

module.exports = ProveedorSchema
