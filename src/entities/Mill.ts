import { Entity, PrimaryGeneratedColumn, OneToMany, Column, Relation, ManyToMany } from 'typeorm';
import { Crop } from './Crop';
import { Farmer } from './Farmer';
import { Employee } from './Employee';
import { Buyer } from './Buyer';

@Entity()
export class Mill {
  @PrimaryGeneratedColumn('uuid')
  millId: string;

  @Column({ nullable: false })
  name: string;

  @Column({ unique: true, nullable: false })
  phone: string;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => Buyer, (buyer) => buyer.worksFor)
  buyers: Relation<Buyer>[];

  @ManyToMany(() => Employee, (marketers) => marketers.tradesWith)
  tradesWith: Relation<Employee>[];

  @OneToMany(() => Farmer, (farmer) => farmer.prefers)
  preferred: Relation<Farmer>[];

  @OneToMany(() => Crop, (crop) => crop.storedBy)
  stores: Relation<Crop>[];
}
