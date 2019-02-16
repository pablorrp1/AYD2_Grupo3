'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductoSchema extends Schema {
  up () {
    this.create('producto', (table) => {
      table.increments()
      table.string('nombre')
      table.string('descripcion')
      table.integer('cantidad').unsigned()
      table.float('precio')
      table.integer('cod_usuario').unsigned().references('id').inTable('usuario')
      table.timestamps()
    })
  }

  down () {
    this.drop('producto')
  }
}

module.exports = ProductoSchema
