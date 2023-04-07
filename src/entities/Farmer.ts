import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
