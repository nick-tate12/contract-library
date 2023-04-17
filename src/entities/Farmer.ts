import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Relation, OneToMany } from 'typeorm';
import { Employee } from './Employee';
import { Crop } from './Crop';
import { Mill } from './Mill';

@Entity()
export class Farmer {
  @PrimaryGeneratedColumn('uuid')
  farmerId: string;

  @Column({ nullable: false })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true, nullable: false })
  phone: string;

  @ManyToOne(() => Mill, (mill) => mill.preferred)
  prefers: Relation<Mill>;

  @OneToMany(() => Crop, (crop) => crop.producedBy)
  produces: Relation<Crop>[];

  @ManyToOne(() => Employee, (marketer) => marketer.buysFrom)
  sellsTo: Relation<Employee>;
}
