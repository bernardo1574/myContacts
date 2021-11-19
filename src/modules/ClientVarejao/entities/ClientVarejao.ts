import { v4 as uuidv4 } from 'uuid';
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('contacts')
class ClientVarejao {
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

export { ClientVarejao };
