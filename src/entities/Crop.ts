import { Relation, Check, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Farmer } from './Farmer';
import { Employee } from './Employee';
import { Mill } from './Mill';

@Entity()
@Check(`"price" >= 0 AND "yield" >= 0`)
export class Crop {
  @PrimaryGeneratedColumn('uuid')
  cropId: string;

  @Column({ nullable: false })
  name: string;

  @Column({ default: 0, type: 'real' })
  price: number;

  @Column({ default: 0, type: 'real' })
  yield: number;

  @Column({ nullable: true })
  status: string;

  @OneToMany(() => Mill, (mill) => mill.stores)
  storedBy: Relation<Mill>;

  @OneToMany(() => Employee, (marketer) => marketer.samples)
  sampledBy: Relation<Employee>;

  @OneToMany(() => Farmer, (farmer) => farmer.produces)
  producedBy: Relation<Farmer>;
}
