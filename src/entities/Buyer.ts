import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Relation } from 'typeorm';
import { Mill } from './Mill';

@Entity()
export class Buyer {
  @PrimaryGeneratedColumn('uuid')
  buyerId: string;

  @Column({ nullable: false })
  name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ unique: true, nullable: false })
  phone: string;

  @ManyToOne(() => Mill, (mill) => mill.buyers)
  worksFor: Relation<Mill>;
}
