import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Relation, ManyToOne, ManyToMany } from 'typeorm';
import { Buyer } from './Buyer';
import { Crop } from './Crop';
import { Marketer } from './Marketer';
import { Farmer } from './Farmer';
import { Contract } from './Contract';

@Entity()
export class Mill {
  @PrimaryGeneratedColumn('uuid')
  millID: string;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ unique: true })
  phone: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @OneToMany(() => Buyer, (buyer) => buyer.mill )
  buyer: Relation<Buyer>[];

  @ManyToOne(() => Crop, (crop) => crop.mill )
  crop: Relation<Crop>[];

  @ManyToOne(() => Marketer, (marketer) => marketer.mill)
  marketer: Relation<Marketer>[];

  @OneToMany(() => Farmer, (farmer) => farmer.mill) // One or zero to many
  farmer: Relation<Farmer>[];

  @ManyToMany (() => Contract, (contract) => contract.marketer)
  contract: Relation<Contract>[];
}
