import { Entity, PrimaryGeneratedColumn, OneToMany, Column, Relation, ManyToMany } from 'typeorm';
import { Crop } from './Crop';
import { Farmer } from './Farmer';
import { Marketer } from './Marketer';
import { Buyer } from './Buyer';

@Entity()
export class Mill {
  @PrimaryGeneratedColumn('uuid')
  millID: string;

  @Column({ nullable: false })
  name: string;

  @Column({ unique: true, nullable: false })
  phone: string;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => Buyer, (buyer) => buyer.worksFor)
  buyers: Relation<Buyer>[];

  @ManyToMany(() => Marketer, (marketers) => marketers.tradesWith)
  tradesWith: Relation<Marketer>[];

  @OneToMany(() => Farmer, (farmer) => farmer.prefers)
  preferred: Relation<Farmer>[];

  @OneToMany(() => Crop, (crop) => crop.storedBy)
  stores: Relation<Crop>[];
}
