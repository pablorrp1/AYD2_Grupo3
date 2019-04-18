"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class HistorialRetiroSchema extends Schema {
  up() {
    this.create("historial_retiros", table => {
      table.increments();
      table
        .integer("cantidad_ven")
        .unsigned()
        .notNullable();
      table
        .integer("cod_producto")
        .unsigned()
        .references("id")
        .inTable("productos");
      table
        .integer("cod_descuento")
        .unsigned()
        .references("id")
        .inTable("descuentos");
      table.timestamps();
    });
  }

  down() {
    this.drop("historial_retiros");
  }
}

module.exports = HistorialRetiroSchema;
