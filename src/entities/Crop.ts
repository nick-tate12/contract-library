import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Relation, ManyToOne, ManyToMany } from 'typeorm';
import { Mill } from './Mill';
import { Farmer } from './Farmer';
import { Marketer } from './Marketer';
import { Contract } from './Contract';

@Entity()
export class Crop {
  @PrimaryGeneratedColumn('uuid')
  cropID: number;

  @Column({ default: false })
  yield: boolean; // Might not be boolean.

  @Column({ default: false })
  price: boolean; // Might not be boolean.

  @Column({ default: false })
  primaryKey: string; // (id)

  @Column({ unique: true })
  status: string;

  @OneToMany (() => Mill, (mill) => mill.crop)
  mill: Relation<Mill>[];

  @OneToMany (() => Farmer, (farmer) => farmer.crop)
  farmer: Relation<Farmer>[];

  @ManyToOne (() => Marketer, (marketer) => marketer.crop)
  marketer: Relation<Marketer>[];

  @ManyToMany (() => Contract, (contract) => contract.marketer)
  contract: Relation<Contract>[];

}
