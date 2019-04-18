'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PedidoSchema extends Schema {
  up () {
    this.create('pedidos', (table) => {
      table.increments()
      table.date('fecha').notNullable()
      table.integer('cantidad').notNullable()
      table.integer('cod_proveedor').unsigned().references('id').inTable('proveedors')
      table.integer('cod_producto').unsigned().references('id').inTable('productos')

      table.timestamps()
    })
  }

  down () {
    this.drop('pedidos')
  }
}

module.exports = PedidoSchema
