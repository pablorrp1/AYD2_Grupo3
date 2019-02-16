'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductoSchema extends Schema {
  up () {
    this.create('producto', (table) => {
      table.increments()
      table.string('nombre').notNullable()
      table.string('descripcion')
      table.integer('cantidad').unsigned().notNullable()
      table.float('precio').notNullable()
      table.integer('cod_usuario').unsigned().references('id').inTable('usuario')
      table.integer('cod_proveedor').unsigned().references('id').inTable('proveedor')
      table.timestamps()
    })
  }

  down () {
    this.drop('producto')
  }
}

module.exports = ProductoSchema
