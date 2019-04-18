'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductoSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.string('nombre').notNullable()
      table.string('descripcion')
      table.integer('cantidad').unsigned().notNullable()
      table.float('precio').notNullable()
      table.integer('cod_usuario').unsigned().references('id').inTable('users')
      table.integer('cod_proveedor').unsigned().references('id').inTable('proveedors')
      table.timestamps()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductoSchema
