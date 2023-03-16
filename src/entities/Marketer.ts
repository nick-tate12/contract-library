import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Marketer {
  @PrimaryGeneratedColumn('uuid')
  marketerID: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phone: string;

  @Column({ unique: true })
  primaryKey: string; // (name)

  @Column({ default: false })
  phoneCheck: boolean;
}
