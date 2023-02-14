import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'rover_logs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.string('instruction')
      table.string('inputed_position')
      table.string('current_position')
      table.integer('rover_id').unsigned().references('id').inTable('rovers').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropForeign('rover_id')
      table.dropColumn('rover_id')
    })
    this.schema.dropTable(this.tableName)
  }
}