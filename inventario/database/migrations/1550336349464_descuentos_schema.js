'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DescuentosSchema extends Schema {
  up () {
    this.create('descuentos', (table) => {
      table.increments()
      table.date('fecha_final').notNullable()
      table.boolean('activo').defaultTo(false).notNullable()
      table.float('descuento').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('descuentos')
  }
}

module.exports = DescuentosSchema
