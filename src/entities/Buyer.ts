import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Relation } from 'typeorm';
import { Mill } from './Mill';

@Entity()
export class Buyer {
  @PrimaryGeneratedColumn('uuid')
  worker: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phone: string;

  @Column({ unique: true })
  primaryKey: string; // (worker)

  @Column({ default: false })
  phoneCheck: boolean;

  @ManyToOne (() => Mill, (mill) => mill.buyer)
  mill : Relation<Mill>[];

}
