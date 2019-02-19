'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DetalleVentaSchema extends Schema {
  up () {
    this.create('detalle_ventas', (table) => {
      table.increments()
      table.integer('cantidad_ven').unsigned().notNullable()
      table.integer('cod_producto').unsigned().references('id').inTable('productos')
      table.integer('cod_venta').unsigned().references('id').inTable('venta')
      table.timestamps()
    })
  }

  down () {
    this.drop('detalle_ventas')
  }
}

module.exports = DetalleVentaSchema
