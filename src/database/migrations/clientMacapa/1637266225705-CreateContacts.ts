import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class contacts1637266225705 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('creating table contacts in mysql');
    await queryRunner.createTable(
      new Table({
        name: 'contacts',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          { name: 'name', type: 'varchar', length: '100' },
          { name: 'cellphone', type: 'varchar', length: '13' },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('contacts');
  }
}
