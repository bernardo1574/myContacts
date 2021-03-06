import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateContacts1632093903587 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('creating table contacts in postgres');
    await queryRunner.createTable(
      new Table({
        name: 'contacts',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
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
