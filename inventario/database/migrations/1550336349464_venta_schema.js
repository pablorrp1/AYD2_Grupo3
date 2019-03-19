'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VentaSchema extends Schema {
  up () {
    this.create('ventas', (table) => {
      table.increments()
      table.date('fecha').notNullable()
      table.float('descuento')
      table.timestamps()
    })
  }

  down () {
    this.drop('ventas')
  }
}

module.exports = VentaSchema
