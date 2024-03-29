import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  Relation,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { Farmer } from './Farmer';
import { Crop } from './Crop';
import { Mill } from './Mill';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  marketerID: string;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ unique: true, nullable: false })
  phone: string;

  @Column({ unique: true })
  passwordHash: string;

  @ManyToMany(() => Mill, (mills) => mills.tradesWith)
  @JoinTable()
  tradesWith: Relation<Mill>[];

  @OneToMany(() => Crop, (crop) => crop.sampledBy)
  samples: Relation<Crop>[];

  @OneToMany(() => Farmer, (farmer) => farmer.sellsTo)
  buysFrom: Relation<Farmer>[];
}
