'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PedidoSchema extends Schema {
  up () {
    this.create('pedido', (table) => {
      table.increments()
      table.date('fecha').notNullable()
      table.integer('cantidad').notNullable()
      table.integer('cod_proveedor').unsigned().references('id').inTable('proveedor')
      table.integer('cod_producto').unsigned().references('id').inTable('producto')

      table.timestamps()
    })
  }

  down () {
    this.drop('pedido')
  }
}

module.exports = PedidoSchema
