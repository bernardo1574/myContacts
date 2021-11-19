import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('contacts')
class ClientMacapa {
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
export { ClientMacapa };
