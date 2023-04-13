import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, Relation } from 'typeorm';
import { Mill } from './Mill';
import { Marketer } from './Marketer';
import { Crop } from './Crop';
import { Farmer } from './Farmer';

@Entity()
export class Contract {
  @PrimaryGeneratedColumn('uuid')
  contractID: number;

  @Column({ unique: true })
  mill: string;

  @Column({ unique: true })
  marketer: string;

  @Column({ unique: true })
  farmer: string; // (name)

  @Column({ default: false })
  cropID: number;

  @ManyToMany (() => Mill, (mill) => mill.contract)
  mills: Relation<Mill>[];

  @ManyToMany (() => Marketer, (marketer) => marketer.contract)
  marketers: Relation<Marketer>[];

  @ManyToMany (() => Farmer, (farmer) => farmer.contract)
  farmers: Relation<Farmer>[];

  @ManyToMany (() => Crop, (crop) => crop.contract)
  crops: Relation<Crop>[];
}
