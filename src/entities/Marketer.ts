import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Relation, ManyToMany } from 'typeorm';
import { Mill } from './Mill';
import { Farmer } from './Farmer';
import { Crop } from './Crop';
import { Contract } from './Contract';

@Entity()
export class Marketer {
  @PrimaryGeneratedColumn('uuid')
  marketerID: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phone: string;

  @Column({ unique: true })
  primaryKey: string; // (name)

  @Column({ default: false })
  phoneCheck: boolean;

  @OneToMany(() => Mill, (mill) => mill.marketer)
  mill: Relation<Mill>[];

  @OneToMany(() => Farmer, (farmer) => farmer.marketer)
  farmer: Relation<Farmer>[];

  @OneToMany(() => Crop, (crop) => crop.marketer)
  crop: Relation<Crop>[];

  @ManyToMany (() => Contract, (contract) => contract.marketer)
  contract: Relation<Contract>[];

}
