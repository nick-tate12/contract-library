import { Relation, Check, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Farmer } from './Farmer';
import { Marketer } from './Marketer';
import { Mill } from './Mill';

@Entity()
@Check(`"price" >= 0`)
@Check(`"yield" >= 0`)
export class Crop {
  @PrimaryGeneratedColumn('uuid')
  cropId: string;

  @Column({ nullable: false })
  name: string;

  @Column({ default: 0, type: 'real' })
  yield: number;

  @Column({ default: 0, type: 'real' })
  price: number;

  @Column({ unique: true })
  status: string;

  @OneToMany(() => Mill, (mill) => mill.stores)
  storedBy: Relation<Mill>;

  @OneToMany(() => Marketer, (marketer) => marketer.samples)
  sampledBy: Relation<Marketer>;

  @OneToMany(() => Farmer, (farmer) => farmer.produces)
  producedBy: Relation<Farmer>;
}
