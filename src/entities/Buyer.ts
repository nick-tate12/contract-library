import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
