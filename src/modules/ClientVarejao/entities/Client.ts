import { v4 as uuidv4 } from 'uuid';
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ database: 'connection2', name: 'contacts' })
class Client {
  @PrimaryColumn()
  id?: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  cellphone: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Client };
