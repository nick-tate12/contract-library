import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Relation, ManyToMany } from 'typeorm';
import { Mill } from './Mill';
import { Marketer } from './Marketer';
import { Crop } from './Crop';
import { Contract } from './Contract';

@Entity()
export class Farmer {
  @PrimaryGeneratedColumn('uuid')
  farmerID: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phone: string;

  @Column({ unique: true })
  primaryKey: string; // (name)

  @Column({ default: false })
  phoneCheck: boolean;

  @ManyToOne(() => Mill, (mill) => mill.farmer) // Many to one or zero
  mill: Relation<Mill>[];

  @ManyToOne(() => Marketer, (marketer) => marketer.farmer)
  marketer: Relation<Marketer>[];

  @ManyToOne(() => Crop, (crop) => crop.farmer)
  crop: Relation<Marketer>[];

  @ManyToMany (() => Contract, (contract) => contract.farmer)
  contract: Relation<Contract>[];
  }
