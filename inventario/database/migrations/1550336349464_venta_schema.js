'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VentaSchema extends Schema {
  up () {
    this.create('venta', (table) => {
      table.increments()
      table.date('fecha').notNullable()
      table.float('descuento')
      table.timestamps()
    })
  }

  down () {
    this.drop('venta')
  }
}

module.exports = VentaSchema
