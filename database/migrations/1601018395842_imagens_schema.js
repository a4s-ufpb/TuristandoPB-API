'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImagensSchema extends Schema {
  up () {
    this.create('imagens', (table) => {
      table.increments()
      table
        .integer('atrativo_id')
        .unsigned()
        .references('id')
        .inTable('atrativos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('path').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('imagens')
  }
}

module.exports = ImagensSchema